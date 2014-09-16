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
dommy.core.text = (function text(elem){var or__3558__auto__ = elem.textContent;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var append_BANG___2 = (function (parent,child){var G__5487 = dommy.template.__GT_node_like.call(null,parent);G__5487.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5487;
});
var append_BANG___3 = (function() { 
var G__5492__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5488_5493 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5489_5494 = null;var count__5490_5495 = (0);var i__5491_5496 = (0);while(true){
if((i__5491_5496 < count__5490_5495))
{var c_5497 = cljs.core._nth.call(null,chunk__5489_5494,i__5491_5496);append_BANG_.call(null,parent__$1,c_5497);
{
var G__5498 = seq__5488_5493;
var G__5499 = chunk__5489_5494;
var G__5500 = count__5490_5495;
var G__5501 = (i__5491_5496 + (1));
seq__5488_5493 = G__5498;
chunk__5489_5494 = G__5499;
count__5490_5495 = G__5500;
i__5491_5496 = G__5501;
continue;
}
} else
{var temp__4126__auto___5502 = cljs.core.seq.call(null,seq__5488_5493);if(temp__4126__auto___5502)
{var seq__5488_5503__$1 = temp__4126__auto___5502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5488_5503__$1))
{var c__4314__auto___5504 = cljs.core.chunk_first.call(null,seq__5488_5503__$1);{
var G__5505 = cljs.core.chunk_rest.call(null,seq__5488_5503__$1);
var G__5506 = c__4314__auto___5504;
var G__5507 = cljs.core.count.call(null,c__4314__auto___5504);
var G__5508 = (0);
seq__5488_5493 = G__5505;
chunk__5489_5494 = G__5506;
count__5490_5495 = G__5507;
i__5491_5496 = G__5508;
continue;
}
} else
{var c_5509 = cljs.core.first.call(null,seq__5488_5503__$1);append_BANG_.call(null,parent__$1,c_5509);
{
var G__5510 = cljs.core.next.call(null,seq__5488_5503__$1);
var G__5511 = null;
var G__5512 = (0);
var G__5513 = (0);
seq__5488_5493 = G__5510;
chunk__5489_5494 = G__5511;
count__5490_5495 = G__5512;
i__5491_5496 = G__5513;
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
var G__5492 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5492__delegate.call(this,parent,child,more_children);};
G__5492.cljs$lang$maxFixedArity = 2;
G__5492.cljs$lang$applyTo = (function (arglist__5514){
var parent = cljs.core.first(arglist__5514);
arglist__5514 = cljs.core.next(arglist__5514);
var child = cljs.core.first(arglist__5514);
var more_children = cljs.core.rest(arglist__5514);
return G__5492__delegate(parent,child,more_children);
});
G__5492.cljs$core$IFn$_invoke$arity$variadic = G__5492__delegate;
return G__5492;
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
var G__5523__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5519_5524 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5520_5525 = null;var count__5521_5526 = (0);var i__5522_5527 = (0);while(true){
if((i__5522_5527 < count__5521_5526))
{var c_5528 = cljs.core._nth.call(null,chunk__5520_5525,i__5522_5527);prepend_BANG_.call(null,parent__$1,c_5528);
{
var G__5529 = seq__5519_5524;
var G__5530 = chunk__5520_5525;
var G__5531 = count__5521_5526;
var G__5532 = (i__5522_5527 + (1));
seq__5519_5524 = G__5529;
chunk__5520_5525 = G__5530;
count__5521_5526 = G__5531;
i__5522_5527 = G__5532;
continue;
}
} else
{var temp__4126__auto___5533 = cljs.core.seq.call(null,seq__5519_5524);if(temp__4126__auto___5533)
{var seq__5519_5534__$1 = temp__4126__auto___5533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5519_5534__$1))
{var c__4314__auto___5535 = cljs.core.chunk_first.call(null,seq__5519_5534__$1);{
var G__5536 = cljs.core.chunk_rest.call(null,seq__5519_5534__$1);
var G__5537 = c__4314__auto___5535;
var G__5538 = cljs.core.count.call(null,c__4314__auto___5535);
var G__5539 = (0);
seq__5519_5524 = G__5536;
chunk__5520_5525 = G__5537;
count__5521_5526 = G__5538;
i__5522_5527 = G__5539;
continue;
}
} else
{var c_5540 = cljs.core.first.call(null,seq__5519_5534__$1);prepend_BANG_.call(null,parent__$1,c_5540);
{
var G__5541 = cljs.core.next.call(null,seq__5519_5534__$1);
var G__5542 = null;
var G__5543 = (0);
var G__5544 = (0);
seq__5519_5524 = G__5541;
chunk__5520_5525 = G__5542;
count__5521_5526 = G__5543;
i__5522_5527 = G__5544;
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
var G__5523 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5523__delegate.call(this,parent,child,more_children);};
G__5523.cljs$lang$maxFixedArity = 2;
G__5523.cljs$lang$applyTo = (function (arglist__5545){
var parent = cljs.core.first(arglist__5545);
arglist__5545 = cljs.core.next(arglist__5545);
var child = cljs.core.first(arglist__5545);
var more_children = cljs.core.rest(arglist__5545);
return G__5523__delegate(parent,child,more_children);
});
G__5523.cljs$core$IFn$_invoke$arity$variadic = G__5523__delegate;
return G__5523;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___5546 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___5546))
{var next_5547 = temp__4124__auto___5546;parent.insertBefore(actual_node,next_5547);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__5549 = dommy.template.__GT_node_like.call(null,parent);G__5549.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5549,node_like);
return G__5549;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__5551 = elem__$1.parentNode;G__5551.removeChild(elem__$1);
return G__5551;
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
return (function (p__5557){var vec__5558 = p__5557;var k = cljs.core.nth.call(null,vec__5558,(0),null);var v = cljs.core.nth.call(null,vec__5558,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t5559 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t5559 = (function (v,k,vec__5558,p__5557,container,key_selectors_map,template,selector_map,meta5560){
this.v = v;
this.k = k;
this.vec__5558 = vec__5558;
this.p__5557 = p__5557;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta5560 = meta5560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t5559.cljs$lang$type = true;
dommy.core.t5559.cljs$lang$ctorStr = "dommy.core/t5559";
dommy.core.t5559.cljs$lang$ctorPrWriter = ((function (vec__5558,k,v,container){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"dommy.core/t5559");
});})(vec__5558,k,v,container))
;
dommy.core.t5559.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__5558,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__5558,k,v,container))
;
dommy.core.t5559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__5558,k,v,container){
return (function (_5561){var self__ = this;
var _5561__$1 = this;return self__.meta5560;
});})(vec__5558,k,v,container))
;
dommy.core.t5559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__5558,k,v,container){
return (function (_5561,meta5560__$1){var self__ = this;
var _5561__$1 = this;return (new dommy.core.t5559(self__.v,self__.k,self__.vec__5558,self__.p__5557,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta5560__$1));
});})(vec__5558,k,v,container))
;
dommy.core.__GT_t5559 = ((function (vec__5558,k,v,container){
return (function __GT_t5559(v__$1,k__$1,vec__5558__$1,p__5557__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5560){return (new dommy.core.t5559(v__$1,k__$1,vec__5558__$1,p__5557__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5560));
});})(vec__5558,k,v,container))
;
}
return (new dommy.core.t5559(v,k,vec__5558,p__5557,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5562_SHARP_){return p1__5562_SHARP_.parentNode;
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
return (function (p1__5563_SHARP_){return !((p1__5563_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5564){var vec__5565 = p__5564;var special_mouse_event = cljs.core.nth.call(null,vec__5565,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__5565,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__5565,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__5565,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3558__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3546__auto__ = related_target;if(cljs.core.truth_(and__3546__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3546__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__5565,special_mouse_event,real_mouse_event))
});})(vec__5565,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3546__auto__ = selected_target;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3546__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3558__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5566){
var elem = cljs.core.first(arglist__5566);
arglist__5566 = cljs.core.next(arglist__5566);
var f = cljs.core.first(arglist__5566);
var args = cljs.core.rest(arglist__5566);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5567_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5567_SHARP_));
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
var vec__5591_5614 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5615 = cljs.core.nth.call(null,vec__5591_5614,(0),null);var selector_5616 = cljs.core.nth.call(null,vec__5591_5614,(1),null);var seq__5592_5617 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5599_5618 = null;var count__5600_5619 = (0);var i__5601_5620 = (0);while(true){
if((i__5601_5620 < count__5600_5619))
{var vec__5608_5621 = cljs.core._nth.call(null,chunk__5599_5618,i__5601_5620);var orig_type_5622 = cljs.core.nth.call(null,vec__5608_5621,(0),null);var f_5623 = cljs.core.nth.call(null,vec__5608_5621,(1),null);var seq__5602_5624 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5622,new cljs.core.PersistentArrayMap.fromArray([orig_type_5622,cljs.core.identity], true, false)));var chunk__5604_5625 = null;var count__5605_5626 = (0);var i__5606_5627 = (0);while(true){
if((i__5606_5627 < count__5605_5626))
{var vec__5609_5628 = cljs.core._nth.call(null,chunk__5604_5625,i__5606_5627);var actual_type_5629 = cljs.core.nth.call(null,vec__5609_5628,(0),null);var factory_5630 = cljs.core.nth.call(null,vec__5609_5628,(1),null);var canonical_f_5631 = (cljs.core.truth_(selector_5616)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5615,selector_5616):cljs.core.identity).call(null,factory_5630.call(null,f_5623));dommy.core.update_event_listeners_BANG_.call(null,elem_5615,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5616,actual_type_5629,f_5623], null),canonical_f_5631);
if(cljs.core.truth_(elem_5615.addEventListener))
{elem_5615.addEventListener(cljs.core.name.call(null,actual_type_5629),canonical_f_5631);
} else
{elem_5615.attachEvent(cljs.core.name.call(null,actual_type_5629),canonical_f_5631);
}
{
var G__5632 = seq__5602_5624;
var G__5633 = chunk__5604_5625;
var G__5634 = count__5605_5626;
var G__5635 = (i__5606_5627 + (1));
seq__5602_5624 = G__5632;
chunk__5604_5625 = G__5633;
count__5605_5626 = G__5634;
i__5606_5627 = G__5635;
continue;
}
} else
{var temp__4126__auto___5636 = cljs.core.seq.call(null,seq__5602_5624);if(temp__4126__auto___5636)
{var seq__5602_5637__$1 = temp__4126__auto___5636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5602_5637__$1))
{var c__4314__auto___5638 = cljs.core.chunk_first.call(null,seq__5602_5637__$1);{
var G__5639 = cljs.core.chunk_rest.call(null,seq__5602_5637__$1);
var G__5640 = c__4314__auto___5638;
var G__5641 = cljs.core.count.call(null,c__4314__auto___5638);
var G__5642 = (0);
seq__5602_5624 = G__5639;
chunk__5604_5625 = G__5640;
count__5605_5626 = G__5641;
i__5606_5627 = G__5642;
continue;
}
} else
{var vec__5610_5643 = cljs.core.first.call(null,seq__5602_5637__$1);var actual_type_5644 = cljs.core.nth.call(null,vec__5610_5643,(0),null);var factory_5645 = cljs.core.nth.call(null,vec__5610_5643,(1),null);var canonical_f_5646 = (cljs.core.truth_(selector_5616)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5615,selector_5616):cljs.core.identity).call(null,factory_5645.call(null,f_5623));dommy.core.update_event_listeners_BANG_.call(null,elem_5615,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5616,actual_type_5644,f_5623], null),canonical_f_5646);
if(cljs.core.truth_(elem_5615.addEventListener))
{elem_5615.addEventListener(cljs.core.name.call(null,actual_type_5644),canonical_f_5646);
} else
{elem_5615.attachEvent(cljs.core.name.call(null,actual_type_5644),canonical_f_5646);
}
{
var G__5647 = cljs.core.next.call(null,seq__5602_5637__$1);
var G__5648 = null;
var G__5649 = (0);
var G__5650 = (0);
seq__5602_5624 = G__5647;
chunk__5604_5625 = G__5648;
count__5605_5626 = G__5649;
i__5606_5627 = G__5650;
continue;
}
}
} else
{}
}
break;
}
{
var G__5651 = seq__5592_5617;
var G__5652 = chunk__5599_5618;
var G__5653 = count__5600_5619;
var G__5654 = (i__5601_5620 + (1));
seq__5592_5617 = G__5651;
chunk__5599_5618 = G__5652;
count__5600_5619 = G__5653;
i__5601_5620 = G__5654;
continue;
}
} else
{var temp__4126__auto___5655 = cljs.core.seq.call(null,seq__5592_5617);if(temp__4126__auto___5655)
{var seq__5592_5656__$1 = temp__4126__auto___5655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5592_5656__$1))
{var c__4314__auto___5657 = cljs.core.chunk_first.call(null,seq__5592_5656__$1);{
var G__5658 = cljs.core.chunk_rest.call(null,seq__5592_5656__$1);
var G__5659 = c__4314__auto___5657;
var G__5660 = cljs.core.count.call(null,c__4314__auto___5657);
var G__5661 = (0);
seq__5592_5617 = G__5658;
chunk__5599_5618 = G__5659;
count__5600_5619 = G__5660;
i__5601_5620 = G__5661;
continue;
}
} else
{var vec__5611_5662 = cljs.core.first.call(null,seq__5592_5656__$1);var orig_type_5663 = cljs.core.nth.call(null,vec__5611_5662,(0),null);var f_5664 = cljs.core.nth.call(null,vec__5611_5662,(1),null);var seq__5593_5665 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5663,new cljs.core.PersistentArrayMap.fromArray([orig_type_5663,cljs.core.identity], true, false)));var chunk__5595_5666 = null;var count__5596_5667 = (0);var i__5597_5668 = (0);while(true){
if((i__5597_5668 < count__5596_5667))
{var vec__5612_5669 = cljs.core._nth.call(null,chunk__5595_5666,i__5597_5668);var actual_type_5670 = cljs.core.nth.call(null,vec__5612_5669,(0),null);var factory_5671 = cljs.core.nth.call(null,vec__5612_5669,(1),null);var canonical_f_5672 = (cljs.core.truth_(selector_5616)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5615,selector_5616):cljs.core.identity).call(null,factory_5671.call(null,f_5664));dommy.core.update_event_listeners_BANG_.call(null,elem_5615,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5616,actual_type_5670,f_5664], null),canonical_f_5672);
if(cljs.core.truth_(elem_5615.addEventListener))
{elem_5615.addEventListener(cljs.core.name.call(null,actual_type_5670),canonical_f_5672);
} else
{elem_5615.attachEvent(cljs.core.name.call(null,actual_type_5670),canonical_f_5672);
}
{
var G__5673 = seq__5593_5665;
var G__5674 = chunk__5595_5666;
var G__5675 = count__5596_5667;
var G__5676 = (i__5597_5668 + (1));
seq__5593_5665 = G__5673;
chunk__5595_5666 = G__5674;
count__5596_5667 = G__5675;
i__5597_5668 = G__5676;
continue;
}
} else
{var temp__4126__auto___5677__$1 = cljs.core.seq.call(null,seq__5593_5665);if(temp__4126__auto___5677__$1)
{var seq__5593_5678__$1 = temp__4126__auto___5677__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5593_5678__$1))
{var c__4314__auto___5679 = cljs.core.chunk_first.call(null,seq__5593_5678__$1);{
var G__5680 = cljs.core.chunk_rest.call(null,seq__5593_5678__$1);
var G__5681 = c__4314__auto___5679;
var G__5682 = cljs.core.count.call(null,c__4314__auto___5679);
var G__5683 = (0);
seq__5593_5665 = G__5680;
chunk__5595_5666 = G__5681;
count__5596_5667 = G__5682;
i__5597_5668 = G__5683;
continue;
}
} else
{var vec__5613_5684 = cljs.core.first.call(null,seq__5593_5678__$1);var actual_type_5685 = cljs.core.nth.call(null,vec__5613_5684,(0),null);var factory_5686 = cljs.core.nth.call(null,vec__5613_5684,(1),null);var canonical_f_5687 = (cljs.core.truth_(selector_5616)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5615,selector_5616):cljs.core.identity).call(null,factory_5686.call(null,f_5664));dommy.core.update_event_listeners_BANG_.call(null,elem_5615,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5616,actual_type_5685,f_5664], null),canonical_f_5687);
if(cljs.core.truth_(elem_5615.addEventListener))
{elem_5615.addEventListener(cljs.core.name.call(null,actual_type_5685),canonical_f_5687);
} else
{elem_5615.attachEvent(cljs.core.name.call(null,actual_type_5685),canonical_f_5687);
}
{
var G__5688 = cljs.core.next.call(null,seq__5593_5678__$1);
var G__5689 = null;
var G__5690 = (0);
var G__5691 = (0);
seq__5593_5665 = G__5688;
chunk__5595_5666 = G__5689;
count__5596_5667 = G__5690;
i__5597_5668 = G__5691;
continue;
}
}
} else
{}
}
break;
}
{
var G__5692 = cljs.core.next.call(null,seq__5592_5656__$1);
var G__5693 = null;
var G__5694 = (0);
var G__5695 = (0);
seq__5592_5617 = G__5692;
chunk__5599_5618 = G__5693;
count__5600_5619 = G__5694;
i__5601_5620 = G__5695;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__5696){
var elem_sel = cljs.core.first(arglist__5696);
var type_fs = cljs.core.rest(arglist__5696);
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
var vec__5720_5743 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5744 = cljs.core.nth.call(null,vec__5720_5743,(0),null);var selector_5745 = cljs.core.nth.call(null,vec__5720_5743,(1),null);var seq__5721_5746 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5728_5747 = null;var count__5729_5748 = (0);var i__5730_5749 = (0);while(true){
if((i__5730_5749 < count__5729_5748))
{var vec__5737_5750 = cljs.core._nth.call(null,chunk__5728_5747,i__5730_5749);var orig_type_5751 = cljs.core.nth.call(null,vec__5737_5750,(0),null);var f_5752 = cljs.core.nth.call(null,vec__5737_5750,(1),null);var seq__5731_5753 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5751,new cljs.core.PersistentArrayMap.fromArray([orig_type_5751,cljs.core.identity], true, false)));var chunk__5733_5754 = null;var count__5734_5755 = (0);var i__5735_5756 = (0);while(true){
if((i__5735_5756 < count__5734_5755))
{var vec__5738_5757 = cljs.core._nth.call(null,chunk__5733_5754,i__5735_5756);var actual_type_5758 = cljs.core.nth.call(null,vec__5738_5757,(0),null);var __5759 = cljs.core.nth.call(null,vec__5738_5757,(1),null);var keys_5760 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5745,actual_type_5758,f_5752], null);var canonical_f_5761 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5744),keys_5760);dommy.core.update_event_listeners_BANG_.call(null,elem_5744,dommy.utils.dissoc_in,keys_5760);
if(cljs.core.truth_(elem_5744.removeEventListener))
{elem_5744.removeEventListener(cljs.core.name.call(null,actual_type_5758),canonical_f_5761);
} else
{elem_5744.detachEvent(cljs.core.name.call(null,actual_type_5758),canonical_f_5761);
}
{
var G__5762 = seq__5731_5753;
var G__5763 = chunk__5733_5754;
var G__5764 = count__5734_5755;
var G__5765 = (i__5735_5756 + (1));
seq__5731_5753 = G__5762;
chunk__5733_5754 = G__5763;
count__5734_5755 = G__5764;
i__5735_5756 = G__5765;
continue;
}
} else
{var temp__4126__auto___5766 = cljs.core.seq.call(null,seq__5731_5753);if(temp__4126__auto___5766)
{var seq__5731_5767__$1 = temp__4126__auto___5766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5731_5767__$1))
{var c__4314__auto___5768 = cljs.core.chunk_first.call(null,seq__5731_5767__$1);{
var G__5769 = cljs.core.chunk_rest.call(null,seq__5731_5767__$1);
var G__5770 = c__4314__auto___5768;
var G__5771 = cljs.core.count.call(null,c__4314__auto___5768);
var G__5772 = (0);
seq__5731_5753 = G__5769;
chunk__5733_5754 = G__5770;
count__5734_5755 = G__5771;
i__5735_5756 = G__5772;
continue;
}
} else
{var vec__5739_5773 = cljs.core.first.call(null,seq__5731_5767__$1);var actual_type_5774 = cljs.core.nth.call(null,vec__5739_5773,(0),null);var __5775 = cljs.core.nth.call(null,vec__5739_5773,(1),null);var keys_5776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5745,actual_type_5774,f_5752], null);var canonical_f_5777 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5744),keys_5776);dommy.core.update_event_listeners_BANG_.call(null,elem_5744,dommy.utils.dissoc_in,keys_5776);
if(cljs.core.truth_(elem_5744.removeEventListener))
{elem_5744.removeEventListener(cljs.core.name.call(null,actual_type_5774),canonical_f_5777);
} else
{elem_5744.detachEvent(cljs.core.name.call(null,actual_type_5774),canonical_f_5777);
}
{
var G__5778 = cljs.core.next.call(null,seq__5731_5767__$1);
var G__5779 = null;
var G__5780 = (0);
var G__5781 = (0);
seq__5731_5753 = G__5778;
chunk__5733_5754 = G__5779;
count__5734_5755 = G__5780;
i__5735_5756 = G__5781;
continue;
}
}
} else
{}
}
break;
}
{
var G__5782 = seq__5721_5746;
var G__5783 = chunk__5728_5747;
var G__5784 = count__5729_5748;
var G__5785 = (i__5730_5749 + (1));
seq__5721_5746 = G__5782;
chunk__5728_5747 = G__5783;
count__5729_5748 = G__5784;
i__5730_5749 = G__5785;
continue;
}
} else
{var temp__4126__auto___5786 = cljs.core.seq.call(null,seq__5721_5746);if(temp__4126__auto___5786)
{var seq__5721_5787__$1 = temp__4126__auto___5786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5721_5787__$1))
{var c__4314__auto___5788 = cljs.core.chunk_first.call(null,seq__5721_5787__$1);{
var G__5789 = cljs.core.chunk_rest.call(null,seq__5721_5787__$1);
var G__5790 = c__4314__auto___5788;
var G__5791 = cljs.core.count.call(null,c__4314__auto___5788);
var G__5792 = (0);
seq__5721_5746 = G__5789;
chunk__5728_5747 = G__5790;
count__5729_5748 = G__5791;
i__5730_5749 = G__5792;
continue;
}
} else
{var vec__5740_5793 = cljs.core.first.call(null,seq__5721_5787__$1);var orig_type_5794 = cljs.core.nth.call(null,vec__5740_5793,(0),null);var f_5795 = cljs.core.nth.call(null,vec__5740_5793,(1),null);var seq__5722_5796 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5794,new cljs.core.PersistentArrayMap.fromArray([orig_type_5794,cljs.core.identity], true, false)));var chunk__5724_5797 = null;var count__5725_5798 = (0);var i__5726_5799 = (0);while(true){
if((i__5726_5799 < count__5725_5798))
{var vec__5741_5800 = cljs.core._nth.call(null,chunk__5724_5797,i__5726_5799);var actual_type_5801 = cljs.core.nth.call(null,vec__5741_5800,(0),null);var __5802 = cljs.core.nth.call(null,vec__5741_5800,(1),null);var keys_5803 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5745,actual_type_5801,f_5795], null);var canonical_f_5804 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5744),keys_5803);dommy.core.update_event_listeners_BANG_.call(null,elem_5744,dommy.utils.dissoc_in,keys_5803);
if(cljs.core.truth_(elem_5744.removeEventListener))
{elem_5744.removeEventListener(cljs.core.name.call(null,actual_type_5801),canonical_f_5804);
} else
{elem_5744.detachEvent(cljs.core.name.call(null,actual_type_5801),canonical_f_5804);
}
{
var G__5805 = seq__5722_5796;
var G__5806 = chunk__5724_5797;
var G__5807 = count__5725_5798;
var G__5808 = (i__5726_5799 + (1));
seq__5722_5796 = G__5805;
chunk__5724_5797 = G__5806;
count__5725_5798 = G__5807;
i__5726_5799 = G__5808;
continue;
}
} else
{var temp__4126__auto___5809__$1 = cljs.core.seq.call(null,seq__5722_5796);if(temp__4126__auto___5809__$1)
{var seq__5722_5810__$1 = temp__4126__auto___5809__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5722_5810__$1))
{var c__4314__auto___5811 = cljs.core.chunk_first.call(null,seq__5722_5810__$1);{
var G__5812 = cljs.core.chunk_rest.call(null,seq__5722_5810__$1);
var G__5813 = c__4314__auto___5811;
var G__5814 = cljs.core.count.call(null,c__4314__auto___5811);
var G__5815 = (0);
seq__5722_5796 = G__5812;
chunk__5724_5797 = G__5813;
count__5725_5798 = G__5814;
i__5726_5799 = G__5815;
continue;
}
} else
{var vec__5742_5816 = cljs.core.first.call(null,seq__5722_5810__$1);var actual_type_5817 = cljs.core.nth.call(null,vec__5742_5816,(0),null);var __5818 = cljs.core.nth.call(null,vec__5742_5816,(1),null);var keys_5819 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5745,actual_type_5817,f_5795], null);var canonical_f_5820 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5744),keys_5819);dommy.core.update_event_listeners_BANG_.call(null,elem_5744,dommy.utils.dissoc_in,keys_5819);
if(cljs.core.truth_(elem_5744.removeEventListener))
{elem_5744.removeEventListener(cljs.core.name.call(null,actual_type_5817),canonical_f_5820);
} else
{elem_5744.detachEvent(cljs.core.name.call(null,actual_type_5817),canonical_f_5820);
}
{
var G__5821 = cljs.core.next.call(null,seq__5722_5810__$1);
var G__5822 = null;
var G__5823 = (0);
var G__5824 = (0);
seq__5722_5796 = G__5821;
chunk__5724_5797 = G__5822;
count__5725_5798 = G__5823;
i__5726_5799 = G__5824;
continue;
}
}
} else
{}
}
break;
}
{
var G__5825 = cljs.core.next.call(null,seq__5721_5787__$1);
var G__5826 = null;
var G__5827 = (0);
var G__5828 = (0);
seq__5721_5746 = G__5825;
chunk__5728_5747 = G__5826;
count__5729_5748 = G__5827;
i__5730_5749 = G__5828;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5829){
var elem_sel = cljs.core.first(arglist__5829);
var type_fs = cljs.core.rest(arglist__5829);
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
var vec__5837_5844 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5845 = cljs.core.nth.call(null,vec__5837_5844,(0),null);var selector_5846 = cljs.core.nth.call(null,vec__5837_5844,(1),null);var seq__5838_5847 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5839_5848 = null;var count__5840_5849 = (0);var i__5841_5850 = (0);while(true){
if((i__5841_5850 < count__5840_5849))
{var vec__5842_5851 = cljs.core._nth.call(null,chunk__5839_5848,i__5841_5850);var type_5852 = cljs.core.nth.call(null,vec__5842_5851,(0),null);var f_5853 = cljs.core.nth.call(null,vec__5842_5851,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_5852,((function (seq__5838_5847,chunk__5839_5848,count__5840_5849,i__5841_5850,vec__5842_5851,type_5852,f_5853,vec__5837_5844,elem_5845,selector_5846){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5852,this_fn);
return f_5853.call(null,e);
});})(seq__5838_5847,chunk__5839_5848,count__5840_5849,i__5841_5850,vec__5842_5851,type_5852,f_5853,vec__5837_5844,elem_5845,selector_5846))
);
{
var G__5854 = seq__5838_5847;
var G__5855 = chunk__5839_5848;
var G__5856 = count__5840_5849;
var G__5857 = (i__5841_5850 + (1));
seq__5838_5847 = G__5854;
chunk__5839_5848 = G__5855;
count__5840_5849 = G__5856;
i__5841_5850 = G__5857;
continue;
}
} else
{var temp__4126__auto___5858 = cljs.core.seq.call(null,seq__5838_5847);if(temp__4126__auto___5858)
{var seq__5838_5859__$1 = temp__4126__auto___5858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5838_5859__$1))
{var c__4314__auto___5860 = cljs.core.chunk_first.call(null,seq__5838_5859__$1);{
var G__5861 = cljs.core.chunk_rest.call(null,seq__5838_5859__$1);
var G__5862 = c__4314__auto___5860;
var G__5863 = cljs.core.count.call(null,c__4314__auto___5860);
var G__5864 = (0);
seq__5838_5847 = G__5861;
chunk__5839_5848 = G__5862;
count__5840_5849 = G__5863;
i__5841_5850 = G__5864;
continue;
}
} else
{var vec__5843_5865 = cljs.core.first.call(null,seq__5838_5859__$1);var type_5866 = cljs.core.nth.call(null,vec__5843_5865,(0),null);var f_5867 = cljs.core.nth.call(null,vec__5843_5865,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_5866,((function (seq__5838_5847,chunk__5839_5848,count__5840_5849,i__5841_5850,vec__5843_5865,type_5866,f_5867,seq__5838_5859__$1,temp__4126__auto___5858,vec__5837_5844,elem_5845,selector_5846){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5866,this_fn);
return f_5867.call(null,e);
});})(seq__5838_5847,chunk__5839_5848,count__5840_5849,i__5841_5850,vec__5843_5865,type_5866,f_5867,seq__5838_5859__$1,temp__4126__auto___5858,vec__5837_5844,elem_5845,selector_5846))
);
{
var G__5868 = cljs.core.next.call(null,seq__5838_5859__$1);
var G__5869 = null;
var G__5870 = (0);
var G__5871 = (0);
seq__5838_5847 = G__5868;
chunk__5839_5848 = G__5869;
count__5840_5849 = G__5870;
i__5841_5850 = G__5871;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5872){
var elem_sel = cljs.core.first(arglist__5872);
var type_fs = cljs.core.rest(arglist__5872);
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
var fire_BANG___delegate = function (node,event_type,p__5873){var vec__5875 = p__5873;var update_event_BANG_ = cljs.core.nth.call(null,vec__5875,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3558__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var p__5873 = null;if (arguments.length > 2) {
  p__5873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__5873);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5876){
var node = cljs.core.first(arglist__5876);
arglist__5876 = cljs.core.next(arglist__5876);
var event_type = cljs.core.first(arglist__5876);
var p__5873 = cljs.core.rest(arglist__5876);
return fire_BANG___delegate(node,event_type,p__5873);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map