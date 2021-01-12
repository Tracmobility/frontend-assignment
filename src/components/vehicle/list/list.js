import React, {Component, useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux';
import {setCatAction, selectIDAction} from '../../../redux/vehicle/vehicle.action'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import {withRouter} from "react-router";
import Pagination from "react-bootstrap-4-pagination";
import './list.css';
import Form from 'react-bootstrap/Form';
import {Row, Col} from "react-bootstrap";
const axios = require('axios');
const operationBtnCss = {
    margin: '2px'
};

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            total: 100,
            max: 7,
            pageSize: 10
        }
    }


    componentDidMount() {
        const pagenumber = this.state.current - 1;
        this.getData(pagenumber, this.state.pageSize);
    }
    getData(pageNumber, pageSize) {
        const url = 'http://api.tracmobility.com/test/vehicles?page=' + pageNumber + '&size=' + pageSize
        axios.get(url).then((response) => { // handle success
            console.log(response);
            this.setState({total: response.data.totalPages});
            this.props.setCatAction(response.data.content);
        }).catch((error) => { // handle error
            console.log(error);
        });
    }
    goDetails(data) {

        const {history} = this.props;
        const routePath = '/details/' + data.vehicleUuid;
        this.props.selectIDAction(data.vehicleUuid);
        history.push('/details');
    }

    onChange = page => {
        console.log(page);
        const pagenumber = page - 1;
        this.setState({current: page});
        this.getData(pagenumber, this.state.pageSize);
    };

    changePageSize = event => {
        const size = event.target.value;
        const pagenumber = this.state.current - 1;
        const pageSize = parseInt(size);
        this.setState({pageSize: pageSize});
        this.getData(pagenumber, pageSize);

    }

    render() {

        const {list} = this.props;
        return (
            <div className="homeContainer">
                <Table striped bordered hover className="customTable">
                    <tbody>
                        <tr>
                            <th>VehicleID</th>
                            <th>QR Code</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Battery Level</th>
                            <th>Operations</th>
                        </tr>
                        {
                        list ?. map((item, index) => (
                            <tr key={index}
                                onClick=
                                {() => this.goDetails(item) }>
                                <td>
                                    <Link to="/details">
                                        {
                                        item.vehicleUuid
                                    }</Link>
                                </td>
                                <td> {
                                    item.qrCode
                                } </td>
                                <td> {
                                    item.status
                                } </td>
                                <td>
                                    ({
                                    item.lat
                                }, {
                                    item.lng
                                })
                                </td>
                                <td> {
                                    Math.floor((item.batteryLevel) * 100) + '%'
                                } </td>
                                <td>
                                    <Button variant="info" size="sm"
                                        style={operationBtnCss}>
                                        Edit
                                    </Button>
                                    {' '}
                                    <Button variant="success" size="sm"
                                        style={operationBtnCss}>
                                        Order
                                    </Button>
                                    {' '}
                                    <Button variant="secondary" size="sm"
                                        style={operationBtnCss}>
                                        Change City/Region
                                    </Button>
                                    {' '}
                                    <Button variant="danger" size="sm"
                                        style={operationBtnCss}>
                                        Change Status
                                    </Button>
                                </td>
                            </tr>
                        ))
                    } </tbody>
                </Table>
                <Row className="paginationContainer">
                    <Col xs={12}
                        md={4}></Col>
                    <Col xs={6}
                        md={8}>
                        <Form inline>
                            <select id="pageSize" className="form-control"
                                onChange={
                                    this.changePageSize
                            }>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span className="csperpage">per page</span>
                            <Pagination threeDots className="cspagination"
                                totalPages={
                                    this.state.total
                                }
                                currentPage={
                                    this.state.current
                                }
                                showMax={
                                    this.state.max
                                }
                                prevNext
                                activeBgColor="#03989E"
                                activeBorderColor="#03989E"
                                onClick={
                                    this.onChange
                                }/>
                        </Form>

                    </Col>
                </Row>


            </div>

        );
    }
}

const mapStateToProps = (state) => ({list: state.vehicle.list});


const mapDispatchToProps = dispatch => ({
    setCatAction: (list) => dispatch(setCatAction(list)),
    selectIDAction: (id) => dispatch(selectIDAction(id))
});
const VehiclewithRouter = withRouter(Vehicle);
export default connect(mapStateToProps, mapDispatchToProps)(VehiclewithRouter);
