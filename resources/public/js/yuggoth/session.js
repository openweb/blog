// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.session');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
yuggoth.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
yuggoth.session.get = (function() { 
var get__delegate = function (k,p__5747){var vec__5749 = p__5747;var default$ = cljs.core.nth.call(null,vec__5749,(0),null);return cljs.core.get.call(null,cljs.core.deref.call(null,yuggoth.session.state),k,default$);
};
var get = function (k,var_args){
var p__5747 = null;if (arguments.length > 1) {
  p__5747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,k,p__5747);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__5750){
var k = cljs.core.first(arglist__5750);
var p__5747 = cljs.core.rest(arglist__5750);
return get__delegate(k,p__5747);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
yuggoth.session.put_BANG_ = (function put_BANG_(k,v){return cljs.core.swap_BANG_.call(null,yuggoth.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
yuggoth.session.get_in = (function() { 
var get_in__delegate = function (ks,p__5751){var vec__5753 = p__5751;var default$ = cljs.core.nth.call(null,vec__5753,(0),null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,yuggoth.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__5751 = null;if (arguments.length > 1) {
  p__5751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_in__delegate.call(this,ks,p__5751);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__5754){
var ks = cljs.core.first(arglist__5754);
var p__5751 = cljs.core.rest(arglist__5754);
return get_in__delegate(ks,p__5751);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
yuggoth.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){return cljs.core.apply.call(null,cljs.core.swap_BANG_,yuggoth.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__5755){
var f = cljs.core.first(arglist__5755);
var args = cljs.core.rest(arglist__5755);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
yuggoth.session.clear_BANG_ = (function clear_BANG_(){return cljs.core.reset_BANG_.call(null,yuggoth.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
yuggoth.session.reset_BANG_ = (function reset_BANG_(m){return cljs.core.reset_BANG_.call(null,yuggoth.session.state,m);
});
/**
* Remove a key from the session
*/
yuggoth.session.remove_BANG_ = (function remove_BANG_(k){return cljs.core.swap_BANG_.call(null,yuggoth.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
yuggoth.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){return cljs.core.swap_BANG_.call(null,yuggoth.session.state,(function (p1__5756_SHARP_){return cljs.core.assoc_in.call(null,p1__5756_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
yuggoth.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__5757){var vec__5759 = p__5757;var default$ = cljs.core.nth.call(null,vec__5759,(0),null);var cur = yuggoth.session.get.call(null,k,default$);yuggoth.session.remove_BANG_.call(null,k);
return cur;
};
var get_BANG_ = function (k,var_args){
var p__5757 = null;if (arguments.length > 1) {
  p__5757 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_BANG___delegate.call(this,k,p__5757);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__5760){
var k = cljs.core.first(arglist__5760);
var p__5757 = cljs.core.rest(arglist__5760);
return get_BANG___delegate(k,p__5757);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
yuggoth.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__5761){var vec__5763 = p__5761;var default$ = cljs.core.nth.call(null,vec__5763,(0),null);var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,yuggoth.session.state),ks,default$);yuggoth.session.assoc_in_BANG_.call(null,ks,null);
return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__5761 = null;if (arguments.length > 1) {
  p__5761 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_in_BANG___delegate.call(this,ks,p__5761);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__5764){
var ks = cljs.core.first(arglist__5764);
var p__5761 = cljs.core.rest(arglist__5764);
return get_in_BANG___delegate(ks,p__5761);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
yuggoth.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){return cljs.core.swap_BANG_.call(null,yuggoth.session.state,(function (p1__5765_SHARP_){return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__5765_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__5766){
var ks = cljs.core.first(arglist__5766);
arglist__5766 = cljs.core.next(arglist__5766);
var f = cljs.core.first(arglist__5766);
var args = cljs.core.rest(arglist__5766);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map