import _ from 'lodash';

const wordGroups = {
  VERB: {
    ASCEND: 'ascend|climb|go up|go upstairs',
    CHECK: 'check|inspect|look at|read',
    CONTACT: 'call|contact|ring|telephone',
    DESCEND: 'descend|go down|go upstairs',
    ENTER: 'enter|go in',
    GET: 'acquire|get|grab|take',
    MEOW: 'meow',
    MOVE: 'go|move|run|walk|traverse',
    OPEN: 'open',
    ORDER: 'ask|buy|get|order',
    WAIT: 'wait',
  },
};

wordGroups.VERB.ALL = _.join(_.values(wordGroups.VERB), '|');

export default wordGroups;
