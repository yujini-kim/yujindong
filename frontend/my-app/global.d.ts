declare module '*.svg' {
    import * as React from 'react'
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default ReactComponent
}

interface Window {
    Kakao: any
}

declare module 'kakao-js-sdk' {
    const Kakao: {
        init: (key: string) => void
        isInitialized: () => boolean
        Link: {
            sendDefault: (options: any) => void
        }
    }
    export default Kakao
}
