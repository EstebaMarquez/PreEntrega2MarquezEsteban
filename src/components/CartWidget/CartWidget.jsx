import { Flex, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
const CartWidget = () => {
return(
    <Flex>
        <CiShoppingCart size={50}/>
        <Text fontSize={"1.5rem"}> 16 </Text>
        
    </Flex>
    
)
}

export default CartWidget;