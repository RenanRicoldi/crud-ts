module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@models': './src/models',
                '@src': './src/',
                '@controllers': './src/controllers',
                '@database': './src/database',
                '@views': './src/views',
                '@utils': './src/utils',
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}