import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class VoteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  // onComponentDidMount() {
  //   fetch(url)
  // }


  render() {
    console.log(this.props.url);
    return(<p>Hello World!</p>);
  }
}

VoteInfo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VoteInfo;