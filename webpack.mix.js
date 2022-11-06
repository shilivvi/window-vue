const mix = require('laravel-mix');

mix
  .alias({ '@': 'resources/js' })
  .js('resources/js/app.js', 'public/js')
  .vue(3)
  .sass('resources/scss/app.scss', 'public/css')
  .options({
    postCss: [
      require('autoprefixer'),
      require('postcss-sort-media-queries')
    ]
  })
  .copy('resources/bootstrap/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
  .copyDirectory('resources/img', 'public/img');
