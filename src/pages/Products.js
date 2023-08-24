// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {

    //4 - Refatorando o hook
    const {counter} = useCounterContext();

    return ( 
        <div>
            <h3>Produtos</h3>
            <p>Valor do contador: {counter}</p>
        </div>
     );
}
 
export default Products;