# plan.js #

Simple plan (workflow) creation utility library.  Aim is to simplify simple workflows such as modals with forms and ajax error handling.

A live example can be found on this repo's [GitHub Pages site](http://benjaminplee.github.com/PlanJS/).

## Features / Goals

* Should handle sync and async steps
* Should have minimal plan setup ceremony
* Should handle steps w/ 1 or 2 possible outcomes
* Should allow for information to be passed between steps
* Should allow for plan execution to pass in config/context data
* Should allow for creation of plans and seperate execution; possibly multiple times w/ different context
* Should minimally polute global namespace

## Wish List / Thoughts

- Cleanup all of the args prepending
- Find a better way to handline context and streamline data passing without using all of the arguments or jump through 'this' hoops
- make take_step and take_future_step not prototype methods and maybe more general
- cleaner way for actions to denote success/failure than explicit knowledge of jquery deferred
- remove dependency on jquery and manage own callback list and resolution with custom deferred that meets the specific needs of this lib and not the general ones of jquery (although common naming is nice for documentation and prior knowledge)
- maybe configure properties on action functions themselves which denote if the function needs the deferred, args, or context objects? only make available if specifically requested?

## License

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
	<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" />
</a>
<br />
<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Plan.JS</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/benjaminplee/PlanJS" property="cc:attributionName" rel="cc:attributionURL">Benjamin P Lee</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.