import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  tick() {
      this.setState({
          time: new Date().toLocaleString()
      })
  }
  componentWillMount(){
      clearInterval(this.intervalID)
  }
  handleClick() {
    this.props.clickHandler();
  }
  render() {
    return (
      <div className="">
        <button className="btn btn-primary" onClick={this.handleClick}>{!this.props.clockState? "Show Clock" : "Hide Clock"}</button>
        {this.props.clockState? (<p>{this.state.time}</p>) : ""}
      </div>
    );
  }
}

export default Clock;
