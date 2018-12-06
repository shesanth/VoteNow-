import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import VoteInfo from './voteinfo'

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
    };
    this.getInfo = this.getInfo.bind(this)
    this.street_addrChange = this.street_addrChange.bind(this)
    this.cityChange = this.cityChange.bind(this)
    this.stateChange = this.stateChange.bind(this)
    this.zipChange = this.zipChange.bind(this)
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

  
  render() {
    if (!this.state.show_info) {
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
        <div style={{ 
          display:"block", 
          fontFamily: "Arial, Helvetica, sans-serif", 
          color: "#FFFFFF", 
          fontSize: "18px", 
          marginTop: "10%", 
          marginLeft: "44%", 
          marginRight: "20%", 
          marginBottom: "-8%", 
          width:"50%"}}>
        <table>
        <tbody>
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
        <br/>
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
        }} type="submit" value="Submit" onClick={this.getInfo}/> 
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        <div style={{ 
          display:"block", 
          marginTop: "10%", 
          marginLeft: "31%", 
          marginRight: "20%", 
          marginBottom: "-8%", 
          width:"50%"}}>
        <h4 style={{ 
          color: "#FFFFFF", 
          fontSize: "18px", 
          fontFamily: "Arial, Helvetica, sans-serif"}}>Please enter the address you used when registering to vote.</h4>
        </div>
        </body>
        );
      }
    else {
      return(<div><VoteInfo url={this.state.full_url}/></div>)
    }
  }
}

// AddressPage.propTypes = {
//   url: AddressPage.string.isRequired,
// };

export default AddressPage;
