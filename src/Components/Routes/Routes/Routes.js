import{ createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Main from "../../Layout/Main";
import Chat from "../../Pages/Chat/Chat/Chat";
import Home from "../../Pages/Home/Home/Home";
import Newsfeed from "../../Pages/Newsfeed/Newsfeed/Newsfeed";
import Notifications from "../../Pages/Notifications/Notifications/Notifications";

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
            },
            {
                path:'/Newsfeed',
                element:<Newsfeed></Newsfeed>
            },
            {
                path:'/Chat',
                element:<Chat></Chat>
            },
            {
                path:'/Notifications',
                element:<Notifications></Notifications>
            }
        ]
    }
])
export default router;