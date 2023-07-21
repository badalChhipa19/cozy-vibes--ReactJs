import "./card-about.style.scss";

const AboutCard = ({ details, extra = "" }) => {
  return (
    <div className={`about__card_container ${extra}`}>
      <div className="about__card_details">
        <div className="about__card_icon_box">
          <span
            className="about__card_icon"
            dangerouslySetInnerHTML={{ __html: details.icon }}
          />
        </div>
        <h3 className="heading__tertiary">{details.title}</h3>
        <span className="about__card_text">{details.description}</span>
      </div>
      <img
        src={details.image}
        alt="about detail"
        className="about__card_image"
      />
    </div>
  );
};

export default AboutCard;
