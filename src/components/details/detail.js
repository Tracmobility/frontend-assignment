import React, {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component {
 
    componentDidMount() {
    }
    render() {
        return (
            <div>
              Details Page
            </div>

        );
    }
}

const mapStateToProps = (state) => ({list: state.vehicle.list, selectedID: state.vehicle.selectedID});

export default connect(mapStateToProps)(Details);
