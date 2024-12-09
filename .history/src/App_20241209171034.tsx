import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import PageHome from './PageHome'
import PageMdxFile from './PageMdxFile'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={PageHome} />
                    <Route path="/mdxfile" Component={PageMdxFile} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
