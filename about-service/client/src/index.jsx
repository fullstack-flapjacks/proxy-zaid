import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import bluebird from 'bluebird';
import Description from './components/Description.jsx';
import LeftAbout from './components/LeftAbout.jsx'
import Maps from './components/Map.jsx';
import Ratings from './components/Ratings.jsx';
import RightAbout from './components/RightAbout.jsx';
import Title from './components/Title.jsx';
import TopTags from './components/TopTags.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}, 
      isLoading: true,
      readmore: false //readmore button not toggled
    };
    //this will be the object that will be taken from our database
    //this state will be passed to each of the child components so they can access 
    //each of the properties that are within the parent's stateful object
  }

  //create an onload search for a random item to render to the page since this component 
  //does not a specified search or anything for a specific item at the moment and is completely
  //reliant on the search component for all rendering of information

  //this will generate a random id number between 1-200 and will render the page initially
  randomSearch() {
    let randomId = Math.floor(Math.random() * (200 - 1)) + 1;
    let path = window.location.pathname;
    let id = path.split('/');
    //this axios request will send a concurrent request to the server to get
    //information for both the about and location sections
    // axios.all([this.getInformation(randomId), this.getLocation(randomId)])
    //   .then(axios.spread((information, location) => {
    //     console.log(information, location);
    //   }));
    this.getInformation(parseInt(id[2]));
  }

  //send GET request to get the about information for the restaurant 
  getInformation(restaurant_id) {
    axios.get(`http://localhost:1128/r/${restaurant_id}/about`)
    .then((response) => {
      console.log(response);
      this.setState({
        restaurant: response.data,
        isLoading: false, 
      });
      // console.log('this console log is from within the axios request success', this.state)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  //send GET request to get the location coordinates for the restaurant
  // getLocation(restaurant_id) {
  //   axios.get(`/restaurant/${restaurant_id}/location`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  //use native Component Will Mount to invoke the randomSearch function above before rendering
  componentWillMount() {
    this.randomSearch();
  }

  //will rerender the description when clicked
  readMore() {
    if (this.state.readmore === false) {
      this.setState(prevState => ({
        readmore: !prevState.readmore
      }));
    } 
  }

  //will rerender the description when clicked 
  readLess() {
    if (this.state.readmore === true) {
      this.setState(prevState => ({
        readmore: !prevState.readmore
      }));
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>This Page Is Currently Loading</h1>
        </div>
      )
    } else {
      return (
        <div class="about-area">
          <Title restaurant={this.state.restaurant}/>
          <Ratings restaurant={this.state.restaurant} />
          <TopTags restaurant={this.state.restaurant}/>
          <Description restaurant={this.state.restaurant} readMore={this.readMore.bind(this)} readLess={this.readLess.bind(this)} toggled={this.state.readmore}/>
          <div>
            <table style={{marginTop: '15px', marginBottom: '50px', marginRight: '200px', marginLeft: '30px'}}>
              <tbody>
                <tr>
                  <td style={{width: '200px'}}><LeftAbout restaurant={this.state.restaurant}/></td>
                  <td valign="top" className="right-about"><Maps restaurant={this.state.restaurant}/><RightAbout restaurant={this.state.restaurant}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
      )
    }
  }
}
ReactDOM.render(<About />, document.getElementById('about'));
