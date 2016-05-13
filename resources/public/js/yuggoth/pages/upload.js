// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.pages.upload');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.IframeIo');
yuggoth.pages.upload.upload_file_BANG_ = (function upload_file_BANG_(upload_form_id,status){cljs.core.reset_BANG_.call(null,status,null);
var io = (new goog.net.IframeIo());goog.events.listen(io,goog.net.EventType.SUCCESS,((function (io){
return (function (){yuggoth.session.update_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null),cljs.core.conj,io.getResponseText());
return cljs.core.reset_BANG_.call(null,status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"file-uploaded","file-uploaded",-1464442207))], null));
});})(io))
);
goog.events.listen(io,goog.net.EventType.ERROR,((function (io){
return (function (){return cljs.core.reset_BANG_.call(null,status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.error","span.error",-283487575),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"error-uploading","error-uploading",-1522416479))], null));
});})(io))
);
io.setErrorChecker(((function (io){
return (function (){return cljs.core._EQ_.call(null,"error",io.getResponseText());
});})(io))
);
return io.sendFromForm(document.getElementById(upload_form_id),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/upload"));
});
yuggoth.pages.upload.delete_file_BANG_ = (function delete_file_BANG_(name){return yuggoth.util.POST.call(null,("/delete-file/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){return yuggoth.session.update_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null),(function (files){return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([name], true),files);
}));
})], null));
});
yuggoth.pages.upload.delete_component = (function delete_component(name){var status = reagent.core.atom.call(null,new cljs.core.Keyword(null,"button","button",1456579943));return ((function (status){
return (function (){var pred__5734 = cljs.core._EQ_;var expr__5735 = cljs.core.deref.call(null,status);if(cljs.core.truth_(pred__5734.call(null,new cljs.core.Keyword(null,"button","button",1456579943),expr__5735)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__5734,expr__5735,status){
return (function (){return cljs.core.reset_BANG_.call(null,status,new cljs.core.Keyword(null,"confirm","confirm",-2004000608));
});})(pred__5734,expr__5735,status))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620))], null);
} else
{if(cljs.core.truth_(pred__5734.call(null,new cljs.core.Keyword(null,"confirm","confirm",-2004000608),expr__5735)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"confirm","confirm",-2004000608)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__5734,expr__5735,status){
return (function (){return yuggoth.pages.upload.delete_file_BANG_.call(null,name);
});})(pred__5734,expr__5735,status))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"yes","yes",182838819))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__5734,expr__5735,status){
return (function (){return cljs.core.reset_BANG_.call(null,status,new cljs.core.Keyword(null,"button","button",1456579943));
});})(pred__5734,expr__5735,status))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"no","no",-390373634))], null)], null);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5735))));
}
}
});
;})(status))
});
yuggoth.pages.upload.file_item = (function file_item(name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.file-link","td.file-link",-1403964341),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/files/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.file","td.file",167010903),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.upload.delete_component,name], null)], null)], null);
});
yuggoth.pages.upload.files_list = (function files_list(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4313__auto__ = (function iter__5741(s__5742){return (new cljs.core.LazySeq(null,(function (){var s__5742__$1 = s__5742;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5742__$1);if(temp__4126__auto__)
{var s__5742__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5742__$2))
{var c__4311__auto__ = cljs.core.chunk_first.call(null,s__5742__$2);var size__4312__auto__ = cljs.core.count.call(null,c__4311__auto__);var b__5744 = cljs.core.chunk_buffer.call(null,size__4312__auto__);if((function (){var i__5743 = (0);while(true){
if((i__5743 < size__4312__auto__))
{var name = cljs.core._nth.call(null,c__4311__auto__,i__5743);cljs.core.chunk_append.call(null,b__5744,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.upload.file_item,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));
{
var G__5745 = (i__5743 + (1));
i__5743 = G__5745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5744),iter__5741.call(null,cljs.core.chunk_rest.call(null,s__5742__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5744),null);
}
} else
{var name = cljs.core.first.call(null,s__5742__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.upload.file_item,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),iter__5741.call(null,cljs.core.rest.call(null,s__5742__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4313__auto__.call(null,yuggoth.session.get.call(null,new cljs.core.Keyword(null,"files","files",-472457450)));
})()], null);
});
yuggoth.pages.upload.upload_page = (function upload_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"upload","upload",-255769218)));
var status = reagent.core.atom.call(null,null);var form_id = "upload-form";yuggoth.util.GET.call(null,"/list-files",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (status,form_id){
return (function (p1__5746_SHARP_){return yuggoth.session.put_BANG_.call(null,new cljs.core.Keyword(null,"files","files",-472457450),p1__5746_SHARP_);
});})(status,form_id))
], null));
return ((function (status,form_id){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents","div.contents",-1428662400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.archives","div.archives",-236939264),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload","div.upload",1386618273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"available-files","available-files",-657868863))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yuggoth.pages.upload.files_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),form_id,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"file"], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"file-to-upload","file-to-upload",1398625604))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"type","type",1174270348),"file"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button","span.button",-541834575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (status,form_id){
return (function (){return yuggoth.pages.upload.upload_file_BANG_.call(null,form_id,status);
});})(status,form_id))
], null),yuggoth.util.text.call(null,new cljs.core.Keyword(null,"upload","upload",-255769218))], null),(cljs.core.truth_(cljs.core.deref.call(null,status))?cljs.core.deref.call(null,status):null)], null)], null)], null);
});
;})(status,form_id))
});

//# sourceMappingURL=upload.js.map