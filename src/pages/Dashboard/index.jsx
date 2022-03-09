import { Flex } from "@chakra-ui/react";
import Card from "../../components/Card";
import { showStyle } from "./styles";
import db from "../../db/db.js";
import Animation from "../../components/Animation";

const Dashboard = () => {
  return (
    <Animation>
      <div>
        <Flex sx={showStyle} as="ul">
          {db.map(({ img, name, description, price, id }) => {
            return (
              <Card
                img={img}
                name={name}
                description={description}
                price={price}
                id={id}
                key={id}
              />
            );
          })}
        </Flex>
      </div>
    </Animation>
  );
};
export default Dashboard;
