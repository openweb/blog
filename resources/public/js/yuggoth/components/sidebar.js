// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.components.sidebar');
goog.require('cljs.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
yuggoth.components.sidebar.tag_list = (function tag_list(){var temp__4124__auto__ = cljs.core.not_empty.call(null,cljs.core.sort.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977))));if(cljs.core.truth_(temp__4124__auto__))
{var tags = temp__4124__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.taglist","div.taglist",1886673016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Categories"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4313__auto__ = ((function (tags,temp__4124__auto__){
return (function iter__5463(s__5464){return (new cljs.core.LazySeq(null,((function (tags,temp__4124__auto__){
return (function (){var s__5464__$1 = s__5464;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5464__$1);if(temp__4126__auto__)
{var s__5464__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5464__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5464__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5466 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5465 = (0);while(true){
if((i__5465 < size__4312__auto__))
{var tag = cljs.core._nth.call(null,c__4311__auto__,i__5465);cljs.core.chunk_append.call(null,b__5466,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.link,("#/tag/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tagon","span.tagon",-103355737),tag], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));
{
var G__5467 = (i__5465 + (1));
i__5465 = G__5467;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5466),iter__5463.call(null,cljs.core.chunk_rest.call(null,s__5464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5466),null);
}
} else
{var tag = cljs.core.first.call(null,s__5464__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.link,("#/tag/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tagon","span.tagon",-103355737),tag], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),iter__5463.call(null,cljs.core.rest.call(null,s__5464__$2)));
}
} else
{return null;
}
break;
}
});})(tags,temp__4124__auto__))
,null,null));
});})(tags,temp__4124__auto__))
;return iter__4313__auto__.call(null,tags);
})()], null)], null);
} else
{return null;
}
});
yuggoth.components.sidebar.sidebar = (function sidebar(){if(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528))))
{return null;
} else
{var title = yuggoth.session.get.call(null,new cljs.core.Keyword(null,"entry-title","entry-title",-298635779));if((cljs.core._EQ_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"new-post","new-post",-1808203791)),title)) || (cljs.core._EQ_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"edit-post","edit-post",1629845365)),title)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-preview","div.sidebar-preview",1006213096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.render-preview","span.render-preview",-1514764773),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"preview-title","preview-title",-1610039408))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#post-preview","div#post-preview",-932266933)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"recent-posts-title","recent-posts-title",129083070))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4313__auto__ = ((function (title){
return (function iter__5477(s__5478){return (new cljs.core.LazySeq(null,((function (title){
return (function (){var s__5478__$1 = s__5478;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5478__$1);if(temp__4126__auto__)
{var s__5478__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5478__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5478__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5480 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5479 = (0);while(true){
if((i__5479 < size__4312__auto__))
{var map__5483 = cljs.core._nth.call(null,c__4311__auto__,i__5479);var map__5483__$1 = ((cljs.core.seq_QMARK_.call(null,map__5483))?cljs.core.apply.call(null,cljs.core.hash_map,map__5483):map__5483);var title__$1 = cljs.core.get.call(null,map__5483__$1,new cljs.core.Keyword(null,"title","title",636505583));var time = cljs.core.get.call(null,map__5483__$1,new cljs.core.Keyword(null,"time","time",1385887882));var id = cljs.core.get.call(null,map__5483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__5480,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),yuggoth.util.fetch_post.call(null,id,((function (i__5479,map__5483,map__5483__$1,title__$1,time,id,c__4311__auto__,size__4312__auto__,b__5480,s__5478__$2,temp__4126__auto__,title){
return (function (p1__5468_SHARP_){yuggoth.util.set_current_post_BANG_.call(null,p1__5468_SHARP_);
return yuggoth.util.set_location_BANG_.call(null,"#/blog/",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5468_SHARP_));
});})(i__5479,map__5483,map__5483__$1,title__$1,time,id,c__4311__auto__,size__4312__auto__,b__5480,s__5478__$2,temp__4126__auto__,title))
)], null),title__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.date","div.date",-1305414128),time], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5485 = (i__5479 + (1));
i__5479 = G__5485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5480),iter__5477.call(null,cljs.core.chunk_rest.call(null,s__5478__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5480),null);
}
} else
{var map__5484 = cljs.core.first.call(null,s__5478__$2);var map__5484__$1 = ((cljs.core.seq_QMARK_.call(null,map__5484))?cljs.core.apply.call(null,cljs.core.hash_map,map__5484):map__5484);var title__$1 = cljs.core.get.call(null,map__5484__$1,new cljs.core.Keyword(null,"title","title",636505583));var time = cljs.core.get.call(null,map__5484__$1,new cljs.core.Keyword(null,"time","time",1385887882));var id = cljs.core.get.call(null,map__5484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),yuggoth.util.fetch_post.call(null,id,((function (map__5484,map__5484__$1,title__$1,time,id,s__5478__$2,temp__4126__auto__,title){
return (function (p1__5468_SHARP_){yuggoth.util.set_current_post_BANG_.call(null,p1__5468_SHARP_);
return yuggoth.util.set_location_BANG_.call(null,"#/blog/",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5468_SHARP_));
});})(map__5484,map__5484__$1,title__$1,time,id,s__5478__$2,temp__4126__auto__,title))
)], null),title__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.date","div.date",-1305414128),time], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5477.call(null,cljs.core.rest.call(null,s__5478__$2)));
}
} else
{return null;
}
break;
}
});})(title))
,null,null));
});})(title))
;return iter__4313__auto__.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"recent-posts","recent-posts",-144304491)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.link,"#/archives",yuggoth.util.text.call(null,new cljs.core.Keyword(null,"more","more",-2058821800))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.sidebar.tag_list], null)], null);
}
}
});

//# sourceMappingURL=sidebar.js.map