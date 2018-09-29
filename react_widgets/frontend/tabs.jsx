import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
    };
    this.clickOne = this.clickOne.bind(this);
    this.clickTwo = this.clickTwo.bind(this);
    this.clickThree = this.clickThree.bind(this);
  }

  clickOne(e){
    this.setState({index: 0});
  }

  clickTwo(e){
    this.setState({index: 1});
  }

  clickThree(e){
    this.setState({index: 2});
  }

  render() {
    return (
      <div>
        <ul id="tabs">
          <li><h1 onClick={this.clickOne}>one</h1></li>
          <li><h1 onClick={this.clickTwo}>two</h1></li>
          <li><h1 onClick={this.clickThree}>three</h1></li>
        </ul>
        <article>{this.props.contents[this.state.index]}</article>
      </div>
    );
  }
}

export default Tabs;
