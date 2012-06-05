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
	function genres ( ) {
		var tagsForm = document.getElementsByTagName("form"),   // tagsForm is an array of all the form tags
			selectTag = $( 'select'),
			buildSelect = document.createdElement( 'select');
			buildSelect.setAttribute( "id", "genres" );
		for (var i = 0, g =genreSubjects.length; i < g; i++) {                           // I left off here - need to check this for errors!!
			var buildOption = document.createElement( 'option' );
			var optionText = genreTypes[ i ];
			buildOption.setAttribute( "value", optionText);
			buildOption.innerHTML = optionText;
			buildSelect.appendChild( buildOption );
		}
		selectTag.appendChild( buildSelect );
		
	}

	// Variable defaults
	var genreTypes = ["-- Choose a Genre or Subject --", "Art & Photography", "Biographies & Memoirs", "Children's Books", "Computers & Technolory", "Cookbooks, Food & Wine", "Crafts, Hobbies, and Home", "Education & Reference", "Health, Fitness & Dieting", "History", "Horror", "Humor", "Law", "Literature & Fiction", "Manga & Graphic Novels", "Math & Science", "Medical", "Mystery, Crime, Thriller & Suspense", "Parenting & Relationships", "Religion & Spirituality", "Romance", "Sci Fi & Fantasy", "Self Help", "Sports & Outdoors", "Teens", "Travel" "Western",  ];
	genres( );


	// Set Link and Submit Click Events
	var displayLink = $ ( 'show' );
	displayLink.addEventListener ( 'click', getData );
	
	var clearLink = $ ( 'clear' );
	clearLink.addEventListener ( 'click', clearLocal );
	
	var save = $ ( 'submit' );
	save.addEventListener ( 'click', storeData );



} );