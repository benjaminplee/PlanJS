function hai() {
  return confirm("hai want 2 play?");
}

function gimmeh(deferred) {
  window.setTimeout(function() {
    if(confirm("gimmeh?"))
      deferred.resolve();
    else
      deferred.reject();
  }, 1000);
}

function kthxby() {
  return alert("KTHXBY");
}

function ohnoes(deferred) {
  window.setTimeout(function() {
    alert("OHNOES!");
    deferred.resolve();
  }, 1000);
}

var lol_plan = new PlanJS({
  first: "HAI",
  steps: {
    "HAI": { action: hai, resolve: "GIMMEH", reject: "KTHXBY" },
    "GIMMEH": { action: gimmeh, resolve: "KTHXBY", reject: "OHNOES" },
    "KTHXBY": { action: kthxby },
    "OHNOES": { action: ohnoes, always: "KTHXBY" }
  }
});

var the_button = document.getElementById("the_button");
the_button.onclick = function() {
  lol_plan.execute();
};

var obj = {a:1,b:2};
console.log($.map(obj, function(v, k) { return "" + k + v; }));
console.log(obj);
