import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BlogContextProvider from './context/blogContext';
import Entypo from '@expo/vector-icons/Entypo';


//screen 
import HomeScreen from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import BlogCreateScreen from './pages/CreateBlog';
import EditPage from './pages/EditPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={
            {
              title: 'Bloglarım',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerLeft: () => (
                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                  <Ionicons name="newspaper" size={35} color="#fff" />
                </Text>
              ),
            }
          } />
          {/* other screens */}

          <Stack.Screen name="BlogDetail" component={BlogDetail} options={
            {
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerLeft: () => (
                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                  <Entypo name="text-document-inverted" size={24} color="white" />
                </Text>
              ),
            }
          } />

          <Stack.Screen name="BlogCreate" component={BlogCreateScreen} options={
            {
              title: "Blog Create",
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerLeft: () => (
                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                  <Entypo name="text-document-inverted" size={24} color="white" />
                </Text>
              ),
            }
          } />
          <Stack.Screen name="EditBlog" component={EditPage} options={
            {
              title: "Blog Edit ",
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerLeft: () => (
                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                  <Entypo name="text-document-inverted" size={24} color="white" />
                </Text>
              ),
            }
          } />

        </Stack.Navigator>
      </NavigationContainer>
    </BlogContextProvider>
  );
}

