import { IRouteprops } from "../library/RouteProps";
import HomeScreen from "../screen/Home";
import HomeUserScreen from "../screen/HomeUser";
import LoginScreen from "../screen/Login";
import ProductScreen from "../screen/Product";
import ScannerScreen from "../screen/Scan";
import { ProductProps } from "../typings";
import SearchBarScreen from "../screen/SearchBar";

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
    },
    {
        name: 'Product',
        component: ProductScreen
    },
    {
        name: 'Search',
        component: SearchBarScreen
    },
]

export default routes;