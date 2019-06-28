import React, {Component} from 'react';
import { addMarker } from '../actions/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CreateMarkerInput.css'

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
        const maxMarkerNameLength = 20;
        if (inputValue.length >= minMarkerNameLength && inputValue.length <= maxMarkerNameLength && key === 'Enter') {
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
                <label className="marker-input__label" htmlFor="add-marker__input">Пожалуйста, введите название маркера и нажмите 'Enter' для добавления: </label>
                <input placeholder="Название маркера..." className="marker-input" id="add-marker__input" value={inputValue} onKeyPress={this.keyPressHandle} onChange={this.inputValueChangeHandle}/>
            </>
            
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addMarker: (markerName) => dispatch(addMarker(markerName))
})

CreateMarkerInput.propTypes = {
    addMarker: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(CreateMarkerInput);