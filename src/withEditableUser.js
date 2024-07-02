import axios from "axios";
import React, { useEffect, useState } from "react";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      //   (async () => {
      //     const response = await axios.get(`/users/${userId}`);
      //     setOriginalUser(response.data);
      //     setUser(response.data);
      //   })();
      const sampleData = {
        name: "fumodayo",
        age: 29,
        hairColor: "black",
      };
      setOriginalUser(sampleData);
      setUser(sampleData);
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      //   const response = await axios.post(`/user/${userId}`, { user });
      //   setOriginalUser(response.data);
      //   setUser(response.data);
      console.log("User changed successfully", user);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
