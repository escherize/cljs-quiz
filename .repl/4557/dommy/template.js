// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj12140 = {};return obj12140;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__5777__auto__ = this$;if(and__5777__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__5777__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6744__auto__ = (((this$ == null))?null:this$);return (function (){var or__5795__auto__ = (dommy.template._elem[goog.typeOf(x__6744__auto__)]);if(or__5795__auto__)
{return or__5795__auto__;
} else
{var or__5795__auto____$1 = (dommy.template._elem["_"]);if(or__5795__auto____$1)
{return or__5795__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_12143 = node_str.substring(base_idx);while(true){
var next_idx_12144 = dommy.template.next_css_index.call(null,str_12143,(1));var frag_12145 = (((next_idx_12144 >= (0)))?str_12143.substring((0),next_idx_12144):str_12143);var G__12142_12146 = frag_12145.charAt((0));switch (G__12142_12146) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_12145.substring((1)));

break;
case "#":
node.setAttribute("id",frag_12145.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12145.charAt((0))))));

}
if((next_idx_12144 >= (0)))
{{
var G__12148 = str_12143.substring(next_idx_12144);
str_12143 = G__12148;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12154 = data;if(G__12154)
{var bit__6775__auto__ = null;if(cljs.core.truth_((function (){var or__5795__auto__ = bit__6775__auto__;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return G__12154.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12154.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12154);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12154);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12155_12159 = cljs.core.seq.call(null,data);var chunk__12156_12160 = null;var count__12157_12161 = (0);var i__12158_12162 = (0);while(true){
if((i__12158_12162 < count__12157_12161))
{var child_12163 = cljs.core._nth.call(null,chunk__12156_12160,i__12158_12162);__GT_document_fragment.call(null,result_frag,child_12163);
{
var G__12164 = seq__12155_12159;
var G__12165 = chunk__12156_12160;
var G__12166 = count__12157_12161;
var G__12167 = (i__12158_12162 + (1));
seq__12155_12159 = G__12164;
chunk__12156_12160 = G__12165;
count__12157_12161 = G__12166;
i__12158_12162 = G__12167;
continue;
}
} else
{var temp__4126__auto___12168 = cljs.core.seq.call(null,seq__12155_12159);if(temp__4126__auto___12168)
{var seq__12155_12169__$1 = temp__4126__auto___12168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12155_12169__$1))
{var c__6939__auto___12170 = cljs.core.chunk_first.call(null,seq__12155_12169__$1);{
var G__12171 = cljs.core.chunk_rest.call(null,seq__12155_12169__$1);
var G__12172 = c__6939__auto___12170;
var G__12173 = cljs.core.count.call(null,c__6939__auto___12170);
var G__12174 = (0);
seq__12155_12159 = G__12171;
chunk__12156_12160 = G__12172;
count__12157_12161 = G__12173;
i__12158_12162 = G__12174;
continue;
}
} else
{var child_12175 = cljs.core.first.call(null,seq__12155_12169__$1);__GT_document_fragment.call(null,result_frag,child_12175);
{
var G__12176 = cljs.core.next.call(null,seq__12155_12169__$1);
var G__12177 = null;
var G__12178 = (0);
var G__12179 = (0);
seq__12155_12159 = G__12176;
chunk__12156_12160 = G__12177;
count__12157_12161 = G__12178;
i__12158_12162 = G__12179;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);

}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12181 = data;if(G__12181)
{var bit__6775__auto__ = null;if(cljs.core.truth_((function (){var or__5795__auto__ = bit__6775__auto__;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return G__12181.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12181.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12181);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12181);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__12182){var vec__12202 = p__12182;var tag_name = cljs.core.nth.call(null,vec__12202,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__12202,(1),null);var children = cljs.core.nthnext.call(null,vec__12202,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12204 = maybe_attrs;if(G__12204)
{var bit__6775__auto__ = null;if(cljs.core.truth_((function (){var or__5795__auto__ = bit__6775__auto__;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return G__12204.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12204.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12204);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12204);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12205_12221 = cljs.core.seq.call(null,attrs);var chunk__12206_12222 = null;var count__12207_12223 = (0);var i__12208_12224 = (0);while(true){
if((i__12208_12224 < count__12207_12223))
{var vec__12209_12225 = cljs.core._nth.call(null,chunk__12206_12222,i__12208_12224);var k_12226 = cljs.core.nth.call(null,vec__12209_12225,(0),null);var v_12227 = cljs.core.nth.call(null,vec__12209_12225,(1),null);var G__12210_12228 = (((k_12226 instanceof cljs.core.Keyword))?k_12226.fqn:null);switch (G__12210_12228) {
case "classes":
var seq__12211_12230 = cljs.core.seq.call(null,v_12227);var chunk__12212_12231 = null;var count__12213_12232 = (0);var i__12214_12233 = (0);while(true){
if((i__12214_12233 < count__12213_12232))
{var c_12234 = cljs.core._nth.call(null,chunk__12212_12231,i__12214_12233);dommy.attrs.add_class_BANG_.call(null,n,c_12234);
{
var G__12235 = seq__12211_12230;
var G__12236 = chunk__12212_12231;
var G__12237 = count__12213_12232;
var G__12238 = (i__12214_12233 + (1));
seq__12211_12230 = G__12235;
chunk__12212_12231 = G__12236;
count__12213_12232 = G__12237;
i__12214_12233 = G__12238;
continue;
}
} else
{var temp__4126__auto___12239 = cljs.core.seq.call(null,seq__12211_12230);if(temp__4126__auto___12239)
{var seq__12211_12240__$1 = temp__4126__auto___12239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12211_12240__$1))
{var c__6939__auto___12241 = cljs.core.chunk_first.call(null,seq__12211_12240__$1);{
var G__12242 = cljs.core.chunk_rest.call(null,seq__12211_12240__$1);
var G__12243 = c__6939__auto___12241;
var G__12244 = cljs.core.count.call(null,c__6939__auto___12241);
var G__12245 = (0);
seq__12211_12230 = G__12242;
chunk__12212_12231 = G__12243;
count__12213_12232 = G__12244;
i__12214_12233 = G__12245;
continue;
}
} else
{var c_12246 = cljs.core.first.call(null,seq__12211_12240__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12246);
{
var G__12247 = cljs.core.next.call(null,seq__12211_12240__$1);
var G__12248 = null;
var G__12249 = (0);
var G__12250 = (0);
seq__12211_12230 = G__12247;
chunk__12212_12231 = G__12248;
count__12213_12232 = G__12249;
i__12214_12233 = G__12250;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_12227);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12226,v_12227);

}
{
var G__12251 = seq__12205_12221;
var G__12252 = chunk__12206_12222;
var G__12253 = count__12207_12223;
var G__12254 = (i__12208_12224 + (1));
seq__12205_12221 = G__12251;
chunk__12206_12222 = G__12252;
count__12207_12223 = G__12253;
i__12208_12224 = G__12254;
continue;
}
} else
{var temp__4126__auto___12255 = cljs.core.seq.call(null,seq__12205_12221);if(temp__4126__auto___12255)
{var seq__12205_12256__$1 = temp__4126__auto___12255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12205_12256__$1))
{var c__6939__auto___12257 = cljs.core.chunk_first.call(null,seq__12205_12256__$1);{
var G__12258 = cljs.core.chunk_rest.call(null,seq__12205_12256__$1);
var G__12259 = c__6939__auto___12257;
var G__12260 = cljs.core.count.call(null,c__6939__auto___12257);
var G__12261 = (0);
seq__12205_12221 = G__12258;
chunk__12206_12222 = G__12259;
count__12207_12223 = G__12260;
i__12208_12224 = G__12261;
continue;
}
} else
{var vec__12215_12262 = cljs.core.first.call(null,seq__12205_12256__$1);var k_12263 = cljs.core.nth.call(null,vec__12215_12262,(0),null);var v_12264 = cljs.core.nth.call(null,vec__12215_12262,(1),null);var G__12216_12265 = (((k_12263 instanceof cljs.core.Keyword))?k_12263.fqn:null);switch (G__12216_12265) {
case "classes":
var seq__12217_12267 = cljs.core.seq.call(null,v_12264);var chunk__12218_12268 = null;var count__12219_12269 = (0);var i__12220_12270 = (0);while(true){
if((i__12220_12270 < count__12219_12269))
{var c_12271 = cljs.core._nth.call(null,chunk__12218_12268,i__12220_12270);dommy.attrs.add_class_BANG_.call(null,n,c_12271);
{
var G__12272 = seq__12217_12267;
var G__12273 = chunk__12218_12268;
var G__12274 = count__12219_12269;
var G__12275 = (i__12220_12270 + (1));
seq__12217_12267 = G__12272;
chunk__12218_12268 = G__12273;
count__12219_12269 = G__12274;
i__12220_12270 = G__12275;
continue;
}
} else
{var temp__4126__auto___12276__$1 = cljs.core.seq.call(null,seq__12217_12267);if(temp__4126__auto___12276__$1)
{var seq__12217_12277__$1 = temp__4126__auto___12276__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12217_12277__$1))
{var c__6939__auto___12278 = cljs.core.chunk_first.call(null,seq__12217_12277__$1);{
var G__12279 = cljs.core.chunk_rest.call(null,seq__12217_12277__$1);
var G__12280 = c__6939__auto___12278;
var G__12281 = cljs.core.count.call(null,c__6939__auto___12278);
var G__12282 = (0);
seq__12217_12267 = G__12279;
chunk__12218_12268 = G__12280;
count__12219_12269 = G__12281;
i__12220_12270 = G__12282;
continue;
}
} else
{var c_12283 = cljs.core.first.call(null,seq__12217_12277__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12283);
{
var G__12284 = cljs.core.next.call(null,seq__12217_12277__$1);
var G__12285 = null;
var G__12286 = (0);
var G__12287 = (0);
seq__12217_12267 = G__12284;
chunk__12218_12268 = G__12285;
count__12219_12269 = G__12286;
i__12220_12270 = G__12287;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_12264);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12263,v_12264);

}
{
var G__12288 = cljs.core.next.call(null,seq__12205_12256__$1);
var G__12289 = null;
var G__12290 = (0);
var G__12291 = (0);
seq__12205_12221 = G__12288;
chunk__12206_12222 = G__12289;
count__12207_12223 = G__12290;
i__12208_12224 = G__12291;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__12293 = data;if(G__12293)
{var bit__6775__auto__ = null;if(cljs.core.truth_((function (){var or__5795__auto__ = bit__6775__auto__;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return G__12293.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12293.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12293);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12293);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
