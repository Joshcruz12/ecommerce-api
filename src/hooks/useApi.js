import axios from 'axios';
import { useEffect, useState } from 'react'

export const useApi = ( API ) => {

    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        axios.get( API)
        .then( res => setProducts( res.data.data.products))
}, [API]);
  
 return { products, setProducts };

}
