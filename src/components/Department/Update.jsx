import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, Button, Col, Form, ControlLabel, ButtonToolbar} from 'react-bootstrap';
import { updateItem } from '../../actions/DepartmentActions';
import {withRouter} from "react-router-dom";
import { departmentList } from '../../actions/DepartmentActions';

const propTypes = {
    items: PropTypes.array.isRequired
};

const defaultProps = {
    items: []
};

class Update extends Component {
    render() {
        const params = new URLSearchParams(this.props.location.search);
        const saveFormData = () => {
            const data = {
                name: this.name.value,
                description: this.description.value,
                id: item.id
            };

            this.props.dispatch(updateItem(data)).then(
                () => this.props.history.push("/") ).then(
                () => this.props.dispatch(departmentList()));
        };

        let item = this.props.items[params.get('id')];

        return (
            <Form horizontal>
                <FormGroup controlId='name' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='Name' defaultValue={item.name} inputRef={input=> this.name = input}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId='description' bsSize='sm'>
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={6}>
                        <FormControl type='text' placeholder='Price' defaultValue={item.description} inputRef={input=> this.description = input}/>
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


Update.propTypes = propTypes;


function mapStateToProps(state) {
    const items = state.counter.items || [];

    return {items};
}

export default connect(mapStateToProps)(withRouter(Update));

