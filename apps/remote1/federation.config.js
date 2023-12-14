const {withNativeFederation} = require('@angular-architects/native-federation/config');
const {createNfConfig} = require('../nf');

module.exports = withNativeFederation(
	createNfConfig('psvod-deeper-analysis-new-combined', {
		'./appContainerRoutes': './apps/remote1/src/app/app-container.routes.ts',
	})
);
