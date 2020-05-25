import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
// import Radium from 'radium';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


class Person extends Component{

    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
        if(this.props.position === 0)
        {
            this.inputElement.focus();
        }
    }

    render(){
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} who is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                ref = {(inp) => {this.inputElement = inp}}
                type="text" 
                onChange={this.props.changed} />
            </Aux>
        )
    }
}
// const person = (props) => {
    // static content  
    //return <p>I'm a person</p>
    //Dynmaic content
    // return <p> I'm a person who is {Math.floor(Math.random() *30)} years old</p>
    //using props and it's properties
    //using children property 

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

//     return (
//         <Aux>
//             <p onClick={props.click}> I'm {props.name} who is {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} />
//         </Aux>
//     )
// };
// all JSX code should be inside a main root element basically div

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);