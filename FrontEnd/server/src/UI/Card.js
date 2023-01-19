const Card = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>카드 UI</p>
      {props.children}
    </div>
  );
};

export default Card;
