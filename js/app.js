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

var links = [{
    "title": "github",
    "url": "https://github.com/dhanyakt",
    "image": "images/github.png"
},{
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/dhanyakt",
    "image": "images/linkedin.png"
},{
    "title": "facebook",
    "url": "http://www.facebook.com",
    "image": "images/facebook.png"
},{
    "title": "gmail",
    "url": "http://www.google.com",
    "image": "images/Gmail-icon.png"
}];

var contentList = [{
    "title": "Neighbhorhood Map",
    "imgSrc": "images/map.jpg"
},{
    "title": "Arcade Game",
    "imgSrc": "images/game.JPG"
}, {
    "title": "Website Optimization",
    "imgSrc": "images/web_opt.JPG"
},{
    "title": "Bootstrap portfolio",
    "imgSrc": "images/kitten_portfolio.JPG"
}];


var Content = function(data) {
    var self = this;
    this.title = data.title;
    this.imgSrc = data.imgSrc;
}

var Skills = function(data) {
    var self = this;
    self.skill = data.skill_list;
}

var Education = function(data) {
    var self = this;
    this. course = data.education;
}

var Urls = function(data) {
    var self = this;
    this.title = data.title;
    this.url = data.url;
    this.image = data.image;
}


var ViewModel = function() {
    var self = this;

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

    self.urlList = ko.observableArray([]);
    links.forEach(function(urlLinks){
        self.urlList.push(new Urls(urlLinks));
    });

    this.currentCarouselItem = ko.observable(this.carouselList()[0]);
    console.log("current Item:" + this.currentCarouselItem);
}

ko.applyBindings(new ViewModel());