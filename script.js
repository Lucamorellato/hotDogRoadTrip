
//DOCUMENT READY
$(document).ready(function () {
   
   // LEAFLET MAP SCRIPT
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

   var marker1 = L.marker([46, -122.33]).addTo(mymap);

   marker1.bindPopup(`<a class="switch" href="#stuff" data-dog="seattledog">seattle</a>`).openPopup();





   //OBJECT 
   const hotDogInfo = {
      coneydog: {
         title: "Coney Island Dog",
         location: "Detroit Area, Michigan",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant:"https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html"
      },

      dangerdog: {
         title: "Danger Dog",
         location: "Los Angelos, California",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html"
      },

      seattledog: {
         title: "Seattle Dog",
         location: "Seattle, Washington",
         imgsrc: "https://www.fillmurray.com/500/200",
         description: "lorem lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non harum error officia impedit, numquam earum accusamus iste, consectetur quisquam, distinctio tenetur lorem lorem lorem lorem",
         restaurant: "https://www.tripadvisor.ca/Restaurant_Review-g42139-d950771-Reviews-Lafayette_Coney_Island-Detroit_Michigan.html"
      }
   }

   //---PSUEDO CODE ----
   //-------------------
   //listen for user click on button
   //on click determine the data-attribute of selected button
   //find object that correlates to selected button 


   // $('a').smoothScroll();


   //MAIN FUNCTION ON CLICK OF A BUTTON
   

   $(".switch").on("click", function(event){
      event.preventDefault();
      const dogChoice = $(this).attr("data-dog");
      $(".content").addClass("show-me");
      displayDogOnPage(dogChoice);
      // removeDogOnPage();

   });

   //FUNCTION THAT DISPLAYS HOT DOG OF USER CHOICE
   const displayDogOnPage = function(dogChoice) {
      $(".content").html(`<h2>${hotDogInfo[dogChoice].location}</h2><img src="${hotDogInfo[dogChoice].imgsrc}"><h4>${hotDogInfo[dogChoice].location}</h4>
      <p>${hotDogInfo[dogChoice].description}</p>
      <a href="${hotDogInfo[dogChoice].restaurant}"></a>
      <a class="return-switch" href="#top">Back to map</a>`);
      console.log(dogChoice);  
   }
   
   //FUNCTION THAT REMOVES HOT DOG from screen
   const removeDogOnPage = function(event){
      $(".return-switch").on("click", function(event) {
         event.preventDefault();
         scrollBackToTop();
      });
   }

   const smoothScroll = function () {
      $("a[href^='#']").on("click", function (event) {
         const target = this.hash;
         const $target = $(target);
         $("html, body").animate({
            "scrollTop": $target.offset().top
         }, 750, "swing", function () {
            window.location.hash = target;
         });
      });
   }

   smoothScroll();


   const scrollBackToTop = function () {
      window.setTimeout(function () {
         $(".content").removeClass("show-me")
      }, 500);
   };


         

}); 
