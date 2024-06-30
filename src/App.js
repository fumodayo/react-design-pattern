import { useState } from "react";
import { ControlledOnboardingFlows } from "./ControlledOnboardingFlows";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "fumodayo" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 22 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext()}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "black" })}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <ControlledOnboardingFlows currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {/* Điểm khác nhau */}
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlows>
  );
}


export default App;
