import "./card-about.style.scss";

const AboutCard = ({ details, extra = "" }) => {
  const mouseOverEffecthandler = (e, over) => {
    const parentEl = e.target.closest(".about__card_container");
    const detaisDiv = parentEl.querySelector(".about__card_details");
    if (over) {
      return detaisDiv.classList.add("focus");
    }
    return detaisDiv.classList.remove("focus");
  };
  return (
    <div
      className={`about__card_container ${extra}`}
      onMouseEnter={(e) => mouseOverEffecthandler(e, "over")}
      onMouseLeave={mouseOverEffecthandler}
    >
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
