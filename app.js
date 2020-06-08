const beStill = {};

// array to hold length of breaths
beStill.toggleBreath = [
    4,
    6,
    8,
    10
];

// array to hold toggle colours
beStill.toggleColor = [
    {
        colorText: 'red',
        colorHex: '#DB5461'
    },
    {
        colorText: 'green',
        colorHex: '#59CD90'
    },
    {
        colorText: 'yellow',
        colorHex: '#F0C808'
    }
];

// array to hold themes
beStill.toggleTheme = [
    {
        name: "empty"
    },
    {
        name: "leaves",
        image: "../images/forestPhoto.jpg",
    },
    {
        name: "seashells",
        image: "../images/beachPhoto.jpg",
    },
    {
        name: "rain",
        image: "../images/rainPhoto.jpg",
    },
];

beStill.breathLength = 0;
beStill.colorSelect = 0;
beStill.themeSelect = 0;

// $('.inhale').text(beStill.toggleBreath[0]);
// $('.toggle').css('color', beStill.toggleColor[0].colorHex);

// hide and show settings/animation
beStill.showAnimation = function () {
    $('.activate').on('click', function(e) {
        e.preventDefault();
        // toggle class on settings & animation
        $('.showHide')
            .toggleClass('active')
            .toggleClass('dormant');
        // change text inside activate button
        if ($(this).text() === 'begin') {
            $(this).text('adjust');
        } else {
            $(this).text('begin');
        }
    }
)};

// cycle through breath lengths on click
beStill.cycleInhale = function() {
    $('.inhale').on('click', function(e) {
        e.preventDefault();
        // cycle up through available breath lengths and reset to zero once end of array is reached
        beStill.breathLength += 1;
        if (beStill.breathLength === beStill.toggleBreath.length) { beStill.breathLength = 0 };
        // change text to reflect current breath length
        $(this).text(beStill.toggleBreath[beStill.breathLength])
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${beStill.toggleBreath[beStill.breathLength]}s`)
    }
)};

// cycle through button colours on click
beStill.cycleColor = function() {
    $('.color').on('click', function(e){
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        beStill.colorSelect += 1;
        if (beStill.colorSelect === beStill.toggleColor.length) { beStill.colorSelect = 0 };
        $(this).text(beStill.toggleColor[beStill.colorSelect].colorText);
        $('.toggle').css('color', beStill.toggleColor[beStill.colorSelect].colorHex)
    }
)};

// cycle through themes on click
beStill.cycleTheme = function() {
    $('.theme').on('click', function(e){
        e.preventDefault();
        // cycle through themes, resetting to zero once end of array is reached
        beStill.themeSelect += 1;
        if (beStill.themeSelect === beStill.toggleTheme.length) { beStill.themeSelect = 0 };
        $(this).text(beStill.toggleTheme[beStill.themeSelect].name);
        console.log(beStill.toggleTheme[beStill.themeSelect].name);
        $('body').css('background-image', `url('images/${beStill.toggleTheme[beStill.themeSelect].image}')`);
    }
)};

beStill.init = function() {
    beStill.showAnimation();
    beStill.cycleColor();
    beStill.cycleTheme();
    beStill.cycleInhale();
}

$(document).ready(function() {
    beStill.init();
});


// const cycleThrough = function(indexVariable, array) {
//     indexVariable += 1;
//     if (indexVariable === array.length) { indexVariable = 0 };
//     return indexVariable;
// }