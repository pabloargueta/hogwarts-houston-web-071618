import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from './Hogs'
import hogData from '../porkers_data'
import Filter from './Filter'


class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogData
    }
  }


  filterStateSelection = () => {
    this.setState({
      hogs: hogData
    })
  }





  render() {
    return (
      <div className="App">
        < Nav />
        <Filter {...this.state} />
        < Hogs {...this.state} />
        <div>
          <p>**Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</p>
        </div>
      </div>
    )
  }
}

export default App;
