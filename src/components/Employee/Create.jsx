import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, Button, Col, Form, ControlLabel, ButtonToolbar} from 'react-bootstrap';
import { createItem } from '../../actions/EmployeeActions';
import { getDepartment } from '../../api/Department';
import {withRouter} from "react-router-dom";
import { employeeList } from '../../actions/EmployeeActions';

const propTypes = {
    items: PropTypes.array.isRequired
};

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: []
        };
    }

    componentWillMount = () => getDepartment().then(departments => this.setState({departments: departments}));

    render() {
        const saveFormData = () => {

            const data = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                departmentId: this.departments.value
            };

            this.props.dispatch(createItem(data)).then(
                () => this.props.history.push("/employeelist") ).then(
                () => this.props.dispatch(employeeList()));
        };

        return (
            <Form horizontal>
                <FormGroup controlId='firstName' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        firstName
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='firstName' inputRef={input=> this.firstName = input}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId='lastName' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        lastName
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='lastName' inputRef={input=> this.lastName = input}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId='departmentId' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        department
                    </Col>
                    <Col sm={6}>
                        <FormControl componentClass="select" placeholder='departmentId' inputRef={input => this.departments = input}>
                            {this.state.departments.map(department => <option value={department.id}>{department.name}</option>)}
                        </FormControl>
                    </Col>
                </FormGroup>

                <ButtonToolbar>
                    <Button bsSize='sm' onClick={saveFormData} bsStyle='primary'>
                        Сохранить
                    </Button>
                    <Button bsSize='sm' onClick={() => this.props.history.push("/")}>
                        Отмена
                    </Button>
                </ButtonToolbar>

            </Form>
        );
    }
}


Create.propTypes = propTypes;

export default connect()(withRouter(Create));
