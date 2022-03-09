import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { CartContext } from "../../providers/cart";
import {
  containerStyle,
  descStyle,
  flexStyle,
  iconStyle,
  nameStyle,
  priceStyle,
} from "./styles";

const Card = ({ img, name, description, price, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (e) => {
    const getId = e.target.closest("li").id;
    addToCart(getId);
  };

  return (
    <Box sx={containerStyle} as="li" w="80vw" id={id} key={id}>
      <Image objectFit="fill" width="150px" height="130px" src={img} />
      <Text sx={nameStyle}>{name}</Text>
      <Text noOfLines="3" sx={descStyle}>
        {description}
      </Text>
      <Flex sx={flexStyle}>
        <Text sx={priceStyle}>R$ {price}</Text>
        <Icon as={BsFillBasket3Fill} sx={iconStyle} onClick={handleAdd} />
      </Flex>
    </Box>
  );
};

export default Card;
