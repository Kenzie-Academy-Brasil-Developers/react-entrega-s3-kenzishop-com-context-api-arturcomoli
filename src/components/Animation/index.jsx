import { motion } from "framer-motion";

const Animation = ({ ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.75,
      }}
    ></motion.div>
  );
};
export default Animation;
