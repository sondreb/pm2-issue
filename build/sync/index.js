function syncInterval(arg) {
    console.log('SYNC interval run.');

    setTimeout((arg) => {
        syncInterval(arg);
    }, 5000);
}

syncInterval(null);
