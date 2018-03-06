// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus');
	});
	$('#local').click(function(){
		localData();
	});
	$("#submit").click(function(){
		clearList();
		addSong();
		localStorage;
		$('#songs').append(displayList(myPlayList));
	});
});

function displayList(){
	for (var i = 0; i < myPlayList.length; i++){
		$("#songs").append('<div class="line">' + '</div>');
		$("#songs").append('<div class="row">' + 
		'<div class="col-md-3">' + '<p class="tspace">' + myPlayList[i].title + '</p>' + 
		'<p class="tspace">' + 'By ' + myPlayList[i].artist + '</p>' + '</div>' + 
		'<div class="col-md-4">' + '<a class="tspace" href='+myPlayList[i].mp3+'>Spotify Link</a>' +  
		'</div>' + '<div class="col-md-5">' + '<img class="image tspace" src='+myPlayList[i].image+'>' + '</div>' + '</div>');
	}
}

function clearList(){
  $('#songs').empty();
}

function addSong(){
	var mySong = {
		"title": $('#name').val(),
		"artist": $('#artist').val(),
		"mp3": $('#mp3').val(),
		"image": $('#image').val(),
	};
	myPlayList.push(mySong);
	console.log(myPlayList);
}
function localStorage(){
	localStorage.setItem("title", $('#name').val());
	localStorage.setItem("artist", $('#artist').val());
	localStorage.setItem("mp3", $('#mp3').val());
	localStorage.setItem("image", $('#image').val());
	}
function localData(){
	var mySong = {
		"title": localStorage.getItem("title"),
		"artist": localStorage.getItem("artist"),
		"mp3": localStorage.getItem("mp3"),
		"image": localStorage.getItem("image"),
	};
	myPlayList.push(mySong);
}