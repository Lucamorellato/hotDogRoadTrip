
//DOCUMENT READY
$(document).ready(function () {
   
   // LEAFLET MAP SETUP SCRIPT
   var mymap = L.map('mapid').setView([39.825, -98.5799], 4.2);
   
   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
   }).addTo(mymap);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(mymap);


   //LIST OF MAP MARKERS
   // let blob = L.marker([46, -122.33]).addTo(mymap);

   // blob.bindPopup(`<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`);



   // L.marker(LONGLATVARIABLE)
   //    .addTo(mymap)
   //    .bindPopup(`<a class="switch" href="#stuff" data-dog="DATAVARIABLE">NAMEOFDOGVARIABLE</a>`);


   // for(item in dogInfoi) {
   //    addThisShitToTheMap(dogInfoi.nameOfDog);
   // };

   //write a for in loop that cycles through an object using a broad function


// expected output: "123"


   L.marker([46, -122.33])
      .addTo(mymap)
      .bindPopup(`<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`);

   let blob = L.marker([42.3314, -83.045]).addTo(mymap);

   blob.bindPopup(`<a class="switch" href="#stuff" data-dog="coneydog">Coney Dog</a>`);

   blob = L.marker([34, -118.24]).addTo(mymap);

   blob.bindPopup(`<a class="switch" href="#stuff" data-dog="dangerdog">Danger Dog</a>`);

   blob = L.marker([39.1, -84.5120196]).addTo(mymap);

   blob.bindPopup(`<a class="switch" href="#stuff" data-dog="cheesyconey">Cincinnati Cheesy Coney</a>`);






   //OBJECT 
   const hotDogInfo = {
      coneydog: {
         title: "Coney Island Dog",
         location: "Detroit Area, Michigan",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant:"https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: "[42.3314, -83.045]",
         popUpContent: `<a class="switch" href="#stuff" data-dog="coneydog">Coney Dog</a>`
      },

      dangerdog: {
         title: "Danger Dog",
         location: "Los Angelos, California",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: "[34, -118.24]",
         popUpContent: `<a class="switch" href="#stuff" data-dog="dangerdog">Danger Dog</a>`
      },

      seattledog: {
         title: "Seattle Dog",
         location: "Seattle, Washington",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html",
         coordinates: "[46, -122.33]",
         popUpContent: `<a class="switch" href="#stuff" data-dog="seattledog">Seattle Dog</a>`
      },

      cheesyconey: {
         title: "Cincinnati Cheesy Coney",
         location: "Cincinnati, Ohio",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "This dog is like the other Coney Dogs… but with cheese. Really. That’s it. That is all Cincinnati has to bring to the table for us. But really the Cheesy Coney actually has is a dry chilli that features all sorts of aromatic seasonings (cinnamon, allspice, clove) as opposed to Detroit’s ’soupy’ chilli. And you get a mid-west serving of shredded cheese on top. T Fun fact: there are four different local chains of ‘chilli’ diners in the Cincinnati area and it is amazing competition.",
         restaurant:  "http://www.dixiechili.com/",
         coordinates: "[39.1, -84.5120196]",
         popUpContent: `<a class="switch" href="#stuff" data-dog="cheesyconey">Cincinnati Cheesy Coney</a>`
      }
   }
   const blahblah = function(){
      console.log("I am good");
   }

   for (const taco in hotDogInfo) {
      if (hotDogInfo.hasOwnProperty(taco)) {
         blahblah();
      }
   }

   //---PSUEDO CODE ----
   //-------------------
   //listen for user click on button
   //on click determine the data-attribute of selected button
   //find object that correlates to selected button 


   //MAIN FUNCTION ON CLICK OF A BUTTON
   

   $("#mapid").on("click", ".switch", function(event){
      const dogChoice = $(this).attr("data-dog");
      $(".content").addClass("show-me");
      displayDogOnPage(dogChoice);
   });

   //FUNCTION THAT DISPLAYS HOT DOG OF USER CHOICE
   const displayDogOnPage = function(dogChoice) {
      $('html, body').animate({
         scrollTop: $("#stuff").offset().top
      }, 500);
      $(".content").html(`<h2>${hotDogInfo[dogChoice].title}</h2><img src="${hotDogInfo[dogChoice].imgsrc}"><h4>${hotDogInfo[dogChoice].location}</h4>
      <p>${hotDogInfo[dogChoice].description}</p>
      <a href="${hotDogInfo[dogChoice].restaurant}"></a>
      <a class="return-switch" href="#main">Back to map</a>`);
      console.log(dogChoice);  
   }
   
   //FUNCTION THAT REMOVES HOT DOG from screen
   const removeDogOnPage = function(event){
      $("#stuff").on("click", ".return-switch", function(event) {
         $('html, body').animate({
            scrollTop: $("#main").offset().top
         }, 500);
         window.setTimeout(function () {
            $(".content").removeClass("show-me")
         }, 1000);
      });
   }

   removeDogOnPage();

   // const smoothScroll = function () {
   //    $("a[href^='#']").on("click", function (event) {
   //       const target = this.hash;
   //       const $target = $(target);
   //       $("html, body").animate({
   //          "scrollTop": $target.offset().top
   //       }, 750, "swing", function () {
   //          window.location.hash = target;
   //       });
   //    });
   // }

   // smoothScroll();


   const scrollBackToTop = function () {
      window.setTimeout(function () {
         $(".content").removeClass("show-me")
      }, 5000);
   };


         

}); 
