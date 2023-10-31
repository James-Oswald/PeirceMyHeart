import {test, expect} from "@playwright/test";

test("help", async ({page}) => {
    //test on local site instead of production site
    await page.goto("/");

    const canvas = page.locator("#canvas");
    await page.getByTitle("Cut Mode").click();
    await canvas.dragTo(canvas, {
        sourcePosition: {x: 200, y: 200},
        targetPosition: {x: 300, y: 300},
    });

    await expect(page.locator("#graphString")).toHaveText("[()]");
});

test("A or B", async ({page}) => {
    //test on local site instead of production site
    await page.goto("/");

    const canvas = page.locator("canvas");
    await page.getByTitle("Cut Mode").click();

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 100, y: 150},
        targetPosition: {x: 1200, y: 700},
    });

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 250, y: 250},
        targetPosition: {x: 500, y: 500},
    });

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 600, y: 420},
        targetPosition: {x: 900, y: 550},
    });

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 550, y: 400},
        targetPosition: {x: 950, y: 600},
    });

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 300, y: 300},
        targetPosition: {x: 450, y: 450},
    });

    await page.getByTitle("Atom Mode").click();

    await canvas.click({
        position: {x: 350, y: 350},
    });

    await page.getByTitle("Atom Mode").press("B");

    await canvas.click({
        position: {x: 700, y: 500},
    });

    await page.getByTitle("Atom Mode").press("C");

    await canvas.click({
        position: {x: 350, y: 400},
    });

    await expect(page.locator("#graphString")).toHaveText("[(((A C)) ((B)))]");

    //const downloadPromise = page.waitForEvent("download");
    //await page.keyboard.down("Control");
    //await page.keyboard.press("s");
    //await page.keyboard.up("Control");
    //const download = await downloadPromise;
    //await download.saveAs("./" + download.suggestedFilename());

    //All of these should fail, and the canvas should remain the same.
    await page.getByTitle("Cut Mode").click();

    await canvas.dragTo(canvas, {
        sourcePosition: {x: 300, y: 300},
        targetPosition: {x: 600, y: 600},
    });

    await page.getByTitle("Atom Mode").click();

    await page.getByTitle("Atom Mode").press("D");
    await canvas.click({
        position: {x: 350, y: 350},
    });

    await page.getByTitle("Atom Mode").press("E");
    await canvas.click({
        position: {x: 550, y: 550},
    });

    await expect(page.locator("#graphString")).toHaveText("[(((A C)) ((B)))]");
});
