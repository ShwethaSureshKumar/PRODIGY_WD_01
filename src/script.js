
function toggleReview(reviewId) {
    var review = document.getElementById(reviewId);
    var modalContent = document.getElementById('modalContent');

    if (review.style.display === "none") {
        modalContent.innerHTML = review.innerHTML;
        document.getElementById('myModal').style.display = "block";
    } else {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {
    //highlight menu link
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var links = document.querySelectorAll('.nav-link');

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === page) {
            links[i].classList.add('active');
        }
    }


    window.onscroll = function () {
        
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // Change the background color when scrolling down
        if (scrollPosition > 50) {
            document.body.style.backgroundColor = "#e9edc9"; 
        } else {
            document.body.style.backgroundColor = ""; 
        }
    };

});

