import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const DeleteValue = () => {

    const {counter, setCounter} = useContext(CounterContext)

    if (counter < 1){
        setCounter("");
    }else{
        setCounter(counter + 1 )
    }

    return(
        <div>
            <button onClick={() => setCounter(counter - 1)}>Delete valut to counter</button>
        </div>
    )
}

export default DeleteValue;