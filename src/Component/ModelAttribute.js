import React, {useState} from 'react';
import update from 'immutability-helper';
import * as tf from '@tensorflow/tfjs';

import './ModelAttribute.css';

// Define rules that govern what transitions will happend
// based on which events that are triggered.

// Order of executing Training-Model and discriminate images.
const stateMachine = {
    /* 
        - 1. How does construction of stateMachine-form looks like? 
        First, genereate first-initial,
        and then generate five more after the initial-stage
        not named 'initial'.

        - 2. What does 'on: {}' do?
        Go to next-step naed loadingModel through 'on: {}'. 
        The event called next so in each of my state objects
        I need to specify which transition will happend based on the 
        next event.

        - 3. Where does "complete: { on: {awaiting: ''}}," moves to?
        If you are incomplete the next state you want to go is a waiting upload.
        Because you kind of reset but the models ready already, so you want to await
        the next-image to be classified, and then you're going to upload a picture of
        another-dog.
    */
    iniital: { on: {next: 'loadingModel'} }, 
    loadingModel: { on: {loadingModel: 'awaiting'}},
    awaiting: { on: {awaiting: 'ready'}},  // Waiting for upload data(images).
    ready: { on: {awaiting: 'classifying'}},  // After waiting upload.
    classifying: { on: {awaiting: 'complete'}},
    complete: { on: {awating: 'classifying'}}, 
}

const ModelAttribute = () => {
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
}

export default ModelAttribute;