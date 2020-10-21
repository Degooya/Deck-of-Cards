/** @class  Deck of cards*/
export default class Deck {
  /**
   * Creates an instance of a Deck.
   *
   * @constructor
   * @author: Robert Rieser
   */
  constructor() {
    this.deck = this.initDeck();
    this.deck = this.shuffleDeck(this.deck);
  }

  /**
   * Creates a deck of 52 Cards.
   */
  initDeck() {
    let _deck = [];

    const suits = ["♣", "♦", "♥", "♠"];
    const values = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (let suit of suits) {
      for (let value of values) {
        _deck.push({ suit, value });
      }
    }
    return _deck;
  }

  /**
   * We are using the Fisher-Yates Shuffle algorithm, which gives as a non-biased shuffle
   * 
   * @param _deck the deck
   * @return the shuffled deck
   */
  shuffleDeck(_deck) {
    let m = _deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      [_deck[m], _deck[i]] = [_deck[i], _deck[m]];
    }
    return _deck;
  }

  /**
   * Returns the deck
   *
   * @return a card in form as an object
   */
  dealCard() {
    if (this.deck.length == 0) throw new Error("The deck is empty");
    else return this.deck.pop();
  }

  /**
   * Returns the deck
   *
   * @return the deck as an array of objects
   */
  getDeck() {
    return this.deck;
  }
}
