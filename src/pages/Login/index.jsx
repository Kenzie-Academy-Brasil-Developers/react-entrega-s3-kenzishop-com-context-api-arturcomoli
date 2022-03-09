import { Button, Flex, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Animation from "../../components/Animation";
import { flexStyle, textStyle } from "./styles";

const Login = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Animation>
      <Flex sx={flexStyle}>
        <Text sx={textStyle}>Aqui teria o form de Login</Text>
        <Button onClick={handleBack} colorScheme="purple">
          Voltar
        </Button>
      </Flex>
    </Animation>
  );
};

export default Login;
