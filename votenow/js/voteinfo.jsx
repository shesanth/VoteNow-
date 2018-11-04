import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class VoteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
    fetch(this.props.url, {credentials: 'same-origin'})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then((data) => {
        this.setState(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }


  render() {
    console.log(this.props.url);
    return(<p>Hello World!</p>);
  }
}

// VoteInfo.propTypes = {
//   // url: PropTypes.string.isRequired,
// };

export default VoteInfo;