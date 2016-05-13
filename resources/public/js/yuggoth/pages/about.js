// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.pages.about');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yuggoth.util');
goog.require('yuggoth.util');
goog.require('yuggoth.session');
goog.require('yuggoth.session');
goog.require('reagent.core');
goog.require('reagent.core');
yuggoth.pages.about.about_page = (function about_page(){yuggoth.util.set_title_BANG_.call(null,yuggoth.util.text.call(null,new cljs.core.Keyword(null,"about","about",1423892543)));
var map__5651 = yuggoth.session.get.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874));var map__5651__$1 = ((cljs.core.seq_QMARK_.call(null,map__5651))?cljs.core.apply.call(null,cljs.core.hash_map,map__5651):map__5651);var email = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"email","email",1415816706));var handle = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"handle","handle",1538948854));var style = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"style","style",-496642736));var about = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"about","about",1423892543));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.archives","div.archives",-236939264),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-title","div.entry-title",1921453503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(yuggoth.util.text.call(null,new cljs.core.Keyword(null,"about-title","about-title",-2136666028)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(handle))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry-content","div.entry-content",1928114261),yuggoth.util.markdown.call(null,about)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),email], null)], null)], null);
});

//# sourceMappingURL=about.js.map