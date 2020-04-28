import React from 'react'
import WorkoutSuggestion from './WorkoutSuggestion'

export default function WorkoutSuggestionsContainer(props) {

    const makeWorkoutSuggestions = props.workouts.map(workout => {
        return <WorkoutSuggestion workout={workout}/>
    })

    return (
        <div className="WorkoutSuggestionsContainer">
            <h1>Do these workouts to burn off those calories!</h1>
            <ul>
                {makeWorkoutSuggestions}
            </ul>
        </div>
    )
}