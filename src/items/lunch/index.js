import constants from '../../constants';

export default {
  id: constants.ITEM.LUNCH,
  name: 'Someone’s lunch',
  pattern: new RegExp('(the )?lunch$'),
  getDescription: state => `It’s someone’s delicious lunch you bastard. Their mother probably made them this.`,
};
