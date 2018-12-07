import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import VoteInfo from './voteinfo'
import RepInfo from './repinfo'

var sstyle={
  width: "1240px",
  height: "560px",
  backgroundImage: 'url("../static/images/flag13.jpg")',
  backgroundColor: "#e6ffff",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" }

class AddressPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street_addr: "",
      city: "",
      state: "",
      zip: "",
      full_url: "",
      show_info: false,
      show_reps: false,
    };
    this.getInfo = this.getInfo.bind(this)
    this.street_addrChange = this.street_addrChange.bind(this)
    this.cityChange = this.cityChange.bind(this)
    this.stateChange = this.stateChange.bind(this)
    this.zipChange = this.zipChange.bind(this)
    this.getRepInfo = this.getRepInfo.bind(this)
  }


  street_addrChange(e) {
    this.setState({ street_addr: e.target.value });
  }

  cityChange(e) {
    this.setState({ city: e.target.value });
  }

  stateChange(e) {
    this.setState({ state: e.target.value });
  }

  zipChange(e) {
    this.setState({ zip: e.target.value });
  }

  getInfo() {
    console.log("getting here!!!");
    let url = this.props.url + "?address="+ this.state.street_addr + this.state.city + this.state.state + this.state.zip;
    this.setState({
      full_url: url,
      show_info: true,
    });
  }

  getRepInfo(){
    console.log("getting rep infooo!!!");
    let url = this.props.url + "?address="+ this.state.street_addr + this.state.city + this.state.state + this.state.zip;
    this.setState({
      full_url: url,
      show_reps: true,
    });
  }


  render() {
    if (!this.state.show_info && !this.state.show_reps) {
      return(
        <body style = { sstyle } >
        <div>
        <div style={{
          display:"block",
          marginLeft: "44%",
          marginRight: "20%",
          marginBottom: "-8%",
          width:"50%"}}>
        <br/>
        <br/>
        <img src="../static/images/votenow.jpg" height="140px" width="170px"/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <table>
        <tbody>
        <div style={{
          display:"block",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#FFFFFF",
          fontSize: "18px",
          marginTop: "10%",
          marginLeft: "159%",
          marginRight: "20%",
          marginBottom: "-8%",
          width:"50%"}}>
        <tr>
        <td><input type="text" name="street_addr" placeholder="Street Address" value={this.state.street_addr} onChange={this.street_addrChange}/></td>
        </tr>
        <tr>
        <td><input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.cityChange}/></td>
        </tr>
        <tr>
        <td><input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.stateChange}/></td>
        </tr>
        <tr>
        <td><input type="text" name="zip" placeholder="Zip Code" value={this.state.zip} onChange={this.zipChange}/></td>
        </tr>
        </div>
        <br/>
        <br/>
        <div style={{
          display: "inline",
          marginLeft: "136%"}}>
        <tr>
        <td>
        <input style={{      
            backgroundColor: "white",
            border: "none",
            color: "black",
            textAlign: "center",
            textDecoration: "none",
            padding: "10px 24px",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "12px",
        }} type="submit" value="Get Voting Info" onClick={this.getInfo}/>
        <input style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            textAlign: "center",
            textDecoration: "none",
            padding: "10px 24px",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "12px",
        }} type="submit" value="Get Current Reps" onClick={this.getRepInfo}/> 
        </td>
        </tr>
        </div>
        </tbody>
        </table>
        </div>
        <br/>
        <div style={{
          display:"block",
          marginTop: "5%",
          marginLeft: "27%",
          marginRight: "20%",
          marginBottom: "-8%",
          width:"50%"}}>
        <h4 style={{
          color: "#FFFFFF",
          fontSize: "18px",
          fontFamily: "Arial, Helvetica, sans-serif"}}>*To get voting information: Please enter the address you used when registering to vote.</h4>
        </div>
        </body>
        );
      }
    else if(this.state.show_info) {
      return(<div><VoteInfo url={this.state.full_url}/></div>)
    }
    else {
      return(<div><RepInfo url={this.state.full_url}/></div>)
    }
  }
}

// AddressPage.propTypes = {
//   url: AddressPage.string.isRequired,
// };

export default AddressPage;
