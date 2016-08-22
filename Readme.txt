Node.js is a server-side JavaScript platform. Introduced by Ryan Dahl in 2009.

At a high level, it is comprised of 3 building blocks:

1) libuv:
A high performance, cross-platform evented I/O library.
Allows to replace or abstract away a number of UNIX-only libraries.
Lib UV was built as a part of porting Node.js to the Windows environment.


2) V8
Google's JS engine, the same engine found in Chrome browser.
The Node team makes every effort to leverage V8 out of the box within Node., which makes it easier to include updated versions V8 at every release.

3) Custom JS and C++ code developed specifically for Node.

A tool called NVM allows you to have multiple versions installed and switch between them. In 2012, it waqs available for Linux and Mac only. Maybe there is a Windows versions now, maybe...

Cloud9 IDE is pretty cool for developing Node apps, even the free version is quite enough.

---- Node's Event Loop ----

One key feature Node brings from the browser to the server-side is the event loop. In the browser, the event loop constantly listens for DOM events such as clicks and key presses.

Similarly, Node's event loop is listening for events on the server side. These can be externally generated such as HTTP requests or TCP connections, or they can be timers and other internal events generated by your Node app itself.

Node itself doesn't pause and wait for any requests to complete. It simply continues to react to events as they arrive. It is a non-blocking, event driven approach. It doesn't get blocked while waiting for a response and can serve further requests. This non-blocking approach is fundamental to Node and differentiates it from the more traditional server-side programming model that requires to manage multiple threads to achieve this type of concurrency.


---- Node Conventions for Writing Async Code ----

Typical approach:

var conn = getDbConnection(connectionString);
var stmt = conn.getStatement();
var results = stmt.executeQuery(sqlQuery);
for (var i = 0; i < results.length; i++){
	// print results[i]
}

An async, non-blocking approach:

getDbConnection(connectionString, function(err, conn){
	conn.createStatement(function(err, stmt){
		var results = stmt.executeQuery(sqlQuery);
		results.on('row', function(result){
			// print result
		});
	});
});

getDbConnection takes two parameters, the second one is a function. "Get a connection to the DB, and once you have it, call this function and pass it the connection you just created". By doing this, we leave Node free to do other work while waiting for the connection to be established.
createStatement is written similarly. These two functions are examples of using callbacks, code that will run asyncly.

executeQuery function returns a value, which is a special object called "event emitter". We are telling Node to invoke a function when each row is emitted by the results object.

Some conventions:

var handleResults = function(err, results)
{ // if error is undefined or falsy
  // do something with the results
};
getStuff(regularInputParam, handleResults);

handleResults is the callback function. It is the last parameter in async func call.

For simple callbacks or the ones that are used only once, instead of a named function, you might use a simple anonymous inline functions.

getStuff(regularInputParam, function(err, results)
{ // if error is undefined or falsy
  // do something with the results
});

Anonymous function also benefit from JS's use of closures:

someOtherFunc(function(err, stuffToGet){
	var foo = 23;
	getStuff(regularInputParam, function(err, results)
	{ // if error is undefined or falsy
	  // do something with the results and foo
	});
});