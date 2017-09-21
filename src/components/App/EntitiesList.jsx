import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { departmentList } from '../../actions/DepartmentActions';
import { employeeList } from '../../actions/EmployeeActions';
import Nav  from 'react-bootstrap/lib/Nav';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

const defaultProps = {
    onClick: () => {
    },
    items: []
};

class EntitiesList extends Component {
    constructor(props) {
        super(props);

        this.clickOnDeparment = this.clickOnDeparment.bind(this);
        this.clickOnEmployee = this.clickOnEmployee.bind(this);

        this.state = {active: 1}
    }

    clickOnDeparment() {
        this.props.history.push("/");
        this.props.dispatch(departmentList());
    }

    clickOnEmployee() {
        this.props.history.push("/employeelist");
        this.props.dispatch(employeeList());
    }

    handleSelect = (key) => {
        this.setState({active: key})
    }


    render() {
        return (
            <Nav bsStyle="pills" stacked activeKey={this.state.active} onSelect={this.handleSelect}>
                <NavItem eventKey={1} href="#" onClick={this.clickOnDeparment}>Department</NavItem>
                <NavItem eventKey={2} href="#" onClick={this.clickOnEmployee}>Employee</NavItem>
            </Nav>
        )
    }
}

EntitiesList.propTypes = propTypes;

export default connect()(withRouter(EntitiesList));
