import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from "../../actions/itemActions";

class FilterTrinkets extends Component {

    componentDidMount() {
        this.props.fetchCards(this.props.path)
    }

    render() {
        return (
            <div>FilterTrinkets</div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: path => dispatch(fetchCards(path))
    }
};

export default connect(null, mapDispatchToProps)(FilterTrinkets)