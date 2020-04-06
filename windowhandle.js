describe('window handles',function() {  


    it('switch between windows',function() {
      browser.waitForAngularEnabled(false);
    browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("openwindow")).click().then(function()
       {
            browser.getTitle().then(function(title)
           {
             console.log(title+"page title before switching");
           })

           browser.getAllWindowHandles().then(function(handles)
           {
             browser.switchTo().WindowHandles[1]);
             console.log(title+"pagetitle after switching")
           })
        })  
    

    })
})



    