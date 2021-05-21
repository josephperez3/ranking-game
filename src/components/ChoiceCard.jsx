const ChoiceCard = ({ position, imgSrc }) => {
  return (
    <div className={`Choice-card ${position}`}>
      <img src={imgSrc} alt="contender" />
      <button>This One</button>
    </div>
  );
};

export default ChoiceCard;
