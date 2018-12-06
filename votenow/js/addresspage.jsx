import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import VoteInfo from './voteinfo'
import RepInfo from './repinfo'

var sstyle={
  width: "1240px",
  height: "565px",
  backgroundImage: 'url("../static/images/americanflagtr.png")'}

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
        <div style={{ display:"block", marginLeft: "38%", marginRight: "20%", marginBottom: "-8%", width:"50%"}}>
        <img src="../static/images/votenow.jpg"/>
        <br/>
        <h4>Please enter the address you used when registering to vote.</h4>
        </div>
        <div style={{ display:"block", marginTop: "10%", marginLeft: "38%", marginRight: "20%", marginBottom: "-8%", width:"50%"}}>
        <table>
        <tbody>
        <tr>
        <td>Street Address:</td>
        <td><input type="text" name="street_addr" value={this.state.street_addr} onChange={this.street_addrChange}/></td>
        </tr>
        <tr>
        <td>City:</td>
        <td><input type="text" name="city" value={this.state.city} onChange={this.cityChange}/></td>
        </tr>
        <tr>
        <td>State:</td>
        <td><input type="text" name="state" value={this.state.state} onChange={this.stateChange}/></td>
        </tr>
        <tr>
        <td>Zip Code:</td>
        <td><input type="text" name="zip" value={this.state.zip} onChange={this.zipChange}/></td>
        </tr>
        <tr>
        <td>
        <input type="submit" value="Submit vote info" onClick={this.getInfo}/>
        </td>
        <td>
        <input type="submit" value="Rep Info" onClick={this.getRepInfo}/>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
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
