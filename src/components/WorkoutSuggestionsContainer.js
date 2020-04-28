import React from 'react'
import WorkoutSuggestion from './WorkoutSuggestion'

export default function WorkoutSuggestionsContainer(props) {

    const workoutSuggestionsTitle = props.workoutSuggestionsTitle()

    const makeWorkoutSuggestions = props.workouts.map(workout => {
        return <WorkoutSuggestion key={workout.id} workout={workout}/>
    })

    return (
        <div className="WorkoutSuggestionsContainer">
            <div id="workout-suggestion-div">
                {workoutSuggestionsTitle}
            </div>
            <ul id="workout-suggestion-ul">
                {makeWorkoutSuggestions}
            </ul>
        </div>
    )
}