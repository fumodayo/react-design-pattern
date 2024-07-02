import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get(resourceUrl);
    //   setResource(response.data);
    // })();
    console.log("path", resourceUrl);
    const dataSample = {
      name: "fumodayo",
      age: 27,
      hairColor: "black",
      hobbies: ["golden", "pc"],
    };
    setResource(dataSample);
  }, [resourceUrl]);

  return resource;
};
