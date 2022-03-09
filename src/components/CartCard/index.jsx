import { Text, Flex, Image, Icon } from "@chakra-ui/react";
import {
  containerStyle,
  descStyle,
  iconStyle,
  nameDescStyle,
  nameStyle,
  priceDeleteStyle,
  priceStyle,
} from "./styles";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const CartCard = ({ img, name, description, formattedPrice, id }) => {
  const { deleteItem } = useContext(CartContext);

  const handleDelete = (e) => {
    const id = e.target.closest("li").id;
    deleteItem(id);
  };

  return (
    <Flex id={id} key={id} sx={containerStyle} as="li">
      <Image src={img} alt={name} boxSize="65px" />
      <Flex sx={nameDescStyle}>
        <Text sx={nameStyle}>{name}</Text>
        <Text sx={descStyle}>{description}</Text>
      </Flex>
      <Flex sx={priceDeleteStyle}>
        <Text sx={priceStyle}>{formattedPrice}</Text>
        <Icon as={FaTrash} sx={iconStyle} onClick={handleDelete} />
      </Flex>
    </Flex>
  );
};

export default CartCard;
