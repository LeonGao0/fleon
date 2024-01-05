"use strict";
module.exports = {
    load: function () {
        // execute when package loaded
    },
    unload: function () {
        // execute when package unloaded
    },
    // register your ipc messages here
    messages: {
        open: function () {
            // open entry panel registered in package.json
            Editor.Panel.open("fleon");
        },
        "say-hello": function () {
            Editor.log("Hello World!");
            // send ipc message to panel
            Editor.Ipc.sendToPanel("fleon", "fleon:hello");
        },
        clicked: function () {
            Editor.log("Button clicked!");
        },
    },
};
