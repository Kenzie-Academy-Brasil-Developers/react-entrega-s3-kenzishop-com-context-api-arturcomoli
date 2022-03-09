import { Button, ButtonGroup, Container, Flex, Text } from "@chakra-ui/react";
import CartCard from "../../components/CartCard";
import { containerStyle, flexStyle, totalPriceStyle } from "./styles";
import { useHistory } from "react-router-dom";
import Animation from "../../components/Animation";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Cart = () => {
  const history = useHistory();

  const { cart, deleteAll } = useContext(CartContext);

  const totalItems = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const formattedTotal = totalItems.toFixed(2).replace(".", ",");

  const handleBack = () => {
    history.push("/");
  };

  const handleDeleteAll = () => {
    deleteAll();
  };

  return (
    <Animation>
      <Flex sx={flexStyle}>
        <Container sx={containerStyle}>
          <Text sx={totalPriceStyle}>Total da compra: R$ {formattedTotal}</Text>
          <ButtonGroup colorScheme="purple">
            <Button onClick={handleDeleteAll}>Limpar Carrinho</Button>
            <Button onClick={handleBack}>Voltar</Button>
          </ButtonGroup>
        </Container>
        <Container as="ul">
          {cart.map(({ name, description, id, formattedPrice, img }) => {
            return (
              <CartCard
                name={name}
                description={description}
                id={id}
                formattedPrice={formattedPrice}
                img={img}
              />
            );
          })}
        </Container>
      </Flex>
    </Animation>
  );
};
export default Cart;
