// Plan.JS
// Author: Benjamin P Lee
// License: Creative Commons Attribution 3.0 Unported License (see source README)

var PlanJS = (function() {
  function PlanConstructor(details) {
    this.steps = details.steps;
    this.first = details.first;
  };

  PlanConstructor.prototype = {
    execute: function(context) {
      this.take_step(this.first, [context]);
    },
    take_step: function(step_name, args) {
      var step = this.steps[step_name];

      if(step) {
        var deferred = new $.Deferred()
                            .done(this.take_future_step(step.resolve, args[0]))
                            .fail(this.take_future_step(step.reject, args[0]))
                            .always(this.take_future_step(step.always, args[0]));

        args.unshift(deferred);

        step.action.apply({}, args);
      }
    },
    take_future_step: function(step_name, context) {
      var that = this;

      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(context);

        that.take_step(step_name, args);
      };
    }
  };

  return PlanConstructor;
})();
