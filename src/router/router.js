import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Profil from "../pages/Profil";
import Settings from "../pages/Settings";

const routes = [
    {
        id:1,
        path:"/",
        component:<Dashboard/>,
    },
    {
        id:1,
        path:"/profil",
        component:<Profil/>,
    },
    {
        id:1,
        path:"/settings",
        component:<Settings/>,
    },
    {
        id:1,
        path:"*",
        component:<NotFound/>,
    },
    
]