import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from './Home'; 
import  LogInSignUp  from './LogInSignUp'; 
import  LetsBegin  from './LetsBegin'; 
import  FieldsOfExpertise from './FieldsOfExpertise';
import  WorkHistory from './WorkHistory';
import  PersonalInfo from './PersonalInfo';
import  Verification from './Verification';
import  ShareKnowledge from './ShareKnowledge';
import  ThankYou from './ThankYou';
import  Poll from './Poll';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
        <Stack.Screen name="LetsBegin" component={LetsBegin} />
        <Stack.Screen name="FieldsOfExpertise" component={FieldsOfExpertise} />
        <Stack.Screen name="WorkHistory" component={WorkHistory} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="ShareKnowledge" component={ShareKnowledge} />
        <Stack.Screen name="ThankYou" component={ThankYou} />
        <Stack.Screen name="Poll" component={Poll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
