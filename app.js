var cQuote = "",
    cAuthor = "";

function theQuote() {
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        headers: {
            "X-Mashape-Key": "37rPRGNz2qmshlIEUESVysK9GyPtp1g5xPmjsne05xEVRCdWMZ",
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(response) {
            var res = JSON.parse(response);
            cQuote = res.quote;
            cAuthor = res.author;

            $('#textQuote').text(res.quote);
            $('#author').html(res.author);
        },
    });
};
// Share the quote to twitter
function tweet() {
    window.open('https://twitter.com/intent/tweet?hashtags=Quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + cQuote + '" ' + cAuthor));
};

$(document).ready(function() {
    theQuote();
    $('#newQuote').on('click', theQuote);
    $('#twitterShare').on('click', tweet);
});