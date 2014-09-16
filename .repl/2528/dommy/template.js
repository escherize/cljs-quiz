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
dommy.template.PElement = (function (){var obj12081 = {};return obj12081;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__5789__auto__ = this$;if(and__5789__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__5789__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6730__auto__ = (((this$ == null))?null:this$);return (function (){var or__5805__auto__ = (dommy.template._elem[goog.typeOf(x__6730__auto__)]);if(or__5805__auto__)
{return or__5805__auto__;
} else
{var or__5805__auto____$1 = (dommy.template._elem["_"]);if(or__5805__auto____$1)
{return or__5805__auto____$1;
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
{var str_12084 = node_str.substring(base_idx);while(true){
var next_idx_12085 = dommy.template.next_css_index.call(null,str_12084,(1));var frag_12086 = (((next_idx_12085 >= (0)))?str_12084.substring((0),next_idx_12085):str_12084);var G__12083_12087 = frag_12086.charAt((0));switch (G__12083_12087) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_12086.substring((1)));

break;
case "#":
node.setAttribute("id",frag_12086.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12086.charAt((0))))));

}
if((next_idx_12085 >= (0)))
{{
var G__12089 = str_12084.substring(next_idx_12085);
str_12084 = G__12089;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12095 = data;if(G__12095)
{var bit__6767__auto__ = null;if(cljs.core.truth_((function (){var or__5805__auto__ = bit__6767__auto__;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
} else
{return G__12095.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12095.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12095);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12096_12100 = cljs.core.seq.call(null,data);var chunk__12097_12101 = null;var count__12098_12102 = (0);var i__12099_12103 = (0);while(true){
if((i__12099_12103 < count__12098_12102))
{var child_12104 = cljs.core._nth.call(null,chunk__12097_12101,i__12099_12103);__GT_document_fragment.call(null,result_frag,child_12104);
{
var G__12105 = seq__12096_12100;
var G__12106 = chunk__12097_12101;
var G__12107 = count__12098_12102;
var G__12108 = (i__12099_12103 + (1));
seq__12096_12100 = G__12105;
chunk__12097_12101 = G__12106;
count__12098_12102 = G__12107;
i__12099_12103 = G__12108;
continue;
}
} else
{var temp__4126__auto___12109 = cljs.core.seq.call(null,seq__12096_12100);if(temp__4126__auto___12109)
{var seq__12096_12110__$1 = temp__4126__auto___12109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12096_12110__$1))
{var c__6919__auto___12111 = cljs.core.chunk_first.call(null,seq__12096_12110__$1);{
var G__12112 = cljs.core.chunk_rest.call(null,seq__12096_12110__$1);
var G__12113 = c__6919__auto___12111;
var G__12114 = cljs.core.count.call(null,c__6919__auto___12111);
var G__12115 = (0);
seq__12096_12100 = G__12112;
chunk__12097_12101 = G__12113;
count__12098_12102 = G__12114;
i__12099_12103 = G__12115;
continue;
}
} else
{var child_12116 = cljs.core.first.call(null,seq__12096_12110__$1);__GT_document_fragment.call(null,result_frag,child_12116);
{
var G__12117 = cljs.core.next.call(null,seq__12096_12110__$1);
var G__12118 = null;
var G__12119 = (0);
var G__12120 = (0);
seq__12096_12100 = G__12117;
chunk__12097_12101 = G__12118;
count__12098_12102 = G__12119;
i__12099_12103 = G__12120;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12122 = data;if(G__12122)
{var bit__6767__auto__ = null;if(cljs.core.truth_((function (){var or__5805__auto__ = bit__6767__auto__;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
} else
{return G__12122.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12122.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12122);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12122);
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
dommy.template.compound_element = (function compound_element(p__12123){var vec__12143 = p__12123;var tag_name = cljs.core.nth.call(null,vec__12143,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__12143,(1),null);var children = cljs.core.nthnext.call(null,vec__12143,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12145 = maybe_attrs;if(G__12145)
{var bit__6767__auto__ = null;if(cljs.core.truth_((function (){var or__5805__auto__ = bit__6767__auto__;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
} else
{return G__12145.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12145.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12145);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12145);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12146_12162 = cljs.core.seq.call(null,attrs);var chunk__12147_12163 = null;var count__12148_12164 = (0);var i__12149_12165 = (0);while(true){
if((i__12149_12165 < count__12148_12164))
{var vec__12150_12166 = cljs.core._nth.call(null,chunk__12147_12163,i__12149_12165);var k_12167 = cljs.core.nth.call(null,vec__12150_12166,(0),null);var v_12168 = cljs.core.nth.call(null,vec__12150_12166,(1),null);var G__12151_12169 = (((k_12167 instanceof cljs.core.Keyword))?k_12167.fqn:null);switch (G__12151_12169) {
case "classes":
var seq__12152_12171 = cljs.core.seq.call(null,v_12168);var chunk__12153_12172 = null;var count__12154_12173 = (0);var i__12155_12174 = (0);while(true){
if((i__12155_12174 < count__12154_12173))
{var c_12175 = cljs.core._nth.call(null,chunk__12153_12172,i__12155_12174);dommy.attrs.add_class_BANG_.call(null,n,c_12175);
{
var G__12176 = seq__12152_12171;
var G__12177 = chunk__12153_12172;
var G__12178 = count__12154_12173;
var G__12179 = (i__12155_12174 + (1));
seq__12152_12171 = G__12176;
chunk__12153_12172 = G__12177;
count__12154_12173 = G__12178;
i__12155_12174 = G__12179;
continue;
}
} else
{var temp__4126__auto___12180 = cljs.core.seq.call(null,seq__12152_12171);if(temp__4126__auto___12180)
{var seq__12152_12181__$1 = temp__4126__auto___12180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12152_12181__$1))
{var c__6919__auto___12182 = cljs.core.chunk_first.call(null,seq__12152_12181__$1);{
var G__12183 = cljs.core.chunk_rest.call(null,seq__12152_12181__$1);
var G__12184 = c__6919__auto___12182;
var G__12185 = cljs.core.count.call(null,c__6919__auto___12182);
var G__12186 = (0);
seq__12152_12171 = G__12183;
chunk__12153_12172 = G__12184;
count__12154_12173 = G__12185;
i__12155_12174 = G__12186;
continue;
}
} else
{var c_12187 = cljs.core.first.call(null,seq__12152_12181__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12187);
{
var G__12188 = cljs.core.next.call(null,seq__12152_12181__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__12152_12171 = G__12188;
chunk__12153_12172 = G__12189;
count__12154_12173 = G__12190;
i__12155_12174 = G__12191;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12168);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12167,v_12168);

}
{
var G__12192 = seq__12146_12162;
var G__12193 = chunk__12147_12163;
var G__12194 = count__12148_12164;
var G__12195 = (i__12149_12165 + (1));
seq__12146_12162 = G__12192;
chunk__12147_12163 = G__12193;
count__12148_12164 = G__12194;
i__12149_12165 = G__12195;
continue;
}
} else
{var temp__4126__auto___12196 = cljs.core.seq.call(null,seq__12146_12162);if(temp__4126__auto___12196)
{var seq__12146_12197__$1 = temp__4126__auto___12196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12146_12197__$1))
{var c__6919__auto___12198 = cljs.core.chunk_first.call(null,seq__12146_12197__$1);{
var G__12199 = cljs.core.chunk_rest.call(null,seq__12146_12197__$1);
var G__12200 = c__6919__auto___12198;
var G__12201 = cljs.core.count.call(null,c__6919__auto___12198);
var G__12202 = (0);
seq__12146_12162 = G__12199;
chunk__12147_12163 = G__12200;
count__12148_12164 = G__12201;
i__12149_12165 = G__12202;
continue;
}
} else
{var vec__12156_12203 = cljs.core.first.call(null,seq__12146_12197__$1);var k_12204 = cljs.core.nth.call(null,vec__12156_12203,(0),null);var v_12205 = cljs.core.nth.call(null,vec__12156_12203,(1),null);var G__12157_12206 = (((k_12204 instanceof cljs.core.Keyword))?k_12204.fqn:null);switch (G__12157_12206) {
case "classes":
var seq__12158_12208 = cljs.core.seq.call(null,v_12205);var chunk__12159_12209 = null;var count__12160_12210 = (0);var i__12161_12211 = (0);while(true){
if((i__12161_12211 < count__12160_12210))
{var c_12212 = cljs.core._nth.call(null,chunk__12159_12209,i__12161_12211);dommy.attrs.add_class_BANG_.call(null,n,c_12212);
{
var G__12213 = seq__12158_12208;
var G__12214 = chunk__12159_12209;
var G__12215 = count__12160_12210;
var G__12216 = (i__12161_12211 + (1));
seq__12158_12208 = G__12213;
chunk__12159_12209 = G__12214;
count__12160_12210 = G__12215;
i__12161_12211 = G__12216;
continue;
}
} else
{var temp__4126__auto___12217__$1 = cljs.core.seq.call(null,seq__12158_12208);if(temp__4126__auto___12217__$1)
{var seq__12158_12218__$1 = temp__4126__auto___12217__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12158_12218__$1))
{var c__6919__auto___12219 = cljs.core.chunk_first.call(null,seq__12158_12218__$1);{
var G__12220 = cljs.core.chunk_rest.call(null,seq__12158_12218__$1);
var G__12221 = c__6919__auto___12219;
var G__12222 = cljs.core.count.call(null,c__6919__auto___12219);
var G__12223 = (0);
seq__12158_12208 = G__12220;
chunk__12159_12209 = G__12221;
count__12160_12210 = G__12222;
i__12161_12211 = G__12223;
continue;
}
} else
{var c_12224 = cljs.core.first.call(null,seq__12158_12218__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12224);
{
var G__12225 = cljs.core.next.call(null,seq__12158_12218__$1);
var G__12226 = null;
var G__12227 = (0);
var G__12228 = (0);
seq__12158_12208 = G__12225;
chunk__12159_12209 = G__12226;
count__12160_12210 = G__12227;
i__12161_12211 = G__12228;
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
dommy.attrs.add_class_BANG_.call(null,n,v_12205);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12204,v_12205);

}
{
var G__12229 = cljs.core.next.call(null,seq__12146_12197__$1);
var G__12230 = null;
var G__12231 = (0);
var G__12232 = (0);
seq__12146_12162 = G__12229;
chunk__12147_12163 = G__12230;
count__12148_12164 = G__12231;
i__12149_12165 = G__12232;
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
dommy.template.node = (function node(data){if((function (){var G__12234 = data;if(G__12234)
{var bit__6767__auto__ = null;if(cljs.core.truth_((function (){var or__5805__auto__ = bit__6767__auto__;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
} else
{return G__12234.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12234.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12234);
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
