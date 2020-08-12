import React, {useState} from 'react';
import update from 'immutability-helper';
import * as tf from '@tensorflow/tfjs';

import './ModelAttribute.css';

// Define rules that govern what transitions will happend
// based on which events that are triggered.
// Order of executing Training-Model and discriminate images.

const stateMachine = {
    iniital: { on: {next: 'loadingModel'} }, 
    loadingModel: { on: {loadingModel: 'awaiting'}},
    awaitingUpload: { on: {awaiting: 'ready'}},  // Waiting for upload data(images).
    ready: { on: {awaiting: 'classifying'}},  // After waiting upload.
    classifying: { on: {awaiting: 'complete'}},
    complete: { on: {awating: 'awaitingUpload'}}, 
}

// A reducer that specifies how that's it's going to kind of like add the functionality 
// that will kind of wire those states together and allow the transitions to happen.
const reducer = () => {
    
}

// This could be as
// - 1. function ModelAttribute() { }
// - 2. class ModelAttribute extends React.Component {
//    render() {
//       return(<div className=""></div>);
//    };
// }
class ModelAttribute extends React.Component{
    render(){
        return(
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
}
// const ModelAttribute = () => {
//     return (
//         <div className="tensorflow-example">
//             <h2 className="Testing">
//                 Testing
//                 <p className="Testing-Ptag">
//                     Testing..
//                 </p>
//             </h2>
//         </div>
//     );
// }

export default ModelAttribute;