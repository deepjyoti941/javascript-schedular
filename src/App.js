import React, {Component} from 'react';
import logo from './logo.svg';
import {ScheduleTable} from "./components";
import * as Helpers from "./helpers";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobileNumber: '',
      text: '',
      time: '',
      scheduleList: []
    };
    this.timer = 0;
    this.startTimer.bind(this)();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(() => {
        var now = new Date();
        if (this.state.scheduleList[now.toString()])
          this.deleteRow(now.toString())
      }, 1000);
    }
  }

  deleteRow(item, callback) {
    delete this.state.scheduleList[item];
    this.setState({})
  }

  handleChange(value, type) {
    let obj = {};
    obj[type] = value;
    this.setState({
      ...obj
    });
  }

  handleSubmit(event) {
    const {name, mobileNumber, time} = this.state;

    if(!name && !mobileNumber && !time) {
      alert('please fill the form');
      return;
    }

    if (!Helpers.mobileNumberValidation(mobileNumber)) {
      alert('please fill correct format for mobile');
      return;
    }

    if (!Helpers.timeValidation(time)) {
      alert('time should be in seconds and numeric');
      return;
    }

    if (!Helpers.nameValidation(name)) {
      alert('name should be in alphabats [a-z]');
      return;
    }

    let timeStamp = new Date(),
      newObj = {};
    timeStamp = new Date(timeStamp.getTime() + 1000 * this.state.time)
    newObj[timeStamp.toString()] = this.state;
    this.setState({scheduleList: Object.assign({}, this.state.scheduleList, newObj)})
    event.preventDefault();
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Javascript schedular built with reactjs</h1>
      </header>
      <div className="row" style={{padding: 20}}>
        <div className="col-sm-6">
          <div className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={(evt) => this.handleChange(evt.target.value, 'name')}/> {/* <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" /> */}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Mobile number" value={this.state.mobileNumber} onChange={(evt) => this.handleChange(evt.target.value, 'mobileNumber')}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="time" value={this.state.time} onChange={(evt) => this.handleChange(evt.target.value, 'time')}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <textarea className="form-control" placeholder="description" value={this.state.text} onChange={(evt) => this.handleChange(evt.target.value, 'text')}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button onClick={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-sm-6">
          <ScheduleTable list={Object.values(this.state.scheduleList)}/>
        </div>
      </div>
    </div>);
  }
}

export default App;
