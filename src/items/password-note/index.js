import constants from '../../constants';

export default {
  id: constants.ITEM.PASSWORD_NOTE,
  name: 'A handwritten note',
  pattern: new RegExp('((the|a) )?(handwritten )?note$'),
  getDescription: state =>
    `A handwritten note on an old post-it note which has lost its stickiness. It reads:<br />
    .. -. .-.. .. --. .... - ....- .-.. -.-- ..-.`,
};
