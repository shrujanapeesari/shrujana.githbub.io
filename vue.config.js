
module.exports = {
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'My app'
            return args

        })

    },
    pwa: {
        manifestOptions: {
            background_color: 'orange'
        },
        name: 'My app',
        themeColor: 'steelblue',
        workboxOptions: {
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    options: {
                        networkTimeoutSeconds: 5
                    },
                    urlPattern: 'https://api.openbrewerydb.org/breweries?per_page=50'
                }
            ]
        }
    }
}