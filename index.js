import withGA from './lib/withGA';
import { logEvent, logException, logPageView } from './lib/ga';

export default {
	withGA, logEvent, logException, logPageView,
};
export { withGA };
export { logEvent };
export { logException };
export { logPageView };
