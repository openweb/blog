// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.pages.latest_comments');
goog.require('cljs.core');
goog.require('yuggoth.components.sidebar');
goog.require('yuggoth.pages.home');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.components.sidebar');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('yuggoth.pages.home');
goog.require('reagent.core');
goog.require('reagent.core');
yuggoth.pages.latest_comments.latest_comments_list = (function latest_comments_list(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4313__auto__ = (function iter__5696(s__5697){return (new cljs.core.LazySeq(null,(function (){var s__5697__$1 = s__5697;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5697__$1);if(temp__4126__auto__)
{var s__5697__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5697__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5697__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5699 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5698 = (0);while(true){
if((i__5698 < size__4312__auto__))
{var map__5702 = cljs.core._nth.call(null,c__4311__auto__,i__5698);var map__5702__$1 = ((cljs.core.seq_QMARK_.call(null,map__5702))?cljs.core.apply.call(null,cljs.core.hash_map,map__5702):map__5702);var author = cljs.core.get.call(null,map__5702__$1,new cljs.core.Keyword(null,"author","author",2111686192));var content = cljs.core.get.call(null,map__5702__$1,new cljs.core.Keyword(null,"content","content",15833224));var time = cljs.core.get.call(null,map__5702__$1,new cljs.core.Keyword(null,"time","time",1385887882));var blogid = cljs.core.get.call(null,map__5702__$1,new cljs.core.Keyword(null,"blogid","blogid",-929899166));cljs.core.chunk_append.call(null,b__5699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.padded","tr.padded",-1439534767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5698,map__5702,map__5702__$1,author,content,time,blogid,c__4311__auto__,size__4312__auto__,b__5699,s__5697__$2,temp__4126__auto__){
return (function (){yuggoth.util.set_location_BANG_.call(null,"#/blog/",blogid);
return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
});})(i__5698,map__5702,map__5702__$1,author,content,time,blogid,c__4311__auto__,size__4312__auto__,b__5699,s__5697__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),yuggoth.util.markdown.call(null,content)], null)," - ",author], null)], null)], null));
{
var G__5704 = (i__5698 + (1));
i__5698 = G__5704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5699),iter__5696.call(null,cljs.core.chunk_rest.call(null,s__5697__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5699),null);
}
} else
{var map__5703 = cljs.core.first.call(null,s__5697__$2);var map__5703__$1 = ((cljs.core.seq_QMARK_.call(null,map__5703))?cljs.core.apply.call(null,cljs.core.hash_map,map__5703):map__5703);var author = cljs.core.get.call(null,map__5703__$1,new cljs.core.Keyword(null,"author","author",2111686192));var content = cljs.core.get.call(null,map__5703__$1,new cljs.core.Keyword(null,"content","content",15833224));var time = cljs.core.get.call(null,map__5703__$1,new cljs.core.Keyword(null,"time","time",1385887882));var blogid = cljs.core.get.call(null,map__5703__$1,new cljs.core.Keyword(null,"blogid","blogid",-929899166));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.padded","tr.padded",-1439534767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__5703,map__5703__$1,author,content,time,blogid,s__5697__$2,temp__4126__auto__){
return (function (){yuggoth.util.set_location_BANG_.call(null,"#/blog/",blogid);
return yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
});})(map__5703,map__5703__$1,author,content,time,blogid,s__5697__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),yuggoth.util.markdown.call(null,content)], null)," - ",author], null)], null)], null),iter__5696.call(null,cljs.core.rest.call(null,s__5697__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4313__auto__.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"latest-comments","latest-comments",797758082)));
})()], null);
});
yuggoth.pages.latest_comments.latest_comments_page = (function latest_comments_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"latest-comments-title","latest-comments-title",1660791026)));
yuggoth.util.GET.call(null,"/latest-comments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__5705_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"latest-comments","latest-comments",797758082),p1__5705_SHARP_);
})], null));
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents","div.contents",-1428662400),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post","div.post",-381003886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-title","div.entry-title",1921453503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"latest-comments-title","latest-comments-title",1660791026))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-content","div.entry-content",1928114261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.latest_comments.latest_comments_list], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.sidebar.sidebar], null)], null);
});
});

//# sourceMappingURL=latest_comments.js.map