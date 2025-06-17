// Replace smoke with carbon dioxide on each tick
elements["smke"].tick = function(pixel) {
    changePixel(pixel, "carbon_dioxide");
};

// Make carbon_dioxide persistent (doesn't vanish on its own)
elements["carbon_dioxide"].tick = function(pixel) {
    // Do nothing, it just floats and lingers
};
