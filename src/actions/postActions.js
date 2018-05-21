import {FETCH_MARKERS, SET_VISIBILITY } from './types'

export const fetchMarkers = () => dispatch => {
        fetch('https://location-server.herokuapp.com/')
        .then(res=> res.json())
        .then(markers => dispatch({
            type: FETCH_MARKERS,
            payload: markers
        }))
}

export const changeVisibility = (visibility) => dispatch => {
            dispatch({
                type: SET_VISIBILITY,
                payload: visibility = !visibility
            })
    
}
