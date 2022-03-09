import { GiShoppingCart } from "react-icons/gi";
import { RiLoginCircleFill } from "react-icons/ri";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import {
  groupStyle,
  itensStyle,
  headerStyle,
  iconStyle,
  textStyle,
  counterStyle,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Header = () => {
  const history = useHistory();

  const redirectCart = () => {
    history.push("/cart");
  };

  const redirectLogin = () => {
    history.push("/login");
  };

  const { cart } = useContext(CartContext);

  // pegar os tate do context
  // const itens = useSelector((state) => state.cart);
  const numberOfItems = cart.length;

  return (
    <Flex sx={headerStyle} as="header">
      <Image
        src="https://img.elo7.com.br/product/zoom/1C56B29/exemplo-de-logo-desenho.jpg"
        alt="Logo"
        width="100px"
        height="60px"
      />
      <Flex sx={groupStyle}>
        <Flex sx={itensStyle} onClick={redirectCart}>
          <Icon as={GiShoppingCart} sx={iconStyle} />
          <Text as="span" sx={textStyle}>
            Carrinho
          </Text>
          <Text sx={counterStyle}>{numberOfItems}</Text>
        </Flex>
        <Flex sx={itensStyle} onClick={redirectLogin}>
          <Icon as={RiLoginCircleFill} sx={iconStyle} />
          <Text as="span" sx={textStyle}>
            Entrar
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
