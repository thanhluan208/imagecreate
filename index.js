var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var users = [];
var player1,player2,player3,player4,player5,player6,player7
var rand1, rand2, rand3, rand4, rand5, rand6, rand7

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let test = ["king","villager","wolf","wolf","wolf","seer","hunter"];
shuffle(test)
console.log(test)
rand1 = test[1]
rand2 = test[2]
rand3 = test[3]
rand4 = test[4]
rand5 = test[5]
rand6 = test[6]
rand7 = test[0]
console.log(rand1)


io.on('connection', function(socket) {
    users.push(socket.id)
    player1 = users[0]
    player2 = users[1]
    player3 = users[2]
    player4 = users[3]
    player5 = users[4]
    player6 = users[5]
    player7 = users[6]
    io.to(player1).emit('return',"you are" + " " + rand1)
    if (rand1 == "king")
    {
        io.to(player1).emit('createImg1')
    }
    if ( rand1 == "wolf")
    {
        io.to(player1).emit('createImg2')
    }
    if ( rand1 == "hunter")
    {
        io.to(player1).emit('createImg3')
    }
    if ( rand1 == "seer")
    {
        io.to(player1).emit('createImg4')
    }
    if ( rand1 == "villager")
    {
        io.to(player1).emit('createImg5')
    }
    io.to(player2).emit('return',"you are" + " " + rand2)
    io.to(player3).emit('return',"you are" + " " + rand3)
    io.to(player4).emit('return',"you are" + " " + rand4)
    io.to(player5).emit('return',"you are" + " " + rand5)
    io.to(player6).emit('return',"you are" + " " + rand6)
    io.to(player7).emit('return',"you are" + " " + rand7)
})


http.listen(8000, function () {
    console.log('Server started!')
});