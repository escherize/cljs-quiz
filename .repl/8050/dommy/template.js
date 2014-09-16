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
dommy.template.PElement = (function (){var obj12097 = {};return obj12097;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__5785__auto__ = this$;if(and__5785__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__5785__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6713__auto__ = (((this$ == null))?null:this$);return (function (){var or__5801__auto__ = (dommy.template._elem[goog.typeOf(x__6713__auto__)]);if(or__5801__auto__)
{return or__5801__auto__;
} else
{var or__5801__auto____$1 = (dommy.template._elem["_"]);if(or__5801__auto____$1)
{return or__5801__auto____$1;
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
{var str_12100 = node_str.substring(base_idx);while(true){
var next_idx_12101 = dommy.template.next_css_index.call(null,str_12100,(1));var frag_12102 = (((next_idx_12101 >= (0)))?str_12100.substring((0),next_idx_12101):str_12100);var G__12099_12103 = frag_12102.charAt((0));switch (G__12099_12103) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_12102.substring((1)));

break;
case "#":
node.setAttribute("id",frag_12102.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12102.charAt((0))))));

}
if((next_idx_12101 >= (0)))
{{
var G__12105 = str_12100.substring(next_idx_12101);
str_12100 = G__12105;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12111 = data;if(G__12111)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5801__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
} else
{return G__12111.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12111.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12111);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12111);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12112_12116 = cljs.core.seq.call(null,data);var chunk__12113_12117 = null;var count__12114_12118 = (0);var i__12115_12119 = (0);while(true){
if((i__12115_12119 < count__12114_12118))
{var child_12120 = cljs.core._nth.call(null,chunk__12113_12117,i__12115_12119);__GT_document_fragment.call(null,result_frag,child_12120);
{
var G__12121 = seq__12112_12116;
var G__12122 = chunk__12113_12117;
var G__12123 = count__12114_12118;
var G__12124 = (i__12115_12119 + (1));
seq__12112_12116 = G__12121;
chunk__12113_12117 = G__12122;
count__12114_12118 = G__12123;
i__12115_12119 = G__12124;
continue;
}
} else
{var temp__4126__auto___12125 = cljs.core.seq.call(null,seq__12112_12116);if(temp__4126__auto___12125)
{var seq__12112_12126__$1 = temp__4126__auto___12125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12112_12126__$1))
{var c__6904__auto___12127 = cljs.core.chunk_first.call(null,seq__12112_12126__$1);{
var G__12128 = cljs.core.chunk_rest.call(null,seq__12112_12126__$1);
var G__12129 = c__6904__auto___12127;
var G__12130 = cljs.core.count.call(null,c__6904__auto___12127);
var G__12131 = (0);
seq__12112_12116 = G__12128;
chunk__12113_12117 = G__12129;
count__12114_12118 = G__12130;
i__12115_12119 = G__12131;
continue;
}
} else
{var child_12132 = cljs.core.first.call(null,seq__12112_12126__$1);__GT_document_fragment.call(null,result_frag,child_12132);
{
var G__12133 = cljs.core.next.call(null,seq__12112_12126__$1);
var G__12134 = null;
var G__12135 = (0);
var G__12136 = (0);
seq__12112_12116 = G__12133;
chunk__12113_12117 = G__12134;
count__12114_12118 = G__12135;
i__12115_12119 = G__12136;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12138 = data;if(G__12138)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5801__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
} else
{return G__12138.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12138);
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
dommy.template.compound_element = (function compound_element(p__12139){var vec__12159 = p__12139;var tag_name = cljs.core.nth.call(null,vec__12159,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__12159,(1),null);var children = cljs.core.nthnext.call(null,vec__12159,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12161 = maybe_attrs;if(G__12161)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5801__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
} else
{return G__12161.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12161.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12161);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12161);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12162_12178 = cljs.core.seq.call(null,attrs);var chunk__12163_12179 = null;var count__12164_12180 = (0);var i__12165_12181 = (0);while(true){
if((i__12165_12181 < count__12164_12180))
{var vec__12166_12182 = cljs.core._nth.call(null,chunk__12163_12179,i__12165_12181);var k_12183 = cljs.core.nth.call(null,vec__12166_12182,(0),null);var v_12184 = cljs.core.nth.call(null,vec__12166_12182,(1),null);var G__12167_12185 = (((k_12183 instanceof cljs.core.Keyword))?k_12183.fqn:null);switch (G__12167_12185) {
case "classes":
var seq__12168_12187 = cljs.core.seq.call(null,v_12184);var chunk__12169_12188 = null;var count__12170_12189 = (0);var i__12171_12190 = (0);while(true){
if((i__12171_12190 < count__12170_12189))
{var c_12191 = cljs.core._nth.call(null,chunk__12169_12188,i__12171_12190);dommy.attrs.add_class_BANG_.call(null,n,c_12191);
{
var G__12192 = seq__12168_12187;
var G__12193 = chunk__12169_12188;
var G__12194 = count__12170_12189;
var G__12195 = (i__12171_12190 + (1));
seq__12168_12187 = G__12192;
chunk__12169_12188 = G__12193;
count__12170_12189 = G__12194;
i__12171_12190 = G__12195;
continue;
}
} else
{var temp__4126__auto___12196 = cljs.core.seq.call(null,seq__12168_12187);if(temp__4126__auto___12196)
{var seq__12168_12197__$1 = temp__4126__auto___12196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12168_12197__$1))
{var c__6904__auto___12198 = cljs.core.chunk_first.call(null,seq__12168_12197__$1);{
var G__12199 = cljs.core.chunk_rest.call(null,seq__12168_12197__$1);
var G__12200 = c__6904__auto___12198;
var G__12201 = cljs.core.count.call(null,c__6904__auto___12198);
var G__12202 = (0);
seq__12168_12187 = G__12199;
chunk__12169_12188 = G__12200;
count__12170_12189 = G__12201;
i__12171_12190 = G__12202;
continue;
}
} else
{var c_12203 = cljs.core.first.call(null,seq__12168_12197__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12203);
{
var G__12204 = cljs.core.next.call(null,seq__12168_12197__$1);
var G__12205 = null;
var G__12206 = (0);
var G__12207 = (0);
seq__12168_12187 = G__12204;
chunk__12169_12188 = G__12205;
count__12170_12189 = G__12206;
i__12171_12190 = G__12207;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12184);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12183,v_12184);

}
{
var G__12208 = seq__12162_12178;
var G__12209 = chunk__12163_12179;
var G__12210 = count__12164_12180;
var G__12211 = (i__12165_12181 + (1));
seq__12162_12178 = G__12208;
chunk__12163_12179 = G__12209;
count__12164_12180 = G__12210;
i__12165_12181 = G__12211;
continue;
}
} else
{var temp__4126__auto___12212 = cljs.core.seq.call(null,seq__12162_12178);if(temp__4126__auto___12212)
{var seq__12162_12213__$1 = temp__4126__auto___12212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12162_12213__$1))
{var c__6904__auto___12214 = cljs.core.chunk_first.call(null,seq__12162_12213__$1);{
var G__12215 = cljs.core.chunk_rest.call(null,seq__12162_12213__$1);
var G__12216 = c__6904__auto___12214;
var G__12217 = cljs.core.count.call(null,c__6904__auto___12214);
var G__12218 = (0);
seq__12162_12178 = G__12215;
chunk__12163_12179 = G__12216;
count__12164_12180 = G__12217;
i__12165_12181 = G__12218;
continue;
}
} else
{var vec__12172_12219 = cljs.core.first.call(null,seq__12162_12213__$1);var k_12220 = cljs.core.nth.call(null,vec__12172_12219,(0),null);var v_12221 = cljs.core.nth.call(null,vec__12172_12219,(1),null);var G__12173_12222 = (((k_12220 instanceof cljs.core.Keyword))?k_12220.fqn:null);switch (G__12173_12222) {
case "classes":
var seq__12174_12224 = cljs.core.seq.call(null,v_12221);var chunk__12175_12225 = null;var count__12176_12226 = (0);var i__12177_12227 = (0);while(true){
if((i__12177_12227 < count__12176_12226))
{var c_12228 = cljs.core._nth.call(null,chunk__12175_12225,i__12177_12227);dommy.attrs.add_class_BANG_.call(null,n,c_12228);
{
var G__12229 = seq__12174_12224;
var G__12230 = chunk__12175_12225;
var G__12231 = count__12176_12226;
var G__12232 = (i__12177_12227 + (1));
seq__12174_12224 = G__12229;
chunk__12175_12225 = G__12230;
count__12176_12226 = G__12231;
i__12177_12227 = G__12232;
continue;
}
} else
{var temp__4126__auto___12233__$1 = cljs.core.seq.call(null,seq__12174_12224);if(temp__4126__auto___12233__$1)
{var seq__12174_12234__$1 = temp__4126__auto___12233__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12174_12234__$1))
{var c__6904__auto___12235 = cljs.core.chunk_first.call(null,seq__12174_12234__$1);{
var G__12236 = cljs.core.chunk_rest.call(null,seq__12174_12234__$1);
var G__12237 = c__6904__auto___12235;
var G__12238 = cljs.core.count.call(null,c__6904__auto___12235);
var G__12239 = (0);
seq__12174_12224 = G__12236;
chunk__12175_12225 = G__12237;
count__12176_12226 = G__12238;
i__12177_12227 = G__12239;
continue;
}
} else
{var c_12240 = cljs.core.first.call(null,seq__12174_12234__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12240);
{
var G__12241 = cljs.core.next.call(null,seq__12174_12234__$1);
var G__12242 = null;
var G__12243 = (0);
var G__12244 = (0);
seq__12174_12224 = G__12241;
chunk__12175_12225 = G__12242;
count__12176_12226 = G__12243;
i__12177_12227 = G__12244;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12221);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12220,v_12221);

}
{
var G__12245 = cljs.core.next.call(null,seq__12162_12213__$1);
var G__12246 = null;
var G__12247 = (0);
var G__12248 = (0);
seq__12162_12178 = G__12245;
chunk__12163_12179 = G__12246;
count__12164_12180 = G__12247;
i__12165_12181 = G__12248;
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
dommy.template.node = (function node(data){if((function (){var G__12250 = data;if(G__12250)
{var bit__6752__auto__ = null;if(cljs.core.truth_((function (){var or__5801__auto__ = bit__6752__auto__;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
} else
{return G__12250.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12250.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12250);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12250);
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
