room1 = game.createRoom("room1", "배경-1.png") // 방 생성
room1_1 = game.createRoom("room1_1", "배경-2.png")
room2 = game.createRoom("room2","배경-6.png")
room3=game.createRoom("room3", "배경-3.png")


//방1 문1
room1.door1=room1.createObject("door1", "문-오른쪽-닫힘.png")
room1.door1.setWidth(150)
room1.locateObject(room1.door1, 1050, 280)
room1.door1.lock()

room1.door1.onClick = function() { // door를 클릭했을 때
	if(room1.door1.isClosed()){ // door가 closed 상태이면
		room1.door1.open() // door의 상태를 open으로 바꿈
	} else if (room1.door1.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room1.door1.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room1.door1.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room1.door1.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room1.keypad = room1.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room1.keypad.setWidth(50) // 크기 조절
room1.locateObject(room1.keypad, 930, 250) // 위치 변경

room1.keypad.onClick = function() {
	printMessage("올해는 몇 년도?")
	showKeypad("number", "1000" , function(){ // 키패드 1 - 숫자4자리
		room1.door1.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

//방1 문2
room1.door2=room1.createObject("door2", "문-왼쪽-닫힘.png")
room1.door2.setWidth(150)
room1.locateObject(room1.door2, 200, 230)
room1.door2.close()

room1.door2.onClick=function()
{
	if(room1.door2.isClosed())
	{
		room1.door2.open()
		room1.door2.setSprite("문-왼쪽-열림.png") // 열린 문으로 변경
		printMessage("문이 열렸다")
	}
	else if(room1.door2.isOpened())
	{
		game.move(room1_1)
	}
}

//방1_1 문

room1_1.door=room1_1.createObject("door", "문-오른쪽-닫힘.png")
t=150
room1_1.door.setWidth(t)
room1_1.locateObject(room1_1.door, 1050, 260)
room1_1.door.close()
room1_1.door.onClick=function()
{
	t=t-30
	room1_1.door.setWidth(t)
	printMessage("?")
	if(t<=30)
	{
		room1_1.door.hide()
		printMessage("??")
		room1_1.kid.show()
	}
	
}

//아이
room1_1.kid=room1_1.createObject("kid", "닭.png")
room1_1.kid.setWidth(50)
room1_1.locateObject(room1_1.kid,750, 500)
room1_1.kid.close()
room1_1.kid.hide()

room1_1.kid.onClick=function()
{
	if(room1_1.kid.isClosed())
	{
		room1_1.kid.open()
		room1_1.scissors.show()		
	}			
}

//가위
room1_1.scissors=room1_1.createObject("scissors", "가위.png")
room1_1.scissors.setWidth(60)
room1_1.scissors.hide()
room1_1.locateObject(room1_1.scissors, 700, 530)

room1_1.scissors.onClick = function() {
	room1_1.scissors.pick() // pick하면 Object가 인벤토리로 이동
	printMessage("가위를 얻었다!")
}

//선반
room1_1.shelf=room1_1.createObject("shelf", "선반-좌.png")
room1_1.shelf.setWidth(200)
room1_1.locateObject(room1_1.shelf, 400, 265)

//인형
room1_1.bear=room1_1.createObject("bear", "곰인형.png")
room1_1.bear.setWidth(100)
room1_1.locateObject(room1_1.bear, 400, 230)
room1_1.bear.close()
room1_1.bear.onClick = function() {
	if(game.getHandItem()==room1_1.scissors)
	{
		room1_1.bear.open()
		room1_1.cotton.show()	
		room1_1.bead.show()
		printMessage("곰 인형을 갈랐더니 뭔가 떨어졌다")
		
	}
}

//인형 솜
room1_1.cotton=room1_1.createObject("cotton", "솜.png")
room1_1.cotton.setWidth(80)
room1_1.locateObject(room1_1.cotton, 400, 250)
room1_1.cotton.hide()

//구슬
room1_1.bead=room1_1.createObject("bead", "구슬.png")
room1_1.bead.setWidth(100)
room1_1.locateObject(room1_1.bead, 400, 480)
room1_1.bead.hide()
room1_1.bead.onClick=function()
{
	if(game.getHandItem()==room1_1.hammer)
	{
		game.move(room2)
		printMessage("구슬을 깨자 어디론가 이동했다")
	}
}
//책 선반
room1_1.bookshelf=room1_1.createObject("bookshelf", "선반-좌.png")
room1_1.bookshelf.setWidth(280)
room1_1.locateObject(room1_1.bookshelf, 150, 340)

//파일들
room1_1.file1=room1_1.createObject("file1", "파일-1.png")
room1_1.file1.setWidth(60)
room1_1.locateObject(room1_1.file1, 50, 330)
room1_1.file1.onClick=function()
{
	printMessage("10101011")
}

room1_1.file2=room1_1.createObject("file2", "파일-1.png")
room1_1.file2.setWidth(60)
room1_1.locateObject(room1_1.file2, 150, 315)
room1_1.file2.onClick=function()
{
	printMessage("10001111")
}

room1_1.bar1=room1_1.createObject("bar1", "초록색칠판-오른쪽.png")
room1_1.bar1.setWidth(30)
room1_1.locateObject(room1_1.bar1, 130, 330)

//책1
room1_1.book1=room1_1.createObject("book1", "책1-2.png")
room1_1.book1.setWidth(30)
room1_1.locateObject(room1_1.book1, 100, 340)
room1_1.book1.onClick=function()
{
	printMessage("AND")
}

room1_1.bar2=room1_1.createObject("bar2", "초록색칠판-오른쪽.png")
room1_1.bar2.setWidth(30)
room1_1.locateObject(room1_1.bar2, 270, 310)

//책2
room1_1.book2=room1_1.createObject("book2", "책1-2.png")
room1_1.book2.setWidth(30)
room1_1.locateObject(room1_1.book2, 200, 325)
room1_1.book2.onClick=function()
{
	printMessage("XOR")
}

room1_1.file3=room1_1.createObject("file3", "파일-1.png")
room1_1.file3.setWidth(60)
room1_1.locateObject(room1_1.file3, 250, 300)
room1_1.file3.onClick=function()
{
	printMessage("00111001")
}

//금고
room1_1.safe=room1_1.createObject("safe", "금고-왼쪽-닫힘.png")
room1_1.safe.setWidth(140)
room1_1.locateObject(room1_1.safe, 100, 480)
room1_1.safe.lock()

room1_1.safe.onClick=function()
{
	if(room1_1.safe.isLocked())
	{	
		printMessage("10")
		showKeypad("number", "0162" , function(){ // 키패드 1 - 숫자4자리
		room1_1.safe.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열렸다")
	})
	}
	else if(room1_1.safe.isClosed())
	{
		room1_1.safe.open()
		printMessage("금고가 열렸다")
		room1_1.safe.setSprite("금고-왼쪽-열림.png")	
		room1_1.hammer.show()
	}
}

//망치
room1_1.hammer=room1_1.createObject("hammer", "망치.png")
room1_1.hammer.setWidth(60)
room1_1.locateObject(room1_1.hammer, 120, 480)
room1_1.hammer.hide()
room1_1.hammer.onClick=function()
{
	room1_1.hammer.pick()
	printMessage("망치를 얻었다")	
}

//방2
room2.door=room2.createObject("door", "문-오른쪽-닫힘.png")
room2.door.setWidth(150)
room2.locateObject(room2.door, 1050, 290)
room2.door.close()

room2.door.onClick = function() 
{
	if(room2.door.isClosed())
	{
		room2.door.open()
	}
	 else if (room2.door.isOpened())
	{
		game.move(room3) 
	}
	 else if (room2.door.isLocked())
	{
		printMessage("문이 잠겨있다") 
	}
}

room2.door.onOpen=function()
{
	room2.door.setSprite("문-오른쪽-열림.png")	
}

room2.keypad = room2.createObject("keypad", "숫자키-우.png") 
room2.keypad.setWidth(50)
room2.locateObject(room2.keypad, 930, 250)
room2.keypad.onClick = function()
 {
	printMessage("올해는 몇 년도?")
	showKeypad("number", "1000" , function(){ 
		room2.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

//방3

room3.door=room3.createObject("door", "문-오른쪽-닫힘.png")
room3.door.setWidth(150)
room3.locateObject(room3.door, 1050, 290)
room3.door.close()

room3.door.onClick = function() 
{
	if(room3.door.isClosed())
	{
		room3.door.open()
	}
	 else if (room3.door.isOpened())
	{
		game.clear()
	}
	 else if (room3.door.isLocked())
	{
		printMessage("문이 잠겨있다") 
	}
}

room3.door.onOpen=function()
{
	room3.door.setSprite("문-오른쪽-열림.png")	
}

room3.keypad = room3.createObject("keypad", "숫자키-우.png") 
room3.keypad.setWidth(50)
room3.locateObject(room3.keypad, 1170, 250)
room3.keypad.onClick = function()
 {
	printMessage("올해는 몇 년도?")
	showKeypad("number", "1000" , function(){ 
		room3.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room3.rabbit = room3.createObject("rabbit", "토끼.png")
room3.rabbit.setWidth(200)
room3.locateObject(room3.rabbit, 530, 550)

room3.basket = room3.createObject("basket", "바구니.png")
room3.basket.setWidth(200)
room3.locateObject(room3.basket, 830, 450)

room3.tv = room3.createObject("tv", "TV.png")
room3.tv.setWidth(200)
room3.locateObject(room3.tv, 830, 150)
room3.tv.open()
room3.tv.onClick=function()
{
	if(game.getHandItem()==room3.remocon && room3.tv.isOpened())
	{
		room3.tv.lock()
		printMessage("티비가 꺼졌다")
		
	}	
}

room3.cable = room3.createObject("cable", "선.png")
room3.cable.setWidth(50)
room3.locateObject(room3.cable, 880, 290)
room3.cable.open()
room3.cable.onClick=function()
{
	if(game.getHandItem()==room1_1.scissors && room3.cable.isOpened())
	{
		room3.cable.lock()
		room3.tv.lock()
		printMessage("티비가 꺼졌다")
		
	}	
}


room3.remocon = room3.createObject("remocon", "리모컨.png")
room3.remocon.setWidth(80)
room3.locateObject(room3.remocon, 330, 560)
room3.remocon.hide()
room3.remocon.onClick=function()
{
	room3.remocon.pick()
	printMessage("리모컨을 얻었다")
}

room3.bookshelf = room3.createObject("bookshelf", "책장.png")
room3.bookshelf.setWidth(150)
room3.locateObject(room3.bookshelf, 100, 380)
room3.case.lock()
room3.bookshelf.onDrag = function(direction)
{ 
	if(direction == "Right" && room3.case.isLocked())
	{
		room3.bookshelf.open()	
		printMessage("책장을 넘어뜨렸다")
		room3.bookshelf.moveX(130)
		room3.bookshelf.moveY(50)
		room3.bookshelf.setSprite("책장넘어짐.png")
		printMessage("책장 안에서 뭔가 떨어졌다")
		room3.remocon.show()
	}
}

game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력