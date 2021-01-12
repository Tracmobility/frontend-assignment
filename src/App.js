
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/navbar/navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VehiclewithRouter from './components/vehicle/list/list';
import Details from './components/details/detail';
import TaskList from './components/task/list/list';
import TaskMap from './components/task/map/map';
import TaskCreation from './components/task/creation/creation';
import RuleSetting from './components/task/rule/settings';

function App() {
    return (
        <Container fluid className="maxHeight">
            <Row className="maxHeight">
                <Router>
                    <Col xs={2}
                        id="sidebar-wrapper">
                        <Sidebar/>
                    </Col>
                    <Col xs={10}
                        id="page-content-wrapper">
                        <Header/>
                        <Switch>
                            <Route exact path="/">
                                <VehiclewithRouter/>
                            </Route>
                            <Route exact path="/details">
                                <Details/>
                            </Route>
                            <Route path="/task/list">
                                <TaskList/>
                            </Route>
                            <Route path="/task/map">
                                <TaskMap/>
                            </Route>
                            <Route path="/task/creation">
                                <TaskCreation/>
                            </Route>
                            <Route path="/task/rules">
                                <RuleSetting/>
                            </Route>
                            <Route  path="/vehicle/list">
                                <VehiclewithRouter/>
                            </Route>
                        </Switch>

                    </Col>
                </Router>
            </Row>

        </Container>
    );
}

export default App;
