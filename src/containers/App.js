import React, {Component} from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
// import Radium, {StyleRoot} from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';  
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount()');
  }

  state = {
    persons:[
      {id : 'fbhewf1', name: 'Vikas', age:27},
      {id : 'jkdbchj1', name: 'Parvati', age: 26},
      {id : 'kgjbngj1', name : 'Rohit', age:23},
    ],
    toggleName: false,
    toggleClicked: 0
  }
  
  // switchNameHandler = (newName) =>{
  //   // console.log('Was clicked !');
  //   //DON'T USE:this.state.persons[0].name = 'Ankit';
  //   this.setState({persons: [
  //     {name : newName, age:23},
  //     {name: 'Vikas', age:27},
  //     {name: 'Parvati', age: 27}
  //   ]})
  // }

  nameChangedHandler = (event, id) =>{

    const personIndex = [...this.state.persons].findIndex(f => {
        return f.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deleteNameHandler = (personIndex) =>{
    //Create a copy first as this persons is referring to the actual reference 
    // const persons = this.state.persons;
    //create a copy first
    // const persons = this.state.persons.slice();
    //OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.toggleName;
    this.setState((prevState, props) => {
      return {
        toggleName : !doesShow,
        toggleClicked: prevState.toggleClicked+1
      }
    });
  }

  render() { 
    let persons = null;
    if(this.state.toggleName){
        persons = <Persons
            persons={this.state.persons}
            clicked = {this.deleteNameHandler}
            changed = {this.nameChangedHandler}/>;
    }

    return (
      //this looks like html but it is JSX as it gets converted into JS in the end basically 
      //like //React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))      
        <Aux>
          <Cockpit 
          showPersons= {this.state.toggleName}
          persons = {this.state.persons}
          clicked ={this.toggleNameHandler}/>
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);


//Using ternary inside return statement render methid to render content conditionally
// {
//   this.state.toggleName ? 
//   <div>
//     <Person name={this.state.persons[0].name}
//       age={this.state.persons[0].age} />
//     <Person name={this.state.persons[1].name}
//       age={this.state.persons[1].age}
//       click={this.switchNameHandler}
//       changed={this.nameChangedHandler} />
//     <Person name={this.state.persons[2].name}
//       age={this.state.persons[2].age}
//       click={this.switchNameHandler.bind(this, 'Rajat')} />
//   </div> : null
// }

