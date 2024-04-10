document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('name').value;
    var ageGroup = document.getElementById('age-group').value;
    var trimester = document.getElementById('trimester').value;

    var url = generateURL(ageGroup, trimester);
    window.location.href = url + '?username=' + encodeURIComponent(username);
});
function generateURL(ageGroup, trimester) {
    var baseUrl = '1.html'; 

    if (ageGroup === '19 and below') {
        baseUrl = '1.html';
    } else if (ageGroup === '20-29') {
        if (trimester === '1st') {
            baseUrl = '2.html';
        } else if (trimester === '2nd') {
            baseUrl = '3.html';
        } else if (trimester === '3rd') {
            baseUrl = '4.html';
        }
    } else if (ageGroup === '30-39') {
        if (trimester === '1st') {
            baseUrl = '5.html';
        } else if (trimester === '2nd') {
            baseUrl = '6.html';
        } else if (trimester === '3rd') {
            baseUrl = '7.html';
        }
        
    } else if (ageGroup === '40 and above') {
        if (trimester === '1st') {
            baseUrl = '8.html';
        } else if (trimester === '2nd') {
            baseUrl = '9.html';
        } else if (trimester === '3rd') {
            baseUrl = '10.html';
        }
    }

    return baseUrl;
}


// Extract username from URL and display it
var username = getParameterByName('username');
document.getElementById('username').textContent = username;

// Function to extract parameter value from URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}