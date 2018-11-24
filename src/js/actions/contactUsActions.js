/* File Name: contactUsActions.js                                   *
 * Description: Retrieves the user's top artists, then immediately  *
 *              calls to get that artist's top songs.               */

import ContactUsActionTypes from '../actiontypes/contactUsActionTypes'
import axios from 'axios'

// Retrieve Artist, then songs immediately after. AM - like
export function handleChange(name, value) {
    return function(dispatch) {
        this.setState({ name: value })

        // spotifyApi.getMyTopArtists()
        // .then((response) => {
        //     let thePayload = []

        //     // Artists must be returned. AM - may not need this because if nothing was returned it should catch already. Ask.
        //     if (response.items.length === 0) {
        //         throw 'You don\'t have any favorite artists!'
        //     }

        //     // In medium/hard setting, user needs to have more than one favorite artist
        //     if ((difficulty === 'Medium' || difficulty === 'Hard') && response.items.length < 2) {
        //         throw 'You don\'t have enough favorite artists to do these settings :( Please refresh and do easy mode, or listen to more artists!'
        //     } 

        //     if (difficulty === 'Easy') {
        //         thePayload.push(response.items[0])
        //     } else if (difficulty === 'Medium') {
        //         // In medium setting, you shouldn't be able to get your number 1 artist
        //         var randomInt = Math.ceil(Math.random() * (response.items.length - 1))
        //         thePayload.push(response.items[randomInt])
        //     } else if (difficulty === 'Hard') {
        //         thePayload.push(response.items)
        //     } else {
        //         throw 'Invalid Difficulty'
        //     }

        //     dispatch({
        //         type: ArtistActionType.FETCH_ARTIST_SUCCESS,
        //         payload: thePayload
        //     })
            
        //     // AM - very low priority. Check user to see if they have support locations that you can pass in instead of just a quote that says 'US'. May look better codewise
        //     if (difficulty === 'Hard') {
        //         dispatch(fetchSongs(thePayload[0], 'US'))
        //     } else {
        //         dispatch(fetchSongs(thePayload, 'US'))
        //     }
        // })

        // .catch((error) => {
        //     dispatch({
        //         type: ArtistActionType.FETCH_ARTIST_ERROR,
        //         payload: error
        //     })
        //     dispatch(loadingComplete())
        // })
    }
}

export async function handleSubmit(e) {
    return async function(dispatch) {
        e.preventDefault();
        var state

        // Assign variables
        const { 
            name, 
            email, 
            subject,
            message 
        } = state
    
        // AM - look in to 'await' function. Assuming it has to do with asynchronization?
        const form = await axios.post('/api/sendEmailform', {
            name, 
            email,
            subject,
            message
        })
        
        .then(async response => {
            dispatch({ type: ContactUsActionTypes.SEND_EMAIL_SUCCESS })
        })

        .catch(async error => {
            dispatch({
                type: ContactUsActionTypes.SEND_EMAIL_ERROR,
                payload: error
            })
        })
    }
}