// Create the request objectvar xml = new XMLHttpRequest();// We're going to wait for a request for 5 seconds, before giving upxml.timeout = 5000;//Listen for the timeout eventxml.addEventListener('timeout', onTimeOut, false);// Open the asynchronous POST requestxml.open('GET', '/some/url.cgi', true);// Establish the connection to the serverxml.send();