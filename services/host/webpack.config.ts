import { Configuration, container } from "webpack"
import { BuildLoader, BuildMode, BuildPaths, BuildPlatform, buildWebpack } from "@packages/build-config/src/index"
import path from 'path'
import PackageJson from './package.json'

interface EnvVariables {
    mode?: BuildMode
    port: number
    platform?: BuildPlatform
    bundleCheck?: boolean
    loader: BuildLoader
    SHOP_REMOTE_URL?: string
    ADMIN_REMOTE_URL?: string

}

export default (env: EnvVariables):Configuration => {
    var SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
    var ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'

    var paths:BuildPaths = {
        public: path.resolve(__dirname, 'public'),
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }
    
    var config = buildWebpack({
        paths,
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        platform: env.platform ?? 'desktop',
        bundleCheck: env.bundleCheck ?? false,
        loader: env.loader ?? 'esBuild'
    })

    config.plugins.push(new container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
        },

        shared: {
            ...PackageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: PackageJson.dependencies['react']
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: PackageJson.dependencies['react-router-dom']
            },
            'react-dom': {
                eager: true,
                requiredVersion: PackageJson.dependencies['react-dom']
            }
        }
    }))

    return config
}