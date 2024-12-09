/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/Login_Credentials.csv','HashDPL',0,'en_US');
setShadowDOM(true);
navigateTo("https://signin.ft.cayuse.com/login?tenant_id=e8dd2da8-4499-48dd-ab70-7308be56378d&redirect_uri=https%3A%2F%2Fesiriuspt.ft.cayuse.com%2Frrm%2Fapi%2Fauthentication%3Foriginal_uri%3Dhttps%3A%2F%2Fesiriuspt.ft.cayuse.com%2Frrm%2Fanimal-inventory%2Fexport-requests&response_type=CODE&state&nonce&auth_error=false");
setValue(fallback(`byXPath('//*[@id="username"]')`),$Username);
doubleClick(fallback(`byXPath('//*[@id="password"]')`));
setValue(fallback(`byXPath('//*[@id="password"]')`),$Password);
click(fallback(`byXPath('//*[@name="signInSubmitButton"]')`));
verifyContainsText(fallback(`span("FT 1")`,
   `span("FT 1")`),"FT 1");
if (verifyContainsText (span("FT 1"),"FT 1")){
   var result="Valid user";
}
else {
   var result="invaid user";
}
setDescription("verifying user name");
log(result);
log($Username);
assertContainsText(fallback(`span(1, _in(submit("dropdownbars-site-dropdown-button")))`,
   `span(1, _in(submit("dropdownbars-site-dropdown-button")))`,
   `span(1, _in(submit({'aria-label':'Sites'})))`,
   `span("title[2]")`,
   `span("Site: Master")`),"Site: Master");
click(fallback(`span(1, _in(submit("dropdownbars-site-dropdown-button")))`));
setDescription("changing site from master to PT");
click(fallback(`span(0, _in(link("2222")))`,
   `span(0, _in(link("2222")))`,
   `span(0, _in(link({'id':'2222'})))`,
   `span("PT")`));
assertContainsText(fallback(`span(1, _in(submit("dropdownbars-site-dropdown-button")))`),"Site: PT");
wait(5000);
click(fallback(`byXPath('/html/body/div[3]/div/div/div[2]/button')`,
   `button("+ New Export Request")`,
   `button("bg-bluecayuse-600 border border-black/10 cursor-default dark:border-white/10 dark:outline-blue-500 dark:shadow-none forced-colors:outline-[Highlight] hover:bg-bluecayuse-400 outline outline-0 outline-blue-600 outline-offset-2 pressed:bg-bluecayuse-800 px-5 py-2 rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-center text-sm text-white transition")`,
   `byXPath("//button[@id='react-aria9683619779-:r4:']")`,
   `byXPath('//*[@class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-bluecayuse-600 hover:bg-bluecayuse-400 pressed:bg-bluecayuse-800 text-white outline-0"]')`,
   `byXPath('//*[text()="+ New Export Request"]')`,
   `byXPath("id('react-aria9683619779-:r4:')")`,
   `button({'data-hovered':'true'})`,
   `byJQuery('button[class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-bluecayuse-600 hover:bg-bluecayuse-400 pressed:bg-bluecayuse-800 text-white outline-0"]')`));
setDescription("click new export Request button");
doubleClick(fallback(`byXPath('//*[text()="+ New Export Request"]')`,
   `button("bg-bluecayuse-600 border border-black/10 cursor-default dark:border-white/10 dark:outline-blue-500 dark:shadow-none forced-colors:outline-[Highlight] hover:bg-bluecayuse-400 outline outline-0 outline-blue-600 outline-offset-2 pressed:bg-bluecayuse-800 px-5 py-2 rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-center text-sm text-white transition")`,
   `button("+ New Export Request")`,
   `byXPath("//button[@id='react-aria2755765167-:r4:']")`,
   `byXPath('//*[@class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-bluecayuse-600 hover:bg-bluecayuse-400 pressed:bg-bluecayuse-800 text-white outline-0"]')`,
   `byXPath('//*[text()="+ New Export Request"]')`,
   `byXPath('/html/body/div[3]/div/div/div[2]/button')`,
   `byXPath("id('react-aria2755765167-:r4:')")`,
   `button({'data-hovered':'true'})`,
   `byJQuery('button[class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-bluecayuse-600 hover:bg-bluecayuse-400 pressed:bg-bluecayuse-800 text-white outline-0"]')`),"+ New Export Request");
click(fallback(`button("bg-gray-100 border border-black/10 cursor-default dark:bg-zinc-600 dark:border-white/10 dark:hover:bg-zinc-500 dark:outline-blue-500 dark:pressed:bg-zinc-400 dark:shadow-none dark:text-zinc-100 forced-colors:outline-[Highlight] hover:bg-gray-200 outline outline-0 outline-blue-600 outline-offset-2 pressed:bg-gray-300 px-5 py-2 rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-center text-gray-800 text-sm transition")`,
   `button("Cancel")`,
   `byXPath("//button[@id='react-aria7625230554-:r1g:']")`,
   `byXPath('//*[@class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100 outline-0"]')`,
   `byXPath('//*[text()="Cancel"]')`,
   `byXPath('/html/body/div[3]/div/div[2]/div[2]/div/div/div/div[2]/div/div/div/div/button[2]')`,
   `byXPath("id('react-aria7625230554-:r1g:')")`,
   `button({'data-hovered':'true'})`,
   `byJQuery('button[class="outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100 outline-0"]')`));
((