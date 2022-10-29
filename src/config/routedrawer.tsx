import { IRouteprops } from "../library/RouteProps";
import HomeScreen from "../screen/Home";
import HomeUserScreen from "../screen/HomeUser";
import LoginScreen from "../screen/Login";

const routes: IRouteprops[] = [
    {
        name: 'Home',
        component: HomeUserScreen
    },{
        name: 'RealHome',
        component: HomeScreen
    }
]

export default routes;