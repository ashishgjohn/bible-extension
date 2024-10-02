chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'createSidebar') {
        createSidebar();
    } else if (request.action === 'removeSidebar') {
        removeSidebar();
    }
}); 

function createSidebar() {
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

        applyLayoutFix(400);
    }
}

function removeSidebar() {
    const sidebar = document.getElementById('react-sidebar');
    if (sidebar) {
        sidebar.remove();
        applyLayoutFix(0);
    }
}

function applyLayoutFix(sidebarWidth) {
    document.body.style.marginRight = `${sidebarWidth}px`;
    document.body.style.transition = 'margin-right 0.3s ease';

    if (window.location.hostname.includes('youtube.com')) {
        const primaryContent = document.getElementById('primary');
        if (primaryContent) {
            primaryContent.style.marginRight = '400px';
            primaryContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    if (window.location.hostname.includes('mail.google.com')) {
        const mainContent = document.querySelector('.aeF');
        if (mainContent) {
            mainContent.style.marginRight = '400px';
            mainContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    if (window.location.hostname.includes('play.google.com')) {
        const mainContent = document.querySelector('.VfPpkd-Jh9lGc');
        if (mainContent) {
            mainContent.style.marginRight = '400px';
            mainContent.style.transition = 'margin-right 0.3s ease';
        }
    }

    if (window.location.hostname.includes('meet.google.com')) {
        const meetContent = document.querySelector('.MCcOAc.IqBfM.ecJEib.EWZcud.cjGgHb.d8Etdd.LcUz9d');
        if (meetContent) {
            meetContent.style.marginRight = '400px';
            meetContent.style.transition = 'margin-right 0.3s ease';
        }
    }
}