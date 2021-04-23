//1-Spec.js
describe('Protractor Demo Application', function() {
it('to check the page title', function() {
browser.ignoreSynchronization = true;
browser.get('https://www.softwaretestingmaterial.com/');
browser.driver.getTitle().then(function(pageTitle) {
expect(pageTitle).toEqual('Software Testing Material');
//testing on 23 april 2021 12:04 pm
//testing on 23 april 2021 12:14 pm
});
});
});