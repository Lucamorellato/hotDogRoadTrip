
//DOCUMENT READY
$(document).ready(function () {

   
	// LEAFLET MAP SETUP SCRIPT -----------------/
	
	//determine startin point of map
   var mymap = L.map('mapid').setView([39.825, -98.5799], 4.2);
	
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
	
	// END OF MAP SCRIPT ----------------\


   //OBJECT DEFINITIONS -----------/
   const hotDogInfo = {
      coneydog: {
         title: "Coney Island Dog",
         location: "Detroit Area, Michigan",
         imgsrc: "https://www.fillmurray.com/500/200",
			description: `The Coney Dog is not actually a New York tradition, but a Detroit Greek-American creation. That doesn’t make sense we know, but that’s how hot dogs and Detroit work. A Coney Dog features beef-heart chili, chopped raw onions, yellow mustard and gruff service. These dogs define what it means to be North American. The old world and new world melding into one magical steamy tube. Best to order: “One up with everything.” Tasty enough to tear a family apart, <a target="_blank" href="https://www.citylab.com/design/2012/08/how-coney-dog-became-detroits-signature-food/2779/">seriously.`,
         restaurant:"https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [42.3314, -83.045],
         popUpContent: `<a class="switch" href="#stuff" data-dog="coneydog">Coney Dog</a>`
      },

      dangerdog: {
         title: "Danger Dog",
         location: "Los Angelos, California",
         imgsrc: "https://www.fillmurray.com/500/200",
			description: "The Danger Dog is at home sizzling on an illegal side-walk grill basking in caramelizing onions. This LA tradition is bacon-wrapped and grilled, covered in mayo, Ketchup(gasp!) and grilled veggies like pablano peppers. Colloquially called ‘dangerous’ because some people don’t understand the beauty of supporting street entrepreneurs through ethical consumption of delicious hot dogs… But the name does sound cool. These things are so darn LA that the LA City Council named it the cities “Official Hot Dog.” ",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [34, -118.24],
         popUpContent: `<a class="switch" href="#stuff" data-dog="dangerdog">Danger Dog</a>`
      },

      seattledog: {
         title: "Seattle Dog",
         location: "Seattle, Washington",
         imgsrc: "https://www.fillmurray.com/500/200",
			description: "When you are hungry after a show at your favourite ‘grunge’ club in Seattle you probably think, 'Hey, I want a grilled hot dog smeared with cream cheese!' Those rumours you've heard are true, those fanatics in the Pacific Northwest cover their hotdogs in cream cheese, bury them in grilled onions and top them with sriracha sauce or mustard. Just like the city it gets it name from the Seattle Dog is interesting, well-mannered and is at risk being ruined by Amazon. These are way better than they sound, honestly.",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: [46, -122.33],
         popUpContent: `<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`
      },

      cheesyconey: {
         title: "Cheesy Coney",
         location: "Cincinnati, Ohio",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "Cheesy Coney's are just like the other Coney Dogs… but with cheese. Really, that is all Cincinnati has to bring to the table for us. Well there are some fundamental differences to us real Coney knuckleheads. In Cincinnati their Coneys have a dry chilli that features all sorts of aromatic seasonings (cinnamon, allspice, clove) as opposed to Detroit’s ’soupy’ chilli. And you get a mid-west serving of shredded cheese on top. Fun fact: there are four different local chains of ‘chilli' diners in the Cincinnati area and they are all open late, they will all cause heart-burn and they most definitely all have the word Chili in their name",
         restaurant:  "http://www.dixiechili.com/",
         coordinates: [39.1, -84.5120196],
         popUpContent: `<a class="switch" href="#stuff" data-dog="cheesyconey">Cheesy Coney</a>`
      },

      steamie: {
         title: "Steamie",
         location: "Montreal, Quebec",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "Ahhh la Belle Province! These Montreal staples have potentially the cutest name on the list. Steamies… served at ‘wieneries’ across the province. When you go to a real old school shop and ask for an ‘all dressed,’ that means you get a steamed dog in a steamed bun topped with mustard, raw onions and raw cabbage. Soft bun soft dog, crunchy toppings.",
         restuarant: "https://www.mtlblog.com/lifestyle/the-real-story-behind-montreal-pool-room",
         coordinates: [45.5017, -73.5673],
         popUpContent: `<a class="switch" href="#stuff" data-dog="steamie">Steamie</a>`
      },

      slawdog: {
         title: "West Virginia Slaw Dog",
         location: "West Virginia",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "This slaw doused rumbler is at home in the rolling Appalachia of our dreams, gently cruising through the tree-lined highways of our desires. The West Virginia Slaw Dog is a chili dog topped with raw onions and thick, creamy coleslaw. It is served on a soft pillowy bun and just like any self respecting hot dog it frowns upon ketchup.",
         restaurant: "http://kingtutdrivein.com/",
         coordinates: [38.5976, -80.4549],
         popUpContent: `<a class="switch" href="#stuff" data-dog="slawdog">Slaw-Dog</a>`
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
      L.marker(place)
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
      $(".content").html(`<h2>${hotDogInfo[dogChoice].title}</h2><img src="${hotDogInfo[dogChoice].imgsrc}"><h4>${hotDogInfo[dogChoice].location}</h4>
      <p>${hotDogInfo[dogChoice].description}</p>
      <a href="${hotDogInfo[dogChoice].restaurant}"></a>
		<a class="return-switch" href="#main">CLOSE</a>`); 
		//then add class that makes div display block so a full popup slides in
		$(".content").addClass("show-me");
   }

   
	//FUNCTION THAT REMOVES HOT DOG POP-UP from screen

		//when clicking the close pop-up button
      $(`#stuff`).on(`click`, `.return-switch`, function(e) {
			//wait .2 second to remove class that displays content for 'weight' feel
            window.setTimeout(function () {
                  $(".content").removeClass("show-me")
				}, 200);
				//wait an additional .2 seconds to remove content from popup so it slides away full
            window.setTimeout(function () {
                  $(".content").empty();
            }, 400);
	})

	//RANDOM HOTDOG BUTTON -------/

	//turning an object into an array called hotdogInfoArray
	const hotDogInfoArray = Object.entries(hotDogInfo)

	//function that creates
	const randomChoice = function(array) {
		let randomItem = array[Math.floor(Math.random() * array.length)];
		return randomItem;
	};

	console.log(randomChoice(hotDogInfoArray));
	$(".chaos").on("click", function(){
		displayDogOnPage(randomChoice(hotDogInfoArray)[0]);
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




