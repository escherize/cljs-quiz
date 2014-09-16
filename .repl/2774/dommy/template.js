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
dommy.template.PElement = (function (){var obj21029 = {};return obj21029;
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
{var str_21032 = node_str.substring(base_idx);while(true){
var next_idx_21033 = dommy.template.next_css_index.call(null,str_21032,(1));var frag_21034 = (((next_idx_21033 >= (0)))?str_21032.substring((0),next_idx_21033):str_21032);var G__21031_21035 = frag_21034.charAt((0));switch (G__21031_21035) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_21034.substring((1)));

break;
case "#":
node.setAttribute("id",frag_21034.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_21034.charAt((0))))));

}
if((next_idx_21033 >= (0)))
{{
var G__21037 = str_21032.substring(next_idx_21033);
str_21032 = G__21037;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__21043 = data;if(G__21043)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__21043.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21043.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21043);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21043);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__21044_21048 = cljs.core.seq.call(null,data);var chunk__21045_21049 = null;var count__21046_21050 = (0);var i__21047_21051 = (0);while(true){
if((i__21047_21051 < count__21046_21050))
{var child_21052 = cljs.core._nth.call(null,chunk__21045_21049,i__21047_21051);__GT_document_fragment.call(null,result_frag,child_21052);
{
var G__21053 = seq__21044_21048;
var G__21054 = chunk__21045_21049;
var G__21055 = count__21046_21050;
var G__21056 = (i__21047_21051 + (1));
seq__21044_21048 = G__21053;
chunk__21045_21049 = G__21054;
count__21046_21050 = G__21055;
i__21047_21051 = G__21056;
continue;
}
} else
{var temp__4126__auto___21057 = cljs.core.seq.call(null,seq__21044_21048);if(temp__4126__auto___21057)
{var seq__21044_21058__$1 = temp__4126__auto___21057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21044_21058__$1))
{var c__6904__auto___21059 = cljs.core.chunk_first.call(null,seq__21044_21058__$1);{
var G__21060 = cljs.core.chunk_rest.call(null,seq__21044_21058__$1);
var G__21061 = c__6904__auto___21059;
var G__21062 = cljs.core.count.call(null,c__6904__auto___21059);
var G__21063 = (0);
seq__21044_21048 = G__21060;
chunk__21045_21049 = G__21061;
count__21046_21050 = G__21062;
i__21047_21051 = G__21063;
continue;
}
} else
{var child_21064 = cljs.core.first.call(null,seq__21044_21058__$1);__GT_document_fragment.call(null,result_frag,child_21064);
{
var G__21065 = cljs.core.next.call(null,seq__21044_21058__$1);
var G__21066 = null;
var G__21067 = (0);
var G__21068 = (0);
seq__21044_21048 = G__21065;
chunk__21045_21049 = G__21066;
count__21046_21050 = G__21067;
i__21047_21051 = G__21068;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__21070 = data;if(G__21070)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__21070.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21070.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21070);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21070);
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
dommy.template.compound_element = (function compound_element(p__21071){var vec__21091 = p__21071;var tag_name = cljs.core.nth.call(null,vec__21091,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__21091,(1),null);var children = cljs.core.nthnext.call(null,vec__21091,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__21093 = maybe_attrs;if(G__21093)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__21093.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21093.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21093);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21093);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__21094_21110 = cljs.core.seq.call(null,attrs);var chunk__21095_21111 = null;var count__21096_21112 = (0);var i__21097_21113 = (0);while(true){
if((i__21097_21113 < count__21096_21112))
{var vec__21098_21114 = cljs.core._nth.call(null,chunk__21095_21111,i__21097_21113);var k_21115 = cljs.core.nth.call(null,vec__21098_21114,(0),null);var v_21116 = cljs.core.nth.call(null,vec__21098_21114,(1),null);var G__21099_21117 = (((k_21115 instanceof cljs.core.Keyword))?k_21115.fqn:null);switch (G__21099_21117) {
case "classes":
var seq__21100_21119 = cljs.core.seq.call(null,v_21116);var chunk__21101_21120 = null;var count__21102_21121 = (0);var i__21103_21122 = (0);while(true){
if((i__21103_21122 < count__21102_21121))
{var c_21123 = cljs.core._nth.call(null,chunk__21101_21120,i__21103_21122);dommy.attrs.add_class_BANG_.call(null,n,c_21123);
{
var G__21124 = seq__21100_21119;
var G__21125 = chunk__21101_21120;
var G__21126 = count__21102_21121;
var G__21127 = (i__21103_21122 + (1));
seq__21100_21119 = G__21124;
chunk__21101_21120 = G__21125;
count__21102_21121 = G__21126;
i__21103_21122 = G__21127;
continue;
}
} else
{var temp__4126__auto___21128 = cljs.core.seq.call(null,seq__21100_21119);if(temp__4126__auto___21128)
{var seq__21100_21129__$1 = temp__4126__auto___21128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21100_21129__$1))
{var c__6904__auto___21130 = cljs.core.chunk_first.call(null,seq__21100_21129__$1);{
var G__21131 = cljs.core.chunk_rest.call(null,seq__21100_21129__$1);
var G__21132 = c__6904__auto___21130;
var G__21133 = cljs.core.count.call(null,c__6904__auto___21130);
var G__21134 = (0);
seq__21100_21119 = G__21131;
chunk__21101_21120 = G__21132;
count__21102_21121 = G__21133;
i__21103_21122 = G__21134;
continue;
}
} else
{var c_21135 = cljs.core.first.call(null,seq__21100_21129__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21135);
{
var G__21136 = cljs.core.next.call(null,seq__21100_21129__$1);
var G__21137 = null;
var G__21138 = (0);
var G__21139 = (0);
seq__21100_21119 = G__21136;
chunk__21101_21120 = G__21137;
count__21102_21121 = G__21138;
i__21103_21122 = G__21139;
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
dommy.attrs.add_class_BANG_.call(null,n,v_21116);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_21115,v_21116);

}
{
var G__21140 = seq__21094_21110;
var G__21141 = chunk__21095_21111;
var G__21142 = count__21096_21112;
var G__21143 = (i__21097_21113 + (1));
seq__21094_21110 = G__21140;
chunk__21095_21111 = G__21141;
count__21096_21112 = G__21142;
i__21097_21113 = G__21143;
continue;
}
} else
{var temp__4126__auto___21144 = cljs.core.seq.call(null,seq__21094_21110);if(temp__4126__auto___21144)
{var seq__21094_21145__$1 = temp__4126__auto___21144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21094_21145__$1))
{var c__6904__auto___21146 = cljs.core.chunk_first.call(null,seq__21094_21145__$1);{
var G__21147 = cljs.core.chunk_rest.call(null,seq__21094_21145__$1);
var G__21148 = c__6904__auto___21146;
var G__21149 = cljs.core.count.call(null,c__6904__auto___21146);
var G__21150 = (0);
seq__21094_21110 = G__21147;
chunk__21095_21111 = G__21148;
count__21096_21112 = G__21149;
i__21097_21113 = G__21150;
continue;
}
} else
{var vec__21104_21151 = cljs.core.first.call(null,seq__21094_21145__$1);var k_21152 = cljs.core.nth.call(null,vec__21104_21151,(0),null);var v_21153 = cljs.core.nth.call(null,vec__21104_21151,(1),null);var G__21105_21154 = (((k_21152 instanceof cljs.core.Keyword))?k_21152.fqn:null);switch (G__21105_21154) {
case "classes":
var seq__21106_21156 = cljs.core.seq.call(null,v_21153);var chunk__21107_21157 = null;var count__21108_21158 = (0);var i__21109_21159 = (0);while(true){
if((i__21109_21159 < count__21108_21158))
{var c_21160 = cljs.core._nth.call(null,chunk__21107_21157,i__21109_21159);dommy.attrs.add_class_BANG_.call(null,n,c_21160);
{
var G__21161 = seq__21106_21156;
var G__21162 = chunk__21107_21157;
var G__21163 = count__21108_21158;
var G__21164 = (i__21109_21159 + (1));
seq__21106_21156 = G__21161;
chunk__21107_21157 = G__21162;
count__21108_21158 = G__21163;
i__21109_21159 = G__21164;
continue;
}
} else
{var temp__4126__auto___21165__$1 = cljs.core.seq.call(null,seq__21106_21156);if(temp__4126__auto___21165__$1)
{var seq__21106_21166__$1 = temp__4126__auto___21165__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21106_21166__$1))
{var c__6904__auto___21167 = cljs.core.chunk_first.call(null,seq__21106_21166__$1);{
var G__21168 = cljs.core.chunk_rest.call(null,seq__21106_21166__$1);
var G__21169 = c__6904__auto___21167;
var G__21170 = cljs.core.count.call(null,c__6904__auto___21167);
var G__21171 = (0);
seq__21106_21156 = G__21168;
chunk__21107_21157 = G__21169;
count__21108_21158 = G__21170;
i__21109_21159 = G__21171;
continue;
}
} else
{var c_21172 = cljs.core.first.call(null,seq__21106_21166__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21172);
{
var G__21173 = cljs.core.next.call(null,seq__21106_21166__$1);
var G__21174 = null;
var G__21175 = (0);
var G__21176 = (0);
seq__21106_21156 = G__21173;
chunk__21107_21157 = G__21174;
count__21108_21158 = G__21175;
i__21109_21159 = G__21176;
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
dommy.attrs.add_class_BANG_.call(null,n,v_21153);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_21152,v_21153);

}
{
var G__21177 = cljs.core.next.call(null,seq__21094_21145__$1);
var G__21178 = null;
var G__21179 = (0);
var G__21180 = (0);
seq__21094_21110 = G__21177;
chunk__21095_21111 = G__21178;
count__21096_21112 = G__21179;
i__21097_21113 = G__21180;
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
dommy.template.node = (function node(data){if((function (){var G__21182 = data;if(G__21182)
{var bit__6743__auto__ = null;if(cljs.core.truth_((function (){var or__5757__auto__ = bit__6743__auto__;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return G__21182.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21182.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21182);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21182);
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
