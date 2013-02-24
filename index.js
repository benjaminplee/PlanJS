function hai() {
  return confirm("hai want 2 play?");
}

function gimmeh(deferred) {
  window.setTimeout(function() {
    var result = prompt("gimmeh?");
    if(result)
      deferred.resolve(result);
    else
      deferred.reject("NO GIMMEH! :-(");
  }, 1000);
}

function kthxby() {
  alert("KTHXBY");
  return true;
}

function doittoit(_, it) {
  alert("DID IT: " + it);
  return true;
}

function ohnoes(deferred, what_happened) {
  window.setTimeout(function() {
    alert(what_happened || "OHNOES!");
    deferred.resolve();
  }, 1000);
}

var lol_plan = new PlanJS({
  first: "HAI",
  steps: {
    "HAI": { action: hai, resolve: "GIMMEH", reject: "KTHXBY" },
    "GIMMEH": { action: gimmeh, resolve: "DOITTOIT", reject: "OHNOES" },
    "KTHXBY": { action: kthxby },
    "DOITTOIT" : { action: doittoit, always: "KTHXBY" },
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
