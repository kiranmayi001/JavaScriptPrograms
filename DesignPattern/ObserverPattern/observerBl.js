
/**
 * @class-Click class which having subscribe,unsubscribe,notifyall methods
 */

class Click {
    constructor(sub) {
        this.sub = sub;
        this.handlers = [];
    }
    /**
   * @module-subcribersAdd function which push the subscriber into observer
   */
    subscribersAdd(sub) {
        this.handlers.push(sub);
        console.log(this.handlers);

    }
    /**
   * @module-subcribeDelete function which deletes the subscriber into observer
   */
    subscriberDelete(sub) {

        var index = 0;
        for (let x in this.handlers) {
            if (this.handlers[x] == sub) {

                index = x;
                console.log(index);
                this.handlers.splice(index, 1);
            }
        }
        //console.log("deleted "+this.handlers.slice(index, 1));
        console.log(this.handlers);
    }
    /**
   * @module-notifies about subscriber 
   */
    printNotified() {
        for (let x in this.handlers) {
            console.log(this.handlers[x] + " " + "notification sent successfully")
        }
    }
}
/**
   * @module-exporting 
   */
module.exports = {
    Click
}