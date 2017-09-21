import { create } from '../api/Employee';
import { update } from '../api/Employee';
import { remove } from '../api/Employee';
import { getEmployee } from '../api/Employee';

export const EMPLOYEE_LIST = 'EMPLOYEE_LIST';
export const DELETE_EMPLOYEE_ITEM = 'DELETE_EMPLOYEE_ITEM';
export const SAVE_EMPLOYEE_ITEM = 'SAVE_EMPLOYEE_ITEM';
export const CREATE_EMPLOYEE_ITEM = 'CREATE_EMPLOYEE_ITEM';

export const createItem = (data) => (dispatch) => {
    return create(data)
        .then(response => {
            return response.json()
        })
        .then(
            employeeList => dispatch(afterCreate(employeeList))
    )
};
export const afterCreate = employee => ({
    type: CREATE_EMPLOYEE_ITEM,
    data: employee
});

export const removeItem = (data) => (dispatch) => {
    return remove(data)
        .then(response => {
            return response.json()
        })
        .then(
            employeeList => dispatch(afterDelete(employeeList))
    )
};

export const afterDelete = employee => ({
    type: DELETE_EMPLOYEE_ITEM,
    data: employee
});

export const employeeList = () => (dispatch) => {
    return getEmployee()
        .then(response => {
            return response.json()
        })
        .then(
            emloyeeList => dispatch(emloyeeFound(emloyeeList))
    )
};
export const emloyeeFound = employee => ({
    type: EMPLOYEE_LIST,
    data: employee
});


export const updateItem = (data) => (dispatch) => {
    return update(data)
        .then(response => {
            return response.json()
        })
        .then(
            employeeList => dispatch(afterUpdate(employeeList))
    )
};
export const afterUpdate = employee => ({
    type: SAVE_EMPLOYEE_ITEM,
    data: employee
});
