import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("functional component");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <h2>Profile component</h2>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Profile;
