import "./css/AppBar.css";

export const AppBar = () => {
  return (
    <div className="app-bar-div">
      <div className="frame-div108">
        <div className="image-1-div" />
        <div className="logo-div">LOGO</div>
      </div>
      <div className="frame-div109">
        <img
          className="search-black-24dp-1-icon"
          alt=""
          src="search-black-24dp-1.svg"
        />
        <div className="search-for-projects">search for projects</div>
      </div>
      <div className="frame-div110">
        <div className="frame-div111">
          <img className="ellipse-icon22" alt="" src="ellipse-5@2x.png" />
          <div className="frame-div112">
            <div className="oliver-smith-div">Oliver Smith</div>
            <div className="vendor-div">Vendor</div>
          </div>
        </div>
        <img
          className="arrow-forward-ios-black-24dp-1-icon"
          alt=""
          src="arrow-forward-ios-black-24dp-1.svg"
        />
      </div>
    </div>
  );
};
