import generateGuid from '../../utils/generate-guid';

export default () => {
  ga('create', 'UA-120847400-1', 'auto');
  const guid = generateGuid();
  ga('set', 'userId', guid);
  ga('send', 'pageview');
};
