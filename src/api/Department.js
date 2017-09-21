export const create = (data) => {
    return fetch(
        '/api/departments/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};

export const remove = (data) => {
    return fetch(
        '/api/departments/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};

export const getDepartment = () => {
    return fetch(
        '/api/departments', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            credentials: 'same-origin'
        })
        .then(
            response => response.json()
    )
};


export const update = (data) => {
    return fetch(
        '/api/departments/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(data),
            credentials: 'same-origin'
        });
};