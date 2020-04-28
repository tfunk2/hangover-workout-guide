import React, { Component } from 'react'

export default class DrinkForm extends Component {
    
    
    render(){
        return (
            <>
                <form className="drink-form">
                    <select id="drink-select" class="drink-dropdown" name="alcoholic-beverage">
                        <option value="#">Light Beer</option>
                        <option value="#">Regular Beer</option>
                        <option value="#">Wine</option>
                        <option value="#">Spirits</option>
                    </select>
                    <label id="drink-label" for="quantity">number of drinks:  </label>
                    <input id="drink-quantity" type="number" min="1" max="12" name="quantity"></input>
                    <input id="drink-submit" type="submit" value="submit"></input>
                </form>
            </>
        )
    }
}