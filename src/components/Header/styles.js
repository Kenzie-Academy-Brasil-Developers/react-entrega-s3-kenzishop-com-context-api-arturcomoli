export const headerStyle = {
  justifyContent: "space-around",
  alignItems: "center",
  padding: "15px",
  backgroundColor: "#D6BCFA",
  boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.27)",
  marginBottom: "50px",
};

export const groupStyle = {
  flexBasis: "30%",
  justifyContent: "space-around",
};

export const itensStyle = {
  cursor: "pointer",
  alignItems: "center",
  margin: "0 5px 0 5px",
};

export const textStyle = {
  margin: "0 0 0 5px",
  fontWeight: "bold",
  color: "#322659",
  transition: "0.5s",
  _hover: { color: "#e500a4" },

  "@media (max-width: 500px)": {
    display: "none",
  },
};

export const iconStyle = {
  fontSize: "1.5rem",
  color: "#805AD5",
  cursor: "pointer",
  transition: "0.5s",
  _hover: { color: "#e500a4" },
};

export const counterStyle = {
  marginLeft: "2px",
  textAlign: "center",
  backgroundColor: "#e500a4",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  fontSize: "12px",
};
