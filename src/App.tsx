import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './PageHome'
import PageMdxFile from './PageMdxFile'
import PageDynamicMdxDevelopment from './PageDynamicMdxDevelopment'
import PageDynamicMdxProduction from './PageDynamicMdxProduction'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={PageHome} />
                    <Route path="/mdxFile" Component={PageMdxFile} />
                    <Route path="/dynamicMdxDevelopment" Component={PageDynamicMdxDevelopment} />
                    <Route path="/dynamicMdxProduction" Component={PageDynamicMdxProduction} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
