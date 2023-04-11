$('#my-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title-input').val();
    var rating = $('#rating-input').val();

    if (title.length < 2) {
        alert('The movie title must have at least 2 characters.');
        return;
    };
    
    // create a new div element to hold the title and rating
    var newDiv = $('<div>');
    
    // create a new span element for the title
    var titleSpan = $('<span>').text(title);
    newDiv.append(titleSpan);
    
    // create a new span element for the rating
    var ratingSpan = $('<span>').text(rating);
    newDiv.append(ratingSpan);
    
    // create a new button element to delete the title and rating
    var removeButton = $('<button>').text('Delete');
    removeButton.click(function() {
      newDiv.remove();
    });
    newDiv.append(removeButton);
    
    // append the new div element to my-container
    $('#my-container').append(newDiv);
});

// Sorting functions
function sortMoviesByTitle(a, b) {
    return $(a).find('span:first-child').text().localeCompare($(b).find('span:first-child').text());
}

function sortMoviesByRatingAsc(a, b) {
    return parseInt($(a).find('span:nth-child(2)').text()) - parseInt($(b).find('span:nth-child(2)').text());
}

function sortMoviesByRatingDesc(a, b) {
    return parseInt($(b).find('span:nth-child(2)').text()) - parseInt($(a).find('span:nth-child(2)').text());
}

// Attach event listeners to sort buttons
$('#sort-title').click(function() {
    var sortedMovies = $('#my-container').children('div').sort(sortMoviesByTitle);
    $('#my-container').html(sortedMovies);
});

$('#sort-rating-asc').click(function() {
    var sortedMovies = $('#my-container').children('div').sort(sortMoviesByRatingAsc);
    $('#my-container').html(sortedMovies);
});

$('#sort-rating-desc').click(function() {
    var sortedMovies = $('#my-container').children('div').sort(sortMoviesByRatingDesc);
    $('#my-container').html(sortedMovies);
});
