import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
/*import axios from 'axios';
import CamperList from './components/camperList'
// import CamperListItem from "./components/camperListItem";
// import CamperList from './components/camperList';

class App extends Component {
  constructor(props){
    super(props);
    this.changeView = this.changeView.bind(this);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    };
  }
  componentWillMount() {
    // fetching Api once 
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread(function(recentCampers, allTimeCampers){
        this.setState({ recentCampers: recentCampers, allTimeCampers: allTimeCampers });
      }));
  }
  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }
  changeView(currentView) {
    this.setState =[ {currentView}];
  }
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="App-logo"/>
        <h1>{this.state.currentView}</h1>
        <button onClick={this.changeView('recentCampers')} className="btn btn-primary">Recent Campers</button>
        <button onClick={this.changeView('allTimeCampers')} className="btn btn-primary">All Time Campers</button>
     
     </div>
    );
  }
}

export default App;*/


