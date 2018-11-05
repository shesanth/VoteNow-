import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class VoteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	          open: false,
		  contests: [{candidates: [{}]}],
		  election: {},
		  pollingLocations: [{address: {}}],
		  state: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url, {credentials: 'same-origin'})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then((data) => {
        this.setState(data);
      })
      .catch((error) => console.log(error));
  }

  createRaces(contests: [{candidate: []}]) {
    let Races = []

    // Outer loop to create parent
    for (let i = 0; i < contests.length; i++) {
      if(contests[i].office == undefined){
	return Races
      }
      Races.push(<h4> {contests[i].office}: </h4>);
      Races.push(<p> Candidates:</p>);
      for (let j = 0; j < contests[i].candidates.length; j++) {
        Races.push(<p> {contests[i].candidates[j].party}:  
		{contests[i].candidates[j].name}</p>)
      }
    }
    return Races
  }


  render() {
    console.log(this.state);
    var address = {}
    address = this.state.pollingLocations[0].address;
    var contests = []
    contests = this.state.contests;
    console.log(address.locationName);
		
    return(
	<div>
	<h2> Based on your address: </h2>
	<h4> Your nearest polling station is: </h4>
	<p>{address.locationName}<br /> {address.line1} <br />
	{address.city}, {address.state}, {address.zip}</p>

	<h4> When you can vote: </h4>
	<p> {this.state.pollingLocations[0].pollingHours} </p>

	<h3> The local election Races include: </h3>
	{this.createRaces(contests)}
	</div>

    );

	
  }
}

// VoteInfo.propTypes = {
//   // url: PropTypes.string.isRequired,
// };

export default VoteInfo;