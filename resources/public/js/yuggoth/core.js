// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.core');
goog.require('cljs.core');
goog.require('yuggoth.pages.archives');
goog.require('yuggoth.pages.latest_comments');
goog.require('yuggoth.pages.post');
goog.require('yuggoth.pages.profile');
goog.require('yuggoth.pages.home');
goog.require('yuggoth.pages.about');
goog.require('yuggoth.pages.upload');
goog.require('yuggoth.components.login');
goog.require('reagent.core');
goog.require('yuggoth.noise');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('reagent.core');
goog.require('yuggoth.pages.about');
goog.require('secretary.core');
goog.require('yuggoth.session');
goog.require('yuggoth.components.login');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('yuggoth.pages.post');
goog.require('yuggoth.session');
goog.require('goog.history.EventType');
goog.require('yuggoth.pages.archives');
goog.require('yuggoth.noise');
goog.require('yuggoth.pages.upload');
goog.require('goog.History');
goog.require('goog.events');
goog.require('yuggoth.pages.profile');
goog.require('yuggoth.pages.latest_comments');
goog.require('clojure.string');
goog.require('secretary.core');
goog.require('clojure.string');
goog.require('yuggoth.pages.home');
goog.require('goog.events');
/**
* @param {...*} var_args
*/
yuggoth.core.fetch_archives_BANG_ = (function() { 
var fetch_archives_BANG___delegate = function (p__5588){var vec__5590 = p__5588;var tag = cljs.core.nth.call(null,vec__5590,(0),null);return yuggoth.util.GET.call(null,(cljs.core.truth_(tag)?("/tag/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)):"/archives"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__5590,tag){
return (function (p1__5587_SHARP_){yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"archives","archives",1836692484),p1__5587_SHARP_);
yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"archives-tag","archives-tag",-83304569),tag);
return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.archives.archives_page);
});})(vec__5590,tag))
], null));
};
var fetch_archives_BANG_ = function (var_args){
var p__5588 = null;if (arguments.length > 0) {
  p__5588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fetch_archives_BANG___delegate.call(this,p__5588);};
fetch_archives_BANG_.cljs$lang$maxFixedArity = 0;
fetch_archives_BANG_.cljs$lang$applyTo = (function (arglist__5591){
var p__5588 = cljs.core.seq(arglist__5591);
return fetch_archives_BANG___delegate(p__5588);
});
fetch_archives_BANG_.cljs$core$IFn$_invoke$arity$variadic = fetch_archives_BANG___delegate;
return fetch_archives_BANG_;
})()
;
var action__5375__auto___5594 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5592 = params__5376__auto__;var map__5592__$1 = ((cljs.core.seq_QMARK_.call(null,map__5592))?cljs.core.apply.call(null,cljs.core.hash_map,map__5592):map__5592);yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
return yuggoth.util.GET.call(null,"/latest-post",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.util.set_current_post_BANG_], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5593 = params__5376__auto__;yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
return yuggoth.util.GET.call(null,"/latest-post",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.util.set_current_post_BANG_], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__5375__auto___5594);
var action__5375__auto___5597 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5595 = params__5376__auto__;var map__5595__$1 = ((cljs.core.seq_QMARK_.call(null,map__5595))?cljs.core.apply.call(null,cljs.core.hash_map,map__5595):map__5595);return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.about.about_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5596 = params__5376__auto__;return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.about.about_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/about",action__5375__auto___5597);
var action__5375__auto___5600 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5598 = params__5376__auto__;var map__5598__$1 = ((cljs.core.seq_QMARK_.call(null,map__5598))?cljs.core.apply.call(null,cljs.core.hash_map,map__5598):map__5598);return yuggoth.core.fetch_archives_BANG_.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5599 = params__5376__auto__;return yuggoth.core.fetch_archives_BANG_.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/archives",action__5375__auto___5600);
var action__5375__auto___5603 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5601 = params__5376__auto__;var map__5601__$1 = ((cljs.core.seq_QMARK_.call(null,map__5601))?cljs.core.apply.call(null,cljs.core.hash_map,map__5601):map__5601);return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.latest_comments.latest_comments_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5602 = params__5376__auto__;return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.latest_comments.latest_comments_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/latest-comments",action__5375__auto___5603);
var action__5375__auto___5606 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5604 = params__5376__auto__;var map__5604__$1 = ((cljs.core.seq_QMARK_.call(null,map__5604))?cljs.core.apply.call(null,cljs.core.hash_map,map__5604):map__5604);return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.upload.upload_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5605 = params__5376__auto__;return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.upload.upload_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/upload",action__5375__auto___5606);
var action__5375__auto___5609 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5607 = params__5376__auto__;var map__5607__$1 = ((cljs.core.seq_QMARK_.call(null,map__5607))?cljs.core.apply.call(null,cljs.core.hash_map,map__5607):map__5607);return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.profile.profile_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5608 = params__5376__auto__;return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.profile.profile_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/profile",action__5375__auto___5609);
var action__5375__auto___5612 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5610 = params__5376__auto__;var map__5610__$1 = ((cljs.core.seq_QMARK_.call(null,map__5610))?cljs.core.apply.call(null,cljs.core.hash_map,map__5610):map__5610);return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.post.make_post_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5611 = params__5376__auto__;return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.post.make_post_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/make-post",action__5375__auto___5612);
var action__5375__auto___5615 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5613 = params__5376__auto__;var map__5613__$1 = ((cljs.core.seq_QMARK_.call(null,map__5613))?cljs.core.apply.call(null,cljs.core.hash_map,map__5613):map__5613);return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.post.edit_post_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5614 = params__5376__auto__;return yuggoth.util.set_admin_page_BANG_.call(null,yuggoth.pages.post.edit_post_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/edit-post",action__5375__auto___5615);
var action__5375__auto___5618 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5616 = params__5376__auto__;var map__5616__$1 = ((cljs.core.seq_QMARK_.call(null,map__5616))?cljs.core.apply.call(null,cljs.core.hash_map,map__5616):map__5616);var tag = cljs.core.get.call(null,map__5616__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));return yuggoth.core.fetch_archives_BANG_.call(null,tag);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5617 = params__5376__auto__;var tag = cljs.core.nth.call(null,vec__5617,(0),null);return yuggoth.core.fetch_archives_BANG_.call(null,tag);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/tag/:tag",action__5375__auto___5618);
var action__5375__auto___5621 = (function (params__5376__auto__){if(cljs.core.map_QMARK_.call(null,params__5376__auto__))
{var map__5619 = params__5376__auto__;var map__5619__$1 = ((cljs.core.seq_QMARK_.call(null,map__5619))?cljs.core.apply.call(null,cljs.core.hash_map,map__5619):map__5619);return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),true);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5376__auto__))
{var vec__5620 = params__5376__auto__;return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),true);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/login",action__5375__auto___5621);
yuggoth.core.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.site-title","div.site-title",-30456088),siteTitle], null)], null)], null);
});
yuggoth.core.footer = (function footer(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),("Copyright \u00A9 2012-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())+" "),yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"handle","handle",1538948854)], null)),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return secretary.core.dispatch_BANG_.call(null,"#/login");
})], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"login","login",55217519))], null),")"], null)),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"powered-by","powered-by",1771483276)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://github.com/yogthos/yuggoth"], null),"Yuggoth"], null)], null)], null);
});
yuggoth.core.logout_BANG_ = (function logout_BANG_(){yuggoth.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627));
return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
});
yuggoth.core.menu = (function menu(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),cljs.core.into.call(null,(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-items","ul.menu-items",-2095485893),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return yuggoth.util.GET.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.core.logout_BANG_], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/profile",new cljs.core.Keyword(null,"profile","profile",-545963874)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/upload",new cljs.core.Keyword(null,"upload","upload",-255769218)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/latest-comments",new cljs.core.Keyword(null,"latest-comments-title","latest-comments-title",1660791026)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/make-post",new cljs.core.Keyword(null,"new-post","new-post",-1808203791)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-items","ul.menu-items",-2095485893)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#rss","li#rss",-623847870),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/rss")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#rss","span#rss",1808469150),"rss"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/about",new cljs.core.Keyword(null,"about-title","about-title",-2136666028)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/archives",new cljs.core.Keyword(null,"archives-title","archives-title",-1659559348)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.nav_link,"#/",new cljs.core.Keyword(null,"home-title","home-title",-876249978)], null)], null))], null);
});
yuggoth.core.page = (function page(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.core.menu], null),(function (){var temp__4124__auto__ = yuggoth.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180));if(cljs.core.truth_(temp__4124__auto__))
{var current_page = temp__4124__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents","div.contents",-1428662400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post","div.post",-381003886),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189))], null)], null);
}
})(),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"login","login",55217519)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.login.login_form], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.core.footer], null))], null);
});
yuggoth.core.parse_post_id = (function parse_post_id(url){var vec__5623 = clojure.string.split.call(null,url,/:\d+/);var x = cljs.core.nth.call(null,vec__5623,(0),null);var y = cljs.core.nth.call(null,vec__5623,(1),null);return cljs.core.re_find.call(null,/\d+/,(function (){var or__3575__auto__ = y;if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return x;
}
})());
});
yuggoth.core.set_post_and_home_page_BANG_ = (function set_post_and_home_page_BANG_(result){yuggoth.util.set_current_post_BANG_.call(null,result);
return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
});
yuggoth.core.generate_background = (function generate_background(){if(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528))))
{return null;
} else
{return yuggoth.noise.set_body_background.call(null,yuggoth.noise.make_noise.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"from-color","from-color",-1271621841),(14671839),new cljs.core.Keyword(null,"to-color","to-color",-688485342),(15724527)));
}
});
yuggoth.core.init_BANG_ = (function init_BANG_(){yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/,navigator.userAgent)));
if(cljs.core.truth_(admin))
{yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627),true);
} else
{}
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
yuggoth.util.hook_browser_navigation_BANG_.call(null);
yuggoth.util.GET.call(null,"/profile",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5624_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874),p1__5624_SHARP_);
})], null));
yuggoth.util.GET.call(null,"/locale",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5625_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"locale","locale",-2115712697),p1__5625_SHARP_);
})], null));
var vec__5627_5628 = clojure.string.split(document.URL,/\#/);var __5629 = cljs.core.nth.call(null,vec__5627_5628,(0),null);var uri_5630 = cljs.core.nth.call(null,vec__5627_5628,(1),null);yuggoth.util.set_page_BANG_.call(null,cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, ["/archives",yuggoth.pages.archives.archives_page,"/about",yuggoth.pages.about.about_page,"/make-post",yuggoth.pages.post.make_post_page,"/upload",yuggoth.pages.upload.upload_page], null),uri_5630,yuggoth.pages.home.home_page));
var temp__4124__auto___5631 = yuggoth.core.parse_post_id.call(null,document.URL);if(cljs.core.truth_(temp__4124__auto___5631))
{var post_id_5632 = temp__4124__auto___5631;yuggoth.util.fetch_post.call(null,post_id_5632,yuggoth.core.set_post_and_home_page_BANG_).call(null);
} else
{yuggoth.util.GET.call(null,"/latest-post",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.util.set_current_post_BANG_], null));
}
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.core.page], null),document.getElementById("app"));
return yuggoth.core.generate_background.call(null);
});
yuggoth.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map