app.directive("appInfo", function() {
  return {
    restrict: "E",
    scope: {
      info: "="
    },
    remplateUrl: "js/directives/appInfo.html"
  };
});