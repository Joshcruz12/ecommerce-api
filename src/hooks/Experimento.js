import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addProduct } from "../store/slices/cart.slice";
import { useIncrement } from "../hooks/useIncrement";
import axios from 'axios';
import { filterCategory, filterProductsByName, getProducts } from '../store/slices/products.slice';


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [ search, setSearch ] = useState("");
  const { increment, decrement, count } = useIncrement(0);
  
  const handleAddProduct = () => {
      dispatch(addProduct({...products, quantity: count}));
    
  }
    let products = useSelector(state => state.products);

    useEffect(() => {

      dispatch(getProducts());
      axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
        .then(res => setCategories(res.data.data))
  
        
    }, [dispatch]);

    const selectCategory = (id) => {
      dispatch(filterCategory(id))
    }
  
    const searchProduct = (id) => {
      dispatch(filterProductsByName(id))
    }
   