import {getWeather, errorTitle, errorMessage} from "./index";
import {Alert} from 'react-native';


export function getLocation() {
    
if (navigator.geolocation) {  
    
getWeather();
    
}
else {

Alert.alert(
  errorTitle,
  errorMessage,
  [
    {text: 'Ok', onPress: () => console.log('ok')},
  ],
);
    
}    
    
}