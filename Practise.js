describe('practise test',function() {  

    function selectItems(product)
    {
        element.all(by.tagName("app-card")).each(function(item)
        {
           item.element(by.css("h4 a")).getText().then(function(text)
           {
               if(text == product)
               {
                   item.element(by.css("button[class='btn btn-info']")).click();
               }

           })
        })
    }

    it('practise sample ',function() {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("vamsi");
        element(by.name("email")).sendKeys("vamsibanda1434@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("vamsi@1434");
        element(by.id("exampleCheck1")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element(by.id("inlineRadio1")).click();
        element(by.buttonText("Submit")).click().then(function()
        {
            element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(text)
            {
                console.log(text);
            })
        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("v").then(function()
        {
            element(by.css("[class='alert alert-danger']")).getText().then(function(text)
            {
                console.log(text);
            })
        })
        element(by.linkText("Shop")).click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        element(by.partialLinkText("Checkout")).click().then(function()
        {
            
            browser.sleep(5000);


        })
        element.all(by.css("table > tbody > tr")).count().then(function(count) {
            console.log(count);
        })
     element(by.partialLinkText("Checkout")).getText().then(function(text)
        {var res=text.split("(");
        var a=Number(res[1].trim().charAt(0));
        
        
        var b=a+1;
        console.log(b);
        expect(res[1].trim().charAt(0)).toBe(b);
        })
        
        







    })
})