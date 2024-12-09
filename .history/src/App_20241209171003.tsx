import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import PageHome from './PageHome'
import PageMdxFile from './PageMdxFile'

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" Component={PageHome} />
                <Route path="/mdxfile" Component={PageMdxFile} />

            </BrowserRouter>
        </>
    )
}

export default App
