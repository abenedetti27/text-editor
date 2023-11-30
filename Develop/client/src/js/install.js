const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('butInstall clicked');
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const userChoice = await deferredPrompt.userChoice;
        if (userChoice.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log(`User dismissed install prompt`);
        deferredPrompt = null;
        butInstall.style.display = 'none';
    }
    deferredPrompt = null;
    butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app installed', event);
});
