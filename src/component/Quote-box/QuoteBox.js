import React, { Component } from "react";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      color: Math.floor(Math.random() * colors.length)
    };
  }

  loadNewQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        var fetchArr = data.quotes;

        let randomNum = Math.floor(Math.random() * fetchArr.length);

        this.setState({
          quotes: fetchArr[randomNum],
          color: Math.floor(Math.random() * colors.length)
        });
      });
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        var fetchArr = data.quotes;

        let randomNum = Math.floor(Math.random() * fetchArr.length);

        this.setState({
          quotes: fetchArr[randomNum]
        });
      });
  }

  render() {
    console.log(colors.length);

    return (
      <div className="d-flex justify-content-center">
        <div
          id="quote-box"
          className="my-5"
          style={{ color: `${colors[this.state.color]}` }}
        >
          <div className="text_box">
            <h4 id="text">{this.state.quotes.quote}</h4>
            <h4 id="author" className="mb-5 text-right my-4">
              - {this.state.quotes.author}
            </h4>
          </div>
          <div className="button_box d-flex">
            <div>
              <a
                href="https://twitter.com/intent/tweet"
                target="_black"
                className="btn"
                id="tweet-quote"
                style={{
                  backgroundColor: `${colors[this.state.color]}`,
                  color: "#ffffff"
                }}
              >
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
            <div className="ml-auto">
              <button
                id="new-quote"
                className="btn"
                onClick={this.loadNewQuote.bind(this)}
                style={{
                  backgroundColor: `${colors[this.state.color]}`,
                  color: "#ffffff"
                }}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
