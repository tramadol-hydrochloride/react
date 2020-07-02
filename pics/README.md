**Event handling props**

- onClick: User clicks on something
- onChange: User changes text in an input
- onSubmit: User submits a form

**To fix 'this' in callback**

- Bind this in constructor
- Use arrow function
```
onSearchSubmit(arg) {
    this.setState() 
}

// onSearchSubmit is a callback function passed to the props of the React component
// Then 'this' refers to this.props of its React component 

=>

onSearchSubmit = (arg) => {
    this.setState()
}

// 'this' refers to the React component
```

