import React from 'react';
import { initGA, logPageView } from './ga';

export default (Component) => class withGA extends React.Component {
	static async getInitialProps(appContext) {
		let appProps = {};
		if (typeof Component.getInitialProps === 'function') {
			appProps = await Component.getInitialProps(appContext);
		}

		return {
			...appProps,
		};
	}

	componentDidMount() {
		initGA();
		logPageView();
	}

	render() {
		return <Component {...this.props} />;
	}
};
