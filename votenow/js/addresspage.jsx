import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import VoteInfo from './voteinfo'

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
       <div>
        <br>
        <img src="../static/images/votenow.jpg" alt = votenowlogo style="display:block; margin-left: 37%; margin-right: 20%; margin-bottom: -8%; width:50%;"/>
        <p style="text-align: center">Please enter the address you used to register to vote.</p>
        <table align="center">
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
        <br>
        <div>
        <input type="submit" value="Submit" onClick={this.getInfo}/> 
        </div>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
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
