class ApiUtils 
{
    constructor (apiContext)
    {
        this.apiContext = apiContext;
    }
    async getToken ()
    {
    const loginResponse =  await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    { 
     data:loginPayLoad 
   }) // 200, 201,
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json
   token = loginResponseJson.token;
    console.log(token);
    return token;
}  
     
}
module.exports = {ApiUtils};