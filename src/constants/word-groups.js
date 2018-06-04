import _ from 'lodash';

const wordGroups = {
  VERB: {
    ASCEND: 'ascend|climb|go up|go upstairs',
    CHECK: 'check|inspect|look at|read',
    CONTACT: 'call|contact|ring|telephone',
    DESCEND: 'descend|go down|go upstairs',
    GET: 'acquire|get|grab|take',
    MOVE: 'go|move|run|walk|traverse',
  },
};

wordGroups.VERB.ALL = _.join(_.values(wordGroups.VERB), '|');

export default wordGroups;
