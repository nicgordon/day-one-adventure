import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.OPEN}) (the )?(roller door|door|rollerdoor)$`),
  predicate: state => !_.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('It appears to be locked. In any case it is filthy and you shouldn’t touch it.'));
  },
};
