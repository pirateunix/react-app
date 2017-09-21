import React, { PropTypes, Component } from 'react';
import ButtonToolbar  from 'react-bootstrap/lib/ButtonToolbar';
import Button  from 'react-bootstrap/lib/Button';
import Table  from 'react-bootstrap/lib/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../../actions/DepartmentActions';
import { departmentList } from '../../actions/DepartmentActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

const defaultProps = {
    onClick: () => {
    },
    items: []
};

class List extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(showItem());
    }

    render() {

        const tableRow = (item, line) => {
            let linkShow = '/showitem?id=' + line;
            let linkUpdate = '/updateitem?id=' + line;

            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
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
                () => this.props.dispatch(departmentList() ));
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
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                <tr>
                    <td>
                        <Link to='/createitem'>
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

export default connect(mapStateToProps)(List);
