import React, {Component} from 'react';
import MyQuotes from "./MyQuotes";

class Myquote extends Component{
  constructor(props) {
  super(props);
  this.state = {
    myQuote: []
    };

  this.addQuote = this.addQuote.bind(this);
  }

  addQuote(e) {
  if (this._inputElement.value !== "") {
    var newQuoteitem = {
      text: this._inputElement.value,
      key: Date.now()
    };
    this.setState((prevState) => {
      return {
        myQuote: prevState.myQuote.concat(newQuoteitem)
      };
    });
    this._inputElement.value = "";
  }
  console.log(this.state.myQuote);
  e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <h4> My Quotes </h4>
          <form onSubmit={this.addQuote}>
            <input ref={(a) => this._inputElement = a}
                  placeholder="Enter Your Quote">
            </input>
            <button type="submit">Add Quote</button>
          </form>
        </div>
        <MyQuotes entries={this.state.myQuote}/>
      </div>
    );
  }
}

export default  Myquote;
