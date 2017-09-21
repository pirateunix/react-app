import React, { Component, PropTypes } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import 'bootstrap/less/bootstrap.less';
import EntitiesList from './EntitiesList';
import DepartmentCreate from '../Department/Create';
import DepartmentUpdate from '../Department/Update';
import DepartmentShow from '../Department/Show';
import DepartmentList from '../Department/List';
import EmployeeCreate from '../Employee/Create';
import EmployeeUpdate from '../Employee/Update';
import EmployeeShow from '../Employee/Show';
import EmployeeList from '../Employee/List';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { departmentList } from '../../actions/DepartmentActions';


const propTypes = {
    items: PropTypes.array.isRequired
};

const defaultProps = {
    items: []
};

class App extends Component {

    componentWillMount = () => this.props.dispatch(departmentList());

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4}>
                            <EntitiesList />
                        </Col>
                        <Col md={8}>
                            <Route exact component={DepartmentList} path='/' />
                            <Route component={DepartmentShow} path='/showitem' />
                            <Route component={DepartmentUpdate} path='/updateitem' />
                            <Route component={DepartmentCreate} path='/createitem' />
                            <Route component={EmployeeList} path='/employeelist' />
                            <Route component={EmployeeShow} path='/showEmployeeitem' />
                            <Route component={EmployeeUpdate} path='/updateEmployeeitem' />
                            <Route component={EmployeeCreate} path='/createEmployeeitem' />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
App.propTypes = propTypes;

export default connect()(App);
