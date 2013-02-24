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

var PlanJS = (function() {
  function PlanConstructor(details) {
    this.steps = details.steps;
    this.first = details.first;
  };

  PlanConstructor.prototype = {
    execute: function() {
      this.take_step(this.first, []);
    },
    take_step: function(step_name, args) {
      var step = this.steps[step_name];

      if(step) {
        var deferred = new $.Deferred()
                            .done(this.take_future_step(step.resolve))
                            .fail(this.take_future_step(step.reject))
                            .always(this.take_future_step(step.always));

        args.unshift(deferred);

        step.action.apply({}, args);
      }
    },
    take_future_step: function(step_name) {
      var that = this;
      return function() {
        that.take_step(step_name, Array.prototype.slice.call(arguments));
      };
    }
  };

  return PlanConstructor;
})();
