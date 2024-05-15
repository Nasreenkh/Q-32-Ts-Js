// List of current usernames
var current_users = ['John', 'Mary', 'Alice', 'Bob', 'Jane'];
// List of new usernames to check
var new_users = ['john', 'David', 'Jane', 'Sarah', 'Michael'];
// Function to check if a username is available
function checkUsernameAvailability(username) {
    return !current_users.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new_users list to check availability
new_users.forEach(function (username) {
    if (checkUsernameAvailability(username)) {
        console.log("Username '".concat(username, "' is available."));
    }
    else {
        console.log("Username '".concat(username, "' is already taken. Please choose a different one."));
    }
});
