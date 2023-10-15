import { createBrowserRouter }  from "react-router-dom"
import Root from "../components/Root/Root"
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatecoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default MainRouter;