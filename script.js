let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let bookItem = document.querySelector(".bookItem"); //картинка школы

let portfelItem = document.querySelector(".portfelItem");

let smenkaItem = document.querySelector(".smenkaItem");

let corobkasedoiItem = document.querySelector(".corobkasedoiItem") 

let dnevnikItem = document.querySelector(".dnevnikItem")

let location2 = document.querySelector(".location2"); //локация 2
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
		
let portfel = document.querySelector(".portfel")
let book = document.querySelector(".book");
let smenka = document.querySelector(".smenka")
let corobkasedoi = document.querySelector(".corobkasedoi")
let dnevnik = document.querySelector(".dnevnik")

let score = 0
bookItem.onclick = function(){
	main_player.style.top = "50%";
	main_player.style.left = "12%";

	book.style.display = "block"
	score = score + 1
	if(score == 5){
	alert("ура я готов к школе[ВЫ ВЫИГРАЛИ]")
	}
}
portfelItem.onclick = function(){
	main_player.style.top = "25%";
	main_player.style.left = "30%";
	
	portfel.style.display = "block"
	score = score + 1
	if(score == 5){
	alert("ура я готов к школе[ВЫ ВЫИГРАЛИ]")
	}
}

corobkasedoiItem.onclick = function(){
	main_player.style.top = "60%";
	main_player.style.left = "56%";
	
	corobkasedoi.style.display = "block"
	score = score + 1
	if(score == 5){
	alert("ура я готов к школе[ВЫ ВЫИГРАЛИ]")
	}
}

smenkaItem.onclick = function(){
	main_player.style.top = "80%";
	main_player.style.left = "40%";

	smenka.style.display = "block"
	score = score + 1
	if(score == 5){
	alert("ура я готов к школе[ВЫ ВЫИГРАЛИ]")
	}
}

dnevnikItem.onclick = function(){
	main_player.style.top = "30%";
	main_player.style.left = "50%";

	dnevnik.style.display = "block"

	score = score + 1
	if(score == 5){
	alert("ура я готов к школе[ВЫ ВЫИГРАЛИ]")
	}
}



//function changeLocation2(){
//		main.style.display = "none";
//        location2.style.display = "block";
//        body.style.background = "green";
//	}