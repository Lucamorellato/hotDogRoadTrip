
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


	//built in leaflet function that LOCATES user
	mymap.locate({});

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


   //OBJECT DEFINITIONS -----------/
   const hotDogInfo = {
      coneydog: {
         title: "Coney Island Dog",
         location: "Detroit Area, Michigan",
         imgsrc: "https://www.fillmurray.com/500/300",
			description: `The Coney Dog is not actually a New York tradition, but a Detroit Greek-American creation. That doesn’t make sense we know, but that’s how hot dogs and Detroit work. A Coney Dog features a soupy beef-heart chili with no beans, chopped raw onions, yellow mustard and gruff service. These dogs define what it means to be North American and are copied all across the continent. The old world and new world melding into one magical steamy tube. Best to order: “One up with everything. Tasty enough to tear a family apart, <a target="_blank" href="https://www.citylab.com/design/2012/08/how-coney-dog-became-detroits-signature-food/2779/">seriously</a>.`,
         restaurant:"https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [42.3314, -83.045],
         popUpContent: `<a class="switch" href="#stuff" data-dog="coneydog">Coney Dog</a>`
      },

      dangerdog: {
         title: "Danger Dog",
         location: "Los Angelos, California",
         imgsrc: "https://www.fillmurray.com/500/300",
			description: "The Danger Dog is at home sizzling on an illegal side-walk grill basking in caramelizing onions. This LA tradition is bacon-wrapped and grilled, covered in mayo, Ketchup (gasp!) and grilled veggies like pablano peppers. Colloquially called ‘dangerous’ because some people don’t understand the beauty of supporting street entrepreneurs through ethical consumption of delicious hot dogs… But the name does sound cool. These things are so darn LA that the LA City Council named it the cities “Official Hot Dog.” ",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [34, -118.24],
         popUpContent: `<a class="switch" href="#stuff" data-dog="dangerdog">Danger Dog</a>`
      },

      seattledog: {
         title: "Seattle Dog",
         location: "Seattle, Washington",
         imgsrc: "https://www.fillmurray.com/500/300",
			description: "When you are hungry after a show at your favourite ‘grunge’ club in Seattle you probably think, 'Hey, I want a grilled hot dog smeared with cream cheese!' Those rumours you've heard are true, those fanatics in the Pacific Northwest cover their hotdogs in cream cheese, bury them in grilled onions and top them with sriracha sauce or mustard. Just like the city it gets it name from the Seattle Dog is interesting, well-mannered and is at risk being ruined by Amazon. These are way better than they sound, honestly.",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [46, -122.33],
         popUpContent: `<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`
      },

      cheesyconey: {
         title: "Cheesy Coney",
         location: "Cincinnati, Ohio",
         imgsrc: "https://www.fillmurray.com/500/300",
         description: "Cheesy Coney's seem just like a Coney… but with cheese. But us real Coney knuckleheads can spot the differences. In Cincinnati their Coneys are small and have a dry bean-free chilli that has all sorts of aromatic seasonings (cinnamon, allspice, clove) as opposed to Detroit’s ’soupy’ chilli. Then you get a mid-west serving of shredded cheese on top. There are four different local chains of ‘chilli' diners in the Cincinnati area and they are will all cause heart-burn and they most definitely all the exact same menu.",
         restaurant:  "http://www.dixiechili.com/",
         coordinates: [39.1, -84.5120196],
         popUpContent: `<a class="switch" href="#stuff" data-dog="cheesyconey">Cheesy Coney</a>`
      },

      steamie: {
         title: "the Steamie",
         location: "Montreal, Quebec",
         imgsrc: "https://www.fillmurray.com/500/300",
         description: "Ahhh la Belle Province! These Montreal staples have potentially the cutest name on the list. Steamies… served at ‘wieneries’ across the province. When you go to a real old school shop and ask for an ‘all dressed,’ that means you get a steamed dog in a steamed bun topped with mustard, raw onions and raw cabbage. Soft bun soft dog, crunchy toppings.",
         restuarant: "https://www.mtlblog.com/lifestyle/the-real-story-behind-montreal-pool-room",
         coordinates: [45.5017, -73.5673],
         popUpContent: `<a class="switch" href="#stuff" data-dog="steamie">Steamie</a>`
      },

      slawdog: {
         title: "West Virginia Slaw Dog",
         location: "West Virginia",
         imgsrc: "https://www.fillmurray.com/500/300",
         description: "This slaw doused rumbler is at home in the rolling Appalachia of our dreams, gently cruising through the tree-lined highways of our desires. The West Virginia Slaw Dog is a spicy chili dog topped with onions and thick, creamy coleslaw. It is served on a soft pillowy bun and just like any self respecting hot dog it frowns upon ketchup. Sign us up. ",
         restaurant: "http://kingtutdrivein.com/",
         coordinates: [38.5976, -80.4549],
         popUpContent: `<a class="switch" href="#stuff" data-dog="slawdog">Slaw-Dog</a>`
		},
		
		chiledog: {
			title: "Red Chile Dog",
			locations: "New Mexico",
			imgsrc: "./assets/chiledog.jpg",
			description: "blah",
			restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g60933-d540494-Reviews-Dog_House_Drive_In-Albuquerque_New_Mexico.html",
			coordinates: [35.084, -106.650],
			popUpContent: `<a class="switch" href="#stuff" data-dog="chiledog">Chile Dog</a>`
		},

		sonorandog: {
			title: "Sonoran Hot Dog",
			location: "Arizona",
			imgsrc: "./assets/sonorandog.jpg",
			description: `The Sonoran Hot Dog is the most perfect mix of Mexican and American culture. This child of the Sonoran desert is wrapped In bacon, served in a bollilo bun and topped with seasoned pinto beans, tomatoes, grilled peppers and onions. Sometimes you get mayo and mustard. Sometimes you get salsa verde. Delicious perfection. The Sonoran Dog is a gastronomical representation of the <a target="_blank" href="https://www.npr.org/templates/story/story.php?storyId=106366080"> latin diaspora</a>. Be sure to try out one of the 100s of ‘dogueros’ around Phoenix and Tuscon if you ever have the chance.`,
			restaurant: "https://www.aquiconelnene.com/",
			coordinates: [32.222, -110.974],
			popUpContent: `<a class="switch" href="#stuff" data-dog="sonorandog">Sonoran Hot Dog</a>`
		},

		kansascity: {
			title: "Kansas City Frank",
			location: "Kansas City, Missouri/Kansas",
			imgsrc: "https://www.fillmurray.com/500/300",
			description: "kansis city dog loremloremloremlorem",
			restaurant: "http://www.fritzskcmeats.com/about-us.html",
			coordinates: [39.099, -94.578],
			popUpContent: `<a class="switch" href="#stuff" data-dog="kansascity">Kansas City Frank</a>`
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

   $("#mapid").on("click", ".switch", function(e){
		const dogChoice = $(this).attr("data-dog");
		//then call function that displays hot dog choice using user selected button
      displayDogOnPage(dogChoice);
   });

	//FUNCTION THAT DISPLAYS HOT DOG OF USER CHOICE
	
   const displayDogOnPage = function(dogChoice) {
		// add html to the section with class of content using template literals
		$(".content").html(`<div class=img-container><img src="${hotDogInfo[dogChoice].imgsrc}"></div><div class=popup-content><h2>${hotDogInfo[dogChoice].title}</h2><h3>${hotDogInfo[dogChoice].location}</h3>
      <p>${hotDogInfo[dogChoice].description}</p>
      <a class="popup-link" target="_blank" href="${hotDogInfo[dogChoice].restaurant}">Try it here</a></div>
		<a href="#" class="return-switch"><i aria-hidden class="fas fa-times"></i><span class="visuallyhidden">close pop-up window</span></a>`); 
		//then add class that makes div display block so a full popup slides in
		$(".content").addClass("show-me");
   }

   
	//FUNCTION THAT REMOVES HOT DOG POP-UP from screen

		//when clicking the close pop-up button
		let removeDogFunction = function(){
      // $(`#stuff`).on(`click`, `.return-switch`, function(e) {
			//wait .2 second to remove class that displays content for 'weight' feel
            window.setTimeout(function () {
                  $(".content").removeClass("show-me")
				}, 200);
				//wait an additional .2 seconds to remove content from popup so it slides away full
            window.setTimeout(function () {
                  $(".content").empty();
            }, 400);
	
	};

	$(`#stuff`).on(`click`, `.return-switch`, function (e) {
		removeDogFunction();
	});



	//RANDOM HOTDOG BUTTON -------/

	//turning an object into an array called hotdogInfoArray
	const hotDogInfoArray = Object.entries(hotDogInfo)

	//function that creates
	const randomChoice = function(array) {
		let randomItem = array[Math.floor(Math.random() * array.length)];
		return randomItem;
	};


	$(".chaos").on("click", function(){
		removeDogFunction();
		window.setTimeout(function () {
			displayDogOnPage(randomChoice(hotDogInfoArray)[0]);
		}, 400);
	
	})


}); 





// KONAMI CODE -----------/

// KEYS OBKECT DEFININING KEYS THAT ARE STROKABLE
var konamiKeys = {
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
	console.log(konamiCodePosition);
});

//function that activate the easter eh
function activateEasterEgg() {
      document.body.style.backgroundImage = "url('images/cheatBackground.png')";
		//plays audio 
   	let audio = new Audio('assets/ballgame.mp3');
      audio.play();

		//alerts that you are cool
      alert("WOW! COOL!");
}

// END OF KONAMI CODE ------------\




