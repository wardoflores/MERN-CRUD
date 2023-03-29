// Action for retrieving all records. [4]

import api from "./api.js";

export const ACTION_TYPES ={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => { // exports fetchAll command towards all modules.
    api.postMessage().fetchAll()
    .then(res => { // If the statement above is called, then:
        dispatch({
            type:ACTION_TYPES.FETCH_ALL, // `fetchAll: () => axios.get(url)`
            payload: res.data
        }) 
    })
    .catch(err => console.log(err)) // Error catching
    
}

export const create = (data, onSuccess) => dispatch => {
    api.postMessage().create(data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.CREATE, // `create: newrecord => axios.post(url, newrecord)`
                payload: res.data
            }) 
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.postMessage().update(id, data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.UPDATE, // `create: newrecord => axios.post(url, newrecord)`
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete =(id, data, onSuccess) => dispatch => {
    api.postMessage().delete(id)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.DELETE, // `create: newrecord => axios.post(url, newrecord)`
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}