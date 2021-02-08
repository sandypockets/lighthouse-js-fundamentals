// Programming Quiz: Umbrella (7-1)
// umbrella is an object, with methods to open and close it.

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

// Debugging
console.log(umbrella.close());
// Julia closes the umbrella!
// umbrella.isOpen changes from true to false