# What are Higher-Order Components (HOCs) ?

A component that returns another component instead of JSX

```
MyComponent ----> <h1>I'm JSX!</h1>
HOC ----> Some Component ----> <h1>I'm JSX!</h1>
```

- Remember: HOCs are just functions

## Hocs are used for:

- Sharing complex behavior between multiple components (much like with container components)
- Adding extra functionality to existing components
