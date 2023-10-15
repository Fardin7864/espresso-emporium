import { createBrowserRouter }  from "react-router-dom"
import Root from "../components/Root/Root"
import Home from "../pages/Home/Home";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default MainRouter;