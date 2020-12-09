### React Hooks Intro

---
```
useEffect(() => {
    
    console.log('some code here...');

    return () => {
        // return function

        // this function will be invoked next time
        // useEffect get invoked
    };    
});
```