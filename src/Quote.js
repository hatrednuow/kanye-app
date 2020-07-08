import React, {Component} from 'react';
import axios from 'axios';

class Quote extends Component{
  constructor(props){
    super(props);
    this.state = {
      quoteList: [],
      listQuotes: [],
      favQuotes: [],
      total: 0,
      show: "quotes",
    }
  }

  componentDidMount(){
    this.getNewQuote();
  }

  getNewQuote = () => {
    axios.get('https://api.kanye.rest')
    .then((response) => {
      let newQuote = this.state.quoteList.slice();
      newQuote.push(response.data.quote);
      console.log(newQuote);
      this.setState({quoteList: newQuote})
      this.setState({listQuotes: this.state.quoteList.reverse().slice(0, 1)})
      return axios.get('https://api.kanye.rest');
    })
    .catch((error) => {
      console.log(error.message)
    })
    this.setState({show: "quotes"});
  }

  addtoFav = (e, quote) => {
    e.preventDefault();

    let listQuotes = this.state.listQuotes;
    let toReplace = listQuotes.indexOf(quote);
    axios.get('https://api.kanye.rest')
    .then((response) => {
      listQuotes.splice(toReplace, 1, response.data.quote);
      this.setState({listQuotes: listQuotes})
    })

    let newQuote = this.state.favQuotes;
    newQuote.push(quote);
    this.setState({favQuotes: newQuote});
  }

  totalQuote = () => {
    this.setState({total: this.state.total + 1})
  }

  render(){
    return(
      <div>
        <h3>Kanye-West Quotes</h3>
        <div>
          {this.state.quoteList.length < this.state.total &&
            <p> Loading... </p>
          }
          {this.state.quoteList.length >= this.state.total && this.state.show === "quotes" &&
          <div>
            <div>
              {this.state.listQuotes.map((quote) =>
                <div>
                  <p key={this.state.listQuotes.indexOf(quote)}>
                                 {quote}
                  </p>
                  <button onClick={this.getNewQuote}>Get Quote</button>
                  <button onClick={(e) => this.addtoFav(e, quote)}>Add To Favorites</button>
                </div>
              )}
            </div>

              <div>
                {
                  this.state.favQuotes.length > 0 && <h4>Favorite Quotes</h4>
                }
                <ol>
                  {this.state.favQuotes.map((quote) =>
                    <li key={this.state.listQuotes.indexOf(quote)}>
                                   {quote}
                    </li>
                  )}
                </ol>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default  Quote;
