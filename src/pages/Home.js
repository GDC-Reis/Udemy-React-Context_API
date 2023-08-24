// import {useContext} from "react"
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import DeleteValue from "../components/DeleteValue"

//4 - Refatorando o hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {

    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext();
    
    return ( 
        <div>
            <h3>Home</h3>
            <p>Valor do contador: {counter}</p>
            {/* 3- Alterando valor contexto */}
            <ChangeCounter/>
            <DeleteValue/>
        </div>
     );
}
 
export default Home;