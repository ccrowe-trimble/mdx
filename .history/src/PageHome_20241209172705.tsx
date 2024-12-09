function PageHome() {
    return (
        <>
            <h1>MDX Samples</h1>
            <div>
                <div>
                    <a href="./mdxFile">Load a pre-compiled MDX File</a>
                </div>
                <br />
                <div>
                    <a href="./dynamicMdxDevelopment">Dynamic MDX - development (only use with npm run dev as it does not work in production)</a>
                </div>
                <br />
                <div>
                    <a href="./dynamicMdxProduction">Dynamic MDX - production (only use with npm run build, and then npm run preview, wont work (but does work in development - npm run dev))</a>
                </div>
            </div>
        </>
    );
}

export default PageHome;    