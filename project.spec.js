import {test,expect} from'@playwright/test'

test("sauce Demo", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/");
await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
await expect(page).toHaveTitle("Swag Labs");
});

test("visible", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
});

test("Login Button visibility", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
});

test("checking Headings", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByRole('heading', { name: 'Accepted usernames are:' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Password for all users:' })).toBeVisible();
});

test("LOGIN page", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole("button",{name:"LOGIN"}).click();
});

test("second page", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");
    });

    test("second page2", async({page})=>{
       
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await expect(page.getByText('Products')).toBeVisible();
        await expect(page.locator('.peek')).toBeVisible();
    });


    test("checking social media logo", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await expect(page.getByText('Twitter')).toBeVisible();
        await expect(page.getByText('Facebook')).toBeVisible();
        await expect(page.getByText('LinkedIn')).toBeVisible();
    });

    test("Product Sorting", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await page.getByRole('combobox').click();
        await page.locator('div').filter({ hasText: /^ProductsName \(A to Z\)Name \(Z to A\)Price \(low to high\)Price \(high to low\)$/ }).first().click();

    });

    test("clicking various products", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
        await page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
        await page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();

    });


    test("checking url and title", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory-item.html?id=4");
        await expect(page).toHaveTitle("Swag Labs");
    });

    test("checking buttons", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await expect(page.getByRole('button', { name: '<- Back' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'ADD TO CART' })).toBeVisible();
    });

    test("adding product to cart", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
    });

    test("Removing products from cart", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.getByRole('button', { name: 'REMOVE' }).click();
 });

    test("Logout", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    });