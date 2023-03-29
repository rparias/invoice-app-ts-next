const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	// disable css-modules component styling
	webpack(config) {
		config.module.rules.forEach((rule) => {
			const { oneOf } = rule;
			if (oneOf) {
				oneOf.forEach((one) => {
					if (!`${one.issuer?.and}`.includes('_app')) return;
					one.issuer.and = [path.resolve(__dirname)];
				});
			}
		});
		return config;
	},
};

module.exports = nextConfig;
