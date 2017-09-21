import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, Button, Col, Form, ControlLabel, ButtonToolbar} from 'react-bootstrap';
import { createItem } from '../../actions/DepartmentActions';
import {withRouter} from "react-router-dom";
import { departmentList } from '../../actions/DepartmentActions';

const propTypes = {
    items: PropTypes.array.isRequired
};

class Create extends Component {

    render() {
        const saveFormData = () => {
            const data = {
                name: this.name.value,
                description: this.description.value
            };

            this.props.dispatch(createItem(data)).then(
                () => this.props.history.push("/") ).then(
                () => this.props.dispatch(departmentList()));
        };

        return (
            <Form horizontal>
                <FormGroup controlId='name' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        name
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='Name' inputRef={input=> this.name = input}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId='description' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        description
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='description' inputRef={input=> this.description = input}/>
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
