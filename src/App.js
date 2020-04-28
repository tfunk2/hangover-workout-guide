import React, { Component } from 'react';
import './App.css';
import DrinkForm from "./components/DrinkForm"
import WorkoutSuggestionsContainer from "./components/WorkoutSuggestionsContainer"
import Welcome from "./components/Welcome"

class App extends Component{

  state = {
    workouts: [],
    drinks: [],
    totalCalories: null
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
      return workout.calories >= (Math.floor(totalCalories/100)*100) && workout.calories < totalCalories + 150
    })
}

  setTotalCalories = (totalCalories) => {
    this.setState({totalCalories})
  }

  workoutSuggestionsTitle = () => {
    return <h1 id="suggestions-title">Do one of these activities for an hour to burn off <br></br>{this.state.totalCalories} empty calories!</h1>
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <DrinkForm workoutSuggestionsTitle={this.workoutSuggestionsTitle} setTotalCalories={this.setTotalCalories} drinks={this.state.drinks} totalCalories={this.state.totalCalories}/>
        <WorkoutSuggestionsContainer workoutSuggestionsTitle={this.workoutSuggestionsTitle} workouts={this.calorieConditionals(this.state.totalCalories)}/>
      </div>
    );
  }
}

export default App;
