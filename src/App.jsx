import { useState } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { getAllProducts } from "./services/products";


//Estados: un valor que le podemos brindar a mi componente
//Hooks: funciones ya definidas por React que nos permiten realizar ciertas acciones en nuestros componentes. Por ejemplo crear un estado.
//useState: Hook que nos permite crear un estado en un componente funcional



function App() {

const [productsData, setProductsData] = useState ([]);

  useEffect (() => {
    getAllProducts().then((res) =>{
      if (res.status === 200) {
        setProductsData(res.data.products);
      } else{
        console.log("Error");
      }
    }) .catch((err) =>{

    })
  },[]);

  const [count, setCount] = useState(0);
  
  const handleRemoveItem = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  const handleAddItem = () => {
    setCount(count + 1);
  }
  return (
    <ChakraProvider>
      <NavBar />
      <Flex>
        <Button onClick={handleRemoveItem}>-</Button>
        <Text>{count}</Text>
        <Button onClick={handleAddItem}>+</Button>
      </Flex>
      <Flex flexDirection={"column"}/>
        <ItemListContainer products={productsData}/>
        


    </ChakraProvider>
  );
}

export default App;
