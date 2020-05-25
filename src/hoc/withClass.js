import React, {Component}from 'react';

//Preffered way of wrapping components 
//Don't write anything else <WrappedComponent />
const withClass = (WrappedComponent , className) => {
    return (props) => (
        <div className ={className}>
            <WrappedComponent {...props}/>
        </div>
    )
};

//We can also return a stateful component 
//We won't use classname after class 
// const withClass = (WrappedComponent , className) => {
//     return class extends Component {
//         render() {
//             return(
//                 <div className={className}>
//                     <WrappedComponent {...this.props} />
//                 </div>
//             )
//         }
//     }
// }

export default withClass;

