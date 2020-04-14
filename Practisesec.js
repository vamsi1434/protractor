describe('practise test',function() { 
    var total = 0;
    

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
    
   
    
        
       
            for(rowNum=1;rowNum<=2;rowNum++)
             {
               element(by.xpath("/html/body/app-root/app-shop/div/div/div/table/tbody/tr["+rowNum+"]/td[4]/strong")).getText().then(function(text)
                {
               
               
                
                    
                    console.log(text);
                    var price=text.split(".");
                    var a=Number(price[1].trim());
                    console.log(a);
                    total = total + a;
                    console.log(total);

                  
                    
                    
                })    
            }

      
    

                    element(by.xpath("/html/body/app-root/app-shop/div/div/div/table/tbody/tr[3]/td[5]")).getText().then(function(text)
                    {
                        console.log(text);
                        var b=text.split(".");
                        var finalprice=Number(b[1].trim());
                        console.log(finalprice);
                        if(total==finalprice)
                        {
                            console.log("sum of the price  of products is equals to the final price")
                        }
                        else
                        {
                            console.log("sum of the price  of products is not equals to the final price")
                        }
                    


                   })




                  
        

                
  
    })
})
