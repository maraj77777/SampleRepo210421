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
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
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
   
   onComplete: function() {
     var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();
capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');
var HTMLReport = require('protractor-html-reporter-2');
testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './',
            outputFilename: 'ProtractorTestReport',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('tests/guitest-xmloutput.xml', testConfig);
    });
 },
}