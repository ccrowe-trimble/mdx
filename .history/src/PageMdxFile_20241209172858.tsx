import MDXCustomFile from './MDXCustomFile.mdx';

function PageMdxFile() {
    return (
        <>
            <div>Below is an example of an MDX file being rendered in a React component using a .MDX file works in 'npm run dev' and ('npm run build' and 'npm run preview')</div>

            <MDXCustomFile />

            <a href="/">Back to home</a>
        </>
    )
}

export default PageMdxFile;