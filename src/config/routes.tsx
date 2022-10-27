import { IRouteprops } from "../library/RouteProps";
import HomeScreen from "../screen/Home";
import HomeUserScreen from "../screen/HomeUser";
import LoginScreen from "../screen/Login";

const routes: IRouteprops[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Login',
        component: LoginScreen
    },
    {
        name: 'HomeUser',
        component: HomeUserScreen
    }
]

export default routes;