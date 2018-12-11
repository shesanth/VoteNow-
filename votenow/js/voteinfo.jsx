import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class VoteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		  visible: [],
		  contests: [{candidates: [{}]}],
		  election: {},
		  pollingLocations: [{address: {}}],
		  state: [],
		  empty: true,
    };
    this.updateVisible = this.updateVisible.bind(this);
  }
  //updates array of what races are displaying candidates - definitely an easier way to do this
  updateVisible(arr, i) {
	arr[i] = !this.state.visible[i];
        this.setState({ visible: arr});
	return arr
  }

  componentDidMount() {
    fetch(this.props.url, {credentials: 'same-origin'})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then((data) => {
        this.setState(data);
	let arr = Array.apply(null, data.contests.length).map(Number.prototype.valueOf,0);
	this.setState(visible: arr);
      })
      .catch((error) => console.log(error));
  }

  createRaces(contests: [{candidate: []}]) {
    let Races = []
    for (let i = 0; i < contests.length; i++) {
      if(contests[i].office == undefined){
	return Races
      }
      Races.push(<h4> {contests[i].office}: </h4>);

      let candidates = []
      for (let j = 0; j < contests[i].candidates.length; j++) {
        candidates.push(<p> {contests[i].candidates[j].party} {contests[i].candidates[j].party ? ": ": ""} {contests[i].candidates[j].name}</p>)
      }
      //make a button that displays candidates if you click on it
      Races.push(<div><input type="submit" value="View/hide Candidates" onClick={() => this.updateVisible(this.state.visible, i)} />
                { this.state.visible[i] ? candidates : null }</div>)
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
    var empty = this.state.empty;
    console.log(empty);
    return(
    <div>
    {empty ? (
    		<body>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<h1 style= {{ textAlign:"center" , width:"500px", marginLeft: "380px", fontSize: "56px", fontFamily: "Arial, Helvetica, sans-serif"}}>Oops!</h1>
			<p style={{ textAlign:"center", width:"500px", marginLeft: "380px", fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif"}}>There is no upcoming election, so we don't have any information to show you. 
				However, if you would like more information about your current representatives, head back to our home page, enter your address again, and press the "Get Current Reps" button. </p>
			</body>
      ) : (
      <div style={{ display:"block", marginLeft: "38%", marginRight: "20%", marginBottom: "-8%", width:"50%"}}>
	<h2> Based on your address: </h2>
	<h4> Your nearest polling station is: </h4>
	<p>{address.locationName}<br /> {address.line1} <br />
	{address.city}, {address.state}, {address.zip}</p>

	<h4> When you can vote: </h4>
	<p> {this.state.pollingLocations[0].pollingHours} </p>

	<h3> The local election Races include: </h3>
	{this.createRaces(contests)}
	</div>
        
      )}
	</div>

    );

  }
}

// VoteInfo.propTypes = {
//   // url: PropTypes.string.isRequired,
// };

export default VoteInfo;