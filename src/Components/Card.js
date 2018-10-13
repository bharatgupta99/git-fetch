import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div style={{margin: '2em'}} >
        <img alt="Loading.." style={{width: '75px', verticalAlign: 'middle'}} src={this.props.avatar_url} />
        <div style={{display: 'inline-block', marginLeft: '1em' }} > 
            <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{this.props.name}</div>
            <div>{this.props.company}</div>
        </div>
        <div style={{display: 'inline-block', marginLeft: '3em'}}>
            <div><strong>{this.props.followers}</strong> Followers</div>
            <div><strong>{this.props.following}</strong> Following</div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Card;
