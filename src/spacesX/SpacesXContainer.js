import {connect} from 'react-redux';
import SpaceX from './SpaceX';
import {getSpaceData} from '../actions/space/SpaceAction';

// const mapStateToProps = state => ({
//     spaceData: state.SpaceX
// });

const mapDispatchToProps = dispatch => ({

    getSpaceData : (year, selectedLaunch, selectedLanding) => dispatch(getSpaceData(year, selectedLaunch, selectedLanding))
});

export default (null, mapDispatchToProps)(SpaceX);