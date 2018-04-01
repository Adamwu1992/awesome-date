import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output: {
        file: './rollup/bundle.js',
        format: 'umd',
        name: 'AwesomeDate'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};