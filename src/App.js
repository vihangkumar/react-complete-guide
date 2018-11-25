import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephani', age: 26}
    ], 
    otherState: 'some other Value',
    showPersons: false

  }

  


  nameChangeHandler = (event) => {
      
     this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name:  event.target.value, age: 29},
        {name: 'Stephani', age: 26}
      ]
     })

  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons; 
    persons.splice(personIndex, 1); 
    this.setState({persons: persons}); 

  }



  render() {

      const style = {
        backgroundColor: 'white', 
        font: 'inherit', 
        border: '1px solid blue', 
        padding: '8px',
        cursor: 'pointer' 
       }; 

      let persons = null

      if(this.state.showPersons){

        persons = (

          <div>

            {this.state.persons.map( (person, index) =>{
                return <Person
                    click={() => this.deletePersonsHandler(index)}
                    name= {person.name}
                    age={person.age}
                    />

            })}
          </div> 

        );

      }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <button 
         style={style}
      
        onClick={this.togglePersonsHandler}>Toggle Persons</button>

         
         {persons}
        

      </div>

    );

    //Non JSX version 
   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!')); 

  }
}

export default App;
