import axios from "axios";
import React, { useEffect, useState } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        // const response = await axios.get(`/users/${userId}`);
        // setUser(response.data);
        setUser({
          name: "Nguyen Van A",
          age: "28 years old",
          hair: "white",
          hobbies: ["pc", "gold"],
        });
      })();
    });

    return <Component {...props} user={user} />;
  };
};
