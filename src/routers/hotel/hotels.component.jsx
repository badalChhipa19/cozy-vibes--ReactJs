import { useEffect, useState } from "react";

import { getCollectionAndDocuments } from "./../../util/firebase/firebase.utils";
import HotelCard from "../../components/card-hotel/hotel-card.component";
import Service from "../../components/card-service/service-card.component";

import "./hotels.style.scss";

const Hotel = () => {
  const [hotelDetails, setHotelDetails] = useState([]);
  const [servicesDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    const hotelData = async () => {
      const data = await getCollectionAndDocuments("hotelDetails");
      setHotelDetails(data);
    };
    const servicesData = async () => {
      const data = await getCollectionAndDocuments("servicesDetails");
      setServiceDetails(data);
    };

    hotelData();
    servicesData();
  }, []);

  return (
    <>
      <div className="hotel__content">
        <div className="heading__container">
          <h3 className="heading__tertiary">
            <span className="name__satrt">Cozy</span> vibes
          </h3>
          <h2 className="heading__secondary">
            Choose a place that hit your Vibe
          </h2>
        </div>
        <div className="hotel__container">
          {hotelDetails.map((hotel) => (
            <HotelCard key={hotel.id} details={hotel} />
          ))}
        </div>
      </div>
      <div className="hotel__service_container">
        <h3 className="heading__tertiary heading__tertiary_colored">
          Cozy vibes services
        </h3>
        <h2 className="heading__secondary">Explore Our Hotel Services</h2>
        <div className="services__container">
          {servicesDetails.map((service) => (
            <Service key={service.id} details={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotel;
