import React, { Component } from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen  from '../Screens/HomeScreen';
import AddScreen  from '../Screens/AddScreen';



const AppStack = createStackNavigator({ 
    
    Home: HomeScreen,
    Add: AddScreen 

});


export default createSwitchNavigator(
    {
      App: AppStack
    },
    {
      initialRouteName: 'App',
    }
  );
