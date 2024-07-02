import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from "./useResource";
import { useDataResource } from "./useDataResource";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const localStorageResource = (key) => () => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  // const user = useCurrentUser();
  // const user = useUser(userId);
  // const user = useResource(`/users/${userId}`);
  const user = useDataResource(serverResource(`/users/${userId}`));
  const message = useDataResource(localStorageResource("message"));
  console.log("message", message);

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
