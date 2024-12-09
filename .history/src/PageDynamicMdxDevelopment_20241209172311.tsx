import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { compile } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react';
import CustomComponent from './CustomComponent';
import React from 'react';


function PageDynamicMdxDevelopment() {

    const [mdxAsJavascript, setMdxAsJavascript] = useState<string>("");
    const [MdxComponent, setMdxComponent] = useState<ReactNode | null>(null);

    const components = {
        CustomComponent: CustomComponent,
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
        const mdxString = `
import CustomComponent from './CustomComponent';

# Hello World from a MDX String

This **is** an example MDX file.

<CustomComponent/>
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
            <div>Below is an example of dynamically generated MDX content in a npm run dev  build:</div>
            <CustomMDXProvider>
                {MdxComponent}
            </CustomMDXProvider>

            <div><a href="/">Back to home</a></div>

        </>
    );
}

export default PageDynamicMdxDevelopment;