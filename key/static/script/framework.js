/**/
let framework={};

/**/
{
	let ua=window.navigator.userAgent;
	framework.isDeviceMobile=ua.match('Mobile')?true:false;
	framework.isBrowserSafari=ua.match('Safari')&&!ua.match('Chrome')&&!ua.match('Edg')?true:false;
};

/**/
{
	let docClass=window.document.documentElement.classList;
	if(framework.isDeviceMobile)docClass.add('frameworkDeviceMobile');
	if(framework.isBrowserSafari)docClass.add('frameworkBrowserSafari');
};