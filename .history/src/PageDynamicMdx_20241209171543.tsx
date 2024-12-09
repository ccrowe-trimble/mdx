import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { compile } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react';
import React from 'react';


function PageMDXSample() {

    const [mdxAsJavascript, setMdxAsJavascript] = useState<string>("");
    const [MdxComponent, setMdxComponent] = useState<ReactNode | null>(null);

    const components = {
        XYZComponent: XYZComponent,
        Fragment: React.Fragment
    };


    // Create a custom MDX provider
    const CustomMDXProvider = ({ children }: { children: ReactNode }) => {
        // Define a custom component resolver

        return (
            <MDXProvider components={components}>
                {children}
            </MDXProvider>
        );
    };

    async function CompileMdx(mdxString: string) {

        try {
            const compiledMdx = await compile(mdxString, {
                outputFormat: 'function-body',
                /* …otherOptions */
            });
            return String(compiledMdx);
        } catch (error) {
            console.error('Error compiling MDX:', error);
            return null;
        }
    };

    async function RunMdxComponent(theCompiledMdx: string) {
        const { default: MDXContent } = await run(theCompiledMdx, {
            ...runtime as any,
            Fragment: React.Fragment,
            useMDXComponents: true,
            baseUrl: import.meta.url,
            components: components
        });

        return <MDXContent />;
    }

    useEffect(() => {
        //         const mdxString = `
        // import Warning from '../Components/Warning';

        // # Hello World

        // This is an example MDX file.

        // <Warning visible={true}>Hello World</Warning>`;

        const mdxString = `
import XYZComponent from '../XYZComponent';

# Hello World
This **is** an example MDX file.

<XYZComponent/>
 `;

        CompileMdx(mdxString).then(async (theJavascript) => {

            if (theJavascript != null) {
                console.log(theJavascript);
                setMdxAsJavascript(theJavascript)
            }

        });
    }, []);

    useEffect(() => {
        if (mdxAsJavascript != "") {
            RunMdxComponent(mdxAsJavascript).then((theComponent) => {
                setMdxComponent(theComponent);
            })
        }

    }, [mdxAsJavascript]);

    return (
        <>
            <div>
                <CustomMDXProvider>
                    {MdxComponent}
                </CustomMDXProvider>
            </div>

        </>
    );


}

export default PageMDXSample;




function PageDynamicMdx() {
    return (
        <>
            <div>Below is an example of dynamically generated MDX content:</div>


            <a href="/">Back to home</a>
        </>
    )
}

export default PageDynamicMdx;