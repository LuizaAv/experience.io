import bgImg from "../../assets/images/background.png"
import "./homepage.css"

function  Homepage(){
    return(
        <div className ="mainContainer">
          <img src={bgImg} className="img"/>
        <div className="textField">
          Find a code Bootcamp
        </div>
          <br/>
        <div className="pageIntro">
          Find, rate and  read reviews on coding bootcamps
        </div>
        <div  className="inputContainer">
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