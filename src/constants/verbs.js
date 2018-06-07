import _ from 'lodash';

const verbs = {
  ASCEND: 'ascend|climb|go up|go upstairs',
  CHECK: 'check|describe|inspect|look at|read',
  CLOSE: 'close|shut',
  CONTACT: 'call|contact|ring|telephone',
  DESCEND: 'descend|go down|go upstairs',
  DESCRIBE: 'describe',
  ENTER: 'enter|go in',
  GET: 'acquire|get|grab|take',
  KNOCK: 'knock',
  MEOW: 'meow',
  MOVE: 'go|move|run|walk',
  OPEN: 'open',
  ORDER: 'ask for|buy|get|order',
  RING: 'ring',
  TALK: 'chat( to|with)?|talk( to|with)?|speak( to|with)?',
  TURN_OFF: 'turn off|shut down|unplug|power down|switch off|kill',
  USE: 'interact with|use',
  WAIT: 'wait',
  YELL: 'call out|shout|yell',
};

verbs.ALL = _.join(_.values(verbs), '|');

export default verbs;
