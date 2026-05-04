import "./PopUpStep1.scss";
import "../PopUpSteps.scss";

const PopUpStep1: React.FC = () => {
  return (
    <div className="donation-pop-up-step-1">
      <h3>make your donation</h3>
      <div className="choose-dontation-container">
        <h4>Donation Information:</h4>
        <hr />
        <div className="choose-donation-amount">
          <div className="amount-box">
            <h5>
              <span>*</span>Choose your donation amount:
            </h5>
            <div>
              <button value="10">$10</button>
              <button value="20">$20</button>
              <button value="30">$30</button>
              <button value="50">$50</button>
              <button value="80">$80</button>
              <button value="100">$100</button>
            </div>
          </div>
          <div className="other-amount">
            <label htmlFor="amount">Other amount</label>
            <input type="text" id="amount" autoComplete="off" />
            <br />
            <p id="err-message-amount" className="hidden">
              Other amount value should be only number
            </p>
          </div>
          <div className="select-container">
            <label htmlFor="pet">htmlFor special pet</label>
            <select aria-placeholder="name" name="pet" required id="pet">
              <option defaultValue="" hidden>
                Choose your favourite
              </option>
            </select>
            <img
              src="./images/donation-pop-up/arrow-down.png"
              alt="down arrow"
              className="select-arrow"
            />
          </div>
          <p className="err-msg step-1 hidden">
            Something went wrong, refresh the page
          </p>
          <div className="gift-checkbox">
            <input id="gift" type="checkbox" />
            <label htmlFor="gift">Make this a monthly recurring gift</label>
          </div>
        </div>
      </div>
      <div className="next-steps">
        <svg
          width="50"
          height="10"
          viewBox="0 0 50 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_38782_9082)">
            <circle
              className="active"
              cx="5"
              cy="5"
              r="4.5"
              fill=""
              stroke="#00A092"
            />
            <circle cx="25" cy="5" r="4.5" fill="white" stroke="#00A092" />
            <circle cx="45" cy="5" r="4.5" fill="white" stroke="#00A092" />
          </g>
          <defs>
            <clipPath id="clip0_38782_9082">
              <rect width="50" height="10" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <button disabled className="btn-next">
          next
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PopUpStep1;
