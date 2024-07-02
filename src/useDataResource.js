import { useEffect, useState } from "react";

export const useDataResource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const result = await getResourceFunc();
    //   setResource(result);
    // })();

    console.log("function", getResourceFunc);
    const dataSample = {
      name: "fumodayo",
      age: 27,
      hairColor: "black",
      hobbies: ["golden", "pc"],
    };
    setResource(dataSample);
  }, [getResourceFunc]);

  return resource;
};
