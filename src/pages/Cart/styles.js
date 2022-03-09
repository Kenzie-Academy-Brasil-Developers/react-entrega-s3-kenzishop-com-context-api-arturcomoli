export const flexStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media (min-width: 768px)": {
    flexDirection: "row-reverse",
    alignItems: "flex-start",
  },
};

export const containerStyle = {
  textAlign: "center",
  border: "1px solid #6B46C1",
  width: "90%",
  padding: "15px",
  borderRadius: "5px",
  backgroundColor: "#FAF5FF",
  "@media (min-width: 768px)": {
    width: "35%",
    margin: "10px 1rem 0 0",
  },
};

export const totalPriceStyle = {
  fontWeight: "700",
  color: "#2D3748",
};
