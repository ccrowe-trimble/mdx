import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './PageHome'
import PageMdxFile from './PageMdxFile'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={PageHome} />
                    <Route path="/mdxFile" Component={PageMdxFile} />
                    <Route path="/dynamicMdx" Component={PageMdxFile} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
