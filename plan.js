/*
 * [X] Should handle sync and async steps
 * [X] Should have minimal plan setup ceremony
 * [X] Should handle steps w/ 1 or 2 possible outcomes
 * [X] Should allow for information to be passed between steps
 * [ ] Should allow for plan execution to pass in config/context data
 * [X] Should allow for creation of plans and seperate execution
 *         possibly multiple times w/ different context
 * [X] Should minimally polute global namespace
 */

var PlanJS = function(details) {
  // verify data is ok?
  this.steps = details.steps; // clone?
  this.first = details.first;
};

PlanJS.prototype = {
  execute: function() {
    this.take_step(this.first, []);
  },
  take_step: function(step_name, args) {
    var step = this.steps[step_name]; // safely degrade if no step found or better error?
    var deferred = new $.Deferred()
                        .done(this.take_future_step(step.resolve))
                        .fail(this.take_future_step(step.reject))
                        .always(this.take_future_step(step.always));

    args = args || []
    args.unshift(deferred);

    var result = step.action.apply({}, args);

    if(result != undefined) { // safer way?
      result ? deferred.resolve() : deferred.reject();
    }
  },
  take_future_step: function(step_name) {
    var that = this;// pass data instead? // can we pass undefined?
    return !!step_name ? function() { that.take_step(step_name, Array.prototype.slice.call(arguments)); } : $.noop;
  }
};
