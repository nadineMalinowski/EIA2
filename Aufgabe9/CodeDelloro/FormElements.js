var Form;
(function (Form) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
    }
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map