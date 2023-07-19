import "./service-card.style.scss";

const Service = ({ details }) => {
  return (
    <div className="service">
      <div className="service__icon">
        <span dangerouslySetInnerHTML={{ __html: details.icon }} />
      </div>
      <span className="service__name">{details.text}</span>
    </div>
  );
};

export default Service;
