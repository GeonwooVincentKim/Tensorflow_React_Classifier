import React, {useState} from 'react';
import update from 'immutability-helper';
import * as tf from '@tensorflow/tfjs';

import './ModelAttribute.css';

// Define rules that govern what transitions will happend
// based on which events that are triggered.
const stateMachine = {
    iniital: {},
    initial: {},
    initial: {},
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