import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateStory from '../screens/CreateStory';
import Feed from '../screens/Feed';

const Tab=createBottomTabNavigator()
const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator 
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name === 'Feed'){
          iconName=focused ?
          'book':'book-outline';
        }
        else if(route.name === 'CreateStory'){
          iconName=focused ?
          'create':'create-outline';
        }
        return 
        <Ionicons 
        name={iconName}
        size={size}
        color={color}
        />
      }
    })}
    tabBarOptions={{activeTintColor:'black',inactiveTintColor:'grey'}}
    >
    <Tab.screen name='Feed' component={Feed}/>
    <Tab.screen name='CreateStory' component={CreateStory}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator