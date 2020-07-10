lodash ```_.pick()```

```angular2
stream = {
    id: 1,
    authorID: 42,
    title: 'SOme title',
    description: 'Some description'
}

_.pick(stream, 'title', 'descriptiom')

=>

{
    title: 'Some title',
    description: 'Some description'
}
```

---
---
Use ```<React.Fragment>``` when you want to wrap several JSX elements,
but don't want to wrap with ```<div>``` for styling consideration. 
(ie. when using with CSS library such as Bootstrap)

```angular2
const actions = (
<React.Fragment>
    <button>PUSH</button>
    <button>Cancel</button> 
<React.Fragment/>
);
```