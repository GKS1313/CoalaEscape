room1 = game.createRoom("room1", "배경-1.png") // 방 생성

room1.door1 = room1.createObject("door1", "문-오른쪽-닫힘.png") // 문 생성
room1.door1.setWidth(136) // 크기 조절
room1.locateObject(room1.door1, 1049, 300) // 문 배치
room1.door1.lock()

room1.door1.key = room1.createObject("door1.key", "열쇠.png")
room1.door1.key.setWidth(50)
room1.locateObject(room1.door1.key, 500, 500)
room1.door1.key.onClick = function(){
	room1.door1.key.pick()
	printMessage('열쇠를 얻었다!')
}

room1.door1.onClick = function(){
	if (room1.door1.isLocked()){
		if (game.getHandItem() == room1.door1.key){
			room1.door1.unlock()
			printMessage("문이 열렸다")
		}
		else printMessage("문이 잠겨있다")
	}
	else if (room1.door1.isClosed()){
		room1.door1.open()
	} else if (room1.door1.isOpened()){
		game.clear()
	}
}


room1.door1.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room1.door1.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력