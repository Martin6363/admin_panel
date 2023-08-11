import { GET_DATA, DELETE_DATA, ADD_DATA } from './data.types'

const initialState = {
    data: [
        {
            name: 'Ramesh',
            lastName: 'Fadatare',
            email: 'ram@gmail.com',
            id: Math.random() 
          },
          {
            name: 'John',
            lastName: 'Cena',
            email: 'jon@gmail.com',
            id: Math.random() 
          },
          {
            name: 'Tom',
            lastName: 'Cruise',
            email: 'tom@gmail.com',
            id: Math.random() 
          },
          {
            name: 'Admin',
            lastName: 'Admin',
            email: 'admin@gmail.com',
            id: Math.random() 
          },
    ]
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }

        case DELETE_DATA:
            return {
                ...state,
                data: action.payload
            }

        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }

            default:
                return state
    }
}