// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('yuggoth.session');
goog.require('goog.history.EventType');
goog.require('yuggoth.session');
goog.require('goog.crypt.base64');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.crypt.base64');
goog.require('clojure.string');
goog.require('goog.events');
yuggoth.util.auth_hash = (function auth_hash(user,pass){return ("Basic "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)))));
});
yuggoth.util.millis = (function millis(){return (new Date()).getTime();
});
/**
* @param {...*} var_args
*/
yuggoth.util.GET = (function() { 
var GET__delegate = function (url,p__5767){var vec__5769 = p__5767;var opts = cljs.core.nth.call(null,vec__5769,(0),null);return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)),cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.assoc,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),yuggoth.util.millis.call(null)));
};
var GET = function (url,var_args){
var p__5767 = null;if (arguments.length > 1) {
  p__5767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__5767);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__5770){
var url = cljs.core.first(arglist__5770);
var p__5767 = cljs.core.rest(arglist__5770);
return GET__delegate(url,p__5767);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
yuggoth.util.POST = (function POST(url,opts){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)),opts);
});
yuggoth.util.text = (function text(id){return yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),id], null));
});
/**
* hooks into the browser's navigation (e.g. user clicking on links, redirects, etc) such that any
* of these page navigation events are properly dispatched through secretary so appropriate routing
* can occur. should be called once on app startup
*/
yuggoth.util.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){var G__5772 = (new goog.History());goog.events.listen(G__5772,goog.history.EventType.NAVIGATE,((function (G__5772){
return (function (event){return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__5772))
);
G__5772.setEnabled(true);
return G__5772;
});
yuggoth.util.format_title_url = (function format_title_url(id,title){if(cljs.core.truth_(title))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURI(clojure.string.join.call(null,"-",cljs.core.re_seq.call(null,/[a-zA-Z0-9]+/,title)))));
} else
{return null;
}
});
yuggoth.util.url = (function url(parts){var temp__4124__auto__ = cljs.core.not_empty.call(null,context);if(cljs.core.truth_(temp__4124__auto__))
{var context = temp__4124__auto__;return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.str,context,"/"),parts);
} else
{return cljs.core.apply.call(null,cljs.core.str,parts);
}
});
/**
* @param {...*} var_args
*/
yuggoth.util.set_location_BANG_ = (function() { 
var set_location_BANG___delegate = function (url_parts){return location.href = yuggoth.util.url.call(null,url_parts);
};
var set_location_BANG_ = function (var_args){
var url_parts = null;if (arguments.length > 0) {
  url_parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_location_BANG___delegate.call(this,url_parts);};
set_location_BANG_.cljs$lang$maxFixedArity = 0;
set_location_BANG_.cljs$lang$applyTo = (function (arglist__5773){
var url_parts = cljs.core.seq(arglist__5773);
return set_location_BANG___delegate(url_parts);
});
set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_location_BANG___delegate;
return set_location_BANG_;
})()
;
yuggoth.util.set_post_url = (function set_post_url(p__5774){var map__5776 = p__5774;var map__5776__$1 = ((cljs.core.seq_QMARK_.call(null,map__5776))?cljs.core.apply.call(null,cljs.core.hash_map,map__5776):map__5776);var id = cljs.core.get.call(null,map__5776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return yuggoth.util.set_location_BANG_.call(null,"#/blog/",id);
});
yuggoth.util.set_page_BANG_ = (function set_page_BANG_(page){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});
yuggoth.util.set_admin_page_BANG_ = (function set_admin_page_BANG_(page){if(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627))))
{return yuggoth.util.set_page_BANG_.call(null,page);
} else
{return yuggoth.util.set_location_BANG_.call(null,"/");
}
});
yuggoth.util.set_title_BANG_ = (function set_title_BANG_(title){return document.title = title;
});
yuggoth.util.set_recent_BANG_ = (function set_recent_BANG_(){return yuggoth.util.GET.call(null,"/posts/5",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5777_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"recent-posts","recent-posts",-144304491),p1__5777_SHARP_);
})], null));
});
yuggoth.util.set_current_post_BANG_ = (function set_current_post_BANG_(post){yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"post","post",269697687),post);
yuggoth.util.set_recent_BANG_.call(null);
scroll((0),(0));
return yuggoth.util.GET.call(null,"/tags",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5778_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),p1__5778_SHARP_);
})], null));
});
yuggoth.util.fetch_post = (function fetch_post(id,handler){return (function (){return yuggoth.util.GET.call(null,"/blog-post",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
});
yuggoth.util.mounted_component = (function mounted_component(component,handler){return cljs.core.with_meta.call(null,(function (){return component;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){var node = reagent.core.dom_node.call(null,this$);return handler.call(null,node);
})], null));
});
yuggoth.util.html = (function html(content){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.mounted_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null)], null)], null),(function (p1__5779_SHARP_){var nodes = p1__5779_SHARP_.querySelectorAll("pre code");var i = nodes.length;while(true){
if((i < (0)))
{return null;
} else
{var temp__4126__auto___5780 = nodes.item(i);if(cljs.core.truth_(temp__4126__auto___5780))
{var item_5781 = temp__4126__auto___5780;hljs.highlightBlock(item_5781);
} else
{}
{
var G__5782 = (i - (1));
i = G__5782;
continue;
}
}
break;
}
}))], null);
});
yuggoth.util.markdown = (function markdown(text){return yuggoth.util.html.call(null,marked((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text))));
});
yuggoth.util.input_value = (function input_value(input){return input.target.value;
});
yuggoth.util.set_value_BANG_ = (function set_value_BANG_(target){return (function (source){return cljs.core.reset_BANG_.call(null,target,yuggoth.util.input_value.call(null,source));
});
});
/**
* @param {...*} var_args
*/
yuggoth.util.text_input = (function() { 
var text_input__delegate = function (target,p__5783){var vec__5785 = p__5783;var opts = cljs.core.nth.call(null,vec__5785,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),yuggoth.util.set_value_BANG_.call(null,target),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,target)], null),opts)], null);
};
var text_input = function (target,var_args){
var p__5783 = null;if (arguments.length > 1) {
  p__5783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return text_input__delegate.call(this,target,p__5783);};
text_input.cljs$lang$maxFixedArity = 1;
text_input.cljs$lang$applyTo = (function (arglist__5786){
var target = cljs.core.first(arglist__5786);
var p__5783 = cljs.core.rest(arglist__5786);
return text_input__delegate(target,p__5783);
});
text_input.cljs$core$IFn$_invoke$arity$variadic = text_input__delegate;
return text_input;
})()
;
/**
* @param {...*} var_args
*/
yuggoth.util.link = (function() { 
var link__delegate = function (p__5787){var vec__5789 = p__5787;var x = cljs.core.nth.call(null,vec__5789,(0),null);var y = cljs.core.nth.call(null,vec__5789,(1),null);var xs = cljs.core.nthnext.call(null,vec__5789,(2));var body = vec__5789;if(cljs.core.map_QMARK_.call(null,x))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),yuggoth.util.url.call(null,y)], null),x),xs], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),yuggoth.util.url.call(null,x)], null),cljs.core.rest.call(null,body)], null);
}
};
var link = function (var_args){
var p__5787 = null;if (arguments.length > 0) {
  p__5787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,p__5787);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__5790){
var p__5787 = cljs.core.seq(arglist__5790);
return link__delegate(p__5787);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
yuggoth.util.nav_link = (function() { 
var nav_link__delegate = function (path,label,p__5791){var vec__5793 = p__5791;var on_click = cljs.core.nth.call(null,vec__5793,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),yuggoth.util.link.call(null,path,yuggoth.util.text.call(null,label))], null);
};
var nav_link = function (path,label,var_args){
var p__5791 = null;if (arguments.length > 2) {
  p__5791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_link__delegate.call(this,path,label,p__5791);};
nav_link.cljs$lang$maxFixedArity = 2;
nav_link.cljs$lang$applyTo = (function (arglist__5794){
var path = cljs.core.first(arglist__5794);
arglist__5794 = cljs.core.next(arglist__5794);
var label = cljs.core.first(arglist__5794);
var p__5791 = cljs.core.rest(arglist__5794);
return nav_link__delegate(path,label,p__5791);
});
nav_link.cljs$core$IFn$_invoke$arity$variadic = nav_link__delegate;
return nav_link;
})()
;

//# sourceMappingURL=util.js.map