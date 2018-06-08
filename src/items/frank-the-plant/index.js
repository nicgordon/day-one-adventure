import constants from '../../constants';

export default {
  id: constants.ITEM.FRANK_THE_PLANT,
  name: 'Frank the plant',
  pattern: new RegExp('frank|(the )?plant'),
  getDescription: state => `Frank’s a warrior. A loyal companion. An institution! He’s also a malnourished plant.`,
};
