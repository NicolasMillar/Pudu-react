import { IRouteprops } from "../library/RouteProps";
import HomeScreen from "../screen/Home";
import HomeUserScreen from "../screen/HomeUser";
import LoginScreen from "../screen/Login";
import ScannerScreen from "../screen/Scan";

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
    },
    {
        name: 'Scanbar',
        component: ScannerScreen
    }
]

export default routes;