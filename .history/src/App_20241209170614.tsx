import './App.css'

function App() {
    return (
        <>
            <Route path="/" exact={true} component={PageHome} />
            <div>
                <a href="./MDXFile">MDX File</a>
            </div>

            <div>
                <a href="./DynamicMDX">Dynamic MDX</a>
            </div>
        </>
    )
}

export default App
