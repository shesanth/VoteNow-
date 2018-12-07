import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

var sstyle={
  
  backgroundImage: 'url("../static/images/repbg2.png")',
  backgroundColor: "#89D0D0",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" }


class RepInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: [],
		  offices: [{officialIndices: []}],
      officials: [{urls: [""]}],
    };
    this.updateVisible = this.updateVisible.bind(this);
  }

  //updates array of what offices are displaying candidates - definitely an easier way to do this
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
        var arr = new Array(data.offices.length).fill(0);
      	this.setState({ visible: arr});
      })
      .catch((error) => console.log(error));
  }

  RepInfo() {
    let officesArr = []
    for (let i = 0; i < this.state.offices.length; i++) {
      if(this.state.offices[i].name == undefined){
	      return officesArr
      }
      //officesArr.push(<h4> {contests[i].office}: </h4>);
      let officials = []
      for (let j = this.state.offices[i].officialIndices[0]; j <= this.state.offices[i].officialIndices[this.state.offices[i].officialIndices.length-1]; j++) {
        officials.push(<div style={{marginLeft: "4%", fontFamily: "Arial, Helvetica, sans-serif"}}> {this.state.officials[j].name} ({this.state.officials[j].party})</div>)
        if(!(this.state.officials[j].photoUrl == undefined)){
          officials.push(<img style={{  marginLeft: "10%", borderRadius: "12px",}} src= {this.state.officials[j].photoUrl} height="140px"/>)
        }

        if(!(this.state.officials[j].channels == undefined)){
          for (let a = 0; a < this.state.officials[j].channels.length; a++){
            officials.push(<div style={{ marginLeft: "4%", fontFamily: "Arial, Helvetica, sans-serif"}}>{this.state.officials[j].channels[a].type}: {this.state.officials[j].channels[a].id} </div>)
          }
        }
        if(!(this.state.officials[j].urls == undefined)){
          officials.push( <div style={{marginLeft: "4%", fontFamily: "Arial, Helvetica, sans-serif"}}>website: {this.state.officials[j].urls[0]} <br/><br/></div>)
        }
        else {
          officials.push(<div style={{marginLeft: "4%", fontFamily: "Arial, Helvetica, sans-serif"}}> website: none <br/> <br/></div>)
        }
      }
      //make a button that displays candidates if you click on it
      officesArr.push(<div><input style={{
      		display: "inline",      
            backgroundColor: "white",
            borderColor: "grey",
            color: "black",
            textAlign: "center",
            textDecoration: "none",
            padding: "10px 24px",
            display: "block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "12px",
        }}type="submit" value= {this.state.offices[i].name} onClick={() => this.updateVisible(this.state.visible, i)} />
                { this.state.visible[i] ? officials : null }</div>)
    }

    return officesArr
  }

  render() {
    console.log(this.state);
    var offices = []
    offices = this.state.offices;
    var officials = []
    officials = this.state.officials;
    console.log(officials);
    console.log(offices);

    return(

    <body style = { sstyle } >
    <br/>
	<div style={{ display:"block", marginLeft: "38%", marginRight: "20%", marginBottom: "-8%", width:"50%"}}>
	<h2 style={{marginLeft: "-45%", textAlign:"center", fontFamily: "Arial, Helvetica, sans-serif"}}> Based on your registered address: </h2>
	<h4 style={{marginLeft: "-45%", textAlign:"center",fontFamily: "Arial, Helvetica, sans-serif"}}> Your elected officials are: </h4>
  {this.RepInfo()}
  </div>
  </body>
    );

  }
}

export default RepInfo;