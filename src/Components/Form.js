import React, { Component } from 'react';

class Form extends Component {
  state = {
      username: '',
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.submitHandler(this.state.username);
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <form onSubmit={this.handleSubmit} style={{margin: '1.25em'}}>
            <input  value={this.state.username} onChange={e => this.setState({username: e.target.value})} style={{fontSize: '1em'}} type="text" placeholder="github username.." required/>
            <button style={{fontSize: '1em'}} type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
