import { createBrowserRouter }  from "react-router-dom"
import Root from "../components/Root/Root"

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            
        ]
    }
])

export default MainRouter;