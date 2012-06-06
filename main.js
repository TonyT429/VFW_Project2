// VFW 1206 Project 2
// Anthony Torrez
//

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() { 


	// getElementById Function
	function $(x) {
		var ElementX = document.getElementById(x)
		return ElementX;
	}
	
	// Create the element for the select field and fill with options
	function buildList ( ) { 
		var formTag = document.getElementsByTagName( "form"),
			selectLi = $( 'select' ),
			makeSelect = document.createElement ( 'select' );
			makeSelect.setAttribute( "id", "genres" );
		for (var i=0; g = genreTypes.length; i<g; i++); { 
			var makeOption = document.createElement( 'option' );
			var optText = genreTypes[ i ];
			makeOption.setAttribute( "value", optText );
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function saveData ( ) {
		localStorage.setItem ( "hello", "hola" );
		alert(localStorage.length);
	}
	
	// Variable defaults
	buildList( );


	// Set Link and Submit Click Events
	var displayLink = $ ( 'show' );
	displayLink.addEventListener ( 'click', showData );
	
	var clearLink = $ ( 'clear' );
	clearLink.addEventListener ( 'click', clearData );
	
	var save = $ ( 'submit' );
	save.addEventListener ( 'click', saveData );



} );



// var genreTypes = [ "-- Choose a Genre or Subject --", "Art & Photography", "Biographies & Memoirs", "Children's Books", "Computers & Technolory", "Cookbooks, Food & Wine", "Crafts, Hobbies, and Home", "Education & Reference", "Health, Fitness & Dieting", "History", "Horror", "Humor", "Law", "Literature & Fiction", "Manga & Graphic Novels", "Math & Science", "Medical", "Mystery, Crime, Thriller & Suspense", "Parenting & Relationships", "Religion & Spirituality", "Romance", "Sci Fi & Fantasy", "Self Help", "Sports & Outdoors", "Teens", "Travel", "Western",  ];