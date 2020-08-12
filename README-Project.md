## What does `stateMachine` do? and how does it works?

### How does construction of stateMachine-form looks like?  
- 1. First, genereate first-initial, and then generate five more after the initial-stage not named `initial`.

### What does `on: {}` do?
- 1. Go to next-step naed loadingModel through `on: {}`. 
- 2. The event called next so in each of my state objects I need to specify which transition will happend based on the next event.
        
### Where does `complete: { on: {awaiting: ''}},` moves to?
- 1. If you are incomplete the next state you want to go is a waiting upload.
- 2. Because you kind of reset but the models ready already, so you want to await the next-image to be classified, and then you're going to upload a picture of another-dog.