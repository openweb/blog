// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.pages.post');
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
yuggoth.pages.post.set_tag_status_BANG_ = (function set_tag_status_BANG_(id,tag_status,post){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,tag_status),"tagon"))
{cljs.core.swap_BANG_.call(null,post,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),(function (p1__5706_SHARP_){return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([id], true),p1__5706_SHARP_);
}));
cljs.core.reset_BANG_.call(null,tag_status,"tagoff");
} else
{cljs.core.swap_BANG_.call(null,post,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.conj,id);
cljs.core.reset_BANG_.call(null,tag_status,"tagon");
}
return cljs.core.swap_BANG_.call(null,post,cljs.core.assoc,new cljs.core.Keyword(null,"saved","saved",288760660),false);
});
yuggoth.pages.post.tag = (function tag(id,post){var tag_status = reagent.core.atom.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([id], true),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post))))?"tagon":"tagoff"));return ((function (tag_status){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,tag_status),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag_status){
return (function (){return yuggoth.pages.post.set_tag_status_BANG_.call(null,id,tag_status,post);
});})(tag_status))
], null),id], null);
});
;})(tag_status))
});
yuggoth.pages.post.edit_tags = (function edit_tags(post,tags){var new_tag = reagent.core.atom.call(null,null);return ((function (new_tag){
return (function (){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags","div.tags",-1073137818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"tags: "], null),(function (){var iter__4313__auto__ = ((function (new_tag){
return (function iter__5712(s__5713){return (new cljs.core.LazySeq(null,((function (new_tag){
return (function (){var s__5713__$1 = s__5713;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5713__$1);if(temp__4126__auto__)
{var s__5713__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5713__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5713__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5715 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5714 = (0);while(true){
if((i__5714 < size__4312__auto__))
{var id = cljs.core._nth.call(null,c__4311__auto__,i__5714);cljs.core.chunk_append.call(null,b__5715,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.post.tag,id,post], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5716 = (i__5714 + (1));
i__5714 = G__5716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5715),iter__5712.call(null,cljs.core.chunk_rest.call(null,s__5713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5715),null);
}
} else
{var id = cljs.core.first.call(null,s__5713__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.post.tag,id,post], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5712.call(null,cljs.core.rest.call(null,s__5713__$2)));
}
} else
{return null;
}
break;
}
});})(new_tag))
,null,null));
});})(new_tag))
;return iter__4313__auto__.call(null,cljs.core.deref.call(null,tags));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.text_input,new_tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"other","other",995793544)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (new_tag){
return (function (p1__5707_SHARP_){cljs.core.reset_BANG_.call(null,new_tag,p1__5707_SHARP_.target.value);
return cljs.core.swap_BANG_.call(null,post,cljs.core.assoc,new cljs.core.Keyword(null,"saved","saved",288760660),false);
});})(new_tag))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (new_tag){
return (function (){if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,new_tag))))
{return cljs.core.swap_BANG_.call(null,tags,cljs.core.conj,cljs.core.deref.call(null,new_tag));
} else
{return null;
}
});})(new_tag))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"add-tag","add-tag",-1033774851))], null)], null);
});
;})(new_tag))
});
yuggoth.pages.post.save_BANG_ = (function save_BANG_(post){return (function (result){cljs.core.swap_BANG_.call(null,post,cljs.core.assoc,new cljs.core.Keyword(null,"saved","saved",288760660),true);
yuggoth.util.set_current_post_BANG_.call(null,result);
yuggoth.util.set_page_BANG_.call(null,yuggoth.pages.home.home_page);
return yuggoth.util.set_location_BANG_.call(null,"#/blog/",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post)));
});
});
yuggoth.pages.post.save_post_BANG_ = (function save_post_BANG_(post){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.save-post","div.save-post",451636894),(cljs.core.truth_(new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"saved","saved",288760660))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return yuggoth.util.POST.call(null,"/save-post",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.dissoc.call(null,cljs.core.deref.call(null,post),new cljs.core.Keyword(null,"saved","saved",288760660))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.pages.post.save_BANG_.call(null,post)], null));
})], null),"save post"], null))], null);
});
yuggoth.pages.post.select_post_keys = (function select_post_keys(post){if(cljs.core.truth_(post))
{return cljs.core.select_keys.call(null,post,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"public","public",1566243851)], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
yuggoth.pages.post.post_page = (function() { 
var post_page__delegate = function (p__5719){var vec__5721 = p__5719;var post = cljs.core.nth.call(null,vec__5721,(0),null);var post__$1 = reagent.core.atom.call(null,cljs.core.assoc.call(null,yuggoth.pages.post.select_post_keys.call(null,post),new cljs.core.Keyword(null,"saved","saved",288760660),true));var tags = reagent.core.atom.call(null,cljs.core.set.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977))));return ((function (post__$1,tags,vec__5721,post){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.edit-post","div.edit-post",2098704539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"edit-post-title",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (post__$1,tags,vec__5721,post){
return (function (p1__5717_SHARP_){return cljs.core.swap_BANG_.call(null,post__$1,cljs.core.assoc,new cljs.core.Keyword(null,"saved","saved",288760660),false,new cljs.core.Keyword(null,"title","title",636505583),p1__5717_SHARP_.target.value);
});})(post__$1,tags,vec__5721,post))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.edit-post-text","textarea.edit-post-text",-900838054),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (post__$1,tags,vec__5721,post){
return (function (p1__5718_SHARP_){return cljs.core.swap_BANG_.call(null,post__$1,cljs.core.assoc,new cljs.core.Keyword(null,"saved","saved",288760660),false,new cljs.core.Keyword(null,"content","content",15833224),p1__5718_SHARP_.target.value);
});})(post__$1,tags,vec__5721,post))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-preview","div.post-preview",572870949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-title","div.entry-title",1921453503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),yuggoth.util.markdown.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.post.edit_tags,post__$1,tags], null),(cljs.core.truth_((function (){var and__3563__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1)));if(cljs.core.truth_(and__3563__auto__))
{return cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,post__$1)));
} else
{return and__3563__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.post.save_post_BANG_,post__$1], null):null)], null);
});
;})(post__$1,tags,vec__5721,post))
};
var post_page = function (var_args){
var p__5719 = null;if (arguments.length > 0) {
  p__5719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return post_page__delegate.call(this,p__5719);};
post_page.cljs$lang$maxFixedArity = 0;
post_page.cljs$lang$applyTo = (function (arglist__5722){
var p__5719 = cljs.core.seq(arglist__5722);
return post_page__delegate(p__5719);
});
post_page.cljs$core$IFn$_invoke$arity$variadic = post_page__delegate;
return post_page;
})()
;
yuggoth.pages.post.make_post_page = (function make_post_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"new-post","new-post",-1808203791)));
return yuggoth.pages.post.post_page.call(null);
});
yuggoth.pages.post.edit_post_page = (function edit_post_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"edit-post","edit-post",1629845365)));
return yuggoth.pages.post.post_page.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"post","post",269697687)));
});

//# sourceMappingURL=post.js.map