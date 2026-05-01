import "./InitialPopUp.scss";

const InitialPopUp: React.FC = () => {
  return (
    <div className="initial-pop-up">
      <div className="image-container">
        <img
          src="./images/donation-pop-up/hand-touching.png"
          alt="animal and human hand-touching"
        />
        <button className="btn-cancel">
          <img src="./images/donation-pop-up/x.png" alt="cancel" />
        </button>
      </div>
      <div className="donation-amount-container">
        <h2>together we care, save and protect!</h2>
        <p>
          Your most generous gift not only cares for countless animals, but it
          also offers hope and a vital lifeline to the world’s most endangered
          wildlife relying on us to survive.
        </p>
        <div className="donation-amount">
          <button>$20</button>
          <button>$30</button>
          <button>$50</button>
          <button>$80</button>
          <button>$100</button>
          <button className="btn-other-amount">other amount</button>
        </div>
      </div>
    </div>
  );
};

export default InitialPopUp;
