import React from 'react';
import { createStackNavigator, createAppContainer  } from "react-navigation";

//importação das páginas
import Page1 from './componentes/Page1';
import Page2 from './componentes/Page2';

const AppNavigator = createStackNavigator({
	Page1       : {screen: Page1},
	Page2       : {screen: Page2}
}, 
{
	initialRouteName: 'Page1'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;