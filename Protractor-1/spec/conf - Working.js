// conf.js
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  
  onPrepare: function(){
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
}
  
}