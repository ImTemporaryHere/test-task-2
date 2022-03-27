import './reset.scss'
import './index.scss'
import React, {useEffect} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useAction} from "./hooks/useAction";




const App = () => {
    const {products} = useTypedSelector(state=>state.products)
    const {fetchProducts} = useAction()

    useEffect(()=>{fetchProducts()},[])

    console.log(products)

    return (
        <div>
          hello
        </div>
    );
};

export default App;
