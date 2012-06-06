// VFW 1206 Project 2
// Anthony Torrez
//

// Wait until the DOM is ready.

window.addEventListener("DOMContentLoaded", function() { 
alert (localStorage.value(0));


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
	
	
	// Get value of selected Radio Button
	
	fuction getSelectedRadio( ) {
		var rbuttons = document.forms(0).isaseries;
		for ( var i=0; i<rbuttons.length; i++ ) {
			if ( rbuttons[ i ].checked) {
				isaseries = rbuttons[ i ].value;
			}
		}
	}
	
	
	function saveData ( ) {
		localStorage.setItem ( "hello", "hola" );
		var id         = Math.floor(Math.random( )*100001);           // collect and store all form field values as a object.  
		getSelectedRadio( );                                                         // calls the value of the radio button        
		var item     = { }                                                                      
			item.genre             = [ "Genre", $( 'genre' ).value ];                   
			item.btitle               = [ "Book Title", $( 'btitle' ).value ];           
			item.author            = [ "Author", $( 'author' ).value ];
			item.isbn                = [ "ISBN #", $( 'isbn' ).value ];
			item.children          = [ "Children's Books", $( 'childrens' ).value ];
			item.horror             = [ "Horror", $( 'horror' ).value ];
			item.humor             = [ "Humor", $( 'humor' ).value ];
			item.literature         = [ "Literature & Fiction", $( 'literature' ).value ];
			item.mange            = [ "Manga & Graphic Novels", $( 'manga' ).value ];
			item.mystery          = [ "Mystery, Crime, Thriller & Suspense", $( 'mystery' ).value ];
			item.romance         = [ "Romance", $( 'romance' ).value ];
			item.sci-fi               = [ "Sci-Fi & Fantasy", $( 'sci-fi' ).value ];
			item.western          = [ "Western", $( 'western' ).value ];
			item.art                   = [ "Art & Photography", $( 'art' ).value ];
			item.biography       = [ "Biographies and Memoir", $( 'biography' ).value ];
			item.business         = [ "Business & Finance", $( 'business' ).value ];
			item.computers       = [ "Computers & Technology", $( 'computers' ).value ];
			item.cookbooks       = [ "Cookbooks, Food and Wine", $( 'cookbooks' ).value ];
			item.crafts               = [ "Crafts & Hobbies", $( 'crafts' ).value ];
			item.education        = [ "Education & Reference", $( 'education' ).value ];
			item.health              = [ "Health & Fitness", $( 'health' ).value ];
			item.history             = [ "History", $( 'history' ).value ];
			item.law                  = [ "Law", $( 'law' ).value ];
			item.medical           = [ "Medical", $( 'medical' ).value ];
			item.parenting        = [ "Parenting & Relationships", $( 'parenting' ).value ];
			item.religion           = [ "Religion & Spirituality", $( 'religion' ).value ];
			item.math               = [ "Math & Science", $( 'math' ).value ];
			item.self-help         = [ "Self-Help", $( 'self-help' ).value ];
			item.sports             = [ "Sports & Outdoors", $( 'sports' ).value ];
			item.teens              = [ "Teens", $( 'teens' ).value ];
			item.travel              = [ "Travel", $( 'travel' ).value ];
			item.seriesname    = [ "Series Name", $( 'seriesname' ).value ];
			item.seriesnum      = [ "Series Number", $( 'seriesnum' ).value ];
			item.series             = [ "Series", series.value ];       // for radio buttons
			
		localStorage.setItem( id, JSON.stringify( item ) );
		alert ("Contact Saved" );
	}
	
	// Variable defaults
	
	var isaseries;
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