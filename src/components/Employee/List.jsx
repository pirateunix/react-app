import React, { PropTypes, Component } from 'react';
import ButtonToolbar  from 'react-bootstrap/lib/ButtonToolbar';
import Button  from 'react-bootstrap/lib/Button';
import Table  from 'react-bootstrap/lib/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../../actions/EmployeeActions.js';
import {withRouter} from "react-router-dom";
import { employeeList } from '../../actions/EmployeeActions';


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

class List extends Component {
    render() {

        const tableRow = (item, line) => {
            let linkShow = '/showEmployeeitem?id=' + line;
            let linkUpdate = '/updateEmployeeitem?id=' + line;

            return (
                <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                        <ButtonToolbar>
                            <Link to={linkShow}>
                                <Button bsStyle="primary" bsSize="small">Просмотр</Button>
                            </Link>
                            <Link to={linkUpdate}>
                                <Button bsStyle="primary" bsSize="small">Редактировать</Button>
                            </Link>
                            <Button bsStyle="danger" bsSize="small" onClick={()=>sendData(item.id)}>Удалить</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
            );
        };

        const sendData = (id) => {
            const data = {
                id: id
            };

            this.props.dispatch(removeItem(data)).then(
                () => this.props.dispatch(employeeList() ));
        };

        let rows = [];
        let i = 0;
        this.props.items.forEach(function (item) {
            rows.push(tableRow(item, i));
            i++;
        });
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                <tr>
                    <td>
                        <Link to='/createEmployeeitem'>
                            <Button bsStyle="primary" bsSize="small">Добавить</Button>
                        </Link>
                    </td>
                </tr>
            </Table>
        );
    }
}

List.propTypes = propTypes;

function mapStateToProps(state) {
    const items = state.counter.items || [];

    return {items};
}

export default connect(mapStateToProps)(withRouter(List));
