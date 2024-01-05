"use strict";

module.exports = {
    load() {
        // execute when package loaded
    },

    unload() {
        // execute when package unloaded
    },

    // register your ipc messages here
    messages: {
        open() {
            // open entry panel registered in package.json
            Editor.Panel.open("fleon");
        },
        "say-hello"() {
            Editor.log("Hello World!");
            // send ipc message to panel
            Editor.Ipc.sendToPanel("fleon", "fleon:hello");
        },
        clicked() {
            Editor.log("Button clicked!");
        },
    },
};
