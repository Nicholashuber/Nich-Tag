console.log('ayo777');

// Get the hostname of the current site
const currentSite = window.location.hostname;
console.log(`Loaded on ${currentSite}`);

// Code that runs on all sites
console.log('This code runs on every site.');
// Add any universal code here

// Conditionally display console logs and execute site-specific code
switch (currentSite) {
    case 'example.com':
        console.log('Site-specific code for example.com');
        // Add any code specific to example.com here
        break;
    case 'anotherexample.com':
        console.log('Site-specific code for anotherexample.com');
        // Add any code specific to anotherexample.com here
        break;
    case 'ip-fetch-saas.pages.dev':
        console.log('Site-specific code for ip-fetch-saas.pages.dev');
        // Add any code specific to yetanotherexample.com here
        break;
    // Add more cases as needed for other specific sites
    default:
        console.log('Default code for unhandled sites');
        // Add default code for all other sites here
        break;
}

// Additional code that runs on all sites
console.log('Script execution complete.');
// Add any additional universal code here
