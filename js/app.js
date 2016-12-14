$(document). ready(function(argument) {
    $(".button-collapse").sideNav();
    $('.slider').slider();
//    $('.carousel').carousel();
//    $('.carousel').carousel({dist:0});
//    window.setInterval(function(){$('.carousel.carousel-slider').carousel('next')},3000);
//    $('.carousel').carousel('set', 4);
//    $('.carousel.carousel-slider').carousel({full_width: true});
});
//    $('.carousel').carousel({dist:0});
//    window.setInterval(function(){$('.carousel.carousel-slider').carousel('next')},3000);
//        $('.carousel').carousel('set', 4);

var skills = [{
    "skill_list": ["HTML5","CSS3","JavaScript","jQuery","Java"]
}];

var contentList = [{
    "title": "Neighbhorhood Map",
    "imgSrc": "http://lorempixel.com/580/250/nature/1",
    "description": "A single-page web application, built using the Knockout framework," +
        "that displays a Google Map of an area and various points of interest." +
        "Users can search all included landmarks and, when selected," +
        "additional information about a landmark is presented from the" +
        "FourSquare and Wikipedia APIs."
},{
    "title": "Arcade Game",
    "imgSrc": "http://lorempixel.com/580/250/nature/2",
    "description": " An HTML5 Canvas powered video game, developed using the " +
        "best practices in Object Oriented JavaScript."
}, {
    title: "Website Optimization",
    imgSrc: "http://lorempixel.com/580/250/nature/4",
    description: "Optimized an inefficient web application's JavaScript," +
        "CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed" +
        "score of at least 90."
},{
    "title": "Portfolio",
    "imgSrc": "http://lorempixel.com/580/250/nature/3",
    "description": "single page application with responsive images" +
        "and responsive layout."
}];

var Content = function(data) {
    var self = this;
    this.title = data.title;
    this.imgSrc = data.imgSrc;
    this.description = data.description;
}

var Skills = function(data) {
    var self = this;
    self.skill = data.skill_list;
}


var ViewModel = function() {
    var self = this;

//    self.profilePic = ko.observable();
//    self.profilePic('images/dhanya.jpg');

    self.carouselList = ko.observableArray([]);
    contentList.forEach(function(contents) {
        self.carouselList.push(new Content(contents));
    });

    self.skillList = ko.observableArray([]);
    skills.forEach(function(skill){
        self.skillList.push(new Skills(skill));
    });

    this.currentCarouselItem = ko.observable(this.carouselList()[0]);
    console.log("current Item:" + this.currentCarouselItem);

}

ko.applyBindings(new ViewModel());