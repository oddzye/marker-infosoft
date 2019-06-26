import React, {Component} from 'react'

class CreateMarkerInput extends Component {
        state = {
            inputValue: ''
        }

    inputValueChangeHandle = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        })
        console.log(this.state.inputValue)
    }

    keyPressHandle = ({ key }) => {
        const { inputValue } = this.state;
        const { addMarkerHandle } = this.props;
        const minMarkerNameLength = 3;
        if (inputValue.length >= minMarkerNameLength && key === 'Enter') {
            addMarkerHandle(inputValue);
            this.setState({
                inputValue: ''
            })
        }
    }

    render() {
        const { inputValue } = this.state;
        return (
            <>  
                <label htmlFor="add-marker__input">Please, enter marker name: </label>
                <input id="add-marker__input" value={inputValue} onKeyPress={this.keyPressHandle} onChange={this.inputValueChangeHandle}/>
            </>
            
        )
    }
}

export default CreateMarkerInput;