import {SET_SPACE_DATA} from '../../actions/space/SpaceAction';

export default (state= { spaceList: []}, action) => {

    switch(action.type) {
        case SET_SPACE_DATA :
        return {...state, ...action.payload}
        default:
            return state;
    }
};