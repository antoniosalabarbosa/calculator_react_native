import {
    useContext,
    useState,
    createContext,
    PropsWithChildren,
    Dispatch,
    SetStateAction
} from "react";

interface I_CalculatorContext {
    numberInCalculator: string;
    setNumberInCalculator: Dispatch<SetStateAction<string>>
}

export const CalculatorContext = createContext<I_CalculatorContext | null>(null);

export const useCalculatorContext = ()=>{
    const context = useContext(CalculatorContext);
    if(!context) throw new Error("Context: Provider is missed");
    return context;
};

export const CalculatorProvider = ({ children }: PropsWithChildren) => {
    
    const [numberInCalculator, setNumberInCalculator] = useState("");

    return (
        <CalculatorContext.Provider 
            value={ { numberInCalculator, setNumberInCalculator } }
        >
            { children }
        </CalculatorContext.Provider>
    );
};