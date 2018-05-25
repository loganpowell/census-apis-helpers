goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if(typeof shadow.cljs.devtools.client.node.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if(typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29029){
var map__29030 = p__29029;
var map__29030__$1 = ((((!((map__29030 == null)))?(((((map__29030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29030):map__29030);
var msg = map__29030__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29030__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29030__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__29032){
var map__29033 = p__29032;
var map__29033__$1 = ((((!((map__29033 == null)))?(((((map__29033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29033):map__29033);
var msg = map__29033__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29033__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29033__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__29035 = repl_state;
var map__29035__$1 = ((((!((map__29035 == null)))?(((((map__29035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29035):map__29035);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29035__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__29037_29047 = cljs.core.seq(repl_sources);
var chunk__29039_29048 = null;
var count__29040_29049 = (0);
var i__29041_29050 = (0);
while(true){
if((i__29041_29050 < count__29040_29049)){
var map__29043_29051 = chunk__29039_29048.cljs$core$IIndexed$_nth$arity$2(null,i__29041_29050);
var map__29043_29052__$1 = ((((!((map__29043_29051 == null)))?(((((map__29043_29051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29043_29051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29043_29051):map__29043_29051);
var src_29053 = map__29043_29052__$1;
var output_name_29054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29043_29052__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29054))){
shadow.cljs.devtools.client.node.closure_import(output_name_29054);


var G__29055 = seq__29037_29047;
var G__29056 = chunk__29039_29048;
var G__29057 = count__29040_29049;
var G__29058 = (i__29041_29050 + (1));
seq__29037_29047 = G__29055;
chunk__29039_29048 = G__29056;
count__29040_29049 = G__29057;
i__29041_29050 = G__29058;
continue;
} else {
var G__29059 = seq__29037_29047;
var G__29060 = chunk__29039_29048;
var G__29061 = count__29040_29049;
var G__29062 = (i__29041_29050 + (1));
seq__29037_29047 = G__29059;
chunk__29039_29048 = G__29060;
count__29040_29049 = G__29061;
i__29041_29050 = G__29062;
continue;
}
} else {
var temp__5457__auto___29063 = cljs.core.seq(seq__29037_29047);
if(temp__5457__auto___29063){
var seq__29037_29064__$1 = temp__5457__auto___29063;
if(cljs.core.chunked_seq_QMARK_(seq__29037_29064__$1)){
var c__4319__auto___29065 = cljs.core.chunk_first(seq__29037_29064__$1);
var G__29066 = cljs.core.chunk_rest(seq__29037_29064__$1);
var G__29067 = c__4319__auto___29065;
var G__29068 = cljs.core.count(c__4319__auto___29065);
var G__29069 = (0);
seq__29037_29047 = G__29066;
chunk__29039_29048 = G__29067;
count__29040_29049 = G__29068;
i__29041_29050 = G__29069;
continue;
} else {
var map__29045_29070 = cljs.core.first(seq__29037_29064__$1);
var map__29045_29071__$1 = ((((!((map__29045_29070 == null)))?(((((map__29045_29070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29045_29070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29045_29070):map__29045_29070);
var src_29072 = map__29045_29071__$1;
var output_name_29073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045_29071__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29073))){
shadow.cljs.devtools.client.node.closure_import(output_name_29073);


var G__29074 = cljs.core.next(seq__29037_29064__$1);
var G__29075 = null;
var G__29076 = (0);
var G__29077 = (0);
seq__29037_29047 = G__29074;
chunk__29039_29048 = G__29075;
count__29040_29049 = G__29076;
i__29041_29050 = G__29077;
continue;
} else {
var G__29078 = cljs.core.next(seq__29037_29064__$1);
var G__29079 = null;
var G__29080 = (0);
var G__29081 = (0);
seq__29037_29047 = G__29078;
chunk__29039_29048 = G__29079;
count__29040_29049 = G__29080;
i__29041_29050 = G__29081;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29082){
var map__29083 = p__29082;
var map__29083__$1 = ((((!((map__29083 == null)))?(((((map__29083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29083):map__29083);
var msg = map__29083__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29083,map__29083__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29083,map__29083__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29085){
var map__29086 = p__29085;
var map__29086__$1 = ((((!((map__29086 == null)))?(((((map__29086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29086):map__29086);
var msg = map__29086__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29088){
var map__29089 = p__29088;
var map__29089__$1 = ((((!((map__29089 == null)))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29089):map__29089);
var msg = map__29089__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29089__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29089__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29089__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29092_29100 = cljs.core.seq(sources);
var chunk__29093_29101 = null;
var count__29094_29102 = (0);
var i__29095_29103 = (0);
while(true){
if((i__29095_29103 < count__29094_29102)){
var map__29096_29104 = chunk__29093_29101.cljs$core$IIndexed$_nth$arity$2(null,i__29095_29103);
var map__29096_29105__$1 = ((((!((map__29096_29104 == null)))?(((((map__29096_29104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29096_29104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29096_29104):map__29096_29104);
var src_29106 = map__29096_29105__$1;
var provides_29107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29096_29105__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29096_29105__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29108));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29107);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29108);
} else {
}


var G__29109 = seq__29092_29100;
var G__29110 = chunk__29093_29101;
var G__29111 = count__29094_29102;
var G__29112 = (i__29095_29103 + (1));
seq__29092_29100 = G__29109;
chunk__29093_29101 = G__29110;
count__29094_29102 = G__29111;
i__29095_29103 = G__29112;
continue;
} else {
var temp__5457__auto___29113 = cljs.core.seq(seq__29092_29100);
if(temp__5457__auto___29113){
var seq__29092_29114__$1 = temp__5457__auto___29113;
if(cljs.core.chunked_seq_QMARK_(seq__29092_29114__$1)){
var c__4319__auto___29115 = cljs.core.chunk_first(seq__29092_29114__$1);
var G__29116 = cljs.core.chunk_rest(seq__29092_29114__$1);
var G__29117 = c__4319__auto___29115;
var G__29118 = cljs.core.count(c__4319__auto___29115);
var G__29119 = (0);
seq__29092_29100 = G__29116;
chunk__29093_29101 = G__29117;
count__29094_29102 = G__29118;
i__29095_29103 = G__29119;
continue;
} else {
var map__29098_29120 = cljs.core.first(seq__29092_29114__$1);
var map__29098_29121__$1 = ((((!((map__29098_29120 == null)))?(((((map__29098_29120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29098_29120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29098_29120):map__29098_29120);
var src_29122 = map__29098_29121__$1;
var provides_29123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098_29121__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098_29121__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29124));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29123);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29124);
} else {
}


var G__29125 = cljs.core.next(seq__29092_29114__$1);
var G__29126 = null;
var G__29127 = (0);
var G__29128 = (0);
seq__29092_29100 = G__29125;
chunk__29093_29101 = G__29126;
count__29094_29102 = G__29127;
i__29095_29103 = G__29128;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29091){var e = e29091;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29129){
var map__29130 = p__29129;
var map__29130__$1 = ((((!((map__29130 == null)))?(((((map__29130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29130):map__29130);
var msg = map__29130__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29130__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29132 = info;
var map__29132__$1 = ((((!((map__29132 == null)))?(((((map__29132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29132):map__29132);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29132__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29132__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29134(s__29135){
return (new cljs.core.LazySeq(null,((function (map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info){
return (function (){
var s__29135__$1 = s__29135;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29135__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__29140 = cljs.core.first(xs__6012__auto__);
var map__29140__$1 = ((((!((map__29140 == null)))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29140):map__29140);
var src = map__29140__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__29135__$1,map__29140,map__29140__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29134_$_iter__29136(s__29137){
return (new cljs.core.LazySeq(null,((function (s__29135__$1,map__29140,map__29140__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info){
return (function (){
var s__29137__$1 = s__29137;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29137__$1);
if(temp__5457__auto____$1){
var s__29137__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29137__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29137__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29139 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29138 = (0);
while(true){
if((i__29138 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29138);
cljs.core.chunk_append(b__29139,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29154 = (i__29138 + (1));
i__29138 = G__29154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29139),shadow$cljs$devtools$client$node$build_complete_$_iter__29134_$_iter__29136(cljs.core.chunk_rest(s__29137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29139),null);
}
} else {
var warning = cljs.core.first(s__29137__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29134_$_iter__29136(cljs.core.rest(s__29137__$2)));
}
} else {
return null;
}
break;
}
});})(s__29135__$1,map__29140,map__29140__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info))
,null,null));
});})(s__29135__$1,map__29140,map__29140__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29134(cljs.core.rest(s__29135__$1)));
} else {
var G__29155 = cljs.core.rest(s__29135__$1);
s__29135__$1 = G__29155;
continue;
}
} else {
var G__29156 = cljs.core.rest(s__29135__$1);
s__29135__$1 = G__29156;
continue;
}
} else {
return null;
}
break;
}
});})(map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info))
,null,null));
});})(map__29132,map__29132__$1,sources,compiled,map__29130,map__29130__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29142 = info;
var map__29142__$1 = ((((!((map__29142 == null)))?(((((map__29142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29142):map__29142);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29142__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29142__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29142,map__29142__$1,sources__$1,compiled__$1,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info){
return (function (p__29144){
var map__29145 = p__29144;
var map__29145__$1 = ((((!((map__29145 == null)))?(((((map__29145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29145):map__29145);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29142,map__29142__$1,sources__$1,compiled__$1,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29142,map__29142__$1,sources__$1,compiled__$1,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info){
return (function (p__29147){
var map__29148 = p__29147;
var map__29148__$1 = ((((!((map__29148 == null)))?(((((map__29148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29148):map__29148);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29148__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29142,map__29142__$1,sources__$1,compiled__$1,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29142,map__29142__$1,sources__$1,compiled__$1,files_to_require,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info){
return (function (){
var seq__29150 = cljs.core.seq(files_to_require);
var chunk__29151 = null;
var count__29152 = (0);
var i__29153 = (0);
while(true){
if((i__29153 < count__29152)){
var src = chunk__29151.cljs$core$IIndexed$_nth$arity$2(null,i__29153);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29157 = seq__29150;
var G__29158 = chunk__29151;
var G__29159 = count__29152;
var G__29160 = (i__29153 + (1));
seq__29150 = G__29157;
chunk__29151 = G__29158;
count__29152 = G__29159;
i__29153 = G__29160;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29150);
if(temp__5457__auto__){
var seq__29150__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29150__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29150__$1);
var G__29161 = cljs.core.chunk_rest(seq__29150__$1);
var G__29162 = c__4319__auto__;
var G__29163 = cljs.core.count(c__4319__auto__);
var G__29164 = (0);
seq__29150 = G__29161;
chunk__29151 = G__29162;
count__29152 = G__29163;
i__29153 = G__29164;
continue;
} else {
var src = cljs.core.first(seq__29150__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29165 = cljs.core.next(seq__29150__$1);
var G__29166 = null;
var G__29167 = (0);
var G__29168 = (0);
seq__29150 = G__29165;
chunk__29151 = G__29166;
count__29152 = G__29167;
i__29153 = G__29168;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29142,map__29142__$1,sources__$1,compiled__$1,files_to_require,map__29132,map__29132__$1,sources,compiled,warnings,map__29130,map__29130__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29169){
var map__29170 = p__29169;
var map__29170__$1 = ((((!((map__29170 == null)))?(((((map__29170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29170):map__29170);
var msg = map__29170__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29172 = type;
var G__29172__$1 = (((G__29172 instanceof cljs.core.Keyword))?G__29172.fqn:null);
switch (G__29172__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e29174){var e = e29174;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
