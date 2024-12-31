import { 
    Text, 
    TouchableOpacity,
} from "react-native";
import { Button_Style } from "../styles/AppStyles";

interface I_NumberButton {
    textContent: string;
};

const NumberButton = ({ textContent }: I_NumberButton)=>{
    
    function press(value: string){
        console.log(value);
    }

    return (
        <TouchableOpacity 
            style={Button_Style.itemButton}
            onPress={ ()=> press(textContent) }
        >
            <Text style={Button_Style.buttonNumber}>
                { textContent }
            </Text>
        </TouchableOpacity>
    );
};

export default NumberButton;