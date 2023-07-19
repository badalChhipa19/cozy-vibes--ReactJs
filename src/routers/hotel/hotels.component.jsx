import { hotelDetails, servicesDetails } from "../../assets/data";
import HotelCard from "../../components/card-hotel/hotel-card.component";
import Service from "../../components/card-service/service-card.component";

import "./hotels.style.scss";

const Hotel = () => {
  return (
    <div className="hotel__content">
      <h2 className="heading__secondary">Cozy vibes</h2>
      <span className="hotel__text">Choose a place that hit your Vibe</span>
      <div className="hotel__container">
        {hotelDetails.map((hotel) => (
          <HotelCard key={hotel.id} details={hotel} />
        ))}
      </div>
      <div className="hotel__service_container">
        <h3 className="heading__tertiary">Cozy vibes services</h3>
        <h2 className="heading__secondary">Explore Our Hotel Services</h2>
        <div className="services__container">
          {servicesDetails.map((service) => (
            <Service key={service.id} details={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
