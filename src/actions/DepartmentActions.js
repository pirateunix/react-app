import { create } from '../api/Department';
import { remove } from '../api/Department';
import { getDepartment } from '../api/Department';
import { update } from '../api/Department';

export const CREATE_ITEM = 'CREATE_ITEM';
export const SAVE_ITEM = 'SAVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DEPARTMENT_LIST = 'DEPARTMENT_LIST';

export const createItem = (data) => (dispatch) => {
    return create(data)
        .then(response => {
            return response.json()
        })
        .then(
            departmentsList => dispatch(afterCreate(departmentsList))
    )
};
export const afterCreate = departments => ({
    type: CREATE_ITEM,
    data: departments
});

export const removeItem = (data) => (dispatch) => {
    return remove(data)
        .then(response => {
            return response.json()
        })
        .then(
            departmentsList => dispatch(afterRemove(departmentsList))
    )
};

export const afterRemove = departments => ({
    type: DELETE_ITEM,
    data: departments
});

export const departmentList = () => (dispatch) => {
    return getDepartment()
        .then(
            departmentsList => dispatch(departmentsFound(departmentsList))
    )
};
export const departmentsFound = departments => ({
    type: DEPARTMENT_LIST,
    data: departments
});

export const updateItem = (data) => (dispatch) => {
    return update(data)
        .then(response => {
            return response.json()
        })
        .then(
            departmentsList => dispatch(afterUpdate(departmentsList))
    )
};
export const afterUpdate = departments => ({
    type: SAVE_ITEM,
    data: departments
});
