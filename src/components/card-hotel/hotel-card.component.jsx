import { useNavigate } from "react-router-dom";

import "./hotel-card.component.scss";

const HotelCard = ({ details }) => {
  const navigate = useNavigate();
  const redirecthandler = () => {
    navigate("./rooms");
  };

  return (
    <div className="hotel">
      <img
        src={details.image}
        onClick={redirecthandler}
        alt={details.name}
        className="hotel__image"
      />
      <h3 className="heading__tertiary" onClick={redirecthandler}>
        {details.name}
      </h3>
    </div>
  );
};

export default HotelCard;
