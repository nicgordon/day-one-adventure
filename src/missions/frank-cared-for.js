import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Frank the plant cared for',
  predicate: state => {
    const outdoorLocations = [
      constants.SCENE.CARPARK,
      constants.SCENE.CRAIGS_HOUSE,
      constants.SCENE.EASEYS,
      constants.SCENE.OUTSIDE_OFFICE,
      constants.SCENE.PATIO,
    ];
    const combinedOutdoorInventory = _.flatMap(outdoorLocations, locationId =>
      _.get(state, `present.scenes[${locationId}].inventory`, [])
    );

    return (
      _.includes(combinedOutdoorInventory, constants.ITEM.FRANK_THE_PLANT) &&
      _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].frankWatered`, false)
    );
  },
};
