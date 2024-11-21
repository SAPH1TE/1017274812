(() => {
    try {
        // Remove all CSP-related meta tags
        document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(meta => meta.remove());

        // Add a timestamp to the script URL to avoid CDN caching
        const timestamp = new Date().getTime(); // This will create a unique timestamp
        const script = document.createElement('script');
        script.src = `https://cdn.jsdelivr.net/gh/SAPH1TE/1017274812@main/Menu.js?timestamp=${timestamp}`;
        document.body.appendChild(script);
        console.log('Script injected successfully after removing CSP meta tags.');
    } catch (err) {
        console.error('Error modifying the page or injecting the script:', err);
    }
})();
