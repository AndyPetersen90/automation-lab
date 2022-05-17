const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Movie List Functionality', async () => {

    await driver.findElement(By.xpath(`//input`)).sendKeys(`Toy Story`);
    await driver.findElement(By.xpath(`//button[text()='Add']`)).click();
    await driver.sleep(1000)

    await driver.findElement(By.xpath(`//input`)).sendKeys(`John Wick`);
    await driver.findElement(By.xpath(`//button[text()='Add']`)).click();
    await driver.sleep(1000)


    await driver.findElement(By.xpath(`//li/span[text()='Toy Story']`)).click();
    await driver.sleep(1000)

    const movie = await driver.findElement(By.xpath(`//main/aside[text()='Toy Story watched!']`))
    const displayed =  movie.isDisplayed()
    expect(displayed).toBeTruthy();
    await driver.sleep(1000);

    await driver.findElement(By.xpath(`//li/span[text()='John Wick']`)).click();
    await driver.sleep(1000)

    await driver.findElement(By.id(`JohnWick`)).click();
    await driver.sleep(1000)
    
})
