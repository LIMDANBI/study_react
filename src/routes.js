import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import User from "./pages/User";

export default [
    {
        path:'/',
        component: Home
    },
    {
        path:'/movies',
        component: Movies
    },
    {
        path:'/users',
        component: Users
    },
    {
        // dynamic하게 변경하면서 넣는 방법 => ":" 사용 
        path:'/users/:id',
        component: User
    }
];