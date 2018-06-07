import constants from '../../constants';

export default {
  id: constants.ITEM.TOILET_PAPER,
  name: 'A roll of loo paper',
  pattern: new RegExp('((the|a) )?(roll of )?(toilet paper|tp|loo paper|bog roll)$'),
  getDescription: state => 'A brand new roll of Who Gives a Crap toilet paper',
};
