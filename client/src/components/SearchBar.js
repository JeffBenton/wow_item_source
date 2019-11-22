import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAzerite } from "../actions/itemActions";

class SearchBar extends Component {

    state = {
        text: ''
    };

    handleChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchAzerite(this.state.text);
        this.setState({
            text: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} type="text" value={this.state.text}/>
                <input type="submit" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchAzerite: term => dispatch(searchAzerite(term))
    }
};

export default connect(null, mapDispatchToProps)(SearchBar)