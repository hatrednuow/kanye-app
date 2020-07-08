import React, { Component } from "react";

class MyQuotes extends Component {
  createTasks(newQuoteitems) {
    return <li key={newQuoteitems.key}>{newQuoteitems.text}</li>
  }

  render() {
    var quoteLists = this.props.entries;
    var quoteItems = quoteLists.map(this.createTasks);

    return (
      <ol className="theList">
          {quoteItems}
      </ol>
    );
  }
};

export default MyQuotes;
