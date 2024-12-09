function PageHome() {
    return (
        <div>
            <div>
                <a href="./mdxFile">Load a pre-compiled MDX File</a>
            </div>
            <br />
            <div>
                <a href="./dynamicMdxDevelopment">Dynamic MDX - development (only use with npm run dev)</a>
            </div>
            <br />
            <div>
                <a href="./dynamicMdxProduction">Dynamic MDX - production (only use with npm run build, and then npm run preview)</a>
            </div>
        </div>
    );
}

export default PageHome;    