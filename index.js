function hai(deferred, name) {
  confirm("hai want 2 play? my name is " + name) ? deferred.resolve() : deferred.reject();
}

function gimmeh(deferred) {
  window.setTimeout(function() {
    var result = prompt("gimmeh?");
    result ?
      deferred.resolve(result) :
      deferred.reject("NO GIMMEH! :-(");
  }, 1000);
}

function kthxby(deferred) {
  alert("KTHXBY");
  deferred.resolve();
}

function doittoit(deferred, _, it) {
  alert("DID IT: " + it);
  deferred.resolve();
}

function ohnoes(deferred, _, what_happened) {
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
  lol_plan.execute("ben");
};
