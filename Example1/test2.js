room1 = game.createRoom("room1", "배경-1.png") // 방 생성
room2 = game.createRoom("room2","배경-6.png") // 방 생성

room1.door = room1.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room1.door.setWidth(136) // 크기 조절
room1.locateObject(room1.door, 1049, 300) // 문 배치

room1.door.onClick = function() { // door를 클릭했을 때
	if(room1.door.isClosed()){ // door가 closed 상태이면
		room1.door.open() // door의 상태를 open으로 바꿈
	} else if (room1.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room1.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room1.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room1.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room1.key = room1.createObject("key", "열쇠.png")
room1.key.setWidth(50)
room1.locateObject(room1.key, 500, 500)
room1.key.onClick = function(){
	room1.key.pick()
	printMessage('열쇠를 얻었다!')
}


room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room1) // room1으로 이동
}

room2.cupboard = room2.createObject("cupboard", "찬장-2-닫힘.png") // 찬장 생성
room2.cupboard.setWidth(250)
room2.locateObject(room2.cupboard, 800, 323)

room2.cupboard.onClick = function() { // 클릭했을 때
	if(room2.cupboard.isOpened()) { // Opened 상태인 경우
		room2.cupboard.close() // close
	} else if(game.getHandItem() == room1.key && room2.cupboard.isClosed()) { //Closed 상태인 경우
		room2.cupboard.open() // open
	} else { 
		// do nothing
	}
}

room2.cupboard.onOpen = function() {
	printMessage('찬장이 열림')
	room2.cupboard.setSprite("찬장-2-열림.png") // 열린 그림으로 변경
}

room2.cupboard.onClose = function() {
	room2.cupboard.setSprite("찬장-2-닫힘.png") // 닫힌 그림으로 변경
}

game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력