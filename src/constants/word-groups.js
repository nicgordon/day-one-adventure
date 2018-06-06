import _ from 'lodash';

const wordGroups = {
  VERB: {
    ASCEND: 'ascend|climb|go up|go upstairs',
    CHECK: 'check|inspect|look at|read',
    CONTACT: 'call|contact|ring|telephone',
    DESCEND: 'descend|go down|go upstairs',
    DESCRIBE: 'describe',
    ENTER: 'enter|go in',
    GET: 'acquire|get|grab|take',
    MEOW: 'meow',
    MOVE: 'go|move|run|walk',
    OPEN: 'open',
    ORDER: 'ask for|buy|get|order',
    RING: 'ring',
    TALK: 'talk( to|with)?|speak( to|with)?',
    USE: 'interact with|use',
    WAIT: 'wait',
    YELL: 'call out|shout|yell',
  },
};

wordGroups.VERB.ALL = _.join(_.values(wordGroups.VERB), '|');

export default wordGroups;
