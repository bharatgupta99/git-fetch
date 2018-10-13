import React, { Component } from 'react';
import Card from './Card'

class CardList extends Component {
  render() {
    let cards = this.props.info.map(card => <Card name={card.name} avatar_url={card.avatar_url} company={card.company} followers={card.followers} following={card.following} key={card.name}/>)
    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
}

export default CardList;
