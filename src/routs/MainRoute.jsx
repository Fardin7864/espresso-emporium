import { createBrowserRouter }  from "react-router-dom"
import Root from "../components/Root/Root"
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Error from "../components/ErrorPage/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Privet from "./Privet";

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
                element: <Privet><AddCoffee></AddCoffee></Privet>
            },
            {
                path: '/coffee/:id',
                element: <Privet><UpdateCoffee></UpdateCoffee></Privet>,
                loader: ({params}) => fetch(`https://espreso-server-himwxfl6x-fardin7864s-projects.vercel.app/coffee/${params.id}`)
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