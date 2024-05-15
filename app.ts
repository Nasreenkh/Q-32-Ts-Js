// List of current usernames
const current_users: string[] = ['John', 'Mary', 'Alice', 'Bob', 'Jane'];

// List of new usernames to check
const new_users: string[] = ['john', 'David', 'Jane', 'Sarah', 'Michael'];

// Function to check if a username is available
function checkUsernameAvailability(username: string): boolean {
    return !current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new_users list to check availability
new_users.forEach(username => {
    if (checkUsernameAvailability(username)) {
        console.log(`Username '${username}' is available.`);
    } else {
        console.log(`Username '${username}' is already taken. Please choose a different one.`);
    }
});