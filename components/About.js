import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  async componentDidMount() {
    // Best place for API calls

    console.log("Parent componentDidMoubt");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>I am trying to find the path </p>
        {/* <ProfileClassComponent name="child" /> */}
        {/* < ProfileClassComponent name="second child" /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}

export default About;
