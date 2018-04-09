var progressBar = {
    phase: 0, // 0, 1, 2, 3, or 4
    messages: ['Start progressing!', 'So far, so good!', 'Halfway there!', 'Almost there!', 'Full progress, well done!'],
    percentFilled: 0, // This is the actual percentage filled, a multiple of 10.
    decreaseEnabled: false,
    increaseEnables: true,

    updateMessage: function(percent) {
        // update phase and display corresponding message
    },

    decreaseProgress: function() {
        // update status bar with decreased value
    },

    increaseProgress: function() {
        // update status bar with increased value
    }
}

// button click events



// keyup events