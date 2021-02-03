// Simulate an HTTP redirect:

if(!window.location.search.includes("?disable_cache")){
	window.location.replace(`${window.location.pathname}?disable_cache=${Math.floor(Math.random()*10000)}`);
}
else{
	history.replaceState({},document.getElementsByTagName("title")[0].textContent, window.location.pathname);
}