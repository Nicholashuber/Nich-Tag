console.log('ayo777');

// Get the hostname of the current site
const currentSite = window.location.hostname;
console.log(`Loaded on ${currentSite}`);

// Code that runs on all sites
console.log('This code runs on every site.');
// Add any universal code here
const logRocketScript=null;

// Conditionally display console logs and execute site-specific code
switch (currentSite) {
    case 'Lavasocks.com':
        // Dynamically load the LogRocket script
        logRocketScript = document.createElement('script');
        logRocketScript.src = 'https://cdn.lrkt-in.com/LogRocket.min.js';
        logRocketScript.crossOrigin = 'anonymous';
        logRocketScript.onload = function() {
            // Initialize LogRocket after the script has loaded
            if (window.LogRocket) {
                window.LogRocket.init('h9quwk/lavasocks');
            }
        };

        // Append the script to the document head
        document.head.appendChild(logRocketScript);
        break;
    case 'anotherexample.com':
        console.log('Site-specific code for anotherexample.com');
        // Add any code specific to anotherexample.com here
        break;
    case 'ip-fetch-saas.pages.dev':
        console.log('Site-specific code for ip-fetch-saas.pages.dev');
        // Dynamically load the LogRocket script
        logRocketScript = document.createElement('script');
        logRocketScript.src = 'https://cdn.lrkt-in.com/LogRocket.min.js';
        logRocketScript.crossOrigin = 'anonymous';
        logRocketScript.onload = function() {
            // Initialize LogRocket after the script has loaded
            if (window.LogRocket) {
                window.LogRocket.init('h9quwk/ip-fetch-saas');
            }
        };

        // Append the script to the document head
        document.head.appendChild(logRocketScript);
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
