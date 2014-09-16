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
dommy.template.PElement = (function (){var obj12100 = {};return obj12100;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__5741__auto__ = this$;if(and__5741__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__5741__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6711__auto__ = (((this$ == null))?null:this$);return (function (){var or__5757__auto__ = (dommy.template._elem[goog.typeOf(x__6711__auto__)]);if(or__5757__auto__)
{return or__5757__auto__;
} else
{var or__5757__auto____$1 = (dommy.template._elem["_"]);if(or__5757__auto____$1)
{return or__5757__auto____$1;
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
{var str_12103 = node_str.substring(base_idx);while(true){
var next_idx_12104 = dommy.template.next_css_index.call(null,str_12103,(1));var frag_12105 = (((next_idx_12104 >= (0)))?str_12103.substring((0),next_idx_12104):str_12103);var G__12102_12106 = frag_12105.charAt((0));switch (G__12102_12106) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_12105.substring((1)));

break;
case "#":
node.setAttribute("id",frag_12105.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12105.charAt((0))))));

}
if((next_idx_12104 >= (0)))
{{
var G__12108 = str_12103.substring(next_idx_12104);
str_12103 = G__12108;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12114 = data;if(G__12114)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__12114.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12114.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12114);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12115_12119 = cljs.core.seq.call(null,data);var chunk__12116_12120 = null;var count__12117_12121 = (0);var i__12118_12122 = (0);while(true){
if((i__12118_12122 < count__12117_12121))
{var child_12123 = cljs.core._nth.call(null,chunk__12116_12120,i__12118_12122);__GT_document_fragment.call(null,result_frag,child_12123);
{
var G__12124 = seq__12115_12119;
var G__12125 = chunk__12116_12120;
var G__12126 = count__12117_12121;
var G__12127 = (i__12118_12122 + (1));
seq__12115_12119 = G__12124;
chunk__12116_12120 = G__12125;
count__12117_12121 = G__12126;
i__12118_12122 = G__12127;
continue;
}
} else
{var temp__4126__auto___12128 = cljs.core.seq.call(null,seq__12115_12119);if(temp__4126__auto___12128)
{var seq__12115_12129__$1 = temp__4126__auto___12128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12115_12129__$1))
{var c__6904__auto___12130 = cljs.core.chunk_first.call(null,seq__12115_12129__$1);{
var G__12131 = cljs.core.chunk_rest.call(null,seq__12115_12129__$1);
var G__12132 = c__6904__auto___12130;
var G__12133 = cljs.core.count.call(null,c__6904__auto___12130);
var G__12134 = (0);
seq__12115_12119 = G__12131;
chunk__12116_12120 = G__12132;
count__12117_12121 = G__12133;
i__12118_12122 = G__12134;
continue;
}
} else
{var child_12135 = cljs.core.first.call(null,seq__12115_12129__$1);__GT_document_fragment.call(null,result_frag,child_12135);
{
var G__12136 = cljs.core.next.call(null,seq__12115_12129__$1);
var G__12137 = null;
var G__12138 = (0);
var G__12139 = (0);
seq__12115_12119 = G__12136;
chunk__12116_12120 = G__12137;
count__12117_12121 = G__12138;
i__12118_12122 = G__12139;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12141 = data;if(G__12141)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__12141.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12141.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12141);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12141);
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
dommy.template.compound_element = (function compound_element(p__12142){var vec__12162 = p__12142;var tag_name = cljs.core.nth.call(null,vec__12162,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__12162,(1),null);var children = cljs.core.nthnext.call(null,vec__12162,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12164 = maybe_attrs;if(G__12164)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__12164.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12164.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12164);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12164);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12165_12181 = cljs.core.seq.call(null,attrs);var chunk__12166_12182 = null;var count__12167_12183 = (0);var i__12168_12184 = (0);while(true){
if((i__12168_12184 < count__12167_12183))
{var vec__12169_12185 = cljs.core._nth.call(null,chunk__12166_12182,i__12168_12184);var k_12186 = cljs.core.nth.call(null,vec__12169_12185,(0),null);var v_12187 = cljs.core.nth.call(null,vec__12169_12185,(1),null);var G__12170_12188 = (((k_12186 instanceof cljs.core.Keyword))?k_12186.fqn:null);switch (G__12170_12188) {
case "classes":
var seq__12171_12190 = cljs.core.seq.call(null,v_12187);var chunk__12172_12191 = null;var count__12173_12192 = (0);var i__12174_12193 = (0);while(true){
if((i__12174_12193 < count__12173_12192))
{var c_12194 = cljs.core._nth.call(null,chunk__12172_12191,i__12174_12193);dommy.attrs.add_class_BANG_.call(null,n,c_12194);
{
var G__12195 = seq__12171_12190;
var G__12196 = chunk__12172_12191;
var G__12197 = count__12173_12192;
var G__12198 = (i__12174_12193 + (1));
seq__12171_12190 = G__12195;
chunk__12172_12191 = G__12196;
count__12173_12192 = G__12197;
i__12174_12193 = G__12198;
continue;
}
} else
{var temp__4126__auto___12199 = cljs.core.seq.call(null,seq__12171_12190);if(temp__4126__auto___12199)
{var seq__12171_12200__$1 = temp__4126__auto___12199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12171_12200__$1))
{var c__6904__auto___12201 = cljs.core.chunk_first.call(null,seq__12171_12200__$1);{
var G__12202 = cljs.core.chunk_rest.call(null,seq__12171_12200__$1);
var G__12203 = c__6904__auto___12201;
var G__12204 = cljs.core.count.call(null,c__6904__auto___12201);
var G__12205 = (0);
seq__12171_12190 = G__12202;
chunk__12172_12191 = G__12203;
count__12173_12192 = G__12204;
i__12174_12193 = G__12205;
continue;
}
} else
{var c_12206 = cljs.core.first.call(null,seq__12171_12200__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12206);
{
var G__12207 = cljs.core.next.call(null,seq__12171_12200__$1);
var G__12208 = null;
var G__12209 = (0);
var G__12210 = (0);
seq__12171_12190 = G__12207;
chunk__12172_12191 = G__12208;
count__12173_12192 = G__12209;
i__12174_12193 = G__12210;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12187);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12186,v_12187);

}
{
var G__12211 = seq__12165_12181;
var G__12212 = chunk__12166_12182;
var G__12213 = count__12167_12183;
var G__12214 = (i__12168_12184 + (1));
seq__12165_12181 = G__12211;
chunk__12166_12182 = G__12212;
count__12167_12183 = G__12213;
i__12168_12184 = G__12214;
continue;
}
} else
{var temp__4126__auto___12215 = cljs.core.seq.call(null,seq__12165_12181);if(temp__4126__auto___12215)
{var seq__12165_12216__$1 = temp__4126__auto___12215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12165_12216__$1))
{var c__6904__auto___12217 = cljs.core.chunk_first.call(null,seq__12165_12216__$1);{
var G__12218 = cljs.core.chunk_rest.call(null,seq__12165_12216__$1);
var G__12219 = c__6904__auto___12217;
var G__12220 = cljs.core.count.call(null,c__6904__auto___12217);
var G__12221 = (0);
seq__12165_12181 = G__12218;
chunk__12166_12182 = G__12219;
count__12167_12183 = G__12220;
i__12168_12184 = G__12221;
continue;
}
} else
{var vec__12175_12222 = cljs.core.first.call(null,seq__12165_12216__$1);var k_12223 = cljs.core.nth.call(null,vec__12175_12222,(0),null);var v_12224 = cljs.core.nth.call(null,vec__12175_12222,(1),null);var G__12176_12225 = (((k_12223 instanceof cljs.core.Keyword))?k_12223.fqn:null);switch (G__12176_12225) {
case "classes":
var seq__12177_12227 = cljs.core.seq.call(null,v_12224);var chunk__12178_12228 = null;var count__12179_12229 = (0);var i__12180_12230 = (0);while(true){
if((i__12180_12230 < count__12179_12229))
{var c_12231 = cljs.core._nth.call(null,chunk__12178_12228,i__12180_12230);dommy.attrs.add_class_BANG_.call(null,n,c_12231);
{
var G__12232 = seq__12177_12227;
var G__12233 = chunk__12178_12228;
var G__12234 = count__12179_12229;
var G__12235 = (i__12180_12230 + (1));
seq__12177_12227 = G__12232;
chunk__12178_12228 = G__12233;
count__12179_12229 = G__12234;
i__12180_12230 = G__12235;
continue;
}
} else
{var temp__4126__auto___12236__$1 = cljs.core.seq.call(null,seq__12177_12227);if(temp__4126__auto___12236__$1)
{var seq__12177_12237__$1 = temp__4126__auto___12236__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12177_12237__$1))
{var c__6904__auto___12238 = cljs.core.chunk_first.call(null,seq__12177_12237__$1);{
var G__12239 = cljs.core.chunk_rest.call(null,seq__12177_12237__$1);
var G__12240 = c__6904__auto___12238;
var G__12241 = cljs.core.count.call(null,c__6904__auto___12238);
var G__12242 = (0);
seq__12177_12227 = G__12239;
chunk__12178_12228 = G__12240;
count__12179_12229 = G__12241;
i__12180_12230 = G__12242;
continue;
}
} else
{var c_12243 = cljs.core.first.call(null,seq__12177_12237__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12243);
{
var G__12244 = cljs.core.next.call(null,seq__12177_12237__$1);
var G__12245 = null;
var G__12246 = (0);
var G__12247 = (0);
seq__12177_12227 = G__12244;
chunk__12178_12228 = G__12245;
count__12179_12229 = G__12246;
i__12180_12230 = G__12247;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12224);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12223,v_12224);

}
{
var G__12248 = cljs.core.next.call(null,seq__12165_12216__$1);
var G__12249 = null;
var G__12250 = (0);
var G__12251 = (0);
seq__12165_12181 = G__12248;
chunk__12166_12182 = G__12249;
count__12167_12183 = G__12250;
i__12168_12184 = G__12251;
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
dommy.template.node = (function node(data){if((function (){var G__12253 = data;if(G__12253)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__12253.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12253.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12253);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12253);
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
