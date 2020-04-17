const socket = io()
socket.on('return', function(data){
    alert(data)
})
socket.on('createImg1', function() {
    var div = document.createElement('div')
    content.append(div)
})
socket.on('createImg2', function() {
    var div = document.createElement('div')
    content.append(div)
})
socket.on('createImg3', function() {
    var div = document.createElement('div')
    content.append(div)
})
socket.on('createImg4', function() {
    var div = document.createElement('div')
    content.append(div)
})
socket.on('createImg5', function() {
    var div = document.createElement('div')
            content.append(div)
        })
const content = document.getElementById('content')