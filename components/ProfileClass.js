import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };

    console.log(" child Constructor ");
  }
  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("getting destroyed");
  }
  async componentDidMount() {
    //API Calls
    this.timer = setInterval(() => {
      console.log("Interval is running");
    }, 1000);
    console.log("exit child componentdidMount");
  }
  render() {
    console.log("child render ");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name:{this?.state?.userInfo[0]?.login}</h2>
      </div>
    );
  }
}
export default Profile;
