function syncInterval(arg) {
    console.log('API interval run.');

    setTimeout((arg) => {
        syncInterval(arg);
    }, 5000);
}

syncInterval(null);
