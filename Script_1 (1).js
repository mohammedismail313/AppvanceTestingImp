/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/Login_Credentials.csv','HashDPL',0,'en_US');
setShadowDOM(true);
navigateTo("https://signin.ft.cayuse.com/login?tenant_id=e8dd2da8-4499-48dd-ab70-7308be56378d&redirect_uri=https%3A%2F%2Fesiriuspt.ft.cayuse.com%2Frrm%2Fapi%2Fauthentication%3Foriginal_uri%3Dhttps%3A%2F%2Fesiriuspt.ft.cayuse.com%2Frrm%2Fanimal-inventory%2Fexport-requests&response_type=CODE&state&nonce&auth_error=false");
//addSyntheticDPL("{ds}/Login_Credentials.csv",0);
var y="{ds}/Login_Credentials.csv";
var data=y;
while (){
   setValue(fallback(`byXPath('//*[@id="username"]')`),$Username);
   setValue(fallback(`byXPath('//*[@id="password"]')`),$Password);
   click(fallback(`submit("btn btn-primary submitButton-customizable")`));
   var y=y++;
}
(setValue(fallback(`byXPath('//*[@id="username"]')`,
   `textbox("form-control inputField-customizable")`,
   `byXPath('//*[@name="username"]')`,
   `textbox("username")`,
   `textbox("username")`,
   `byXPath("//input[@id='username']")`,
   `byXPath('//*[@class="form-control inputField-customizable"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/input')`,
   `byXPath("id('username')")`,
   `textbox({'type':'text'})`,
   `byJQuery('input[class="form-control inputField-customizable"]')`,
   `byJQuery('#username')`,
   `byJQuery('input[name="username"]')`,
   `byJQuery('input[value=""]')`),$Username);
setValue(fallback(`byXPath('//*[@id="password"]')`),$Password);
click(fallback(`submit("btn btn-primary submitButton-customizable")`,
   `byXPath('//*[@name="signInSubmitButton"]')`,
   `submit("signInSubmitButton")`,
   `submit("Sign in")`,
   `byXPath('//div/div/div/div[2]/div/form/input[2]')`,
   `byXPath('//*[@class="btn btn-primary submitButton-customizable"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/input[2]')`,
   `byXPath("/html[1]/body[1]/div[@class='container']/div[@class='modal-dialog']/div[@class='modal-content background-customizable modal-content-mobile']/div[@class='modal-body']/div[1]/form[@class='cognito-asf']/input[@class='btn btn-primary submitButton-customizable']")`,
   `submit({'type':'Submit'})`,
   `byJQuery('form[class="cognito-asf"] > input[class="btn btn-primary submitButton-customizable"]')`,
   `byJQuery('.cognito-asf > .btn.btn-primary.submitButton-customizable')`,
   `byJQuery('form[name="cognitoSignInForm"] > input[name="signInSubmitButton"]')`,
   `byJQuery('input[value="Sign in"]')`));
navigateTo("https://esiriuspt.ft.cayuse.com/rrm/animal-inventory/export-requests");
