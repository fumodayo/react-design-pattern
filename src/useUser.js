import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get(`/users/${userId}`);
    //   setUser(response.data);
    // })();
    console.log("path", `/users/${userId}`);
    const dataSample = {
      name: "fumodayo",
      age: 27,
      hairColor: "black",
      hobbies: ["golden", "pc"],
    };
    setUser(dataSample);
  }, []);

  return user;
};
