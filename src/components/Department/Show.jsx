import React, { PropTypes, Component } from 'react';
import ButtonToolbar  from 'react-bootstrap/lib/ButtonToolbar';
import Button  from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import Table  from 'react-bootstrap/lib/Table';
import {withRouter} from "react-router-dom";

const propTypes = {
    items: PropTypes.array.isRequired
};

const defaultProps = {
    items: []
};

class Show extends Component {

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const line = params.get('id');

        let item = this.props.items[line];


        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                    <tr>
                        <td>
                            <ButtonToolbar>
                                <Button bsSize='sm' onClick={() => this.props.history.push("/")}>
                                    Назад
                                </Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}


Show.propTypes = propTypes;


function mapStateToProps(state) {
    const items = state.counter.items || [];

    return {items};
}

export default connect(mapStateToProps)(withRouter(Show));

