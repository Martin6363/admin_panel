import { GET_DATA, DELETE_DATA, ADD_DATA } from './data.types'


export function getData ( list ) {
    return {
        type: GET_DATA,
        payload: list
    }
}

export function deleteData ( list ) {
    return {
        type: DELETE_DATA,
        payload: list
    }
}

export function addData ( list ) {
    return {
        type: ADD_DATA,
        payload: list
    }
}