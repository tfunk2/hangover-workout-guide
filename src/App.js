import React, { Component } from 'react';
import './App.css';
import DrinkForm from "./components/DrinkForm"
import WorkoutSuggestionsContainer from "./components/WorkoutSuggestionsContainer"

class App extends Component{

  state = {
    workouts: [],
    drinks: [],
    totalCalories: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/alcohols')
      .then(response => response.json())
      .then(allDrinks => this.setState({drinks: allDrinks}))

      this.fillWorkoutSuggestionsContainer()
  }

  fillWorkoutSuggestionsContainer = () => {
    fetch('http://localhost:3000/activities')
      .then(response => response.json())
      .then(allActivities => this.setState({workouts: allActivities}))
  }

  calorieConditionals = (totalCalories) => {
    return this.state.workouts.filter(workout => {
      return workout.calories >= (Math.floor(totalCalories/100)*100) && workout.calories < totalCalories + 300
    })
}

  setTotalCalories = (totalCalories) => {
    this.setState({totalCalories})
  }

  workoutSuggestionsTitle = () => {
    return <h1>Do one of these activities for an hour to burn off {this.state.totalCalories} empty calories!</h1>
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <DrinkForm workoutSuggestionsTitle={this.workoutSuggestionsTitle} setTotalCalories={this.setTotalCalories} drinks={this.state.drinks} totalCalories={this.state.totalCalories}/>
        <WorkoutSuggestionsContainer workoutSuggestionsTitle={this.workoutSuggestionsTitle} workouts={this.calorieConditionals(this.state.totalCalories)}/>
      </div>
    );
  }
}

export default App;
