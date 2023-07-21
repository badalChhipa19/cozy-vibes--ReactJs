import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Button from "../../components/button/button.component";
import { roomsDetails } from "../../assets/data";

import "./booking-card.style.scss";

const BookingCard = () => {
  //! geting params from url
  const { search } = useLocation();
  const bookingId = +search.replace("?id=", "");

  //! getting Item using params
  const bookingProduct = roomsDetails.find((room) => room.id === bookingId);

  //! AddOn activities
  const [price, setPrice] = useState(bookingProduct.price);
  const [addOnServices, setAddOnServices] = useState([]);

  //TODO:
  const addOnHandler = (e) => {
    const parent = e.target.closest(".booking__addon_item");

    const addOnItem = parent.dataset;
    if (addOnServices.find((item) => item === addOnItem.item)) {
      setAddOnServices(addOnServices.filter((item) => item !== addOnItem.item));
      setPrice(+price - +addOnItem.price);
    } else {
      setAddOnServices([...addOnServices, addOnItem.item]);
      setPrice(+price + +addOnItem.price);
    }
  };

  //! handle product booking
  const bookedRoomsData = JSON.parse(localStorage.getItem("bookingDetails"))
    ? JSON.parse(localStorage.getItem("bookingDetails"))
    : [];

  const currentUserEmail = useSelector((state) => state.user.currentUser.email);
  const [bookedRoom, setBookedRoom] = useState(bookedRoomsData);
  //TODO:
  const handleBookBtn = (e) => {
    if (e.target.textContent === "Booked") {
      //! Changing UI
      e.target.classList.remove("btn__tertiary");
      e.target.classList.add("btn__main");
      // setBooking("Book Now");
      e.target.textContent = "Book Now";
      //!Updating booking details
      const index = bookedRoom.findIndex(
        (user) =>
          user.email === currentUserEmail &&
          +user.product === +bookingProduct.id
      );
      const allBookedRoomsList = bookedRoomsData.slice(index);
      return setBookedRoom(allBookedRoomsList);
    }

    if (e.target.textContent === "Book Now") {
      //! Changing UI
      e.target.classList.remove("btn__main");
      e.target.classList.add("btn__tertiary");
      // setBooking("Booked");
      e.target.textContent = "Booked";

      //!Updating booking details
      const allBookedRoomsList = [
        ...bookedRoom,
        {
          email: currentUserEmail,
          product: bookingProduct.id,
          addOns: addOnServices,
          price: price,
        },
      ];
      return setBookedRoom(allBookedRoomsList);
    }
  };

  useEffect(() => {
    localStorage.setItem("bookingDetails", JSON.stringify(bookedRoom));
  }, [bookedRoom, setBookedRoom]);

  return (
    <div className="booking">
      <div className="heading__container">
        <h3 className="heading__tertiary">
          <span className="name__satrt">Cozy</span> vibes
        </h3>
        <h2 className="heading__secondary">Room Details</h2>
      </div>
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
              <h5 className="booking__blog_heading">
                Far far away, behind the word mountains
              </h5>
              <span>December 24, 2022</span>
            </div>
          </div>
          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="booking__blog_heading">
                Far far away, behind the word mountains
              </h5>
              <span>December 24, 2022</span>
            </div>
          </div>

          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="booking__blog_heading">
                Far far away, behind the word mountains
              </h5>
              <span>December 24, 2022</span>
            </div>
          </div>
          <div className="booking__blog_container">
            <img
              src="https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp"
              alt="blog"
            />
            <div className="booking__blog_text">
              <h5 className="booking__blog_heading">
                Far far away, behind the word mountains
              </h5>
              <span>December 24, 2022</span>
            </div>
          </div>
        </div>

        <div className="booking__cloud">
          <h3 className="heading__tertiary">Tag Cloud</h3>
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
          <h3 className="heading__tertiary">Add On</h3>
          <ul className="booking__addon_list">
            <li
              className="booking__addon_item"
              data-item="breakfast"
              data-price="2"
            >
              <div>
                {/* {} */}
                <input type="checkbox" id="1" onClick={addOnHandler} />
                <label htmlFor="1"></label>
                Breakfast
              </div>
              <span>$2</span>
            </li>
            <li
              className="booking__addon_item"
              data-item="airportTransfer"
              data-price="5"
            >
              <div>
                <input type="checkbox" id="2" onClick={addOnHandler} />
                <label htmlFor="2"></label>
                Airport Transfer
              </div>
              <span>$5</span>
            </li>
            <li className="booking__addon_item" data-item="spa" data-price="10">
              <div>
                <input type="checkbox" id="3" onClick={addOnHandler} />
                <label htmlFor="3"></label>
                Spa and Wellness Services
              </div>
              <span>$10</span>
            </li>
            <li className="booking__addon_item" data-item="bar" data-price="10">
              <div>
                <input type="checkbox" id="4" onClick={addOnHandler} />
                <label htmlFor="4"></label>
                Mini-Bar and Snacks
              </div>
              <span>$10</span>
            </li>
            <li
              className="booking__addon_item"
              data-item="business"
              data-price="20"
            >
              <div>
                <input type="checkbox" id="5" onClick={addOnHandler} />
                <label htmlFor="5"></label>
                Business Services
              </div>
              <span>$20</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="booking__description">
        <div>
          <h2 className="heading__secondary heading__secondary_colored">
            {bookingProduct.name}
          </h2>
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
          <div className="checkout__container">
            {bookedRoom.find(
              (user) =>
                user.email === currentUserEmail && user.product === bookingId
            ) ? (
              <Button className="btn btn__tertiary" onClick={handleBookBtn}>
                Booked
              </Button>
            ) : (
              <Button className="btn btn__main" onClick={handleBookBtn}>
                Book Now
              </Button>
            )}

            <span>
              <strong>Total:</strong> ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
