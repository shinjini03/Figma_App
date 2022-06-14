import "./css/LeftCol.css";

export const LeftCol = () => {
  return (
    <div className="left-col-div">
      <div className="nav-bar-div">
        <div className="nav-button-active-state">
          <div className="rectangle-div" />
          <div className="frame-div">
            <img
              className="project-icon"
              alt=""
              src="dashboard-black-24dp-1-1.svg"
            />
            <div className="dashboard-div">Dashboard</div>
          </div>
        </div>
        <div className="nav-button-active-state1">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img className="project-icon" alt="" src="project.svg" />
            <div className="dashboard-div1">Project</div>
          </div>
        </div>
        <div className="nav-button-active-state2">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img className="project-icon" alt="" src="apartment.svg" />
            <div className="dashboard-div1">Properties</div>
          </div>
        </div>
        <div className="nav-button-active-state1">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img className="project-icon" alt="" src="calender.svg" />
            <div className="dashboard-div1">Calender</div>
          </div>
        </div>
        <div className="nav-button-active-state1">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img className="project-icon" alt="" src="message.svg" />
            <div className="dashboard-div1">Messages</div>
          </div>
          <div className="frame-div5">
            <div className="div">5</div>
          </div>
        </div>
        <div className="nav-button-active-state1">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img
              className="project-icon"
              alt=""
              src="notifications-active-black-24dp-1.svg"
            />
            <div className="dashboard-div1">Notifications</div>
          </div>
          <div className="frame-div5">
            <div className="div">5</div>
          </div>
        </div>
        <div className="nav-button-active-state1">
          <div className="rectangle-div1" />
          <div className="frame-div">
            <img
              className="project-icon"
              alt=""
              src="call-black-24dp-1-1.svg"
            />
            <div className="dashboard-div1">Contacts</div>
          </div>
        </div>
      </div>
      <div className="nav-button-active-state7">
        <div className="rectangle-div1" />
        <div className="frame-div">
          <img
            className="project-icon"
            alt=""
            src="ads-click-black-24dp-1.svg"
          />
          <div className="dashboard-div1">Promotions</div>
        </div>
      </div>
      <div className="promotions-div">Promotions</div>
    </div>
  );
};
