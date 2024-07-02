import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";

// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, "12345");

function App() {
  return (
    <>
      {/* <UserInfoWrapped a={1} b="Hello" c={{ name: "fumodayo" }} /> */}
      {/* <UserInfoWithLoader /> */}
      <UserInfoForm />
    </>
  );
}

export default App;
