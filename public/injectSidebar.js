if (!document.getElementById('react-sidebar')) {
    const sidebar = document.createElement('iframe');
    sidebar.id = 'react-sidebar';
    sidebar.src = chrome.runtime.getURL('index.html');
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.right = '0';
    sidebar.style.width = '400px';
    sidebar.style.height = '100%';
    sidebar.style.border = 'none';
    sidebar.style.zIndex = '9999';
    sidebar.style.boxShadow = '-2px 0px 5px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(sidebar);
    // document.body.style.paddingRight = '400px';
    // document.body.style.transition = 'margin-right 0.3s ease';

    applyLayoutFix();
}


function applyLayoutFix() {
    // Adjust the page content to make room for the sidebar
    document.body.style.marginRight = '400px';  // Add margin to push content to the left
    document.body.style.transition = 'margin-right 0.3s ease';  // Smooth transition

    // Specific fix for YouTube (targets the main video container)
    if (window.location.hostname.includes('youtube.com')) {
        const primaryContent = document.getElementById('primary');  // YouTube's main content
        if (primaryContent) {
            primaryContent.style.marginRight = '400px';
            primaryContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    // Specific fix for Gmail (targets the main email view area)
    if (window.location.hostname.includes('mail.google.com')) {
        const mainContent = document.querySelector('.aeF');  // Gmail's email view area
        if (mainContent) {
            mainContent.style.marginRight = '400px';
            mainContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    // Specific fix for Play Store (adjusts the main content container)
    if (window.location.hostname.includes('play.google.com')) {
        const mainContent = document.querySelector('.VfPpkd-Jh9lGc');  // Play Store main container
        if (mainContent) {
            mainContent.style.marginRight = '400px';
            mainContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    if (window.location.hostname.includes('meet.google.com')) {
        const meetContent = document.querySelector('.MCcOAc.IqBfM.ecJEib.EWZcud.cjGgHb.d8Etdd.LcUz9d');  // Google Meet's main content container
        if (meetContent) {
            meetContent.style.marginRight = '400px';
            meetContent.style.transition = 'margin-right 0.3s ease';
        }
    }
}