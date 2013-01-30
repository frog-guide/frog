basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/js/lib/angular/angular.min.js',
  'public/js/lib/angular/angular-*.js',
  'public/js/lib/jquery/*.js',
  'test/lib/angular/angular-mocks.js',
  'public/js/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
