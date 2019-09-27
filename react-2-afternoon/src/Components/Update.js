import React, {Component} from "react";
import data from '../data'

class Update extends Component {

  constructor(){
    super()

    this.state = {
      index: 0
    }
  }

  handleNext = () => {
      console.log(this.state.index)
      if(this.state.index >= 24){
        console.log(this.state.index)
        this.setState({index: this.state.index})
      } else { console.log(this.state.index)
      this.setState({index: this.state.index + 1})
      }
      console.log(this.state.index)
  }

  handlePrevious = () => {
    
      this.setState({ index: this.state.index - 1 })
    
    if(this.state.index <= 0){
        this.setState({index: this.state.index })
        
      } 
  }
  

  render() {
    console.log(data)
    return(
      <div className="update">       
        <div className="id-number">{data[this.state.index].id}/25</div>
            <div className="name">
                <div className="first-name">{`${data[this.state.index].name.first} ${data[this.state.index].name.last}` }</div>
             </div>
             <br/>
             <div className="city-country">
                 <span>From: &nbsp; </span>
                <div className="city">{data[this.state.index].city}, </div>
                <div className="country">{data[this.state.index].country}</div>
                
            </div>
            
            <div className="job-title">
                <span>Job Title: &nbsp;</span>
                <div className="title">{data[this.state.index].title}</div>
            </div>
            <div className="employer-company">
                <span>Employer: &nbsp;</span>
                <div className="employer"> {data[this.state.index].employer}</div>
            </div>   
            <div className="favorite-movies">
                <br/>
                <span>Favorite Movies:</span>
                <div className="favorite-movies-one">1. {data[this.state.index].favoriteMovies[0]}</div>
                <div className="favorite-movies-two">2. {data[this.state.index].favoriteMovies[1]}</div>
                <div className="favorite-movies-three">3. {data[this.state.index].favoriteMovies[2]}</div>
            </div>
            <section className="button-bar">
                <button className="white-buttons" onClick={() => this.handlePrevious()}> &lt; Previous</button>
                    <div className="blue-buttons"> 
                        <button id="edit-button">Edit</button>
                        <button id="delete-button">Delete</button>
                        <button id="new-button">New</button>
                    </div>
                <button className="white-buttons" onClick={() => this.handleNext()}> Next &gt;</button>
        </section>
      </div>
    )
  }

}

export default Update