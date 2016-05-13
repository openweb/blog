// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.pages.archives');
goog.require('cljs.core');
goog.require('yuggoth.pages.home');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.pages.home');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('reagent.core');
goog.require('reagent.core');
yuggoth.pages.archives.post_visibility = (function post_visibility(id,public$){var state = reagent.core.atom.call(null,public$);return ((function (state){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.submit","span.submit",-560927662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){return yuggoth.util.POST.call(null,"/toggle-post",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"public","public",1566243851),public$], null)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (state){
return (function (p__5654){var vec__5655 = p__5654;var result = cljs.core.nth.call(null,vec__5655,(0),null);if((result > (0)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.not);
} else
{return null;
}
});})(state))
], null));
});})(state))
], null),new cljs.core.PersistentArrayMap(null, 2, [true,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)),false,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"show","show",-576705889))], null).call(null,cljs.core.deref.call(null,state))], null);
});
;})(state))
});
yuggoth.pages.archives.make_list = (function make_list(date,items){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),date,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__4313__auto__ = (function iter__5665(s__5666){return (new cljs.core.LazySeq(null,(function (){var s__5666__$1 = s__5666;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5666__$1);if(temp__4126__auto__)
{var s__5666__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5666__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5666__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5668 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5667 = (0);while(true){
if((i__5667 < size__4312__auto__))
{var map__5671 = cljs.core._nth.call(null,c__4311__auto__,i__5667);var map__5671__$1 = ((cljs.core.seq_QMARK_.call(null,map__5671))?cljs.core.apply.call(null,cljs.core.hash_map,map__5671):map__5671);var public$ = cljs.core.get.call(null,map__5671__$1,new cljs.core.Keyword(null,"public","public",1566243851));var title = cljs.core.get.call(null,map__5671__$1,new cljs.core.Keyword(null,"title","title",636505583));var time = cljs.core.get.call(null,map__5671__$1,new cljs.core.Keyword(null,"time","time",1385887882));var id = cljs.core.get.call(null,map__5671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__5668,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.archive","li.archive",-2109910585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"archive",new cljs.core.Keyword(null,"on-click","on-click",1632826543),yuggoth.util.fetch_post.call(null,id,((function (i__5667,map__5671,map__5671__$1,public$,title,time,id,c__4311__auto__,size__4312__auto__,b__5668,s__5666__$2,temp__4126__auto__){
return (function (p1__5656_SHARP_){yuggoth.util.set_current_post_BANG_.call(null,p1__5656_SHARP_);
yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
return yuggoth.util.set_location_BANG_.call(null,"#/blog/",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5656_SHARP_));
});})(i__5667,map__5671,map__5671__$1,public$,title,time,id,c__4311__auto__,size__4312__auto__,b__5668,s__5666__$2,temp__4126__auto__))
)], null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title))], null),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.archives.post_visibility,id,public$], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5673 = (i__5667 + (1));
i__5667 = G__5673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5668),iter__5665.call(null,cljs.core.chunk_rest.call(null,s__5666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5668),null);
}
} else
{var map__5672 = cljs.core.first.call(null,s__5666__$2);var map__5672__$1 = ((cljs.core.seq_QMARK_.call(null,map__5672))?cljs.core.apply.call(null,cljs.core.hash_map,map__5672):map__5672);var public$ = cljs.core.get.call(null,map__5672__$1,new cljs.core.Keyword(null,"public","public",1566243851));var title = cljs.core.get.call(null,map__5672__$1,new cljs.core.Keyword(null,"title","title",636505583));var time = cljs.core.get.call(null,map__5672__$1,new cljs.core.Keyword(null,"time","time",1385887882));var id = cljs.core.get.call(null,map__5672__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.archive","li.archive",-2109910585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"archive",new cljs.core.Keyword(null,"on-click","on-click",1632826543),yuggoth.util.fetch_post.call(null,id,((function (map__5672,map__5672__$1,public$,title,time,id,s__5666__$2,temp__4126__auto__){
return (function (p1__5656_SHARP_){yuggoth.util.set_current_post_BANG_.call(null,p1__5656_SHARP_);
yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
return yuggoth.util.set_location_BANG_.call(null,"#/blog/",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5656_SHARP_));
});})(map__5672,map__5672__$1,public$,title,time,id,s__5666__$2,temp__4126__auto__))
)], null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title))], null),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.archives.post_visibility,id,public$], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5665.call(null,cljs.core.rest.call(null,s__5666__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4313__auto__.call(null,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),items)));
})())], null)], null);
});
yuggoth.pages.archives.submit_search = (function submit_search(search_string){if((cljs.core.count.call(null,search_string) > (3)))
{return yuggoth.util.POST.call(null,"/search-posts",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),search_string], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5674_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"archives","archives",1836692484),p1__5674_SHARP_);
})], null));
} else
{if(cljs.core.empty_QMARK_.call(null,search_string))
{return yuggoth.util.GET.call(null,"/archives",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5675_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"archives","archives",1836692484),p1__5675_SHARP_);
})], null));
} else
{return null;
}
}
});
yuggoth.pages.archives.search = (function search(){var search_string = reagent.core.atom.call(null,null);return ((function (search_string){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"search","search",1564939822))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (search_string){
return (function (p1__5676_SHARP_){return yuggoth.pages.archives.submit_search.call(null,yuggoth.util.input_value.call(null,p1__5676_SHARP_));
});})(search_string))
], null)], null)], null);
});
;})(search_string))
});
yuggoth.pages.archives.archives_page = (function archives_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"archives-title","archives-title",-1659559348)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.conents","div.conents",1109491768),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.archives","div.archives",-236939264),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-title","div.entry-title",1921453503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(yuggoth.util.text.call(null,new cljs.core.Keyword(null,"archives-title","archives-title",-1659559348)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4126__auto__ = yuggoth.session.get.call(null,new cljs.core.Keyword(null,"archives-tag","archives-tag",-83304569));if(cljs.core.truth_(temp__4126__auto__))
{var tag = temp__4126__auto__;return (" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
} else
{return null;
}
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-content","div.entry-content",1928114261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.archives.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.reduce.call(null,(function (groups,p__5679){var vec__5680 = p__5679;var date = cljs.core.nth.call(null,vec__5680,(0),null);var items = cljs.core.nth.call(null,vec__5680,(1),null);return cljs.core.conj.call(null,groups,yuggoth.pages.archives.make_list.call(null,date,items));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),yuggoth.session.get.call(null,new cljs.core.Keyword(null,"archives","archives",1836692484)))], null)], null)], null);
});

//# sourceMappingURL=archives.js.map