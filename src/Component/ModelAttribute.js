import React, {useState} from 'react';
import update from 'immutability-helper';
import * as tf from '@tensorflow/tfjs';

import './ModelAttribute.css';

// Define rules that govern what transitions will happend
// based on which events that are triggered.

// Order of executing Training-Model and discriminate images.
const stateMachine = {
    // First, genereate first-initial,
    // and then generate five more after the initial-stage
    // not named 'initial'.
    iniital: { on: {} }, // Go to next-step naed loadingModel through 'on: {}'.
    loadingModel: {},
    awaiting: {},  // Waiting for upload data(images).
    ready: {},  // After waiting upload.
    classifying: {},
    complete: {},
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