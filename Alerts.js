describe('Alerts test',function() {  


it('Alerts sample ',function() {

browser.waitForAngularEnabled(false);
browser.get("http://qaclickacademy.com/practice.php");
element(by.id("confirmbtn")).click();

browser.switchTo().alert().dismiss().then(function()

{

browser.sleep(5000);
});










});
});