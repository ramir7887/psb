const CracoLessPlugin = require("craco-less");
module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#EA5614",
							"@border-radius-base": "5px",
							"@font-size-base": "16px",
							"@menu-highlight-color": "var(--primary-color)",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
