import { createStackNavigator } from "react-navigation-stack";
import{ createAppContainer } from "react-navigation";
import Splash from '../Components/splash';
import Dash from '../Components/dash';
import Country from '../Components/country';
import CountStat from '../Components/constats';


export default createAppContainer(
createStackNavigator({ Splash, Dash, Country, CountStat }, { initialRouteName: "Splash" })
);
