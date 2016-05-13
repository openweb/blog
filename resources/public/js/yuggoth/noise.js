// Compiled by ClojureScript 0.0-2341
goog.provide('yuggoth.noise');
goog.require('cljs.core');
yuggoth.noise.distributions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uniform","uniform",496503348),(1),new cljs.core.Keyword(null,"triangular","triangular",1806865335),(2),new cljs.core.Keyword(null,"bell","bell",419679286),(5)], null);
yuggoth.noise.random_parametric = (function random_parametric(n,bias){return Math.pow.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.repeatedly.call(null,n,(function (){return Math.random.call(null);
}))) / (n - (1))),Math.pow.call(null,1.2,bias));
});
yuggoth.noise.hex__GT_rgb = (function hex__GT_rgb(hex){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((hex & (16711680)) >> (16)),((hex & (65280)) >> (8)),(hex & (255))], null);
});
yuggoth.noise.to_range = (function to_range(n,p__5633){var vec__5635 = p__5633;var start = cljs.core.nth.call(null,vec__5635,(0),null);var end = cljs.core.nth.call(null,vec__5635,(1),null);return Math.floor.call(null,((n * (end - start)) + start));
});
yuggoth.noise.rand_rgb = (function rand_rgb(channels_QMARK_,bias,distribution,from_color,to_color){var rnd = yuggoth.noise.random_parametric.call(null,distribution,bias);return cljs.core.map.call(null,cljs.core.partial.call(null,yuggoth.noise.to_range,(cljs.core.truth_(channels_QMARK_)?yuggoth.noise.random_parametric.call(null,distribution,bias):rnd)),cljs.core.map.call(null,cljs.core.vector,yuggoth.noise.hex__GT_rgb.call(null,from_color),yuggoth.noise.hex__GT_rgb.call(null,to_color)));
});
/**
* @param {...*} var_args
*/
yuggoth.noise.make_noise = (function() { 
var make_noise__delegate = function (p__5636){var map__5639 = p__5636;var map__5639__$1 = ((cljs.core.seq_QMARK_.call(null,map__5639))?cljs.core.apply.call(null,cljs.core.hash_map,map__5639):map__5639);var channels_QMARK_ = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"channels?","channels?",-1098904084),false);var grain = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"grain","grain",2007662171),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1)], null));var bias = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"bias","bias",-315297926),(0));var distribution = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"distribution","distribution",-284555369),(5));var to_color = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"to-color","to-color",-688485342),(6316128));var from_color = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"from-color","from-color",-1271621841),(0));var opacity = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2);var height = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"height","height",1025178622),(50));var width = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"width","width",-384071477),(50));var canvas = document.createElement("canvas");var context = canvas.getContext("2d");var distribution__$1 = (function (){var or__3575__auto__ = yuggoth.noise.distributions.call(null,distribution);if(cljs.core.truth_(or__3575__auto__))
{return or__3575__auto__;
} else
{return distribution;
}
})();canvas.width = width;
canvas.height = height;
var x_5641 = width;while(true){
var y_5642 = height;while(true){
var vec__5640_5643 = yuggoth.noise.rand_rgb.call(null,channels_QMARK_,bias,distribution__$1,from_color,to_color);var r_5644 = cljs.core.nth.call(null,vec__5640_5643,(0),null);var g_5645 = cljs.core.nth.call(null,vec__5640_5643,(1),null);var b_5646 = cljs.core.nth.call(null,vec__5640_5643,(2),null);context.fillStyle = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_5644)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_5645)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_5646)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)+")");
context.fillRect(x_5641,y_5642,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(grain),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(grain));
if((y_5642 < (0)))
{} else
{{
var G__5647 = (y_5642 - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(grain));
y_5642 = G__5647;
continue;
}
}
break;
}
if((x_5641 < (0)))
{} else
{{
var G__5648 = (x_5641 - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(grain));
x_5641 = G__5648;
continue;
}
}
break;
}
return canvas.toDataURL("image/png");
};
var make_noise = function (var_args){
var p__5636 = null;if (arguments.length > 0) {
  p__5636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return make_noise__delegate.call(this,p__5636);};
make_noise.cljs$lang$maxFixedArity = 0;
make_noise.cljs$lang$applyTo = (function (arglist__5649){
var p__5636 = cljs.core.seq(arglist__5649);
return make_noise__delegate(p__5636);
});
make_noise.cljs$core$IFn$_invoke$arity$variadic = make_noise__delegate;
return make_noise;
})()
;
yuggoth.noise.set_background = (function set_background(target,img){return target.style.backgroundImage = ("url('"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(img)+"')");
});
yuggoth.noise.set_body_background = (function set_body_background(img){return yuggoth.noise.set_background.call(null,document.body,img);
});
yuggoth.noise.set_element_background = (function set_element_background(id,img){return yuggoth.noise.set_background.call(null,document.getElementById(id),img);
});

//# sourceMappingURL=noise.js.map