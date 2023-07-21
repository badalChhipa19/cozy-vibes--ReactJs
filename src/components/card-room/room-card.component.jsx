import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";

import "./room-card.style.scss";

const Room = ({ details, invertClass }) => {
  const navigate = useNavigate();

  const btnBookHandler = () => {
    navigate(`../booking?id=${details.id}`);
  };

  return (
    <div className={`room ${invertClass}`}>
      {details.booked ? <span className="room__reserved">Reserved</span> : ""}
      <img src={details.image} alt={details.name} className="room__image" />
      <div className="room__description">
        <h3 className="heading__tertiary">{details.name}</h3>
        <span className="room__text">{details.description}</span>
        <div className="room__booking_box">
          <span className="room__price">
            <strong>${details.price}</strong>/Night
          </span>
          {details.booked ? (
            <Button className="btn btn__main btn__disable">Book now</Button>
          ) : (
            <Button className="btn btn__main" onClick={btnBookHandler}>
              Book now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
