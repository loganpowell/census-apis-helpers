goog.provide('census.discovery');
goog.require('cljs.core');
census.discovery.vintages = (function census$discovery$vintages(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28250 = arguments.length;
var i__4500__auto___28251 = (0);
while(true){
if((i__4500__auto___28251 < len__4499__auto___28250)){
args__4502__auto__.push((arguments[i__4500__auto___28251]));

var G__28252 = (i__4500__auto___28251 + (1));
i__4500__auto___28251 = G__28252;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return census.discovery.vintages.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

census.discovery.vintages.cljs$core$IFn$_invoke$arity$variadic = (function (cli_args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello Census API!"], 0));
});

census.discovery.vintages.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
census.discovery.vintages.cljs$lang$applyTo = (function (seq28245){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28245));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Census work from node!"], 0));
census.discovery.vintages();

//# sourceMappingURL=census.discovery.js.map
