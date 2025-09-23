const {test,expect}=require('@playwright/test');

test('My First Test',async ()=>{
    expect(21).toBe(21);
})

test('My Secound',()=>{
    expect("Neeraj").toBe("Neeraj");
})

test('My THird',()=>{
    expect("Bandaru Neeraj").toContain('Neeraj');
    expect(true).toBeTruthy();
})

test('My Fourth',()=>{
    expect(false).toBeFalsy();
})

test('My Fifth',()=>{
    expect('Test user'.includes("user1")).toBeFalsy();
})

