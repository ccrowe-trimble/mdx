import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import PageHome from './PageHome'

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact={true} component={PageHome} />
                <Route path="/MDXSample" exact={true} component={PageHome} />

            </BrowserRouter>
        </>
    )
}

export default App
