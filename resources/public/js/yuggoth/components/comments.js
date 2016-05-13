// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.components.comments');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('reagent.core');
goog.require('reagent.core');
/**
* @param {...*} var_args
*/
yuggoth.components.comments.example = (function() { 
var example__delegate = function (source,result){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),yuggoth.util.text.call(null,source)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),result], null)], null);
};
var example = function (source,var_args){
var result = null;if (arguments.length > 1) {
  result = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return example__delegate.call(this,source,result);};
example.cljs$lang$maxFixedArity = 1;
example.cljs$lang$applyTo = (function (arglist__5403){
var source = cljs.core.first(arglist__5403);
var result = cljs.core.rest(arglist__5403);
return example__delegate(source,result);
});
example.cljs$core$IFn$_invoke$arity$variadic = example__delegate;
return example;
})()
;
yuggoth.components.comments.help = (function help(show_help_QMARK_){if(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.mdhelp","table.mdhelp",-1409707511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"italics-help","italics-help",-1728669720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"italics-example","italics-example",1005239792))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"bold-help","bold-help",270946642),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"bold-example","bold-example",89432106))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"strikethrough-help","strikethrough-help",-491618918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del","del",574975584),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"strikethrough-example","strikethrough-example",1618235548))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"link-help","link-help",-1110127183),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://http://example.net/"], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"link-example","link-example",-1622891188))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"superscript-help","superscript-help",1750667648),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"super-example","super-example",1344967801)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"script-example","script-example",1201015688))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"quote-help","quote-help",1428042523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"quote-example","quote-example",-942508571))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.example,new cljs.core.Keyword(null,"code-help","code-help",-1218574666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"code-help","code-help",-1218574666))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else
{return null;
}
});
yuggoth.components.comments.submit_comment = (function submit_comment(blogid,author,comment_text){return yuggoth.util.POST.call(null,"/comment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blogid","blogid",-929899166),blogid,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.deref.call(null,comment_text),new cljs.core.Keyword(null,"author","author",2111686192),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"handle","handle",1538948854)], null)):cljs.core.deref.call(null,author))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (comment){cljs.core.reset_BANG_.call(null,comment_text,"");
return yuggoth.session.update_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,comment);
})], null));
});
yuggoth.components.comments.comment_form = (function comment_form(){var blogid = yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"id","id",-1388402092)], null));var comment_text = reagent.core.atom.call(null,null);var author = reagent.core.atom.call(null,"anonymous");var show_help_QMARK_ = reagent.core.atom.call(null,false);return ((function (blogid,comment_text,author,show_help_QMARK_){
return (function (){return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comment-form","div.comment-form",1474181347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.comment-text","textarea.comment-text",-165943601),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(4),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,comment_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (blogid,comment_text,author,show_help_QMARK_){
return (function (p1__5404_SHARP_){return cljs.core.reset_BANG_.call(null,comment_text,p1__5404_SHARP_.target.value);
});})(blogid,comment_text,author,show_help_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,comment_text)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comment-preview","div.comment-preview",756470017),yuggoth.util.markdown.call(null,cljs.core.deref.call(null,comment_text))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.authorid","div.authorid",-966954291),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.author","span.author",-592013156),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"commenting-as","commenting-as",1467431714)),yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"handle","handle",1538948854)], null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"by "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.util.text_input,author,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"author"], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.help,show_help_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (blogid,comment_text,author,show_help_QMARK_){
return (function (){return cljs.core.swap_BANG_.call(null,show_help_QMARK_,cljs.core.not);
});})(blogid,comment_text,author,show_help_QMARK_))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"help","help",-439233446))], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,comment_text)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(5),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (blogid,comment_text,author,show_help_QMARK_){
return (function (){return yuggoth.components.comments.submit_comment.call(null,blogid,author,comment_text);
});})(blogid,comment_text,author,show_help_QMARK_))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317))], null):null)], null);
});
;})(blogid,comment_text,author,show_help_QMARK_))
});
yuggoth.components.comments.remove_comment = (function remove_comment(id){return (function (_){return yuggoth.session.update_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),(function (comments){return cljs.core.remove.call(null,(function (p1__5405_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5405_SHARP_),id);
}),comments);
}));
});
});
yuggoth.components.comments.delete_comment_button = (function delete_comment_button(id,blogid){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.submit-comment","span.submit-comment",-2123612194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(5),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return yuggoth.util.POST.call(null,"/delete-comment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"blogid","blogid",-929899166),blogid], null),new cljs.core.Keyword(null,"handler","handler",-195596612),yuggoth.components.comments.remove_comment.call(null,id)], null));
})], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620))], null);
});
yuggoth.components.comments.comment = (function comment(p__5406){var map__5408 = p__5406;var map__5408__$1 = ((cljs.core.seq_QMARK_.call(null,map__5408))?cljs.core.apply.call(null,cljs.core.hash_map,map__5408):map__5408);var time = cljs.core.get.call(null,map__5408__$1,new cljs.core.Keyword(null,"time","time",1385887882));var content = cljs.core.get.call(null,map__5408__$1,new cljs.core.Keyword(null,"content","content",15833224));var author = cljs.core.get.call(null,map__5408__$1,new cljs.core.Keyword(null,"author","author",2111686192));var blogid = cljs.core.get.call(null,map__5408__$1,new cljs.core.Keyword(null,"blogid","blogid",-929899166));var id = cljs.core.get.call(null,map__5408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comment","div.comment",360783470),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),time," - ",author], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comment-content","div.comment-content",782816273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),yuggoth.util.markdown.call(null,content)], null),(cljs.core.truth_(yuggoth.session.get.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.delete_comment_button,id,blogid], null):null)], null)], null);
});
yuggoth.components.comments.comments = (function comments(){var temp__4124__auto__ = yuggoth.session.get_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"comments","comments",-293346423)], null));if(cljs.core.truth_(temp__4124__auto__))
{var comments__$1 = temp__4124__auto__;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comments","div.comments",-545181911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(function (){var iter__4313__auto__ = ((function (comments__$1,temp__4124__auto__){
return (function iter__5417(s__5418){return (new cljs.core.LazySeq(null,((function (comments__$1,temp__4124__auto__){
return (function (){var s__5418__$1 = s__5418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5418__$1);if(temp__4126__auto__)
{var s__5418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5418__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5418__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5420 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5419 = (0);while(true){
if((i__5419 < size__4312__auto__))
{var map__5423 = cljs.core._nth.call(null,c__4311__auto__,i__5419);var map__5423__$1 = ((cljs.core.seq_QMARK_.call(null,map__5423))?cljs.core.apply.call(null,cljs.core.hash_map,map__5423):map__5423);var content = map__5423__$1;var id = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__5420,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.comment,content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5425 = (i__5419 + (1));
i__5419 = G__5425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5420),iter__5417.call(null,cljs.core.chunk_rest.call(null,s__5418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5420),null);
}
} else
{var map__5424 = cljs.core.first.call(null,s__5418__$2);var map__5424__$1 = ((cljs.core.seq_QMARK_.call(null,map__5424))?cljs.core.apply.call(null,cljs.core.hash_map,map__5424):map__5424);var content = map__5424__$1;var id = cljs.core.get.call(null,map__5424__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.comment,content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5417.call(null,cljs.core.rest.call(null,s__5418__$2)));
}
} else
{return null;
}
break;
}
});})(comments__$1,temp__4124__auto__))
,null,null));
});})(comments__$1,temp__4124__auto__))
;return iter__4313__auto__.call(null,comments__$1);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.components.comments.comment_form], null)], null);
} else
{return null;
}
});

//# sourceMappingURL=comments.js.map