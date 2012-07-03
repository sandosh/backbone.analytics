// Created by Kendall Buchanan, (https://github.com/kendagriff)
// Modified by Paul English, (https://github.com/nrub)
// Modified by Sandosh Vasudevan, (https://github.com/sandosh)
// MIT licence
// Version 0.0.2

(function() {

  Backbone.History.prototype.loadUrl = function(fragmentOverride) {
    var fragment = this.fragment = this.getFragment(fragmentOverride);
    var matched = _.any(this.handlers, function(handler) {
      if (handler.route.test(fragment)) {
        handler.callback(fragment);
        return true;
      }
    });

    if (!/^\//.test(fragment)) fragment = '/' + fragment;
    if (window._gaq !== undefined) {
      _.defer(function(){
        window._gaq.push(['_trackPageview', fragment]);
      });
    }
    return matched;
  };

}).call(this);