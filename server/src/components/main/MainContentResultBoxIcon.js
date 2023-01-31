const MainContentResultBoxIconBox = (props) => {
  return (
    <div style={{ flex: 1.2 }}>
      {props.icon}
      <p> {props.name} </p>
      <p> {props.content} </p>
    </div>
  );
};

export default MainContentResultBoxIconBox;
