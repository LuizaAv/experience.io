import react from "react";
import "./homepage.css";

function  Homepage(){
    return (
        <div className ="mainContainer">
        <div className="textField">
          Find a code Bootcamp
        </div>
          <br/>
        <div className="pageIntro">
          Find, rate and  read reviews on coding bootcamps
        </div>
        <div>
          <input type="text"  placeholder="Miles from" className="milesInput"/>
          <input type="text"  placeholder="Enter Zipcode" className="zipcodeInput"/>
          <button  className="btn" type="submit">
            Find Bootcamps
          </button>
        </div>
      </div>
    )
}

export default Homepage