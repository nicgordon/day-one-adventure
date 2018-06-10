import flatMap from 'lodash/flatMap';
import get from 'lodash/get';
import includes from 'lodash/includes';

import constants from '../constants';

export default {
  name: 'Care for Frank the plant',
  predicate: state => {
    const outdoorLocations = [
      constants.SCENE.CARPARK,
      constants.SCENE.CRAIGS_HOUSE,
      constants.SCENE.EASEYS,
      constants.SCENE.OUTSIDE_OFFICE,
      constants.SCENE.PATIO,
    ];
    const combinedOutdoorInventory = flatMap(outdoorLocations, locationId =>
      get(state, `present.scenes[${locationId}].inventory`, [])
    );

    return (
      includes(combinedOutdoorInventory, constants.ITEM.FRANK_THE_PLANT) &&
      get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].frankWatered`, false)
    );
  },
};
