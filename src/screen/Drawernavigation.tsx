import { createDrawerNavigator } from '@react-navigation/drawer';
import routesdrawer from '../config/routedrawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Navigator initialRouteName={'RealHome'} >
        {routesdrawer.map((r,i) => (
          <Drawer.Screen key={i} name={r.name}>
            {(props) => <r.component name={r.name} {...props} />}
          </Drawer.Screen>
        ))}
      </Drawer.Navigator>
    </Drawer.Navigator>
  );
}