import React, { Component } from 'react'



export default class DrinkForm extends Component {

    state = {
        drinkCalories: "",
        quantity: ""
    }
    
    
    makeOptions = () => this.props.drinks.map(drink => {
        return <option key={drink.id} value={drink.calories}>{drink.name}</option>
    })

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const totalCalories = +this.state.drinkCalories * +this.state.quantity
        this.props.setTotalCalories(totalCalories)
        // this.props.workoutSuggestionsTitle()
    }

        render() {
            return (
                <>
                    <form className="drink-form" onSubmit={this.handleSubmit}>
                        <select prompt="true" id="drink-select" className="drink-dropdown" name="drinkCalories" onChange={this.handleChange}>
                            <option value="">Pick a Drink</option>
                            {this.makeOptions()}
                        </select>
                        <label id="drink-label" htmlFor="quantity">Number of drinks:  </label>
                        <input id="drink-quantity" type="number" min="1" max="12" name="quantity" onChange={this.handleChange}></input>
                        <input id="drink-submit" type="submit" value="submit"></input>
                    </form>
                </>
            )
        }

}