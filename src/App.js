import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}!</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}!</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Cow" />
      <RightHandComponent message="Duck" />
    </SplitScreen>
  );
}

// Improvements:
/**
 * Don't:
  <SplitScreen
    left={LeftHandComponent}
    right={RightHandComponent}
    leftWeight={1}
    rightWeight={3}
  />

  <Container>
    <Pane weight={leftWeight}>
      <Left/>
    </Pane>
    <Pane weight={rightWeight}>
      <Right/>
    </Pane>
  </Container>

  Do:
  <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftHandComponent />
    <RightHandComponent />
  </SplitScreen>

  <Container>
    <Pane weight={leftWeight}>{left}</Pane>
    <Pane weight={rightWeight}>{right}</Pane>
  </Container>
 */

export default App;
