console.log('ayo777');

// Get the hostname of the current site
const currentSite = window.location.hostname;
console.log(`Loaded777 on ${currentSite}`);
// Conditionally display console logs based on the site
if (currentSite === 'example.com') {
    console.log('Loaded on example.com');
    // Add any site-specific code here
} else if (currentSite === 'anotherexample.com') {
    console.log('Loaded on anotherexample.com');
    // Add any site-specific code here
} else {
    console.log(`Loaded on ${currentSite}`);
    // Add default code here
}
