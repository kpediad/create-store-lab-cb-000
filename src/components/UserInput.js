import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleOnChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleOnChangeHometown(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    //this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id});
    this.setState({
      username: '',
      hometown: ''
    });
  }


  render() {
    return(
      <div>
        user input
      </div>
    );
  }
};

export default UserInput;
