import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    persons: [
      {id: 'sdfsdfs', name: 'Max', age: 28},
      {id: 'xcvfsdf', name: 'Manu', age: 29},
      {id: 'bvxvxcv', name: 'Stephani', age: 26}
    ], 
    otherState: 'some other Value',
    showPersons: false

  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id; 
    }); 

      const person = {...this.state.persons[personIndex] }; 
      //const person = Object.assign({}, this.state.persons[personIndex]); 
      person.name = event.target.value; 

      const persons = [...this.state.persons]; 
      persons[personIndex] = person; 

      this.setState({persons: persons})
     

  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); 
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({persons: persons}); 

  }



  render() {

      const style = {
        backgroundColor: 'green', 
        color: 'white', 
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
                    key={person.id}
                    changed={(event)=> this.nameChangeHandler(event, person.id)}
                    />

            })}
          </div> 

        );

        style.backgroundColor = 'red'; 
       
      }

      let classes = []; 

      if(this.state.persons.length<= 2){
        classes.push('red'); // classes = ['red']
      }
      if(this.state.persons.length <= 1){
        classes.push('red', 'bold'); // classes = ['red', 'bold']
      }

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
         <p className={classes.join(' ')}>This is really working!</p>
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
