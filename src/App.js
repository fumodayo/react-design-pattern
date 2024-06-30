import { UncontrolledOnboardingFlows } from "./UncontrolledOnboardingFlows";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "fumodayo" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 82 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "black" })}>Next</button>
  </>
);

function App() {
  return (
    <UncontrolledOnboardingFlows
      onFinish={(data) => {
        console.log(data);
        alert("Onboarding complete!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlows>
  );
}

export default App;
