import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from "./useResource";

export const UserInfo = ({ userId }) => {
  // const user = useCurrentUser();
  // const user = useUser(userId);
  const user = useResource(`/users/${userId}`);

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
