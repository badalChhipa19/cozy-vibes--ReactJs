import { useEffect } from "react";

import { addDataAndCollection } from "./../../util/firebase/firebase.utils";
import { roomsDetails } from "../../assets/data";
import Room from "../../components/card-room/room-card.component";

import "./rooms.style.scss";

const Rooms = () => {
  // useEffect(() => {
  //   console.log(roomsDetails);
  //   addDataAndCollection("roomsDetails", roomsDetails, "title");
  // }, []);

  const randomNum = (val) => Math.trunc(Math.random() * val + 1);

  const randomNumbersArray = Array.from({ length: randomNum(6) }, () =>
    randomNum(20)
  );

  const roomsArray = randomNumbersArray.map((num) => {
    const [a] = roomsDetails.filter((room) => room.id === num);
    return a;
  });

  return (
    <div className="rooms">
      <div className="heading__container">
        <h3 className="heading__tertiary">
          <span className="name__satrt">Cozy</span> Vibes
        </h3>
        <h2 className="heading__secondary">
          Let's have a look what we have for you
        </h2>
      </div>
      <div className="rooms__container">
        {roomsArray.map((room, i) => {
          let invertClass = "";
          if (i % 2 !== 0) invertClass = "invert";
          return <Room key={i} invertClass={invertClass} details={room} />;
        })}
      </div>
    </div>
  );
};

export default Rooms;
