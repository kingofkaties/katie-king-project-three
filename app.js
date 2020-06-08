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

let breathLength = 0;
let colorSelect = 0;
let themeSelect = 0;

$('.inhale').text(beStill.toggleBreath[0]);
$('.toggle').css('color', beStill.toggleColor[0].colorHex);

beStill.init = function() {
    // hide and show settings/animation
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
    });
    
    // cycle through breath lengths on click
    $('.inhale').on('click', function(e) {
        e.preventDefault();
        // cycle up through available breath lengths and reset to zero once end of array is reached
        breathLength += 1;
        if (breathLength === beStill.toggleBreath.length) { breathLength = 0 };
        // change text to reflect current breath length
        $(this).text(beStill.toggleBreath[breathLength])
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${beStill.toggleBreath[breathLength]}s`)
    });
    
    // cycle through button colours on click
    $('.color').on('click', function(e){
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        colorSelect += 1;
        if (colorSelect === beStill.toggleColor.length) { colorSelect = 0 };
        $(this).text(beStill.toggleColor[colorSelect].colorText);
        $('.toggle').css('color', beStill.toggleColor[colorSelect].colorHex)
    })
    
    // cycle through themes on click
    $('.theme').on('click', function(e){
        e.preventDefault();
        // cycle through themes, resetting to zero once end of array is reached
        themeSelect += 1;
        if (themeSelect === beStill.toggleTheme.length) { themeSelect = 0 };
        $(this).text(beStill.toggleTheme[themeSelect].name);
        console.log(beStill.toggleTheme[themeSelect].name);
        $('body')
            .css('background-image', `url('images/${beStill.toggleTheme[themeSelect].image}')`)
            // .css('background-size', '100%')
            // .css('background-position', 'center');
    })
}

$(document).ready(function() {
    beStill.init();
});


// const cycleThrough = function(indexVariable, array) {
//     indexVariable += 1;
//     if (indexVariable === array.length) { indexVariable = 0 };
//     return indexVariable;
// }