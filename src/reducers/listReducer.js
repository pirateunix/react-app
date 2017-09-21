import { DEPARTMENT_LIST } from '../actions/DepartmentActions.js';
import { EMPLOYEE_LIST } from '../actions/EmployeeActions.js';

const initialState = {value: []};

export default function (state = initialState, action) {
    switch (action.type) {
        case DEPARTMENT_LIST:
        {
            return {items: action.data};
        }
        case EMPLOYEE_LIST:
            return {items: action.data};
        default:
            return state;
    }
}