export const getEmployee = () => {
    return fetch(
        '/api/employee', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            credentials: 'same-origin'
        });
};

export const create = (data) => {
    return fetch(
        '/api/employee/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};

export const remove = (data) => {
    return fetch(
        '/api/employee/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};

export const update = (data) => {
    return fetch(
        '/api/employee/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};
