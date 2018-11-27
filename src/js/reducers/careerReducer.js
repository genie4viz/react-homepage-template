/* File Name: careerReducer.js                                      *
 * Description: Redux reducer for the artist                        */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import CareerData from '../../data/careers.json'

export default function reducer(state={
    careerData: CareerData,
    loading: false,
    submitted: false,
    error: null
}, action) {
    switch(action.type) {
        case CareerActionTypes.FETCHING_CAREERS: {
            return {...state,
                loading: true
            }
        }

        case CareerActionTypes.FETCH_CAREERS_SUCCESS: {
            return {...state,
                loading: false
            }
        }
        
        case CareerActionTypes.FETCH_CAREERS_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case CareerActionTypes.SEND_APPLICATION_SUCCESS: {
            return {...state,
                submitted: true
            }
        }

        case CareerActionTypes.SEND_APPLICATION_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
