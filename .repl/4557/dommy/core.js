// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__5795__auto__ = elem.textContent;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__11461 = dommy.template.__GT_node_like.call(null,parent);G__11461.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11461;
});
var append_BANG___3 = (function() { 
var G__11466__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11462_11467 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11463_11468 = null;var count__11464_11469 = (0);var i__11465_11470 = (0);while(true){
if((i__11465_11470 < count__11464_11469))
{var c_11471 = cljs.core._nth.call(null,chunk__11463_11468,i__11465_11470);append_BANG_.call(null,parent__$1,c_11471);
{
var G__11472 = seq__11462_11467;
var G__11473 = chunk__11463_11468;
var G__11474 = count__11464_11469;
var G__11475 = (i__11465_11470 + (1));
seq__11462_11467 = G__11472;
chunk__11463_11468 = G__11473;
count__11464_11469 = G__11474;
i__11465_11470 = G__11475;
continue;
}
} else
{var temp__4126__auto___11476 = cljs.core.seq.call(null,seq__11462_11467);if(temp__4126__auto___11476)
{var seq__11462_11477__$1 = temp__4126__auto___11476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11462_11477__$1))
{var c__6939__auto___11478 = cljs.core.chunk_first.call(null,seq__11462_11477__$1);{
var G__11479 = cljs.core.chunk_rest.call(null,seq__11462_11477__$1);
var G__11480 = c__6939__auto___11478;
var G__11481 = cljs.core.count.call(null,c__6939__auto___11478);
var G__11482 = (0);
seq__11462_11467 = G__11479;
chunk__11463_11468 = G__11480;
count__11464_11469 = G__11481;
i__11465_11470 = G__11482;
continue;
}
} else
{var c_11483 = cljs.core.first.call(null,seq__11462_11477__$1);append_BANG_.call(null,parent__$1,c_11483);
{
var G__11484 = cljs.core.next.call(null,seq__11462_11477__$1);
var G__11485 = null;
var G__11486 = (0);
var G__11487 = (0);
seq__11462_11467 = G__11484;
chunk__11463_11468 = G__11485;
count__11464_11469 = G__11486;
i__11465_11470 = G__11487;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__11466 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11466__delegate.call(this,parent,child,more_children);};
G__11466.cljs$lang$maxFixedArity = 2;
G__11466.cljs$lang$applyTo = (function (arglist__11488){
var parent = cljs.core.first(arglist__11488);
arglist__11488 = cljs.core.next(arglist__11488);
var child = cljs.core.first(arglist__11488);
var more_children = cljs.core.rest(arglist__11488);
return G__11466__delegate(parent,child,more_children);
});
G__11466.cljs$core$IFn$_invoke$arity$variadic = G__11466__delegate;
return G__11466;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__11497__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11493_11498 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11494_11499 = null;var count__11495_11500 = (0);var i__11496_11501 = (0);while(true){
if((i__11496_11501 < count__11495_11500))
{var c_11502 = cljs.core._nth.call(null,chunk__11494_11499,i__11496_11501);prepend_BANG_.call(null,parent__$1,c_11502);
{
var G__11503 = seq__11493_11498;
var G__11504 = chunk__11494_11499;
var G__11505 = count__11495_11500;
var G__11506 = (i__11496_11501 + (1));
seq__11493_11498 = G__11503;
chunk__11494_11499 = G__11504;
count__11495_11500 = G__11505;
i__11496_11501 = G__11506;
continue;
}
} else
{var temp__4126__auto___11507 = cljs.core.seq.call(null,seq__11493_11498);if(temp__4126__auto___11507)
{var seq__11493_11508__$1 = temp__4126__auto___11507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_11508__$1))
{var c__6939__auto___11509 = cljs.core.chunk_first.call(null,seq__11493_11508__$1);{
var G__11510 = cljs.core.chunk_rest.call(null,seq__11493_11508__$1);
var G__11511 = c__6939__auto___11509;
var G__11512 = cljs.core.count.call(null,c__6939__auto___11509);
var G__11513 = (0);
seq__11493_11498 = G__11510;
chunk__11494_11499 = G__11511;
count__11495_11500 = G__11512;
i__11496_11501 = G__11513;
continue;
}
} else
{var c_11514 = cljs.core.first.call(null,seq__11493_11508__$1);prepend_BANG_.call(null,parent__$1,c_11514);
{
var G__11515 = cljs.core.next.call(null,seq__11493_11508__$1);
var G__11516 = null;
var G__11517 = (0);
var G__11518 = (0);
seq__11493_11498 = G__11515;
chunk__11494_11499 = G__11516;
count__11495_11500 = G__11517;
i__11496_11501 = G__11518;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__11497 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11497__delegate.call(this,parent,child,more_children);};
G__11497.cljs$lang$maxFixedArity = 2;
G__11497.cljs$lang$applyTo = (function (arglist__11519){
var parent = cljs.core.first(arglist__11519);
arglist__11519 = cljs.core.next(arglist__11519);
var child = cljs.core.first(arglist__11519);
var more_children = cljs.core.rest(arglist__11519);
return G__11497__delegate(parent,child,more_children);
});
G__11497.cljs$core$IFn$_invoke$arity$variadic = G__11497__delegate;
return G__11497;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11520 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11520))
{var next_11521 = temp__4124__auto___11520;parent.insertBefore(actual_node,next_11521);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11523 = dommy.template.__GT_node_like.call(null,parent);G__11523.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11523,node_like);
return G__11523;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11525 = elem__$1.parentNode;G__11525.removeChild(elem__$1);
return G__11525;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__11531){var vec__11532 = p__11531;var k = cljs.core.nth.call(null,vec__11532,(0),null);var v = cljs.core.nth.call(null,vec__11532,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11533 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11533 = (function (v,k,vec__11532,p__11531,container,key_selectors_map,template,selector_map,meta11534){
this.v = v;
this.k = k;
this.vec__11532 = vec__11532;
this.p__11531 = p__11531;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11534 = meta11534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11533.cljs$lang$type = true;
dommy.core.t11533.cljs$lang$ctorStr = "dommy.core/t11533";
dommy.core.t11533.cljs$lang$ctorPrWriter = ((function (vec__11532,k,v,container){
return (function (this__6639__auto__,writer__6640__auto__,opt__6641__auto__){return cljs.core._write.call(null,writer__6640__auto__,"dommy.core/t11533");
});})(vec__11532,k,v,container))
;
dommy.core.t11533.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11532,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11532,k,v,container))
;
dommy.core.t11533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11532,k,v,container){
return (function (_11535){var self__ = this;
var _11535__$1 = this;return self__.meta11534;
});})(vec__11532,k,v,container))
;
dommy.core.t11533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11532,k,v,container){
return (function (_11535,meta11534__$1){var self__ = this;
var _11535__$1 = this;return (new dommy.core.t11533(self__.v,self__.k,self__.vec__11532,self__.p__11531,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11534__$1));
});})(vec__11532,k,v,container))
;
dommy.core.__GT_t11533 = ((function (vec__11532,k,v,container){
return (function __GT_t11533(v__$1,k__$1,vec__11532__$1,p__11531__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11534){return (new dommy.core.t11533(v__$1,k__$1,vec__11532__$1,p__11531__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11534));
});})(vec__11532,k,v,container))
;
}
return (new dommy.core.t11533(v,k,vec__11532,p__11531,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11536_SHARP_){return p1__11536_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__11537_SHARP_){return !((p1__11537_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11538){var vec__11539 = p__11538;var special_mouse_event = cljs.core.nth.call(null,vec__11539,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__11539,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11539,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11539,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5795__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__5777__auto__ = related_target;if(cljs.core.truth_(and__5777__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__5777__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__11539,special_mouse_event,real_mouse_event))
});})(vec__11539,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__5777__auto__ = selected_target;if(cljs.core.truth_(and__5777__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__5777__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__5795__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11540){
var elem = cljs.core.first(arglist__11540);
arglist__11540 = cljs.core.next(arglist__11540);
var f = cljs.core.first(arglist__11540);
var args = cljs.core.rest(arglist__11540);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11541_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11541_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__11565_11588 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11589 = cljs.core.nth.call(null,vec__11565_11588,(0),null);var selector_11590 = cljs.core.nth.call(null,vec__11565_11588,(1),null);var seq__11566_11591 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11573_11592 = null;var count__11574_11593 = (0);var i__11575_11594 = (0);while(true){
if((i__11575_11594 < count__11574_11593))
{var vec__11582_11595 = cljs.core._nth.call(null,chunk__11573_11592,i__11575_11594);var orig_type_11596 = cljs.core.nth.call(null,vec__11582_11595,(0),null);var f_11597 = cljs.core.nth.call(null,vec__11582_11595,(1),null);var seq__11576_11598 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11596,new cljs.core.PersistentArrayMap.fromArray([orig_type_11596,cljs.core.identity], true, false)));var chunk__11578_11599 = null;var count__11579_11600 = (0);var i__11580_11601 = (0);while(true){
if((i__11580_11601 < count__11579_11600))
{var vec__11583_11602 = cljs.core._nth.call(null,chunk__11578_11599,i__11580_11601);var actual_type_11603 = cljs.core.nth.call(null,vec__11583_11602,(0),null);var factory_11604 = cljs.core.nth.call(null,vec__11583_11602,(1),null);var canonical_f_11605 = (cljs.core.truth_(selector_11590)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11589,selector_11590):cljs.core.identity).call(null,factory_11604.call(null,f_11597));dommy.core.update_event_listeners_BANG_.call(null,elem_11589,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11590,actual_type_11603,f_11597], null),canonical_f_11605);
if(cljs.core.truth_(elem_11589.addEventListener))
{elem_11589.addEventListener(cljs.core.name.call(null,actual_type_11603),canonical_f_11605);
} else
{elem_11589.attachEvent(cljs.core.name.call(null,actual_type_11603),canonical_f_11605);
}
{
var G__11606 = seq__11576_11598;
var G__11607 = chunk__11578_11599;
var G__11608 = count__11579_11600;
var G__11609 = (i__11580_11601 + (1));
seq__11576_11598 = G__11606;
chunk__11578_11599 = G__11607;
count__11579_11600 = G__11608;
i__11580_11601 = G__11609;
continue;
}
} else
{var temp__4126__auto___11610 = cljs.core.seq.call(null,seq__11576_11598);if(temp__4126__auto___11610)
{var seq__11576_11611__$1 = temp__4126__auto___11610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11576_11611__$1))
{var c__6939__auto___11612 = cljs.core.chunk_first.call(null,seq__11576_11611__$1);{
var G__11613 = cljs.core.chunk_rest.call(null,seq__11576_11611__$1);
var G__11614 = c__6939__auto___11612;
var G__11615 = cljs.core.count.call(null,c__6939__auto___11612);
var G__11616 = (0);
seq__11576_11598 = G__11613;
chunk__11578_11599 = G__11614;
count__11579_11600 = G__11615;
i__11580_11601 = G__11616;
continue;
}
} else
{var vec__11584_11617 = cljs.core.first.call(null,seq__11576_11611__$1);var actual_type_11618 = cljs.core.nth.call(null,vec__11584_11617,(0),null);var factory_11619 = cljs.core.nth.call(null,vec__11584_11617,(1),null);var canonical_f_11620 = (cljs.core.truth_(selector_11590)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11589,selector_11590):cljs.core.identity).call(null,factory_11619.call(null,f_11597));dommy.core.update_event_listeners_BANG_.call(null,elem_11589,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11590,actual_type_11618,f_11597], null),canonical_f_11620);
if(cljs.core.truth_(elem_11589.addEventListener))
{elem_11589.addEventListener(cljs.core.name.call(null,actual_type_11618),canonical_f_11620);
} else
{elem_11589.attachEvent(cljs.core.name.call(null,actual_type_11618),canonical_f_11620);
}
{
var G__11621 = cljs.core.next.call(null,seq__11576_11611__$1);
var G__11622 = null;
var G__11623 = (0);
var G__11624 = (0);
seq__11576_11598 = G__11621;
chunk__11578_11599 = G__11622;
count__11579_11600 = G__11623;
i__11580_11601 = G__11624;
continue;
}
}
} else
{}
}
break;
}
{
var G__11625 = seq__11566_11591;
var G__11626 = chunk__11573_11592;
var G__11627 = count__11574_11593;
var G__11628 = (i__11575_11594 + (1));
seq__11566_11591 = G__11625;
chunk__11573_11592 = G__11626;
count__11574_11593 = G__11627;
i__11575_11594 = G__11628;
continue;
}
} else
{var temp__4126__auto___11629 = cljs.core.seq.call(null,seq__11566_11591);if(temp__4126__auto___11629)
{var seq__11566_11630__$1 = temp__4126__auto___11629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11566_11630__$1))
{var c__6939__auto___11631 = cljs.core.chunk_first.call(null,seq__11566_11630__$1);{
var G__11632 = cljs.core.chunk_rest.call(null,seq__11566_11630__$1);
var G__11633 = c__6939__auto___11631;
var G__11634 = cljs.core.count.call(null,c__6939__auto___11631);
var G__11635 = (0);
seq__11566_11591 = G__11632;
chunk__11573_11592 = G__11633;
count__11574_11593 = G__11634;
i__11575_11594 = G__11635;
continue;
}
} else
{var vec__11585_11636 = cljs.core.first.call(null,seq__11566_11630__$1);var orig_type_11637 = cljs.core.nth.call(null,vec__11585_11636,(0),null);var f_11638 = cljs.core.nth.call(null,vec__11585_11636,(1),null);var seq__11567_11639 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11637,new cljs.core.PersistentArrayMap.fromArray([orig_type_11637,cljs.core.identity], true, false)));var chunk__11569_11640 = null;var count__11570_11641 = (0);var i__11571_11642 = (0);while(true){
if((i__11571_11642 < count__11570_11641))
{var vec__11586_11643 = cljs.core._nth.call(null,chunk__11569_11640,i__11571_11642);var actual_type_11644 = cljs.core.nth.call(null,vec__11586_11643,(0),null);var factory_11645 = cljs.core.nth.call(null,vec__11586_11643,(1),null);var canonical_f_11646 = (cljs.core.truth_(selector_11590)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11589,selector_11590):cljs.core.identity).call(null,factory_11645.call(null,f_11638));dommy.core.update_event_listeners_BANG_.call(null,elem_11589,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11590,actual_type_11644,f_11638], null),canonical_f_11646);
if(cljs.core.truth_(elem_11589.addEventListener))
{elem_11589.addEventListener(cljs.core.name.call(null,actual_type_11644),canonical_f_11646);
} else
{elem_11589.attachEvent(cljs.core.name.call(null,actual_type_11644),canonical_f_11646);
}
{
var G__11647 = seq__11567_11639;
var G__11648 = chunk__11569_11640;
var G__11649 = count__11570_11641;
var G__11650 = (i__11571_11642 + (1));
seq__11567_11639 = G__11647;
chunk__11569_11640 = G__11648;
count__11570_11641 = G__11649;
i__11571_11642 = G__11650;
continue;
}
} else
{var temp__4126__auto___11651__$1 = cljs.core.seq.call(null,seq__11567_11639);if(temp__4126__auto___11651__$1)
{var seq__11567_11652__$1 = temp__4126__auto___11651__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11567_11652__$1))
{var c__6939__auto___11653 = cljs.core.chunk_first.call(null,seq__11567_11652__$1);{
var G__11654 = cljs.core.chunk_rest.call(null,seq__11567_11652__$1);
var G__11655 = c__6939__auto___11653;
var G__11656 = cljs.core.count.call(null,c__6939__auto___11653);
var G__11657 = (0);
seq__11567_11639 = G__11654;
chunk__11569_11640 = G__11655;
count__11570_11641 = G__11656;
i__11571_11642 = G__11657;
continue;
}
} else
{var vec__11587_11658 = cljs.core.first.call(null,seq__11567_11652__$1);var actual_type_11659 = cljs.core.nth.call(null,vec__11587_11658,(0),null);var factory_11660 = cljs.core.nth.call(null,vec__11587_11658,(1),null);var canonical_f_11661 = (cljs.core.truth_(selector_11590)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11589,selector_11590):cljs.core.identity).call(null,factory_11660.call(null,f_11638));dommy.core.update_event_listeners_BANG_.call(null,elem_11589,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11590,actual_type_11659,f_11638], null),canonical_f_11661);
if(cljs.core.truth_(elem_11589.addEventListener))
{elem_11589.addEventListener(cljs.core.name.call(null,actual_type_11659),canonical_f_11661);
} else
{elem_11589.attachEvent(cljs.core.name.call(null,actual_type_11659),canonical_f_11661);
}
{
var G__11662 = cljs.core.next.call(null,seq__11567_11652__$1);
var G__11663 = null;
var G__11664 = (0);
var G__11665 = (0);
seq__11567_11639 = G__11662;
chunk__11569_11640 = G__11663;
count__11570_11641 = G__11664;
i__11571_11642 = G__11665;
continue;
}
}
} else
{}
}
break;
}
{
var G__11666 = cljs.core.next.call(null,seq__11566_11630__$1);
var G__11667 = null;
var G__11668 = (0);
var G__11669 = (0);
seq__11566_11591 = G__11666;
chunk__11573_11592 = G__11667;
count__11574_11593 = G__11668;
i__11575_11594 = G__11669;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__11670){
var elem_sel = cljs.core.first(arglist__11670);
var type_fs = cljs.core.rest(arglist__11670);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__11694_11717 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11718 = cljs.core.nth.call(null,vec__11694_11717,(0),null);var selector_11719 = cljs.core.nth.call(null,vec__11694_11717,(1),null);var seq__11695_11720 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11702_11721 = null;var count__11703_11722 = (0);var i__11704_11723 = (0);while(true){
if((i__11704_11723 < count__11703_11722))
{var vec__11711_11724 = cljs.core._nth.call(null,chunk__11702_11721,i__11704_11723);var orig_type_11725 = cljs.core.nth.call(null,vec__11711_11724,(0),null);var f_11726 = cljs.core.nth.call(null,vec__11711_11724,(1),null);var seq__11705_11727 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11725,new cljs.core.PersistentArrayMap.fromArray([orig_type_11725,cljs.core.identity], true, false)));var chunk__11707_11728 = null;var count__11708_11729 = (0);var i__11709_11730 = (0);while(true){
if((i__11709_11730 < count__11708_11729))
{var vec__11712_11731 = cljs.core._nth.call(null,chunk__11707_11728,i__11709_11730);var actual_type_11732 = cljs.core.nth.call(null,vec__11712_11731,(0),null);var __11733 = cljs.core.nth.call(null,vec__11712_11731,(1),null);var keys_11734 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11719,actual_type_11732,f_11726], null);var canonical_f_11735 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11718),keys_11734);dommy.core.update_event_listeners_BANG_.call(null,elem_11718,dommy.utils.dissoc_in,keys_11734);
if(cljs.core.truth_(elem_11718.removeEventListener))
{elem_11718.removeEventListener(cljs.core.name.call(null,actual_type_11732),canonical_f_11735);
} else
{elem_11718.detachEvent(cljs.core.name.call(null,actual_type_11732),canonical_f_11735);
}
{
var G__11736 = seq__11705_11727;
var G__11737 = chunk__11707_11728;
var G__11738 = count__11708_11729;
var G__11739 = (i__11709_11730 + (1));
seq__11705_11727 = G__11736;
chunk__11707_11728 = G__11737;
count__11708_11729 = G__11738;
i__11709_11730 = G__11739;
continue;
}
} else
{var temp__4126__auto___11740 = cljs.core.seq.call(null,seq__11705_11727);if(temp__4126__auto___11740)
{var seq__11705_11741__$1 = temp__4126__auto___11740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11705_11741__$1))
{var c__6939__auto___11742 = cljs.core.chunk_first.call(null,seq__11705_11741__$1);{
var G__11743 = cljs.core.chunk_rest.call(null,seq__11705_11741__$1);
var G__11744 = c__6939__auto___11742;
var G__11745 = cljs.core.count.call(null,c__6939__auto___11742);
var G__11746 = (0);
seq__11705_11727 = G__11743;
chunk__11707_11728 = G__11744;
count__11708_11729 = G__11745;
i__11709_11730 = G__11746;
continue;
}
} else
{var vec__11713_11747 = cljs.core.first.call(null,seq__11705_11741__$1);var actual_type_11748 = cljs.core.nth.call(null,vec__11713_11747,(0),null);var __11749 = cljs.core.nth.call(null,vec__11713_11747,(1),null);var keys_11750 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11719,actual_type_11748,f_11726], null);var canonical_f_11751 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11718),keys_11750);dommy.core.update_event_listeners_BANG_.call(null,elem_11718,dommy.utils.dissoc_in,keys_11750);
if(cljs.core.truth_(elem_11718.removeEventListener))
{elem_11718.removeEventListener(cljs.core.name.call(null,actual_type_11748),canonical_f_11751);
} else
{elem_11718.detachEvent(cljs.core.name.call(null,actual_type_11748),canonical_f_11751);
}
{
var G__11752 = cljs.core.next.call(null,seq__11705_11741__$1);
var G__11753 = null;
var G__11754 = (0);
var G__11755 = (0);
seq__11705_11727 = G__11752;
chunk__11707_11728 = G__11753;
count__11708_11729 = G__11754;
i__11709_11730 = G__11755;
continue;
}
}
} else
{}
}
break;
}
{
var G__11756 = seq__11695_11720;
var G__11757 = chunk__11702_11721;
var G__11758 = count__11703_11722;
var G__11759 = (i__11704_11723 + (1));
seq__11695_11720 = G__11756;
chunk__11702_11721 = G__11757;
count__11703_11722 = G__11758;
i__11704_11723 = G__11759;
continue;
}
} else
{var temp__4126__auto___11760 = cljs.core.seq.call(null,seq__11695_11720);if(temp__4126__auto___11760)
{var seq__11695_11761__$1 = temp__4126__auto___11760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11695_11761__$1))
{var c__6939__auto___11762 = cljs.core.chunk_first.call(null,seq__11695_11761__$1);{
var G__11763 = cljs.core.chunk_rest.call(null,seq__11695_11761__$1);
var G__11764 = c__6939__auto___11762;
var G__11765 = cljs.core.count.call(null,c__6939__auto___11762);
var G__11766 = (0);
seq__11695_11720 = G__11763;
chunk__11702_11721 = G__11764;
count__11703_11722 = G__11765;
i__11704_11723 = G__11766;
continue;
}
} else
{var vec__11714_11767 = cljs.core.first.call(null,seq__11695_11761__$1);var orig_type_11768 = cljs.core.nth.call(null,vec__11714_11767,(0),null);var f_11769 = cljs.core.nth.call(null,vec__11714_11767,(1),null);var seq__11696_11770 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11768,new cljs.core.PersistentArrayMap.fromArray([orig_type_11768,cljs.core.identity], true, false)));var chunk__11698_11771 = null;var count__11699_11772 = (0);var i__11700_11773 = (0);while(true){
if((i__11700_11773 < count__11699_11772))
{var vec__11715_11774 = cljs.core._nth.call(null,chunk__11698_11771,i__11700_11773);var actual_type_11775 = cljs.core.nth.call(null,vec__11715_11774,(0),null);var __11776 = cljs.core.nth.call(null,vec__11715_11774,(1),null);var keys_11777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11719,actual_type_11775,f_11769], null);var canonical_f_11778 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11718),keys_11777);dommy.core.update_event_listeners_BANG_.call(null,elem_11718,dommy.utils.dissoc_in,keys_11777);
if(cljs.core.truth_(elem_11718.removeEventListener))
{elem_11718.removeEventListener(cljs.core.name.call(null,actual_type_11775),canonical_f_11778);
} else
{elem_11718.detachEvent(cljs.core.name.call(null,actual_type_11775),canonical_f_11778);
}
{
var G__11779 = seq__11696_11770;
var G__11780 = chunk__11698_11771;
var G__11781 = count__11699_11772;
var G__11782 = (i__11700_11773 + (1));
seq__11696_11770 = G__11779;
chunk__11698_11771 = G__11780;
count__11699_11772 = G__11781;
i__11700_11773 = G__11782;
continue;
}
} else
{var temp__4126__auto___11783__$1 = cljs.core.seq.call(null,seq__11696_11770);if(temp__4126__auto___11783__$1)
{var seq__11696_11784__$1 = temp__4126__auto___11783__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11696_11784__$1))
{var c__6939__auto___11785 = cljs.core.chunk_first.call(null,seq__11696_11784__$1);{
var G__11786 = cljs.core.chunk_rest.call(null,seq__11696_11784__$1);
var G__11787 = c__6939__auto___11785;
var G__11788 = cljs.core.count.call(null,c__6939__auto___11785);
var G__11789 = (0);
seq__11696_11770 = G__11786;
chunk__11698_11771 = G__11787;
count__11699_11772 = G__11788;
i__11700_11773 = G__11789;
continue;
}
} else
{var vec__11716_11790 = cljs.core.first.call(null,seq__11696_11784__$1);var actual_type_11791 = cljs.core.nth.call(null,vec__11716_11790,(0),null);var __11792 = cljs.core.nth.call(null,vec__11716_11790,(1),null);var keys_11793 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11719,actual_type_11791,f_11769], null);var canonical_f_11794 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11718),keys_11793);dommy.core.update_event_listeners_BANG_.call(null,elem_11718,dommy.utils.dissoc_in,keys_11793);
if(cljs.core.truth_(elem_11718.removeEventListener))
{elem_11718.removeEventListener(cljs.core.name.call(null,actual_type_11791),canonical_f_11794);
} else
{elem_11718.detachEvent(cljs.core.name.call(null,actual_type_11791),canonical_f_11794);
}
{
var G__11795 = cljs.core.next.call(null,seq__11696_11784__$1);
var G__11796 = null;
var G__11797 = (0);
var G__11798 = (0);
seq__11696_11770 = G__11795;
chunk__11698_11771 = G__11796;
count__11699_11772 = G__11797;
i__11700_11773 = G__11798;
continue;
}
}
} else
{}
}
break;
}
{
var G__11799 = cljs.core.next.call(null,seq__11695_11761__$1);
var G__11800 = null;
var G__11801 = (0);
var G__11802 = (0);
seq__11695_11720 = G__11799;
chunk__11702_11721 = G__11800;
count__11703_11722 = G__11801;
i__11704_11723 = G__11802;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11803){
var elem_sel = cljs.core.first(arglist__11803);
var type_fs = cljs.core.rest(arglist__11803);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__11811_11818 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11819 = cljs.core.nth.call(null,vec__11811_11818,(0),null);var selector_11820 = cljs.core.nth.call(null,vec__11811_11818,(1),null);var seq__11812_11821 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11813_11822 = null;var count__11814_11823 = (0);var i__11815_11824 = (0);while(true){
if((i__11815_11824 < count__11814_11823))
{var vec__11816_11825 = cljs.core._nth.call(null,chunk__11813_11822,i__11815_11824);var type_11826 = cljs.core.nth.call(null,vec__11816_11825,(0),null);var f_11827 = cljs.core.nth.call(null,vec__11816_11825,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11826,((function (seq__11812_11821,chunk__11813_11822,count__11814_11823,i__11815_11824,vec__11816_11825,type_11826,f_11827,vec__11811_11818,elem_11819,selector_11820){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11826,this_fn);
return f_11827.call(null,e);
});})(seq__11812_11821,chunk__11813_11822,count__11814_11823,i__11815_11824,vec__11816_11825,type_11826,f_11827,vec__11811_11818,elem_11819,selector_11820))
);
{
var G__11828 = seq__11812_11821;
var G__11829 = chunk__11813_11822;
var G__11830 = count__11814_11823;
var G__11831 = (i__11815_11824 + (1));
seq__11812_11821 = G__11828;
chunk__11813_11822 = G__11829;
count__11814_11823 = G__11830;
i__11815_11824 = G__11831;
continue;
}
} else
{var temp__4126__auto___11832 = cljs.core.seq.call(null,seq__11812_11821);if(temp__4126__auto___11832)
{var seq__11812_11833__$1 = temp__4126__auto___11832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11812_11833__$1))
{var c__6939__auto___11834 = cljs.core.chunk_first.call(null,seq__11812_11833__$1);{
var G__11835 = cljs.core.chunk_rest.call(null,seq__11812_11833__$1);
var G__11836 = c__6939__auto___11834;
var G__11837 = cljs.core.count.call(null,c__6939__auto___11834);
var G__11838 = (0);
seq__11812_11821 = G__11835;
chunk__11813_11822 = G__11836;
count__11814_11823 = G__11837;
i__11815_11824 = G__11838;
continue;
}
} else
{var vec__11817_11839 = cljs.core.first.call(null,seq__11812_11833__$1);var type_11840 = cljs.core.nth.call(null,vec__11817_11839,(0),null);var f_11841 = cljs.core.nth.call(null,vec__11817_11839,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11840,((function (seq__11812_11821,chunk__11813_11822,count__11814_11823,i__11815_11824,vec__11817_11839,type_11840,f_11841,seq__11812_11833__$1,temp__4126__auto___11832,vec__11811_11818,elem_11819,selector_11820){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11840,this_fn);
return f_11841.call(null,e);
});})(seq__11812_11821,chunk__11813_11822,count__11814_11823,i__11815_11824,vec__11817_11839,type_11840,f_11841,seq__11812_11833__$1,temp__4126__auto___11832,vec__11811_11818,elem_11819,selector_11820))
);
{
var G__11842 = cljs.core.next.call(null,seq__11812_11833__$1);
var G__11843 = null;
var G__11844 = (0);
var G__11845 = (0);
seq__11812_11821 = G__11842;
chunk__11813_11822 = G__11843;
count__11814_11823 = G__11844;
i__11815_11824 = G__11845;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11846){
var elem_sel = cljs.core.first(arglist__11846);
var type_fs = cljs.core.rest(arglist__11846);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__11847){var vec__11849 = p__11847;var update_event_BANG_ = cljs.core.nth.call(null,vec__11849,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5795__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5795__auto__))
{return or__5795__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__11847 = null;if (arguments.length > 2) {
  p__11847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11847);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11850){
var node = cljs.core.first(arglist__11850);
arglist__11850 = cljs.core.next(arglist__11850);
var event_type = cljs.core.first(arglist__11850);
var p__11847 = cljs.core.rest(arglist__11850);
return fire_BANG___delegate(node,event_type,p__11847);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
