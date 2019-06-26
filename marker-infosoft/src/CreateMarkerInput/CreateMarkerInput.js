import React, {Component} from 'react';
import { addMarker } from '../actions/actionCreators';
import { connect } from 'react-redux';

class CreateMarkerInput extends Component {
    state = {
        inputValue: ''
    }
    
    inputValueChangeHandle = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        })
    }

    keyPressHandle = ({ key }) => {
        const { inputValue } = this.state;
        const { addMarker } = this.props;
        const minMarkerNameLength = 3;
        if (inputValue.length >= minMarkerNameLength && key === 'Enter') {
            addMarker(inputValue);
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


const mapDispatchToProps = dispatch => ({
    addMarker: (markerName) => dispatch(addMarker(markerName))
})

export default connect(null, mapDispatchToProps)(CreateMarkerInput);