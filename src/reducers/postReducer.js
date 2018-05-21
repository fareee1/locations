import {FETCH_MARKERS, SET_VISIBILITY } from '../actions/types'

const initialState = {
    items: [],
    visible: true
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_MARKERS:
            return {
                ...state,
                items: action.payload
            }
        case SET_VISIBILITY: 
            return{
                ...state,
                visible: action.payload
            }
        default:
            return state
    }
}