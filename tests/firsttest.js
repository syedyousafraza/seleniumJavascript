const { Builder , By, Key } = require ("selenium-webdriver");



async function testcase(){
// Open fire Fox 

let driver  = await new Builder().forBrowser("firefox").build();
//let driver = await new Builder().forBrowser("chrome").build();

// Navigate to URL 
await driver.get("https://lambdatest.github.io/sample-todo-app/");
const title = await driver.findElement(By.xpath("//h2[normalize-space()='LambdaTest Sample App']")).getText(); 

console. log(title ) ;

const actualTitle = "LambdaTest Sample App" ;

if(actualTitle == title) {
    console. log("Test is pass" ) ;
}
else{
    console.log("Fail test")
}

// Input some Date 
await driver.findElement(By.id("sampletodotext")).sendKeys("Yousaf to-do List", Key.RETURN);



// Close the browser 
//driver.close();

}

testcase();








