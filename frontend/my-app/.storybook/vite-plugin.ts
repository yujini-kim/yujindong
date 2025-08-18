import { PluginOption } from 'vite'
import svgr from 'vite-plugin-svgr'

export function getVitePlugins(): PluginOption[] {
    return [
        svgr({
            include: '**/*.svg',
            svgrOptions: {
                icon: true,
                exportType: 'default',
            },
        }),
    ] as PluginOption[]
}
