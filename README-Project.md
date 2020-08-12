## What does `stateMachine` do? and how does it works?

### How does construction of stateMachine-form looks like?  
- 1. First, genereate first-initial, and then generate five more after the initial-stage not named `initial`.

### What does `on: {}` do?
- 1. Go to next-step naed loadingModel through `on: {}`. 
- 2. The event called next so in each of my state objects I need to specify which transition will happend based on the next event.
        
### Where does `complete: { on: {awaiting: ''}},` moves to?
- 1. If you are incomplete the next state you want to go is a waiting upload.
- 2. Because you kind of reset but the models ready already, so you want to await the next-image to be classified, and then you're going to upload a picture of another-dog.


## What does `reducer` do? and how to apply this code into this project?

### About Reducer.
- 1. A reducer that specifies how that's it's going to kind of like add the functionality that will kind of wire those states together and allow the transitions to happen.
- 2. This reducer will take the current state and it'll take an event which is going to be a string in this case.
- 3. For example, when the event gets fired. (I'm not sure this case is suitable to this comment..)
- 4. A reducer will take the current state and it'll take an event which is going to be a string in our case as a 'reducer' parameters.

### Form of Reducer
- 1. Applying Function.
    ```
    function reducer() {
        
    }
    ```
- 2. Applying Class.
    ```
    class reducer extends.React.Component{
        render(){
            return(
                <div className="Example"></div>
            );
        }
    }
    ```
- 3. Applying const
    ```
    const reducer = () => {
        return (
            <div className="constReducer"></div>
        );
    }
    ```


## About ModelAttribute

### Form of ModelAttribute
- 1. Applying Function.
    ```
    function ModelAttribute(){

    }
    ```

- 2. Applying Class.
    ```
    class ModelAttribute extends React.Component{
        render(){
            return(
                <div className="classModelAttribute"></div>
            );
        };
    }
    ```

- 3. Applying const
    ```
    const ModelAttribute = () => {
        return(
            <div className="constModelAttribute"></div>
        );
    }
    ```

### How to deal with if the 'ModelAttribute' is a default class(or const) of this file?
- 1. Just named class as 
    ```
    class ModelAttribute extends React.Component{
        render(){
            return(
                <div className="classModelAttribute"></div>
            );
        };
    }
    ```

- 2. Just named const as
    ```
    const ModelAttribute = () => {
        return(
            <div className="constModelAttribute"></div>
        );
    }
    ```