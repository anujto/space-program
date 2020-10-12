export const SET_SPACE_DATA= 'SET_SPACEDATA';


export const setSpaceData= (SpaceData) => {

    return {
        type: 'SET_SPACE_DATA',
        payload: SpaceData
    }
};

const getSpaceData= () => {

    return (dispatch) => {
        dispatch(setSpaceData)
    }
}

export {getSpaceData};