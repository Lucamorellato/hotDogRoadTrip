
//DOCUMENT READY
$(document).ready(function () {

	// LEAFLET MAP SETUP SCRIPT -----------------/
	
	//determine startin point of map and general features
	let mymap = L.map("mapid", {
		zoomControl: false,
		doubleClickZoom: false,
		trackResize: false,
		maxZoom: 18,
		scrollWheelZoom: false,

	}).setView([39.825, -98.5799], 4.4);
	
	
	//calling in tiles and content
   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
   }).addTo(mymap);

	//calling in style of tiles
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

	//creating custom map icon
	let redIcon = L.icon({
		iconUrl: "assets/location.png",
		iconSize: [25, 40], //size of the icon
		iconAnchor: [12, 40], //values that make ZERO sense to determine icon and marker position
		popupAnchor: [1, -35] //value that make ZERO sense to determine popup location
	});


	//built in leaflet function that LOCATES user not using because it is mostly whatever and not that useful.
	// mymap.locate({});

	//built in function that I used to place a pop-up with user location
	function onLocationFound(e) {
		L.marker(e.latlng).addTo(mymap)
			.bindPopup("this is You").openPopup();
	}

	mymap.on('locationfound', onLocationFound);

	//experimenting with making a function that figures out click location gps coordinate to use for routes. Did not get far enough, leaving here for future self.
	// mymap.on('click', function (e) {
	// 	if (mymap.hasLayer(e)) {
	// 	}
	// });

	// END OF MAP SCRIPT ----------------\

	//these are all of the hot dogs
   //OBJECT DEFINITIONS -----------/
   const hotDogInfo = {
      coneydog: {
         title: "Coney Island Dog",
         location: "Detroit Area, Michigan",
         imgsrc: `./assets/detroitconey.jpg" alt="A hot dog on a small white porcelain plate. The hot dog is lovingly covered with onions and soupy beef chilli from Detroit`,
			description: `The Coney Dog is not actually a New York tradition, but a Detroit Greek-American creation. That doesn’t make sense we know, but that’s how hot dogs and Detroit work. A Coney Dog features a soupy beef-heart chili with no beans, chopped raw onions, yellow mustard and gruff service. These dogs define what it means to be North American and are copied all across the continent. The old world and new world melding into one magical steamy tube. Best to order: “One up with everything". Tasty enough to tear a family apart, <a target="_blank" href="https://www.citylab.com/design/2012/08/how-coney-dog-became-detroits-signature-food/2779/">seriously</a>.`,
         restaurant:"https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [42.3314, -83.045],
         popUpContent: `<a class="switch" href="#stuff" data-dog="coneydog">Coney Dog</a>`
      },
      dangerdog: {
         title: "Danger Dog",
         location: "Los Angelos, California",
			imgsrc: `./assets/dangerdog.jpeg" alt="a grill covered in bacon wrapped hot dogs, onions and jalapenos in Los Angeles California`,
			description: "The Danger Dog is at home sizzling on an illegal side-walk grill basking in caramelizing onions. This LA tradition is bacon-wrapped and grilled, covered in mayo, Ketchup (gasp!) and grilled veggies like pablano peppers. Colloquially called ‘dangerous’ because some people don’t understand the beauty of supporting street entrepreneurs through ethical consumption of delicious hot dogs… But the name does sound cool. These things are so darn LA that the LA City Council named it the cities “Official Hot Dog.” ",
			restaurant: "https://www.google.com/maps/place/Silver+Lake,+Los+Angeles,+CA,+USA/@34.0932274,-118.2849349,14z/data=!3m1!4b1!4m5!3m4!1s0x80c2c73a7425883f:0xed2d053e27a4d706!8m2!3d34.0869409!4d-118.2702036",
         coordinates: [34, -118.24],
         popUpContent: `<a class="switch" href="#stuff" data-dog="dangerdog">Danger Dog</a>`
      },
      seattledog: {
         title: "Seattle Dog",
         location: "Seattle, Washington",
			imgsrc: `./assets/seattledog.jpg" alt="a hot dog covered in cream cheese wrapped up in paper`,
			description: "When you are hungry after a show at your favourite ‘grunge’ club in Seattle you probably think, 'Hey, I want a grilled hot dog smeared with cream cheese!' Those rumours you've heard are true, those fanatics in the Pacific Northwest cover their hotdogs in cream cheese, bury them in grilled onions and top them with sriracha sauce or mustard. Just like the city it gets it name from the Seattle Dog is interesting, well-mannered and is at risk being ruined by Amazon. These are way better than they sound, honestly.",
			restaurant: "https://www.yelp.ca/biz/comet-dogs-seattle-2",
         coordinates: [46, -122.33],
         popUpContent: `<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`
      },
      cheesyconey: {
         title: "Cheesy Coney",
         location: "Cincinnati, Ohio",
			imgsrc: `./assets/cheesyconey.jpg" alt="a plate with four small hot dogs covered in a overzealous portions of shredded chedder`,
         description: "Cheesy Coney's seem just like a Coney… but with chedder. But us real Coney knuckleheads can spot the differences. In Cincinnati their Coneys are small and have a dry bean-free chilli that has all sorts of aromatic seasonings (cinnamon, allspice, clove) as opposed to Detroit’s ’soupy’ chilli. Then you get a mid-west serving of shredded cheese on top. There are four different local chains of ‘chilli' diners in the Cincinnati area and they will all cause heart-burn and they most definitely all have the exact same menu.",
         restaurant:  "http://www.dixiechili.com/",
         coordinates: [39.1, -84.5120196],
         popUpContent: `<a class="switch" href="#stuff" data-dog="cheesyconey">Cheesy Coney</a>`
      },
      steamie: {
         title: "the Steamie",
         location: "Montreal, Quebec",
			imgsrc: `./assets/steamie.jpg" alt="a wrapped up Montreal Steamie style hot dog from the infamous Montreal Pool Room beside a side of fries`,
         description: "Ahhh la Belle Province! These Montreal staples have potentially the cutest name on the list. Steamies… served at ‘wieneries’ across the province. When you go to a real old school shop and ask for an ‘all dressed,’ that means you get a steamed dog in a steamed bun topped with mustard, raw onions and raw cabbage. Soft bun soft dog, crunchy toppings.",
			restaurant: "https://www.mtlblog.com/lifestyle/the-real-story-behind-montreal-pool-room",
         coordinates: [45.5017, -73.5673],
         popUpContent: `<a class="switch" href="#stuff" data-dog="steamie">Steamie</a>`
      },
      slawdog: {
         title: "W. Virginia Slaw Dog",
         location: "West Virginia",
			imgsrc: `./assets/slawdog.jpg" alt="a hot dog in a fluffy bun, covered in creamy white bbq style coleslaw.`,
         description: "This slaw doused rumbler is at home in the rolling Appalachia of our dreams, gently cruising through the tree-lined highways of our desires. The West Virginia Slaw Dog is a spicy chili dog topped with onions and thick, creamy coleslaw. It is served on a soft pillowy bun and just like any self respecting hot dog it frowns upon ketchup.",
			restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g59262-d2373566-Reviews-Morrison_s_Drive_Inn-Logan_West_Virginia.html",
         coordinates: [38.5976, -80.4549],
         popUpContent: `<a class="switch" href="#stuff" data-dog="slawdog">Slaw-Dog</a>`
		},
		chiledog: {
			title: "Red Chile Dog",
			location: "New Mexico",
			imgsrc: `./assets/chiledog.jpg" alt="a footlong thing hot dog covered in a red sauce made of new Mexican Chile`,
			description: `New Mexico's state food is the New Mexico Chile, with 'red or green?' being asked at nearly every eatery in <a target="_blank" href="https://www.saveur.com/hatch-chiles-new-mexico">the Land of Enchantment </a>. So you know you get a hit of these spicy pals when you pull up and order a dog in these parts. Often served foot-long and at truck stops, the Red Chile Dog is a thin beef frank covered in a chili that is mostly made of spicy chile peppers and beef. We know we called this one the 'Red Chile' dog, but don't be afraid to ask for some off menu green chile to really see what they're all about.`,
			restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g60933-d540494-Reviews-Dog_House_Drive_In-Albuquerque_New_Mexico.html",
			coordinates: [35.084, -106.650],
			popUpContent: `<a class="switch" href="#stuff" data-dog="chiledog">Chile Dog</a>`
		},
		sonorandog: {
			title: "Sonoran Hot Dog",
			location: "Arizona",
			imgsrc: `./assets/sonorandog.jpg" alt="A Sonoran Hot dog for El Nene, famous for its many mexican influenced toppings. This dog features pinto beans, mayo and bacon.`,
			description: `The Sonoran Hot Dog is the most perfect mix of Mexican and American culture. This child of the Sonoran desert is wrapped In bacon, served in a bollilo bun and topped with seasoned pinto beans, tomatoes, grilled peppers and onions. Sometimes you get mayo and mustard. Sometimes you get salsa verde. Delicious perfection. The Sonoran Dog is a gastronomical representation of the<a target="_blank" href="https://www.npr.org/templates/story/story.php?storyId=106366080"> latin diaspora</a>. Be sure to try out one of the 100s of ‘dogueros’ around Phoenix and Tuscon if you ever have the chance.`,
			restaurant: "https://www.aquiconelnene.com/",
			coordinates: [32.222, -110.974],
			popUpContent: `<a class="switch" href="#stuff" data-dog="sonorandog">Sonoran Hot Dog</a>`
		},
		kansascity: {
			title: "Kansas City Frank",
			location: "Kansas City, Missouri/Kansas",
			imgsrc: `./assets/kansasdog.jpg" alt="A kraut covered hot dog on a poppyseed bun and spread over a sheet of tinfoil.`,
			description: "Is Kansas City in Missouri or Kansas? Who gets to call the Kansas City Frank theirs? Add this mystery to the list of things that don't really make sense if you think too much about it. But, we do know that in Kansas City they eat delicious beef franks on a sesame Seed bun loaded with saurkraut, melted swiss cheese and maybe some Thousand Island sauce if you are feeling cheeky. Wait... isn't that a rueben sandwhich?",
			restaurant: "http://www.fritzskcmeats.com/about-us.html",
			coordinates: [39.099, -94.578],
			popUpContent: `<a class="switch" href="#stuff" data-dog="kansascity">Kansas City Frank</a>`
		},
		nysystem: {
			title: "NY System Weiner",
			location: "Rhode Island",
			imgsrc: `./assets/nysystem.jpg" alt="a hot dog from OlneyVille NY System. A small hot dog covered in meat sauce beside a glass of milk`,
			description: "Hot Weiner, not a dog. These angelic creations are named after NYC but have developed an entirely independent style native to Rhode Island. Sound familiar? Ordering one “All the way” means you get a steamed bun, mustard, meat sauce, chopped onion and a perfect sprinkle of celery salt. Go to any little walk in joint called an NY system and you know what you are going to get when you order a weiner. It is a thing of beauty. Do not call it a hot dog though, we made that mistake.",
			restaurant: "http://www.olneyvillenewyorksystem.com/gallery/" ,
			coordinates: [41.82, -71.412],
			popUpContent: `<a class="switch" href="#stuff" data-dog="nysystem">NY System Weiner</a>`
		},
		chicagodog: {
			title: "Chicago Dog",
			location: "Chicago, Illinois",
			imgsrc: `./assets/chicagodog.jpg" alt="A chicago dog covered in toppings from Byrons`,
			description: "Chicago is serious about hot dogs. We google the word hot dog a lot around here and 'Chicago Dog' is always one of the first few results. May sound over-rated but the people of the Windy City really do love hot dogs. They serve a boiled frank on a poppy-seed bun and with mustard and relish as the only condiments, NO KETCHUP. The city is famous for dogs 'dragged through the garden,' which means they are loaded with sliced tomatoes, pickled sport peppers, dill pickles and large pieces of onions. Sounds like those are all the veggies you need.",
			restaurant: "http://www.byronschicago.com/",
			coordinates: [41.87, -87.62],
			popUpContent: `<a class="switch" href="#stuff" data-dog="chicagodog">Chicago Dog</a>`
		},
		scrambledog: {
			title: "Scrambled Dog",
			location: "Columbus, Georgia",
			imgsrc: `./assets/scrambledog.jpg" alt="a bowl of hot dog, chilli and oyster biscuits called a Scrambled Dog`,
			description: "This sloppy masterpiece is allegedly a creation of war-time food saving efforts, a cheap way to fill you up. These days, they can most famously be found at a Pharmacy's lunch counter in Columbus, Georgia. The Scrambled Dog is a cut-up hot dog served in a bowl with chilli, chopped onions and oyster crackers for some crunch. Some people get fancy and order cheese or pickles on top. More of a 'stew' than your typical Hot Dog experience, the Scrambled Dog is weird, idiosyncratic and makes no sense. We love them. ",
			restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g34859-d1026360-Reviews-Dinglewood_Pharmacy-Columbus_Georgia.html",
			coordinates: [32.46, -84.987],
			popUpContent: `<a class="switch" href="#stuff" data-dog="scrambledog">Scrambled Dog</a>`
		}
	}
	//END OF OBJECT DEFINITIONS -------------\



   //FOR LOOP TO ITERATE THROUGH hotDogInfo objet
   for (const info in hotDogInfo) {
      //create variable of coordinates
      const place = hotDogInfo[info].coordinates;
      //creates variable of popUp content
      const popUp = hotDogInfo[info].popUpContent;
      //assigns values to all markers
		L.marker(place, {icon: redIcon})
			.addTo(mymap)
         .bindPopup(popUp);
   };


	//MAIN FUNCTION ON CLICK OF A BUTTON
	//on click of 'switch' find the dataset of 'this' (or the switch chosen), call that dogChoice

   $("main").on("click", ".switch", function(e){
		const dogChoice = $(this).attr("data-dog");
		//then call function that displays hot dog choice using user selected button
      displayDogOnPage(dogChoice);
   });


	//FUNCTION THAT DISPLAYS HOT DOG OF USER CHOICE
   const displayDogOnPage = function(dogChoice) {
		// add html to the section with class of content using template literals
		$(".content").html(`<div class=popup--img><img src="${hotDogInfo[dogChoice].imgsrc}"></div><div class=popup--text><h2>${hotDogInfo[dogChoice].title}</h2><h3>${hotDogInfo[dogChoice].location}</h3>
      <p>${hotDogInfo[dogChoice].description}</p>
      <a class="popup--link" target="_blank" href="${hotDogInfo[dogChoice].restaurant}">Try it here</a></div>
		<a href="#" class="close-switch"><i aria-hidden class="fas fa-times"></i><span class="visuallyhidden">close pop-up window</span></a>`); 
		//then add class that makes div display block so a full popup slides in
		$(".content").addClass("show-me");
   }
   
	//FUNCTION THAT REMOVES HOT DOG POP-UP from screen
	let removeDogFunction = function(){
		//wait .2 second to remove class that displays content for 'weight' feel
			window.setTimeout(function () {
					$(".content").removeClass("show-me")
			}, 200);
			//wait an additional .2 seconds to remove content from popup so it slides away full
			window.setTimeout(function () {
					$(".content").empty();
			}, 400);
	};

	//when clicking the close pop-up button
	$(`#stuff`).on(`click`, `.close-switch`, function (e) {
		removeDogFunction();
	});
	//quick function to make pop-up close on hitting of 'esc' key
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // esc keycode
			removeDogFunction();
		}
	});



	//RANDOM HOTDOG BUTTON -------/

	//turning an object into an array called hotdogInfoArray
	const hotDogInfoArray = Object.entries(hotDogInfo)

	//function that creates a random choice by cycling through an array
	const randomChoice = function(array) {
		let randomItem = array[Math.floor(Math.random() * array.length)];
		return randomItem;
	};

	// when pressing 'chaos'/random button
	$(".chaos").on("click", function(){
		//remove current popup if there is one
		removeDogFunction();
		//after .4s display a new card with random choice
		window.setTimeout(function () {
			displayDogOnPage(randomChoice(hotDogInfoArray)[0]);
		}, 400);
	
	})
	//FEATURE THAT MAKES MOBILE MENU EXPANDABLE
	$(".menu--switch").on("click", function(e) {
		$(".mobile-switch").toggle('ease-in');
	});
}); 


