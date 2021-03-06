import React, { useState, useReducer } from 'react';
import update from 'immutability-helper';
import * as tf from '@tensorflow/tfjs';

import './ModelAttribute.css';

// Define rules that govern what transitions will happend
// based on which events that are triggered.
// Order of executing Training-Model and discriminate images.
const stateMachine = {
    initial: 'initial',
    states: {
        initial: { on: {next: 'loadingModel'} }, 
        loadingModel: { on: {loadingModel: 'awaiting'}},
        awaitingUpload: { on: {awaiting: 'ready'}},  // Waiting for upload data(images).
        ready: { on: {awaiting: 'classifying'}},  // After waiting upload.
        classifying: { on: {awaiting: 'complete'}},
        complete: { on: {awating: 'awaitingUpload'}}, 
    }
}

// A reducer that specifies how that's it's going to kind of like add the functionality 
// that will kind of wire those states together and allow the transitions to happen.
const reducer = (currentState, event) => stateMachine.states[currentState].on[event] || stateMachine.initial;


function ModelAttribute() {
    // Put that hook into our components in order to get a dispatch and the current state.
    // Call the 'state' and 'dispatch' and use 'reducer'.
    const [state, dispatch] = useReducer();
    return (
        <div className="tensorflow-example">
            <h2 className="Testing">
                Testing
                <p className="Testing-Ptag">
                    Testing..
                </p>
            </h2>
        </div>   
    );
};

export default ModelAttribute;