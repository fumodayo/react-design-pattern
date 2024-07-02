import axios from "axios";
import React, { useEffect, useState } from "react";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      //   (async () => {
      //     const response = await axios.get(resourcePath);
      //     setOriginalData(response.data);
      //     setData(response.data);
      //   })();
      console.log("resourcePath", resourcePath);
      const sampleData = {
        name: "fumodayo",
        age: 29,
        hairColor: "black",
      };
      setOriginalData(sampleData);
      setData(sampleData);
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      //   const response = await axios.post(resourcePath, { [resourceName]: data });
      //   setOriginalData(response.data);
      //   setData(response.data);
      console.log("resourcePath", resourcePath, "data", {
        [resourceName]: data,
      });
      
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
