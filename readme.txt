plan.js

Simple plan (workflow) creation utility.

Aim is to simplify simple workflows such as modals with forms and error handling.

[X] Should handle sync and async steps
[X] Should have minimal plan setup ceremony
[X] Should handle steps w/ 1 or 2 possible outcomes
[X] Should allow for information to be passed between steps
[X] Should allow for plan execution to pass in config/context data
[X] Should allow for creation of plans and seperate execution
        possibly multiple times w/ different context
[X] Should minimally polute global namespace

Wish List:

[ ] Cleanup all of the args prepending
[ ] Find a bette way to handline context and streamline data passing
[ ] make take_step and take_future_step not prototype methods
[ ] cleaner way for actions to denote success/failure
