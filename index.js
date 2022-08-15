var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var n=0;
//var port = process.env.PORT || 5000

app.get('/',function(req,res){

	res.sendFile(__dirname + '/index.html');			

});

io.on('connection',function(socket){
	socket.on('chat message',function(msg){
		//console.log('message : ' +msg);
		io.emit('chat message',msg);
	});
	//n=n+1;
	//console.log("New Client-"+n+" Connected.");
});



http.listen(3000,function(){
//http.listen(process.env.PORT||5000,function(){

	console.log('Running on port 5000');

});
	