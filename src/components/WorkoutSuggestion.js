import React from 'react'

export default function WorkoutSuggestion(props) {
    return (
        <li className="workout-suggestion">
            <h2>{props.workout.name}</h2>
            <p>Calories this will burn: {props.workout.calories}</p>
        </li>
    )
}