// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.cookies');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('goog.net.cookies');
goog.require('goog.net.cookies');
/**
* sets a cookie, the max-age defaults to -1 for session cookie
* @param {...*} var_args
*/
yuggoth.cookies.set_BANG_ = (function() { 
var set_BANG___delegate = function (k,content,p__5486){var vec__5488 = p__5486;var max_age = cljs.core.nth.call(null,vec__5488,(0),null);return goog.net.cookies.set(cljs.core.name.call(null,k),cljs.core.pr_str.call(null,content),(function (){var or__3575__auto__ = max_age;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return (-1);
}
})(),null,null,true);
};
var set_BANG_ = function (k,content,var_args){
var p__5486 = null;if (arguments.length > 2) {
  p__5486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_BANG___delegate.call(this,k,content,p__5486);};
set_BANG_.cljs$lang$maxFixedArity = 2;
set_BANG_.cljs$lang$applyTo = (function (arglist__5489){
var k = cljs.core.first(arglist__5489);
arglist__5489 = cljs.core.next(arglist__5489);
var content = cljs.core.first(arglist__5489);
var p__5486 = cljs.core.rest(arglist__5489);
return set_BANG___delegate(k,content,p__5486);
});
set_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_BANG___delegate;
return set_BANG_;
})()
;
yuggoth.cookies.read_value = (function read_value(v){if(cljs.core.truth_(v))
{return cljs.reader.read_string.call(null,v);
} else
{return null;
}
});
/**
* gets the value at the key, optional default when value is not found
* @param {...*} var_args
*/
yuggoth.cookies.get = (function() { 
var get__delegate = function (k,p__5490){var vec__5492 = p__5490;var default$ = cljs.core.nth.call(null,vec__5492,(0),null);var or__3575__auto__ = yuggoth.cookies.read_value.call(null,goog.net.cookies.get(cljs.core.name.call(null,k)));if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return default$;
}
};
var get = function (k,var_args){
var p__5490 = null;if (arguments.length > 1) {
  p__5490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,k,p__5490);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__5493){
var k = cljs.core.first(arglist__5493);
var p__5490 = cljs.core.rest(arglist__5493);
return get__delegate(k,p__5490);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* is the key present in the cookies
*/
yuggoth.cookies.contains_key_QMARK_ = (function contains_key_QMARK_(k){return goog.net.cookies.containsKey(cljs.core.name.call(null,k));
});
/**
* is the value present in the cookies (as string)
*/
yuggoth.cookies.contains_val_QMARK_ = (function contains_val_QMARK_(v){return goog.net.cookies.containsValue(v);
});
/**
* returns the number of cookies
*/
yuggoth.cookies.count = (function count(){return goog.net.cookies.getCount();
});
/**
* returns all the keys for the cookies
*/
yuggoth.cookies.keys = (function keys(){return cljs.core.map.call(null,cljs.core.keyword,goog.net.cookies.getKeys());
});
/**
* returns cookie values
*/
yuggoth.cookies.vals = (function vals(){return cljs.core.map.call(null,yuggoth.cookies.read_value,goog.net.cookies.getValues());
});
/**
* true if no cookies are set
*/
yuggoth.cookies.empty_QMARK_ = (function empty_QMARK_(){return goog.net.cookies.isEmpty();
});
/**
* removes a cookie
*/
yuggoth.cookies.remove_BANG_ = (function remove_BANG_(k){return goog.net.cookies.remove(cljs.core.name.call(null,k));
});
/**
* removes all cookies
*/
yuggoth.cookies.clear_BANG_ = (function clear_BANG_(){return goog.net.cookies.clear();
});

//# sourceMappingURL=cookies.js.map