import { useNavigate } from "react-router-dom";
import ResponsiveText from "../common/ResponsiveText";
import classes from "./HouseListContent.module.scss";

const ListItem = (props) => {
  const house = props.house;
  return (
    <div className={classes.houseItem}>
      <div className={classes.houseImg}>
        <img src={house.image} alt={house.address} />
      </div>
      <div className={classes.houseInfo}>
        <h3>{house.price}</h3>
        <p>{house.area}</p>
        <p>{house.address}</p>
        <ResponsiveText
          text={house.description}
          textLength={[10, 15, 20, 25, 28]}
          className={classes.desc}
        />
      </div>
    </div>
  );
};

const HouseListContent = (props) => {
  const houses = props.houses;
  const navigate = useNavigate();

  const navigateDetailHandler = (itemNo) => {
    navigate(`/house/detail/${itemNo}`);
  };
  return (
    <ul className={classes.houseList}>
      {houses.map((house) => (
        <div className={classes.itemContent} key={house.itemNo}>
          <li onClick={() => navigateDetailHandler(house.itemNo)}>
            <ListItem house={house} />
          </li>
        </div>
      ))}
    </ul>
  );
};

export default HouseListContent;
