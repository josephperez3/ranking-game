const ChoiceCard = ({ id, classes, imgSrc, flip }) => {
  const handleClick = () => {
    flip(id);
  };

  return (
    <div className={`Choice-card ${classes}`}>
      <img src={imgSrc} alt="contender"></img>
      <button onClick={handleClick}>This One</button>
    </div>
  );
};

export default ChoiceCard;
