import sample from "../assets/image/sample.jpg";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img
        src={sample}
        style={{
          width: "20vw",
          height: "250px",
          borderRadius: "20px",
          marginRight: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></img>
      <div style={{ color: "white", textAlign: "left", padding: "10px 30px" }}>
        <p>
          <strong>월세 200/30</strong>
        </p>
        <p>분리형 원룸</p>
        <p>한마을 주택</p>
      </div>
    </div>
  );
};

export default Card;
