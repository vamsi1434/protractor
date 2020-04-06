describe('Frames',function() {  


    it('Frames basic',function() {
    

    
    browser.waitForAngularEnabled(false);
    
    browser.driver.manage().window().maximize();
    
    browser.get("http://qaclickacademy.com/practice.php");
    browser.switchTo().frame(0);
    element(by.css("a[href*='sign_in']")).getText().then(function(text)
    {
    
    console.log(text);
    });
    
    
    
    
    
    
    
    
    
    });
    
     
    
    
    
});