describe('Protractor test', function() {
    it('Elements', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      element(by.model("first")).sendKeys("3");
      element(by.model("second")).sendKeys("5");
      element(by.id("gobutton")).click();
      element(by.model("first")).sendKeys("4");
      element(by.model("second")).sendKeys("6");
      element(by.id("gobutton")).click();
      element(by.model("first")).sendKeys("5");
      element(by.model("second")).sendKeys("7");
      element(by.id("gobutton")).click();

      expect( element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
      element(by.css("h2[class='ng-binding']")).getText().then(function(text){
        console.log(text);
      });
     element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
       console.log(text);
     });
     element.all(by.repeater("result in memory")).each(function(item)
     {
       item.element(by.css("td:nth-child(3)")).getText().then(function(text){
         console.log(text);

     })
    })


      
    });
});