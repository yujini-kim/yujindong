const nextConfig = {
    compiler: { styledComponents: true },
    eslint: { ignoreDuringBuilds: true },

    webpack(config) {
        const assetRule = config.module.rules.find(
            (rule) => rule && rule.test && rule.test.test && rule.test.test('.svg'),
        )
        if (assetRule) {
            assetRule.exclude = /\.svg$/i
        }

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {},
                },
            ],
        })

        return config
    },
}

module.exports = nextConfig
