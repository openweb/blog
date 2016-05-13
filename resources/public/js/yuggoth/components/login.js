// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.components.login');
goog.require('cljs.core');
goog.require('yuggoth.pages.home');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('yuggoth.pages.home');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('secretary.core');
yuggoth.components.login.https_QMARK_ = (function https_QMARK_(){return cljs.core._EQ_.call(null,"https:",location.protocol);
});
yuggoth.components.login.login_BANG_ = (function login_BANG_(user,pass,error){if(cljs.core.empty_QMARK_.call(null,user))
{return cljs.core.reset_BANG_.call(null,error,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"admin-required","admin-required",10656938)));
} else
{if(cljs.core.empty_QMARK_.call(null,pass))
{return cljs.core.reset_BANG_.call(null,error,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"admin-pass-required","admin-pass-required",524595860)));
} else
{return yuggoth.util.POST.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",yuggoth.util.auth_hash.call(null,user,pass)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5458_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__5458_SHARP_),"ok"))
{yuggoth.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519));
return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627),true);
} else
{return cljs.core.reset_BANG_.call(null,error,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__5458_SHARP_));
}
})], null));

}
}
});
yuggoth.components.login.login_form = (function login_form(){var user = reagent.core.atom.call(null,null);var pass = reagent.core.atom.call(null,null);var error = reagent.core.atom.call(null,null);return ((function (user,pass,error){
return (function (){if(cljs.core.truth_((function (){var and__3563__auto__ = ssl;if(cljs.core.truth_(and__3563__auto__))
{return !(yuggoth.components.login.https_QMARK_.call(null));
} else
{return and__3563__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login-form","div.login-form",-1522076251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"ssl-required","ssl-required",-358235177))], null)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login-form","div.login-form",-1522076251),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.text_input,user,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"user","user",1532431356))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.text_input,pass,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"password","password",417022471))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button.login-button","span.button.login-button",-1139029071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user,pass,error){
return (function (){return yuggoth.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519));
});})(user,pass,error))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button.login-button","span.button.login-button",-1139029071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user,pass,error){
return (function (){return yuggoth.components.login.login_BANG_.call(null,cljs.core.deref.call(null,user),cljs.core.deref.call(null,pass),error);
});})(user,pass,error))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"login","login",55217519))], null),(function (){var temp__4124__auto__ = cljs.core.deref.call(null,error);if(cljs.core.truth_(temp__4124__auto__))
{var error__$1 = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),error__$1], null);
} else
{return null;
}
})()], null);
}
});
;})(user,pass,error))
});

//# sourceMappingURL=login.js.map