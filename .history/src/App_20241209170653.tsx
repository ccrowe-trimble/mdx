import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact={true} component={PageHome} />
                <div>
                    <a href="./MDXFile">MDX File</a>
                </div>

                <div>
                    <a href="./DynamicMDX">Dynamic MDX</a>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
