import constants from '../../constants';
import get from 'lodash/get';
import interactions from './interactions';

export default {
  id: constants.SCENE.LIGHT_SIDE,
  name: 'The light side',
  pattern: new RegExp('(?:the )?light ?side'),
  defaultState: {
    codeFixed: false,
    designFixed: false,
    frankWatered: false,
    madeSale: false,
    passwordRecovered: false,
    inventory: [constants.ITEM.FRANK_THE_PLANT],
  },
  interactions,
  getDescription: state => {
    const sceneState = get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}]`, {});
    const isCodeFixed = get(sceneState, 'codeFixed', false);
    const isDesignFixed = get(sceneState, 'designFixed', false);
    const isPasswordRecovered = get(sceneState, 'passwordRecovered', false);

    // @TODO: Add this back in at some point
    // const isSaleMade = get(sceneState, 'madeSale', false);
    // - Angelo is answering so many calls that he is currently holding one phone to each ear${
    //   isSaleMade ? ' but somehow he is also giving you the thumbs up' : ''
    // }<br />

    return `A long bright room extends away from you. Light pours in from the large windows on the south side of the room.
    There are many white desks covered with various technological adornments and a plant.
    There’s a general buzz of activity and the scene is punctuated by a spanish-sounding song that seems to be constantly restarting.<br /><br />
    There’s a <em>lot</em> going on in here:<br />
     - Luka is clearly pretending to be working<br />
     - ${
       isCodeFixed
         ? 'Sean is churning through code so quickly his fingers are blurred'
         : 'Sean is pulling his hair out over something that looks tricky'
     }<br />
     - ${
       isPasswordRecovered
         ? 'James is testing something... with a drill?'
         : 'James looks frustrated and his mechanical keyboard typing is deafening'
     }<br />
     - ${isDesignFixed ? 'Harley looks satisfied with a job well done' : 'Harley is pondering something'}`;
  },
};
