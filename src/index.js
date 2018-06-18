import attachDocumentListeners from './game/attach-document-listeners';
import attachDomElementListeners from './game/attach-dom-element-listeners';
import initCommandListeners from './game/init-command-listeners';
import initGoogleAnalytics from './game/init-google-analytics';
import makeStoreSubscriber from './game/make-store-subscriber';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './styles/reset.css';
import './styles/base.css';
import './styles/main.css';

console.info('Checking the source kinda ruins the fun don’t you think?');

initGoogleAnalytics();

// Add document handlers
attachDocumentListeners();

// Add component handlers
initCommandListeners(store);
attachDomElementListeners(store);

// Add store subscriptions
const storeSubscriber = makeStoreSubscriber(store);
store.subscribe(storeSubscriber);

registerServiceWorker();

// Basically, do the first render
storeSubscriber();