// KONAMI CODE -----------/

//was going to have some fun here. JS was new to me... I want to try some things.

// KEYS OBKECT DEFININING KEYS THAT ARE STROKABLE
let konamiKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
		66: 'b',
		13: "enter",
};

//array to store konami code
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

// variable to remember the 'place' in code so far.
let konamiCodePosition = 0;

//listening to 'keydowns' or keystroke
document.addEventListener("keydown", function (e) {
	// get the value of the key code from the key map + get value of requiredkeys 
	let key = konamiKeys[e.keyCode];
	let requiredKey = konamiCode[konamiCodePosition];

	//loop comparing key stroke to the required keys for the code, if matchtes move up konami code position ++
	if (key === requiredKey) {
		konamiCodePosition++;
		// if the last key is reached, activate easter egg
		if (konamiCodePosition === konamiCode.length) {
			activateEasterEgg();
			konamiCodePosition = 0;
		}
	//if you don't reach end restart counter
	} else {
		konamiCodePosition = 0;
	}

	//just confirming counter is working
	// console.log(konamiCodePosition);


//function that activate the easter eh
	function activateEasterEgg() {
			//wanted to add a new background
			// document.body.style.backgroundImage = "url('images/cheatBackground.png')";
			//plays audio 
			let audio = new Audio('assets/ballgame.mp3');
			audio.play();
			// .toggle([duration][, complete])
			// alerts that you are cool
			alert("WOW! COOL!");
		}	
})
// END OF KONAMI CODE ------------\








