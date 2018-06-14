import join from 'lodash/join';
import values from 'lodash/values';

const verbs = {
  ASCEND: 'ascend|climb|go up|go upstairs',
  CHECK: 'check|describe|inspect|look at|read',
  CLOSE: 'close|shut',
  CONTACT: 'call|contact|ring|telephone',
  DESCEND: 'descend|go down|go upstairs',
  DESCRIBE: 'describe',
  DISCARD: 'discard|drop|place|put|remove|throw|throw away',
  ENTER: 'enter|go in',
  GET: 'acquire|get|grab|take',
  GIVE: 'donate|give|offer|pass',
  KNOCK: 'knock',
  MEOW: 'meow',
  MOVE: 'go|move|run|walk',
  OPEN: 'open',
  ORDER: 'ask for|buy|get|order',
  RING: 'ring',
  TALK: 'chat(?: to|with)?|talk(?: to|with)?|speak(?: to|with)?',
  TURN_OFF: 'turn off|shut down|unplug|power down|switch off|kill',
  USE: 'interact with|use',
  WAIT: 'wait',
  YELL: 'call out|shout|yell',
};

verbs.ALL = join(values(verbs), '|');

export default verbs;
