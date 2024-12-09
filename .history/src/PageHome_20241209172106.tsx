function PageHome() {
    return (
        <div>
            <div>
                <a href="./mdxFile">MDX File</a>
            </div>

            <div>
                <a href="./dynamicMdxDevelopment">Dynamic MDX - development (only use with npm run dev)</a>
            </div>
            <div>
                <a href="./dynamicMdxProduction">Dynamic MDX - production (only use with npm run build, and then npm run preview)</a>
            </div>
        </div>
    );
}

export default PageHome;    