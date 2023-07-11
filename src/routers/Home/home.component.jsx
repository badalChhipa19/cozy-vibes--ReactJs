import { aboutDetails } from "../../assets/data";
import Button from "../../components/button/button.component";
import AboutCard from "../../components/card-about/card-about.component";

import "./home.style.scss";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <span className="home__text">
          ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
        </span>
        <h1 className="heding__primary">Most Relaxing Place</h1>
        <div className="button__container">
          <Button className="btn btn__main">Book a tour &rarr;</Button>
          <Button className="btn btn__secondary">Know more &rarr;</Button>
        </div>
      </div>

      <div className="about__preview">
        {aboutDetails.map((item, index) => {
          let classInvert = "";
          if (index % 2 !== 0) classInvert = "invert";

          return (
            <AboutCard key={item.title} extra={classInvert} details={item} />
          );
        })}
      </div>

      <div className="about__direct">
        <span className="about__direct_title">About us</span>
        <h2 className="heading__secondary">
          Cozy Vibes <br /> Book now
        </h2>
        <p className="about__direct_text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>

        <Button className="btn btn__main btn__book_room">Book room now</Button>
      </div>
    </>
  );
};

export default Home;