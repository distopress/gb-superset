import apiFetch from '@wordpress/api-fetch';
/**
 * Function for updating data in the database
 * @param {*} endpoint is an api endpoint
 * @param {*} data is the data to be updated
 * @param {*} dispatch is the dispatch function
 */


// not in use? remove it.
const UpdateDatabase = (endpoint, data, dispatch) => {

    apiFetch({
        path: '/gb-superset/v1/' + endpoint,
        method: 'POST',
        data: data
    }).then((res) => {
        if(dispatch) {
            dispatch({
                type: 'SET_SHOW_NOTICE',
                showNotice: true
            })

            setTimeout(() => {
                dispatch({
                    type: 'SET_SHOW_NOTICE',
                    showNotice: false
                })
            }, 2000)
        }
    }).catch((error) => {
        console.error(error);
    })
}

export default UpdateDatabase
