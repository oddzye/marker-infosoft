import React, {Component} from 'react'

class CreateMarkerInput extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: null
        }
    }

    inputValueChangeHandle = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        console.log(this.state.inputValue)
    }

    keyPressHandle = (e) => {
        if (e.key === 'Enter') {
            this.props.addMarkerHandle(this.state.inputValue);
        }
    }

    render() {
        return (
            <input onKeyPress={this.keyPressHandle} onChange={this.inputValueChangeHandle}/>
        )
    }
}

export default CreateMarkerInput;