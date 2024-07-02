import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get("/current-user");
    //   setUser(response.data);
    // })();
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
