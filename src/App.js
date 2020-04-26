import React, {Component} from "react";
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: [],
          gender: "",
          location: "",
          vegetarian: false,
          kosher: false,
          peanutAllergy: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
      const { name, value, type, checked } = event.target 
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit (event) {
      alert(    "Name: " + this.state.firstName + " " + this.state.lastName + "\n" +
                "Age: " + this.state.age + "\n" +
                "Gender: " + this.state.gender + "\n" +
                "Destination: " + this.state.location + "\n" +
                "Vegetarian?" + " " + this.state.vegetarian + "\n" + 
                "Kosher?" + " " + this.state.kosher + "\n" + 
                "Peanut Allergy?" + " " + this.state.peanutAllergy);
    }
    
    render() {
        return (
            <main>
                  <form>

                <h3><strong>Passenger Information</strong></h3>
                    <input 
                    type="text"
                    value={this.state.firstName}
                    placeholder="First Name" 
                    name="firstName" 
                    onChange={this.handleChange}/><br />
                    <input 
                    type="text"
                    value={this.state.lastName}
                    placeholder="Last Name" 
                    name="lastName" 
                    onChange={this.handleChange}/><br />

                    <input 
                    type="number"
                    value={this.state.age}
                    placeholder="Age"
                    name="age"
                    onChange={this.handleChange}
                     /><br />

                <h3><strong>Gender</strong></h3>
                  <label>
                    <input 
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={this.state.gender === "Female"}
                    onChange={this.handleChange}/>
                  </label> Female
                    <br />

                  <label>
                    <input 
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={this.state.gender === "Male"}
                    onChange={this.handleChange}/>
                  </label> Male
                    <br />

                <h3><strong>Destination</strong></h3>
                 <label> 
                  <select 
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                  placeholder="Location">
                    <option value="">--Please choose a destination--</option>
                    <option value="London">London</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Washington">Washington</option>
                  </select>
                    <br />

                </label>
              <h3><strong>Dietary Restrictions</strong></h3>      
                <label>
                  <input 
                  type="checkbox"
                  name="vegetarian"
                  checked={this.state.vegetarian}
                  onChange={this.handleChange}/>
                </label> Vegetarian
                    <br />

                <label>
                  <input 
                  type="checkbox"
                  name="kosher"
                  checked={this.state.kosher}
                  onChange={this.handleChange}/>
                </label> Kosher
                    <br />

                <label>
                  <input 
                  type="checkbox"
                  name="peanutAllergy"
                  checked={this.state.peanutAllergy}
                  onChange={this.handleChange}/>
                </label> Peanut Allergy
                    <br />
                    
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p><strong>Your name:</strong> {this.state.firstName} {this.state.lastName}</p>
                <p><strong>Your age:</strong> {this.state.age}</p>
                <p><strong>Your gender:</strong> {this.state.gender}</p>
                <p><strong>Your destination:</strong> {this.state.location}</p>
                <p>
                    <strong>Your dietary restrictions:</strong> <br/>
                    {this.state.vegetarian ? "Vegetarian" : ""} <br/>
                    {this.state.kosher ? "Kosher" : ""} <br/>
                    {this.state.peanutAllergy ? "Peanut Allergy" : ""}
                    
                </p>
            </main>
        )
    }
}

export default App