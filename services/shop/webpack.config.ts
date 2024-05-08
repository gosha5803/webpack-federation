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
}

export default (env: EnvVariables):Configuration => {
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
        port: env.port ?? 3001,
        platform: env.platform ?? 'desktop',
        bundleCheck: env.bundleCheck ?? false,
        loader: env.loader ?? 'esBuild'
    })

    config.plugins.push(new container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/AppRouter.tsx'
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