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
dommy.template.PElement = (function (){var obj6166 = {};return obj6166;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (dommy.template._elem[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (dommy.template._elem["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
{var str_6169 = node_str.substring(base_idx);while(true){
var next_idx_6170 = dommy.template.next_css_index.call(null,str_6169,(1));var frag_6171 = (((next_idx_6170 >= (0)))?str_6169.substring((0),next_idx_6170):str_6169);var G__6168_6172 = frag_6171.charAt((0));switch (G__6168_6172) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_6171.substring((1)));

break;
case "#":
node.setAttribute("id",frag_6171.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_6171.charAt((0))))));

}
if((next_idx_6170 >= (0)))
{{
var G__6174 = str_6169.substring(next_idx_6170);
str_6169 = G__6174;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6180 = data;if(G__6180)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__6180.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6180.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6180);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6180);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6181_6185 = cljs.core.seq.call(null,data);var chunk__6182_6186 = null;var count__6183_6187 = (0);var i__6184_6188 = (0);while(true){
if((i__6184_6188 < count__6183_6187))
{var child_6189 = cljs.core._nth.call(null,chunk__6182_6186,i__6184_6188);__GT_document_fragment.call(null,result_frag,child_6189);
{
var G__6190 = seq__6181_6185;
var G__6191 = chunk__6182_6186;
var G__6192 = count__6183_6187;
var G__6193 = (i__6184_6188 + (1));
seq__6181_6185 = G__6190;
chunk__6182_6186 = G__6191;
count__6183_6187 = G__6192;
i__6184_6188 = G__6193;
continue;
}
} else
{var temp__4126__auto___6194 = cljs.core.seq.call(null,seq__6181_6185);if(temp__4126__auto___6194)
{var seq__6181_6195__$1 = temp__4126__auto___6194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6181_6195__$1))
{var c__4314__auto___6196 = cljs.core.chunk_first.call(null,seq__6181_6195__$1);{
var G__6197 = cljs.core.chunk_rest.call(null,seq__6181_6195__$1);
var G__6198 = c__4314__auto___6196;
var G__6199 = cljs.core.count.call(null,c__4314__auto___6196);
var G__6200 = (0);
seq__6181_6185 = G__6197;
chunk__6182_6186 = G__6198;
count__6183_6187 = G__6199;
i__6184_6188 = G__6200;
continue;
}
} else
{var child_6201 = cljs.core.first.call(null,seq__6181_6195__$1);__GT_document_fragment.call(null,result_frag,child_6201);
{
var G__6202 = cljs.core.next.call(null,seq__6181_6195__$1);
var G__6203 = null;
var G__6204 = (0);
var G__6205 = (0);
seq__6181_6185 = G__6202;
chunk__6182_6186 = G__6203;
count__6183_6187 = G__6204;
i__6184_6188 = G__6205;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6207 = data;if(G__6207)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__6207.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6207.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6207);
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
dommy.template.compound_element = (function compound_element(p__6208){var vec__6228 = p__6208;var tag_name = cljs.core.nth.call(null,vec__6228,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__6228,(1),null);var children = cljs.core.nthnext.call(null,vec__6228,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6230 = maybe_attrs;if(G__6230)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__6230.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6230.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6230);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6231_6247 = cljs.core.seq.call(null,attrs);var chunk__6232_6248 = null;var count__6233_6249 = (0);var i__6234_6250 = (0);while(true){
if((i__6234_6250 < count__6233_6249))
{var vec__6235_6251 = cljs.core._nth.call(null,chunk__6232_6248,i__6234_6250);var k_6252 = cljs.core.nth.call(null,vec__6235_6251,(0),null);var v_6253 = cljs.core.nth.call(null,vec__6235_6251,(1),null);var G__6236_6254 = (((k_6252 instanceof cljs.core.Keyword))?k_6252.fqn:null);switch (G__6236_6254) {
case "classes":
var seq__6237_6256 = cljs.core.seq.call(null,v_6253);var chunk__6238_6257 = null;var count__6239_6258 = (0);var i__6240_6259 = (0);while(true){
if((i__6240_6259 < count__6239_6258))
{var c_6260 = cljs.core._nth.call(null,chunk__6238_6257,i__6240_6259);dommy.attrs.add_class_BANG_.call(null,n,c_6260);
{
var G__6261 = seq__6237_6256;
var G__6262 = chunk__6238_6257;
var G__6263 = count__6239_6258;
var G__6264 = (i__6240_6259 + (1));
seq__6237_6256 = G__6261;
chunk__6238_6257 = G__6262;
count__6239_6258 = G__6263;
i__6240_6259 = G__6264;
continue;
}
} else
{var temp__4126__auto___6265 = cljs.core.seq.call(null,seq__6237_6256);if(temp__4126__auto___6265)
{var seq__6237_6266__$1 = temp__4126__auto___6265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6237_6266__$1))
{var c__4314__auto___6267 = cljs.core.chunk_first.call(null,seq__6237_6266__$1);{
var G__6268 = cljs.core.chunk_rest.call(null,seq__6237_6266__$1);
var G__6269 = c__4314__auto___6267;
var G__6270 = cljs.core.count.call(null,c__4314__auto___6267);
var G__6271 = (0);
seq__6237_6256 = G__6268;
chunk__6238_6257 = G__6269;
count__6239_6258 = G__6270;
i__6240_6259 = G__6271;
continue;
}
} else
{var c_6272 = cljs.core.first.call(null,seq__6237_6266__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6272);
{
var G__6273 = cljs.core.next.call(null,seq__6237_6266__$1);
var G__6274 = null;
var G__6275 = (0);
var G__6276 = (0);
seq__6237_6256 = G__6273;
chunk__6238_6257 = G__6274;
count__6239_6258 = G__6275;
i__6240_6259 = G__6276;
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
dommy.attrs.add_class_BANG_.call(null,n,v_6253);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_6252,v_6253);

}
{
var G__6277 = seq__6231_6247;
var G__6278 = chunk__6232_6248;
var G__6279 = count__6233_6249;
var G__6280 = (i__6234_6250 + (1));
seq__6231_6247 = G__6277;
chunk__6232_6248 = G__6278;
count__6233_6249 = G__6279;
i__6234_6250 = G__6280;
continue;
}
} else
{var temp__4126__auto___6281 = cljs.core.seq.call(null,seq__6231_6247);if(temp__4126__auto___6281)
{var seq__6231_6282__$1 = temp__4126__auto___6281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6231_6282__$1))
{var c__4314__auto___6283 = cljs.core.chunk_first.call(null,seq__6231_6282__$1);{
var G__6284 = cljs.core.chunk_rest.call(null,seq__6231_6282__$1);
var G__6285 = c__4314__auto___6283;
var G__6286 = cljs.core.count.call(null,c__4314__auto___6283);
var G__6287 = (0);
seq__6231_6247 = G__6284;
chunk__6232_6248 = G__6285;
count__6233_6249 = G__6286;
i__6234_6250 = G__6287;
continue;
}
} else
{var vec__6241_6288 = cljs.core.first.call(null,seq__6231_6282__$1);var k_6289 = cljs.core.nth.call(null,vec__6241_6288,(0),null);var v_6290 = cljs.core.nth.call(null,vec__6241_6288,(1),null);var G__6242_6291 = (((k_6289 instanceof cljs.core.Keyword))?k_6289.fqn:null);switch (G__6242_6291) {
case "classes":
var seq__6243_6293 = cljs.core.seq.call(null,v_6290);var chunk__6244_6294 = null;var count__6245_6295 = (0);var i__6246_6296 = (0);while(true){
if((i__6246_6296 < count__6245_6295))
{var c_6297 = cljs.core._nth.call(null,chunk__6244_6294,i__6246_6296);dommy.attrs.add_class_BANG_.call(null,n,c_6297);
{
var G__6298 = seq__6243_6293;
var G__6299 = chunk__6244_6294;
var G__6300 = count__6245_6295;
var G__6301 = (i__6246_6296 + (1));
seq__6243_6293 = G__6298;
chunk__6244_6294 = G__6299;
count__6245_6295 = G__6300;
i__6246_6296 = G__6301;
continue;
}
} else
{var temp__4126__auto___6302__$1 = cljs.core.seq.call(null,seq__6243_6293);if(temp__4126__auto___6302__$1)
{var seq__6243_6303__$1 = temp__4126__auto___6302__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6243_6303__$1))
{var c__4314__auto___6304 = cljs.core.chunk_first.call(null,seq__6243_6303__$1);{
var G__6305 = cljs.core.chunk_rest.call(null,seq__6243_6303__$1);
var G__6306 = c__4314__auto___6304;
var G__6307 = cljs.core.count.call(null,c__4314__auto___6304);
var G__6308 = (0);
seq__6243_6293 = G__6305;
chunk__6244_6294 = G__6306;
count__6245_6295 = G__6307;
i__6246_6296 = G__6308;
continue;
}
} else
{var c_6309 = cljs.core.first.call(null,seq__6243_6303__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6309);
{
var G__6310 = cljs.core.next.call(null,seq__6243_6303__$1);
var G__6311 = null;
var G__6312 = (0);
var G__6313 = (0);
seq__6243_6293 = G__6310;
chunk__6244_6294 = G__6311;
count__6245_6295 = G__6312;
i__6246_6296 = G__6313;
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
dommy.attrs.add_class_BANG_.call(null,n,v_6290);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_6289,v_6290);

}
{
var G__6314 = cljs.core.next.call(null,seq__6231_6282__$1);
var G__6315 = null;
var G__6316 = (0);
var G__6317 = (0);
seq__6231_6247 = G__6314;
chunk__6232_6248 = G__6315;
count__6233_6249 = G__6316;
i__6234_6250 = G__6317;
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
dommy.template.node = (function node(data){if((function (){var G__6319 = data;if(G__6319)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__6319.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6319.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6319);
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

//# sourceMappingURL=template.js.map