const Notification = (props) => {
  //  Write your code here.
  const { text } = props;
  return <p className="para">{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="buttons-container">
      <div className="button-box1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="icon"
        />
        <Notification text="Information Message" />
      </div>

      <div className="button-box2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="icon"
        />
        <Notification text="Success Message" />
      </div>

      <div className="button-box3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="icon"
        />
        <Notification text="Wrong Message" />
      </div>

      <div className="button-box4">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="icon"
        />
        <Notification text="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
