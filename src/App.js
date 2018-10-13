import React, { Component } from 'react';
import CardList from './Components/CardList';
import Form from './Components/Form';
import axios from 'axios';

class App extends Component {
  
  state = {
    cards : [],
  }
  
  handleSubmit = (username) => {
    axios.get('https://api.github.com/users/' + username)
      .then(res => {
        this.setState(prevState => ({
          cards: prevState.cards.concat(res.data)
        })); 
      })
      .catch(error => alert("user node found \n" + error))
  }
  render() {
    return (
      <div className="App">
        <Form submitHandler={this.handleSubmit}/>
        <CardList info={this.state.cards}/>
      </div>
    );
  }
}

export default App;
