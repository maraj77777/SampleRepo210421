// conf.js
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  
  onPrepare: function() {
	  const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
      // Add a screenshot reporter and store screenshots to `/tests/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tests/screenshots'
      }).getJasmine2Reporter());
	  var jasmineReporters = require('jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
             consolidateAll: true,
             filePrefix: 'tests/guitest-xmloutput.xml',
             savePath: '.'
}));
   },
   
   
}