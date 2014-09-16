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
dommy.template.PElement = (function (){var obj12109 = {};return obj12109;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__5753__auto__ = this$;if(and__5753__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__5753__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6718__auto__ = (((this$ == null))?null:this$);return (function (){var or__5776__auto__ = (dommy.template._elem[goog.typeOf(x__6718__auto__)]);if(or__5776__auto__)
{return or__5776__auto__;
} else
{var or__5776__auto____$1 = (dommy.template._elem["_"]);if(or__5776__auto____$1)
{return or__5776__auto____$1;
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
{var str_12112 = node_str.substring(base_idx);while(true){
var next_idx_12113 = dommy.template.next_css_index.call(null,str_12112,(1));var frag_12114 = (((next_idx_12113 >= (0)))?str_12112.substring((0),next_idx_12113):str_12112);var G__12111_12115 = frag_12114.charAt((0));switch (G__12111_12115) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_12114.substring((1)));

break;
case "#":
node.setAttribute("id",frag_12114.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12114.charAt((0))))));

}
if((next_idx_12113 >= (0)))
{{
var G__12117 = str_12112.substring(next_idx_12113);
str_12112 = G__12117;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12123 = data;if(G__12123)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5776__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
} else
{return G__12123.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12123.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12123);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12123);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12124_12128 = cljs.core.seq.call(null,data);var chunk__12125_12129 = null;var count__12126_12130 = (0);var i__12127_12131 = (0);while(true){
if((i__12127_12131 < count__12126_12130))
{var child_12132 = cljs.core._nth.call(null,chunk__12125_12129,i__12127_12131);__GT_document_fragment.call(null,result_frag,child_12132);
{
var G__12133 = seq__12124_12128;
var G__12134 = chunk__12125_12129;
var G__12135 = count__12126_12130;
var G__12136 = (i__12127_12131 + (1));
seq__12124_12128 = G__12133;
chunk__12125_12129 = G__12134;
count__12126_12130 = G__12135;
i__12127_12131 = G__12136;
continue;
}
} else
{var temp__4126__auto___12137 = cljs.core.seq.call(null,seq__12124_12128);if(temp__4126__auto___12137)
{var seq__12124_12138__$1 = temp__4126__auto___12137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12124_12138__$1))
{var c__6919__auto___12139 = cljs.core.chunk_first.call(null,seq__12124_12138__$1);{
var G__12140 = cljs.core.chunk_rest.call(null,seq__12124_12138__$1);
var G__12141 = c__6919__auto___12139;
var G__12142 = cljs.core.count.call(null,c__6919__auto___12139);
var G__12143 = (0);
seq__12124_12128 = G__12140;
chunk__12125_12129 = G__12141;
count__12126_12130 = G__12142;
i__12127_12131 = G__12143;
continue;
}
} else
{var child_12144 = cljs.core.first.call(null,seq__12124_12138__$1);__GT_document_fragment.call(null,result_frag,child_12144);
{
var G__12145 = cljs.core.next.call(null,seq__12124_12138__$1);
var G__12146 = null;
var G__12147 = (0);
var G__12148 = (0);
seq__12124_12128 = G__12145;
chunk__12125_12129 = G__12146;
count__12126_12130 = G__12147;
i__12127_12131 = G__12148;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12150 = data;if(G__12150)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5776__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
} else
{return G__12150.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12150);
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
dommy.template.compound_element = (function compound_element(p__12151){var vec__12171 = p__12151;var tag_name = cljs.core.nth.call(null,vec__12171,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__12171,(1),null);var children = cljs.core.nthnext.call(null,vec__12171,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12173 = maybe_attrs;if(G__12173)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5776__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
} else
{return G__12173.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12173.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12173);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12173);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12174_12190 = cljs.core.seq.call(null,attrs);var chunk__12175_12191 = null;var count__12176_12192 = (0);var i__12177_12193 = (0);while(true){
if((i__12177_12193 < count__12176_12192))
{var vec__12178_12194 = cljs.core._nth.call(null,chunk__12175_12191,i__12177_12193);var k_12195 = cljs.core.nth.call(null,vec__12178_12194,(0),null);var v_12196 = cljs.core.nth.call(null,vec__12178_12194,(1),null);var G__12179_12197 = (((k_12195 instanceof cljs.core.Keyword))?k_12195.fqn:null);switch (G__12179_12197) {
case "classes":
var seq__12180_12199 = cljs.core.seq.call(null,v_12196);var chunk__12181_12200 = null;var count__12182_12201 = (0);var i__12183_12202 = (0);while(true){
if((i__12183_12202 < count__12182_12201))
{var c_12203 = cljs.core._nth.call(null,chunk__12181_12200,i__12183_12202);dommy.attrs.add_class_BANG_.call(null,n,c_12203);
{
var G__12204 = seq__12180_12199;
var G__12205 = chunk__12181_12200;
var G__12206 = count__12182_12201;
var G__12207 = (i__12183_12202 + (1));
seq__12180_12199 = G__12204;
chunk__12181_12200 = G__12205;
count__12182_12201 = G__12206;
i__12183_12202 = G__12207;
continue;
}
} else
{var temp__4126__auto___12208 = cljs.core.seq.call(null,seq__12180_12199);if(temp__4126__auto___12208)
{var seq__12180_12209__$1 = temp__4126__auto___12208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12180_12209__$1))
{var c__6919__auto___12210 = cljs.core.chunk_first.call(null,seq__12180_12209__$1);{
var G__12211 = cljs.core.chunk_rest.call(null,seq__12180_12209__$1);
var G__12212 = c__6919__auto___12210;
var G__12213 = cljs.core.count.call(null,c__6919__auto___12210);
var G__12214 = (0);
seq__12180_12199 = G__12211;
chunk__12181_12200 = G__12212;
count__12182_12201 = G__12213;
i__12183_12202 = G__12214;
continue;
}
} else
{var c_12215 = cljs.core.first.call(null,seq__12180_12209__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12215);
{
var G__12216 = cljs.core.next.call(null,seq__12180_12209__$1);
var G__12217 = null;
var G__12218 = (0);
var G__12219 = (0);
seq__12180_12199 = G__12216;
chunk__12181_12200 = G__12217;
count__12182_12201 = G__12218;
i__12183_12202 = G__12219;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12196);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12195,v_12196);

}
{
var G__12220 = seq__12174_12190;
var G__12221 = chunk__12175_12191;
var G__12222 = count__12176_12192;
var G__12223 = (i__12177_12193 + (1));
seq__12174_12190 = G__12220;
chunk__12175_12191 = G__12221;
count__12176_12192 = G__12222;
i__12177_12193 = G__12223;
continue;
}
} else
{var temp__4126__auto___12224 = cljs.core.seq.call(null,seq__12174_12190);if(temp__4126__auto___12224)
{var seq__12174_12225__$1 = temp__4126__auto___12224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12174_12225__$1))
{var c__6919__auto___12226 = cljs.core.chunk_first.call(null,seq__12174_12225__$1);{
var G__12227 = cljs.core.chunk_rest.call(null,seq__12174_12225__$1);
var G__12228 = c__6919__auto___12226;
var G__12229 = cljs.core.count.call(null,c__6919__auto___12226);
var G__12230 = (0);
seq__12174_12190 = G__12227;
chunk__12175_12191 = G__12228;
count__12176_12192 = G__12229;
i__12177_12193 = G__12230;
continue;
}
} else
{var vec__12184_12231 = cljs.core.first.call(null,seq__12174_12225__$1);var k_12232 = cljs.core.nth.call(null,vec__12184_12231,(0),null);var v_12233 = cljs.core.nth.call(null,vec__12184_12231,(1),null);var G__12185_12234 = (((k_12232 instanceof cljs.core.Keyword))?k_12232.fqn:null);switch (G__12185_12234) {
case "classes":
var seq__12186_12236 = cljs.core.seq.call(null,v_12233);var chunk__12187_12237 = null;var count__12188_12238 = (0);var i__12189_12239 = (0);while(true){
if((i__12189_12239 < count__12188_12238))
{var c_12240 = cljs.core._nth.call(null,chunk__12187_12237,i__12189_12239);dommy.attrs.add_class_BANG_.call(null,n,c_12240);
{
var G__12241 = seq__12186_12236;
var G__12242 = chunk__12187_12237;
var G__12243 = count__12188_12238;
var G__12244 = (i__12189_12239 + (1));
seq__12186_12236 = G__12241;
chunk__12187_12237 = G__12242;
count__12188_12238 = G__12243;
i__12189_12239 = G__12244;
continue;
}
} else
{var temp__4126__auto___12245__$1 = cljs.core.seq.call(null,seq__12186_12236);if(temp__4126__auto___12245__$1)
{var seq__12186_12246__$1 = temp__4126__auto___12245__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12186_12246__$1))
{var c__6919__auto___12247 = cljs.core.chunk_first.call(null,seq__12186_12246__$1);{
var G__12248 = cljs.core.chunk_rest.call(null,seq__12186_12246__$1);
var G__12249 = c__6919__auto___12247;
var G__12250 = cljs.core.count.call(null,c__6919__auto___12247);
var G__12251 = (0);
seq__12186_12236 = G__12248;
chunk__12187_12237 = G__12249;
count__12188_12238 = G__12250;
i__12189_12239 = G__12251;
continue;
}
} else
{var c_12252 = cljs.core.first.call(null,seq__12186_12246__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12252);
{
var G__12253 = cljs.core.next.call(null,seq__12186_12246__$1);
var G__12254 = null;
var G__12255 = (0);
var G__12256 = (0);
seq__12186_12236 = G__12253;
chunk__12187_12237 = G__12254;
count__12188_12238 = G__12255;
i__12189_12239 = G__12256;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12233);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12232,v_12233);

}
{
var G__12257 = cljs.core.next.call(null,seq__12174_12225__$1);
var G__12258 = null;
var G__12259 = (0);
var G__12260 = (0);
seq__12174_12190 = G__12257;
chunk__12175_12191 = G__12258;
count__12176_12192 = G__12259;
i__12177_12193 = G__12260;
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
dommy.template.node = (function node(data){if((function (){var G__12262 = data;if(G__12262)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5776__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
} else
{return G__12262.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12262.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12262);
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
