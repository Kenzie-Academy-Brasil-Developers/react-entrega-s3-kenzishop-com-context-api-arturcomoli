export const containerStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  margin: "10px 20px",
  border: "1px solid #6B46C1",
  borderRadius: "5px",
  backgroundColor: "#FAF5FF",
  maxWidth: "250px",
  "@media (min-width: 700px)": {
    margin: "20px",
  },
};

export const nameStyle = {
  margin: "5px 0",
  textAlign: "center",
  fontWeight: "600",
  color: "#2D3748",
  fontSize: "1.10rem",
};

export const descStyle = {
  margin: "0 0 5px 0",
  textAlign: "center",
  color: "#A0AEC0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
};

export const flexStyle = {
  justifyContent: "space-around",
  width: "100%",
};

export const iconStyle = {
  fontSize: "1.15rem",
  cursor: "pointer",
  color: "#805AD5",
  transition: "0.5s",
  _hover: {
    color: "#e500a4",
  },
};

export const priceStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "#805AD5",
};
