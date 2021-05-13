import bgImg from "../../assets/images/background.png"
import "./homepage.css"

function Homepage() {
  return (
    <div className="mainContainer">
      <img src={bgImg} className="img" />
        <p className="textField" >
          Find a code Bootcamp
        </p>
        <br />
        <p className="pageIntro">
          Find, rate and  read reviews on coding bootcamps
          </p>
        <div className="inputContainer">
          <div className="inputs">
          <input type="text" placeholder="Miles from" className="milesInput" />
          <input type="text" placeholder="Enter Zipcode" className="zipcodeInput" />
          <button className="btn" type="submit">Find Bootcamp</button>
          </div> 
        
        </div>
    </div>
  )
}

export default Homepage