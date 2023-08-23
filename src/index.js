import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CadastrarScreen from "./screens/CadastrarScreen";
import SocialScreen from "./screens/SocialScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigation() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastro"
          component={CadastrarScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Social"
          component={SocialScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}