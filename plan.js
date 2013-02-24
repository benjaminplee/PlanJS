/*
 * Should handle sync and async steps
 * Should have minimal plan setup ceremony
 * Should handle steps w/ 1 or 2 possible outcomes
 * Should allow for information to be passed between steps
 * Should allow for plan execution to pass in config/context data
 * Should allow for creation of plans and seperate execution
 *    possibly multiple times w/ different context
 * Should minimally polute global namespace
 */

var PlanJS = function(details) {
  this.steps = details.steps; // clone?
  this.first = details.first;
};

PlanJS.prototype = {
  execute: function() {
    this.take_step(this.first);
  },
  take_step: function(step_name) {
    var step = this.steps[step_name]; // safely degrade if no step found or better error?
    var deferred = new $.Deferred()
                        .done(this.take_future_step(step.resolve))
                        .fail(this.take_future_step(step.reject))
                        .always(this.take_future_step(step.always));

    var result = step.action(deferred);

    if(result != undefined) { // safer way?
      result ? deferred.resolve() : deferred.reject();
    }
  },
  take_future_step: function(step_name) {
    var that = this;
    return !!step_name ? function() { // pass data instead?
      that.take_step(step_name);
    } : $.noop; // can we pass undefined?
  }
};
