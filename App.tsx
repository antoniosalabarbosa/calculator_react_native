import { 
  Text, 
  View, 
  TextInput 
} from 'react-native';
import NumberButton from './src/components/NumberButton';
import { CalculatorProvider } from './src/context/Calculator';
import {
  Container_Style,
  FlexGeneralSettings,
  Text_Style, 
  Button_Style,
  Input_Style
} from './src/styles/AppStyles';

const App = ()=> {
  return (
    <CalculatorProvider>
      <View style={Container_Style.rootContainer}>
        <View>
          <Text style={Text_Style.h1}>Calculator!</Text>
          <Text>by: Antonio Sala Barbosa</Text>
        </View>

        <View style={FlexGeneralSettings.horizontalAlign}>
          {/*Visor*/}
          <TextInput 
            style={Input_Style.calculatorInput}
            readOnly
          />


          {/*Buttons*/}
          <View style={Button_Style.boxButton}>
            <NumberButton textContent='7' />
            <NumberButton textContent='8' />
            <NumberButton textContent='9' />

            <NumberButton textContent='4' />
            <NumberButton textContent='5' />
            <NumberButton textContent='6' />

            <NumberButton textContent='1' />
            <NumberButton textContent='2' />
            <NumberButton textContent='3' />

            <NumberButton textContent='0' />
          </View>
        </View>
      </View>
    </CalculatorProvider>
  );
};

export default App;