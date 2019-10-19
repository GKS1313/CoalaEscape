room1 = game.createRoom("room1", "배경-1.png") // 방 생성
room1_1 = game.createRoom("room1_1", "배경-2.png")
room2 = game.createRoom("room2","배경-6.png")
room3=game.createRoom("room3", "배경-3.png")

function Door(room, name, closedImage, openedImage, connectedTo)
{
	this.room=room
	this.name=name
	this.closedImage=closedImage
	this.openedImage=openedImage
	this.connectedTo=connectedTo
	
	this.obj=room.createObject(name, closedImage)
}
Door.prototype.onClick=function(){
	if(this.obj.isClosed())
	{
		this.obj.open()
	}
	else if(this.obj.isOpened())
	{
		game.move(this.connectedTo)	
	}
}
Door.prototype.onOpen=function()
{
	this.obj.setSprite(this.openedImage)
}

room1.door1=new Door(room1, 'door1', '문-오른쪽-닫힘.png', '문-오른쪽-열림.png', room2)
room1.door1.setWidth(150)	//왜 안됨
game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력