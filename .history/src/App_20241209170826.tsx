import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import PageHome from './PageHome'
import PageMdxFile from './PageMdxFile'

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact={true} component={PageHome} />
                <Route path="/mdxfile" exact={true} component={PageMdxFile} />

            </BrowserRouter>
        </>
    )
}

export default App
