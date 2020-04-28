import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    workouts: []
  }

  fillWorkoutSuggestionsContainer(workoutSuggestions) {
    this.setState({workoutSuggestions: workoutSuggestions})
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
