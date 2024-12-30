import { Text, TouchableOpacity } from "react-native";
import { Button_Style } from "../styles/AppStyles";

type T_NumberButton = {
    textContent: string;
};

const NumberButton = ({ textContent }: T_NumberButton)=>{
    return (
        <TouchableOpacity style={Button_Style.itemButton}>
            <Text style={Button_Style.buttonNumber}>
                { textContent }
            </Text>
        </TouchableOpacity>
    );
};

export default NumberButton;