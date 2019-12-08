(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['eventCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":39}}}) : helper)))
    + "\" data-month=\""
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":62}}}) : helper)))
    + "\" data-day=\""
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":81}}}) : helper)))
    + "\" data-year=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":1,"column":94},"end":{"line":1,"column":102}}}) : helper)))
    + "\" data-time =\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":1,"column":116},"end":{"line":1,"column":124}}}) : helper)))
    + "\">\r\n  <div class=\"post-contents\">\r\n\r\n    <div class=\"post-image-container\">\r\n      <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":23}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":39}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"post-info-container\">\r\n      <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":37},"end":{"line":8,"column":46}}}) : helper)))
    + "</a> <span class=\"post-month\"> - "
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":8,"column":79},"end":{"line":8,"column":88}}}) : helper)))
    + " </span> <span class=\"post-day\">"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":8,"column":120},"end":{"line":8,"column":127}}}) : helper)))
    + ", </span> <span class=\"post-year\">"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":8,"column":161},"end":{"line":8,"column":169}}}) : helper)))
    + "</span>\r\n    </div>\r\n\r\n    <div class=\"post-interaction-container\">\r\n      <!--Name: Going/Interested/No -->\r\n      <p class=\"description\"> Description: "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":13,"column":43},"end":{"line":13,"column":58}}}) : helper)))
    + " </p>\r\n      \r\n      <button id=\"interest-update-button\" class=\"action-button\">Submit</button>\r\n    </div>\r\n    <a href=\"#\" class=\"reservation-list\">- see who else is going -</a>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['calendarCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"day-container\" id=\"day-container\">\r\n  <div class=\"days\" id=\"days\">\r\n    "
    + alias4(((helper = (helper = helpers.dayNum || (depth0 != null ? depth0.dayNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dayNum","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":14}}}) : helper)))
    + "\r\n  </div>\r\n  <div class=\"posts\">\r\n    "
    + alias4(((helper = (helper = helpers.postInfo || (depth0 != null ? depth0.postInfo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postInfo","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":16}}}) : helper)))
    + "\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();