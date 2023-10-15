import { createBrowserRouter }  from "react-router-dom"
import Root from "../components/Root/Root"
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Error from "../components/ErrorPage/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }

        ]
    }
])

export default MainRouter;