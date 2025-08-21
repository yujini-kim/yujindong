const nextConfig = {
    compiler: { styledComponents: true },
    eslint: { ignoreDuringBuilds: true },

    webpack(config) {
        // 1) 모든 rule과 oneOf에서 .svg를 기존 asset 처리에서 제외
        const touch = (r) => {
            if (r?.test?.test && r.test.test('.svg')) r.exclude = /\.svg$/i
        }
        config.module.rules.forEach((rule) => {
            touch(rule)
            if (Array.isArray(rule.oneOf)) rule.oneOf.forEach(touch)
        })

        // 2) SVGR rule: JS/TS에서 import한 .svg를 React 컴포넌트로
        const svgrRule = {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] }, // '?url' 요청은 제외
            use: [
                {
                    loader: require.resolve('@svgr/webpack'),
                    options: { svgo: true, titleProp: true, ref: true },
                },
            ],
        }

        // 3) oneOf가 있으면 맨 앞에, 없으면 일반 rules에 추가
        const oneOf = config.module.rules.find((r) => Array.isArray(r.oneOf))
        if (oneOf) oneOf.oneOf.unshift(svgrRule)
        else config.module.rules.push(svgrRule)

        // 4) '?url'로 불렀을 땐 파일 URL로 반환 (선택)
        config.module.rules.push({
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: /url/,
        })

        console.log('[SVGR] enabled')
        return config
    },
}
module.exports = nextConfig
