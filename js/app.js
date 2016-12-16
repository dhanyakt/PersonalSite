$(document). ready(function(argument) {
    $(".button-collapse").sideNav();
    $('.slider').slider();
});


var skills = [{
    "skill_list": ["HTML5","CSS3","JavaScript","jQuery","Java","Ajax"]
}];

var educationList = [{
    "education": ["B.Tech(Information Technology)","Nanodegree Front End development"]
}];


var contentList = [{
    "title": "Neighbhorhood Map",
    "imgSrc": "images/map.jpg",
    "description": "A single-page web application, built using the Knockout framework," +
        "that displays a Google Map of an area and various points of interest." +
        "Users can search all included landmarks and, when selected," +
        "additional information about a landmark is presented from the" +
        "FourSquare and Wikipedia APIs."
},{
    "title": "Arcade Game",
    "imgSrc": "images/game.jpg",
    "description": " An HTML5 Canvas powered video game, developed using the " +
        "best practices in Object Oriented JavaScript."
}, {
    title: "Website Optimization",
    imgSrc: "images/web_opt.jpg",
    description: "Optimized an inefficient web application's JavaScript," +
        "CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed" +
        "score of at least 90."
},{
    "title": "Portfolio",
    "imgSrc": "images/kitten_portfolio.jpg",
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

var Education = function(data) {
    var self = this;
    this. course = data.education;
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

    self.courseList = ko.observableArray([]);
    educationList.forEach(function(course) {
        self.courseList.push(new Education(course));
    });


    this.currentCarouselItem = ko.observable(this.carouselList()[0]);
    console.log("current Item:" + this.currentCarouselItem);

}

ko.applyBindings(new ViewModel());