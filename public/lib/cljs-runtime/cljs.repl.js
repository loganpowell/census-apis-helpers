goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27668){
var map__27669 = p__27668;
var map__27669__$1 = ((((!((map__27669 == null)))?(((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27669):map__27669);
var m = map__27669__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27671_27699 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27672_27700 = null;
var count__27673_27701 = (0);
var i__27674_27702 = (0);
while(true){
if((i__27674_27702 < count__27673_27701)){
var f_27703 = chunk__27672_27700.cljs$core$IIndexed$_nth$arity$2(null,i__27674_27702);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27703], 0));


var G__27704 = seq__27671_27699;
var G__27705 = chunk__27672_27700;
var G__27706 = count__27673_27701;
var G__27707 = (i__27674_27702 + (1));
seq__27671_27699 = G__27704;
chunk__27672_27700 = G__27705;
count__27673_27701 = G__27706;
i__27674_27702 = G__27707;
continue;
} else {
var temp__5457__auto___27709 = cljs.core.seq(seq__27671_27699);
if(temp__5457__auto___27709){
var seq__27671_27710__$1 = temp__5457__auto___27709;
if(cljs.core.chunked_seq_QMARK_(seq__27671_27710__$1)){
var c__4319__auto___27711 = cljs.core.chunk_first(seq__27671_27710__$1);
var G__27712 = cljs.core.chunk_rest(seq__27671_27710__$1);
var G__27713 = c__4319__auto___27711;
var G__27714 = cljs.core.count(c__4319__auto___27711);
var G__27715 = (0);
seq__27671_27699 = G__27712;
chunk__27672_27700 = G__27713;
count__27673_27701 = G__27714;
i__27674_27702 = G__27715;
continue;
} else {
var f_27716 = cljs.core.first(seq__27671_27710__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27716], 0));


var G__27717 = cljs.core.next(seq__27671_27710__$1);
var G__27718 = null;
var G__27719 = (0);
var G__27720 = (0);
seq__27671_27699 = G__27717;
chunk__27672_27700 = G__27718;
count__27673_27701 = G__27719;
i__27674_27702 = G__27720;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27721 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27721], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27721)))?cljs.core.second(arglists_27721):arglists_27721)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27675_27727 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27676_27728 = null;
var count__27677_27729 = (0);
var i__27678_27730 = (0);
while(true){
if((i__27678_27730 < count__27677_27729)){
var vec__27679_27735 = chunk__27676_27728.cljs$core$IIndexed$_nth$arity$2(null,i__27678_27730);
var name_27736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679_27735,(0),null);
var map__27682_27737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679_27735,(1),null);
var map__27682_27738__$1 = ((((!((map__27682_27737 == null)))?(((((map__27682_27737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27682_27737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27682_27737):map__27682_27737);
var doc_27739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27682_27738__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27682_27738__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27736], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27740], 0));

if(cljs.core.truth_(doc_27739)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27739], 0));
} else {
}


var G__27745 = seq__27675_27727;
var G__27746 = chunk__27676_27728;
var G__27747 = count__27677_27729;
var G__27748 = (i__27678_27730 + (1));
seq__27675_27727 = G__27745;
chunk__27676_27728 = G__27746;
count__27677_27729 = G__27747;
i__27678_27730 = G__27748;
continue;
} else {
var temp__5457__auto___27749 = cljs.core.seq(seq__27675_27727);
if(temp__5457__auto___27749){
var seq__27675_27750__$1 = temp__5457__auto___27749;
if(cljs.core.chunked_seq_QMARK_(seq__27675_27750__$1)){
var c__4319__auto___27751 = cljs.core.chunk_first(seq__27675_27750__$1);
var G__27752 = cljs.core.chunk_rest(seq__27675_27750__$1);
var G__27753 = c__4319__auto___27751;
var G__27754 = cljs.core.count(c__4319__auto___27751);
var G__27755 = (0);
seq__27675_27727 = G__27752;
chunk__27676_27728 = G__27753;
count__27677_27729 = G__27754;
i__27678_27730 = G__27755;
continue;
} else {
var vec__27684_27756 = cljs.core.first(seq__27675_27750__$1);
var name_27757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_27756,(0),null);
var map__27687_27758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_27756,(1),null);
var map__27687_27759__$1 = ((((!((map__27687_27758 == null)))?(((((map__27687_27758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27687_27758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27687_27758):map__27687_27758);
var doc_27760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27687_27759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27687_27759__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27757], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27761], 0));

if(cljs.core.truth_(doc_27760)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27760], 0));
} else {
}


var G__27762 = cljs.core.next(seq__27675_27750__$1);
var G__27763 = null;
var G__27764 = (0);
var G__27765 = (0);
seq__27675_27727 = G__27762;
chunk__27676_27728 = G__27763;
count__27677_27729 = G__27764;
i__27678_27730 = G__27765;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27694 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27695 = null;
var count__27696 = (0);
var i__27697 = (0);
while(true){
if((i__27697 < count__27696)){
var role = chunk__27695.cljs$core$IIndexed$_nth$arity$2(null,i__27697);
var temp__5457__auto___27766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27766__$1)){
var spec_27767 = temp__5457__auto___27766__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27767)], 0));
} else {
}


var G__27768 = seq__27694;
var G__27769 = chunk__27695;
var G__27770 = count__27696;
var G__27771 = (i__27697 + (1));
seq__27694 = G__27768;
chunk__27695 = G__27769;
count__27696 = G__27770;
i__27697 = G__27771;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27694);
if(temp__5457__auto____$1){
var seq__27694__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27694__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27694__$1);
var G__27772 = cljs.core.chunk_rest(seq__27694__$1);
var G__27773 = c__4319__auto__;
var G__27774 = cljs.core.count(c__4319__auto__);
var G__27775 = (0);
seq__27694 = G__27772;
chunk__27695 = G__27773;
count__27696 = G__27774;
i__27697 = G__27775;
continue;
} else {
var role = cljs.core.first(seq__27694__$1);
var temp__5457__auto___27776__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27776__$2)){
var spec_27777 = temp__5457__auto___27776__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27777)], 0));
} else {
}


var G__27778 = cljs.core.next(seq__27694__$1);
var G__27779 = null;
var G__27780 = (0);
var G__27781 = (0);
seq__27694 = G__27778;
chunk__27695 = G__27779;
count__27696 = G__27780;
i__27697 = G__27781;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
