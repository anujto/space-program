import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import SpaceReducer from './../reducers/spaceX/SpaceReducer'

export default combineReducers({router:routerReducer ,SpaceReducer});