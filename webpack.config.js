module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.component.jsx',
      Nav: 'app/components/Nav.component.jsx',
      Weather: 'app/components/Weather.component.jsx',
      About: 'app/components/About.component.jsx',
      Examples: 'app/components/Examples.component.jsx',
      WeatherForm: 'app/components/WeatherForm.component.jsx',
      WeatherResult: 'app/components/WeatherResult.component.jsx',
      // openWeatherMap: 'app/api/openWeatherMap.jsx'
      getTemp: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
