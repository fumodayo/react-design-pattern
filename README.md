# Controlled Components vs Uncontrolled Components

## Uncontrolled Components

Components that keep track of their own states and release data only when some event occurs (that is, the submit event for HTML forms)

```js
const MyComponent = () => {
    const [someState, setState] = useState(...);

    return ...;
}

<MyComponent onSubmit={data => ...}/>

```

## Controlled Components

Components that do not keep track of their own state-all state is passed in as props (that is, when we use the useState Hook with text inputs)

```js
const MyComponent = ({
    data,
    changeData,
    onSubmit
}) => {

    return ...;
}

<MyComponent
    data={...}
    changeData={() => ...}
    onSubmit={() => ...}
/>

```
