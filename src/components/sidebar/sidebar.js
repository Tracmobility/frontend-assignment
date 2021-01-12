import React from "react";
import logo from '../../TRACMobilityLogo.jpeg';
import {
    Nav
} from "react-bootstrap";
import {withRouter} from "react-router";
import {
    CardList,
    GearFill,
    GeoAltFill,
    Grid3x3GapFill,
    Laptop,
    PlusCircleFill,
    ColumnsGap,
    Search
} from 'react-bootstrap-icons';
import './sidebar.css';


const Side = props => {


    return (
        <Nav className="col-md-12 d-md-block custombgcolor sidebar maxHeight"
            onSelect={
                selectedKey => {
                    const {history} = props;
                    history.push(selectedKey);
                }
        }>
            <div className="sidebar-sticky"></div>
            <Nav.Item className="appName">
                <Nav.Link href="/" className="customNavLinkColor">
                {/* <img src={logo} class="img-fluid" alt="..." /> */}
                    <Laptop size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        TRACMOBILITY
                    </span>
                </Nav.Link>
            </Nav.Item>
            <hr></hr>
            <Nav.Item>
                <Nav.Link eventKey="dashboard">
                    <ColumnsGap size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        KPI Dashboard
                    </span>
                </Nav.Link>
            </Nav.Item>
            <hr></hr>
            <Nav.Item>
                <p className="navBarHeading">TASK  MANAGEMENT</p>
                <Nav.Link eventKey="/task/map">
                    <GeoAltFill size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        Task Map
                    </span>
                </Nav.Link>
                <Nav.Link eventKey="/task/list">
                    <CardList size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        Task List
                    </span>
                </Nav.Link>
                <Nav.Link eventKey="/task/creation">
                    <PlusCircleFill size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        Task Creation
                    </span>
                </Nav.Link>
                <Nav.Link eventKey="/task/rules">
                    <GearFill size={20}
                        className="sidebarIcon"/>
                    <span className="sidebarText">
                        Rule Settings
                    </span>
                </Nav.Link>

            </Nav.Item>
            <hr></hr>
            <Nav.Item>
                <p className="navBarHeading">OPERATION CENTER</p>


                <Nav.Item className="VehicleContainer">
                    <p className="navBarHeading">
                        <Grid3x3GapFill size={20}
                            className="sidebarIcon"/>
                        <span className="sidebarText">Vehicle Management</span>
                    </p>
                    <Nav.Link eventKey="/vehicle/list">
                        <CardList size={20}
                            className="sidebarIcon"/>
                        <span className="sidebarText">
                            Vehicle List
                        </span>
                    </Nav.Link>
                    <Nav.Link eventKey="/vehicle/map">
                        <GeoAltFill size={20}
                            className="sidebarIcon"/>
                        <span className="sidebarText">
                            Vehicle Map
                        </span>
                    </Nav.Link>
                    <Nav.Link eventKey="/vehicle/search">
                        <Search size={20}
                            className="sidebarIcon"/>
                        <span className="sidebarText">
                            Vehicle Search
                        </span>
                    </Nav.Link>


                </Nav.Item>
            </Nav.Item>
        </Nav>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar
