import { useLocation } from "react-router-dom";

import Button from "../../components/button/button.component";
import { roomsDetails } from "../../assets/data";

import "./booking-card.style.scss";

const BookingCard = () => {
  const { search } = useLocation();
  const bookingId = +search.replace("?id=", "");
  const bookingProduct = roomsDetails.find((room) => room.id === bookingId);

  //TODO:
  const addOnHandler = (e) => {
    const parent = e.target.closest(".booking__addon_item");
    const AddOnPrice = parent.dataset.price;
    return AddOnPrice;
  };

  return (
    <div className="booking">
      <h2 className="heading__secondary">Room Details</h2>
      <div className="booking__carousel">
        <img src={bookingProduct.image} alt={bookingProduct.name} />
      </div>

      <div className="booking__services">
        <h3 className="heading__tertiary">Hotel Services</h3>
        <ul className="booking__services_list">
          <li className="booking__services_item">Free WIFI</li>
          <li className="booking__services_item">Easy Booking</li>
          <li className="booking__services_item">Restaurant</li>
          <li className="booking__services_item">Swimming pool</li>
          <li className="booking__services_item">beauty & health</li>
          <li className="booking__services_item">60" flatscreen tv</li>
          <li className="booking__services_item">cold aircondition</li>
          <li className="booking__services_item">help & support</li>
        </ul>

        <div className="booking__blog">
          <h3 className="heading__tertiary">Rectnt Blog</h3>
          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="">Far far away, behind the word mountains</h5>
              <span>December 24, 2022</span>
            </div>
          </div>
          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="">Far far away, behind the word mountains</h5>
              <span>December 24, 2022</span>
            </div>
          </div>

          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="">Far far away, behind the word mountains</h5>
              <span>December 24, 2022</span>
            </div>
          </div>
          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="">Far far away, behind the word mountains</h5>
              <span>December 24, 2022</span>
            </div>
          </div>
        </div>

        <div className="booking__cloud">
          <h4>Tag Cloud</h4>
          <div>
            <span>hotel</span>
            <span>pool</span>
            <span>tv</span>
            <span>aircon</span>
            <span>relax</span>
            <span>cozzy</span>
            <span>room</span>
            <span>resto</span>
            <span>bar</span>
          </div>
        </div>

        <div className="booking__addon">
          <h4>Add On</h4>
          <ul className="booking__addon_list">
            <li className="booking__addon_item" data-price="2">
              <input type="checkbox" id="1" onChange={addOnHandler} />
              <label htmlFor="1"></label>
              Breakfast
            </li>
            <li className="booking__addon_item" data-price="5">
              <input type="checkbox" id="2" onChange={addOnHandler} />
              <label htmlFor="2"></label>
              Airport Transfer
            </li>
            <li className="booking__addon_item" data-price="10">
              <input type="checkbox" id="3" onChange={addOnHandler} />
              <label htmlFor="3"></label>
              Spa and Wellness Services
            </li>
            <li className="booking__addon_item" data-price="10">
              <input type="checkbox" id="4" onChange={addOnHandler} />
              <label htmlFor="4"></label>
              Mini-Bar and Snacks
            </li>
            <li className="booking__addon_item" data-price="20">
              <input type="checkbox" id="5" onChange={addOnHandler} />
              <label htmlFor="5"></label>
              Business Services
            </li>
          </ul>
        </div>
      </div>

      <div className="booking__description">
        <div>
          <h2 className="heading__secondary">{bookingProduct.name}</h2>
          <span className="boooking__description_text">
            {bookingProduct.description.repeat(3)}
          </span>
        </div>
        <div className="booking__description_details">
          <div>
            <span>
              <strong>Max:</strong> {bookingProduct.max} Persons
            </span>
            <span>
              <strong>View:</strong> {bookingProduct.view}
            </span>
            <span>
              <strong>Size:</strong> {bookingProduct.size} m<sup>2</sup>
            </span>
            <span>
              <strong>Bed:</strong> {bookingProduct.bed}
            </span>
          </div>
          <Button className="btn btn__main">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
