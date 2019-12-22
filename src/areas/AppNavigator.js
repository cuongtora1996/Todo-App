import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TodoPage from './todo/TodoPage';
import TodoCompletedPage from './todo_completed/TodoCompletedPage';
import TodoUncompletedPage from './todo_uncompleted/TodoUncompletedPage';

const AppNavigator = createBottomTabNavigator(
  {
    Todo: {screen: TodoPage},
    Completed: {screen: TodoCompletedPage},
    Uncompleted: {screen: TodoUncompletedPage},
  },
  {
    initialRouteParams: 'Todo',
    tabBarOptions: {
      activeTintColor: '#00AEA0',
      inactiveTintColor: '#7B7B7B',
      showLabel: true,
      labelStyle: {
        fontSize: 15,
        margin: 0,
        padding: 0,
      },
    },
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
