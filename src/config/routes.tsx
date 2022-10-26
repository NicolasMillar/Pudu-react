import { IRouteprops } from "../library/RouteProps";
import HomeScreen from "../screen/Home";
import LoginScreen from "../screen/Login";

const routes: IRouteprops[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Login',
        component: LoginScreen
    }
]

export default routes;