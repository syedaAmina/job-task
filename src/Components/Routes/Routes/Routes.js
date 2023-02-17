import{ createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/About',
                element:<About></About>
            }
        ]
    }
])
export default router;