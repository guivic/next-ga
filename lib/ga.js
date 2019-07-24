import ReactGA from 'react-ga';

const defaultOptions = {
	GA_ID: process.env.GA_ID,
};

export const initGA = (options = defaultOptions) => {
	if (!window.GA_INITIALIZED && options.GA_ID) {
		console.log('GA init');
		ReactGA.initialize(options.GA_ID);
		window.GA_INITIALIZED = true;
	}
};

export const logPageView = () => {
	if (window.GA_INITIALIZED) {
		console.log(`Logging pageview for ${window.location.pathname}`);
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	}
};

export const logEvent = (category = '', action = '') => {
	if (window.GA_INITIALIZED) {
		if (category && action) {
			ReactGA.event({ category, action });
		}
	}
};

export const logException = (description = '', fatal = false) => {
	if (window.GA_INITIALIZED) {
		if (description) {
			ReactGA.exception({ description, fatal });
		}
	}
};
