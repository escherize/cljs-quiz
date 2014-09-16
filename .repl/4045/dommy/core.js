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
dommy.core.text = (function text(elem){var or__5776__auto__ = elem.textContent;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11416 = dommy.template.__GT_node_like.call(null,parent);G__11416.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11416;
});
var append_BANG___3 = (function() { 
var G__11421__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11417_11422 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11418_11423 = null;var count__11419_11424 = (0);var i__11420_11425 = (0);while(true){
if((i__11420_11425 < count__11419_11424))
{var c_11426 = cljs.core._nth.call(null,chunk__11418_11423,i__11420_11425);append_BANG_.call(null,parent__$1,c_11426);
{
var G__11427 = seq__11417_11422;
var G__11428 = chunk__11418_11423;
var G__11429 = count__11419_11424;
var G__11430 = (i__11420_11425 + (1));
seq__11417_11422 = G__11427;
chunk__11418_11423 = G__11428;
count__11419_11424 = G__11429;
i__11420_11425 = G__11430;
continue;
}
} else
{var temp__4126__auto___11431 = cljs.core.seq.call(null,seq__11417_11422);if(temp__4126__auto___11431)
{var seq__11417_11432__$1 = temp__4126__auto___11431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11417_11432__$1))
{var c__6919__auto___11433 = cljs.core.chunk_first.call(null,seq__11417_11432__$1);{
var G__11434 = cljs.core.chunk_rest.call(null,seq__11417_11432__$1);
var G__11435 = c__6919__auto___11433;
var G__11436 = cljs.core.count.call(null,c__6919__auto___11433);
var G__11437 = (0);
seq__11417_11422 = G__11434;
chunk__11418_11423 = G__11435;
count__11419_11424 = G__11436;
i__11420_11425 = G__11437;
continue;
}
} else
{var c_11438 = cljs.core.first.call(null,seq__11417_11432__$1);append_BANG_.call(null,parent__$1,c_11438);
{
var G__11439 = cljs.core.next.call(null,seq__11417_11432__$1);
var G__11440 = null;
var G__11441 = (0);
var G__11442 = (0);
seq__11417_11422 = G__11439;
chunk__11418_11423 = G__11440;
count__11419_11424 = G__11441;
i__11420_11425 = G__11442;
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
var G__11421 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11421__delegate.call(this,parent,child,more_children);};
G__11421.cljs$lang$maxFixedArity = 2;
G__11421.cljs$lang$applyTo = (function (arglist__11443){
var parent = cljs.core.first(arglist__11443);
arglist__11443 = cljs.core.next(arglist__11443);
var child = cljs.core.first(arglist__11443);
var more_children = cljs.core.rest(arglist__11443);
return G__11421__delegate(parent,child,more_children);
});
G__11421.cljs$core$IFn$_invoke$arity$variadic = G__11421__delegate;
return G__11421;
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
var G__11452__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11448_11453 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11449_11454 = null;var count__11450_11455 = (0);var i__11451_11456 = (0);while(true){
if((i__11451_11456 < count__11450_11455))
{var c_11457 = cljs.core._nth.call(null,chunk__11449_11454,i__11451_11456);prepend_BANG_.call(null,parent__$1,c_11457);
{
var G__11458 = seq__11448_11453;
var G__11459 = chunk__11449_11454;
var G__11460 = count__11450_11455;
var G__11461 = (i__11451_11456 + (1));
seq__11448_11453 = G__11458;
chunk__11449_11454 = G__11459;
count__11450_11455 = G__11460;
i__11451_11456 = G__11461;
continue;
}
} else
{var temp__4126__auto___11462 = cljs.core.seq.call(null,seq__11448_11453);if(temp__4126__auto___11462)
{var seq__11448_11463__$1 = temp__4126__auto___11462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11448_11463__$1))
{var c__6919__auto___11464 = cljs.core.chunk_first.call(null,seq__11448_11463__$1);{
var G__11465 = cljs.core.chunk_rest.call(null,seq__11448_11463__$1);
var G__11466 = c__6919__auto___11464;
var G__11467 = cljs.core.count.call(null,c__6919__auto___11464);
var G__11468 = (0);
seq__11448_11453 = G__11465;
chunk__11449_11454 = G__11466;
count__11450_11455 = G__11467;
i__11451_11456 = G__11468;
continue;
}
} else
{var c_11469 = cljs.core.first.call(null,seq__11448_11463__$1);prepend_BANG_.call(null,parent__$1,c_11469);
{
var G__11470 = cljs.core.next.call(null,seq__11448_11463__$1);
var G__11471 = null;
var G__11472 = (0);
var G__11473 = (0);
seq__11448_11453 = G__11470;
chunk__11449_11454 = G__11471;
count__11450_11455 = G__11472;
i__11451_11456 = G__11473;
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
var G__11452 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11452__delegate.call(this,parent,child,more_children);};
G__11452.cljs$lang$maxFixedArity = 2;
G__11452.cljs$lang$applyTo = (function (arglist__11474){
var parent = cljs.core.first(arglist__11474);
arglist__11474 = cljs.core.next(arglist__11474);
var child = cljs.core.first(arglist__11474);
var more_children = cljs.core.rest(arglist__11474);
return G__11452__delegate(parent,child,more_children);
});
G__11452.cljs$core$IFn$_invoke$arity$variadic = G__11452__delegate;
return G__11452;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11475 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11475))
{var next_11476 = temp__4124__auto___11475;parent.insertBefore(actual_node,next_11476);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11478 = dommy.template.__GT_node_like.call(null,parent);G__11478.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11478,node_like);
return G__11478;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11480 = elem__$1.parentNode;G__11480.removeChild(elem__$1);
return G__11480;
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
return (function (p__11486){var vec__11487 = p__11486;var k = cljs.core.nth.call(null,vec__11487,(0),null);var v = cljs.core.nth.call(null,vec__11487,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11488 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11488 = (function (v,k,vec__11487,p__11486,container,key_selectors_map,template,selector_map,meta11489){
this.v = v;
this.k = k;
this.vec__11487 = vec__11487;
this.p__11486 = p__11486;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11489 = meta11489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11488.cljs$lang$type = true;
dommy.core.t11488.cljs$lang$ctorStr = "dommy.core/t11488";
dommy.core.t11488.cljs$lang$ctorPrWriter = ((function (vec__11487,k,v,container){
return (function (this__6639__auto__,writer__6640__auto__,opt__6641__auto__){return cljs.core._write.call(null,writer__6640__auto__,"dommy.core/t11488");
});})(vec__11487,k,v,container))
;
dommy.core.t11488.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11487,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11487,k,v,container))
;
dommy.core.t11488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11487,k,v,container){
return (function (_11490){var self__ = this;
var _11490__$1 = this;return self__.meta11489;
});})(vec__11487,k,v,container))
;
dommy.core.t11488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11487,k,v,container){
return (function (_11490,meta11489__$1){var self__ = this;
var _11490__$1 = this;return (new dommy.core.t11488(self__.v,self__.k,self__.vec__11487,self__.p__11486,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11489__$1));
});})(vec__11487,k,v,container))
;
dommy.core.__GT_t11488 = ((function (vec__11487,k,v,container){
return (function __GT_t11488(v__$1,k__$1,vec__11487__$1,p__11486__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11489){return (new dommy.core.t11488(v__$1,k__$1,vec__11487__$1,p__11486__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11489));
});})(vec__11487,k,v,container))
;
}
return (new dommy.core.t11488(v,k,vec__11487,p__11486,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11491_SHARP_){return p1__11491_SHARP_.parentNode;
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
return (function (p1__11492_SHARP_){return !((p1__11492_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11493){var vec__11494 = p__11493;var special_mouse_event = cljs.core.nth.call(null,vec__11494,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__11494,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11494,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11494,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5776__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__5753__auto__ = related_target;if(cljs.core.truth_(and__5753__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__5753__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__11494,special_mouse_event,real_mouse_event))
});})(vec__11494,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__5753__auto__ = selected_target;if(cljs.core.truth_(and__5753__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__5753__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__5776__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11495){
var elem = cljs.core.first(arglist__11495);
arglist__11495 = cljs.core.next(arglist__11495);
var f = cljs.core.first(arglist__11495);
var args = cljs.core.rest(arglist__11495);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11496_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11496_SHARP_));
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
var vec__11520_11543 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11544 = cljs.core.nth.call(null,vec__11520_11543,(0),null);var selector_11545 = cljs.core.nth.call(null,vec__11520_11543,(1),null);var seq__11521_11546 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11528_11547 = null;var count__11529_11548 = (0);var i__11530_11549 = (0);while(true){
if((i__11530_11549 < count__11529_11548))
{var vec__11537_11550 = cljs.core._nth.call(null,chunk__11528_11547,i__11530_11549);var orig_type_11551 = cljs.core.nth.call(null,vec__11537_11550,(0),null);var f_11552 = cljs.core.nth.call(null,vec__11537_11550,(1),null);var seq__11531_11553 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11551,new cljs.core.PersistentArrayMap.fromArray([orig_type_11551,cljs.core.identity], true, false)));var chunk__11533_11554 = null;var count__11534_11555 = (0);var i__11535_11556 = (0);while(true){
if((i__11535_11556 < count__11534_11555))
{var vec__11538_11557 = cljs.core._nth.call(null,chunk__11533_11554,i__11535_11556);var actual_type_11558 = cljs.core.nth.call(null,vec__11538_11557,(0),null);var factory_11559 = cljs.core.nth.call(null,vec__11538_11557,(1),null);var canonical_f_11560 = (cljs.core.truth_(selector_11545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11544,selector_11545):cljs.core.identity).call(null,factory_11559.call(null,f_11552));dommy.core.update_event_listeners_BANG_.call(null,elem_11544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11545,actual_type_11558,f_11552], null),canonical_f_11560);
if(cljs.core.truth_(elem_11544.addEventListener))
{elem_11544.addEventListener(cljs.core.name.call(null,actual_type_11558),canonical_f_11560);
} else
{elem_11544.attachEvent(cljs.core.name.call(null,actual_type_11558),canonical_f_11560);
}
{
var G__11561 = seq__11531_11553;
var G__11562 = chunk__11533_11554;
var G__11563 = count__11534_11555;
var G__11564 = (i__11535_11556 + (1));
seq__11531_11553 = G__11561;
chunk__11533_11554 = G__11562;
count__11534_11555 = G__11563;
i__11535_11556 = G__11564;
continue;
}
} else
{var temp__4126__auto___11565 = cljs.core.seq.call(null,seq__11531_11553);if(temp__4126__auto___11565)
{var seq__11531_11566__$1 = temp__4126__auto___11565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11531_11566__$1))
{var c__6919__auto___11567 = cljs.core.chunk_first.call(null,seq__11531_11566__$1);{
var G__11568 = cljs.core.chunk_rest.call(null,seq__11531_11566__$1);
var G__11569 = c__6919__auto___11567;
var G__11570 = cljs.core.count.call(null,c__6919__auto___11567);
var G__11571 = (0);
seq__11531_11553 = G__11568;
chunk__11533_11554 = G__11569;
count__11534_11555 = G__11570;
i__11535_11556 = G__11571;
continue;
}
} else
{var vec__11539_11572 = cljs.core.first.call(null,seq__11531_11566__$1);var actual_type_11573 = cljs.core.nth.call(null,vec__11539_11572,(0),null);var factory_11574 = cljs.core.nth.call(null,vec__11539_11572,(1),null);var canonical_f_11575 = (cljs.core.truth_(selector_11545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11544,selector_11545):cljs.core.identity).call(null,factory_11574.call(null,f_11552));dommy.core.update_event_listeners_BANG_.call(null,elem_11544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11545,actual_type_11573,f_11552], null),canonical_f_11575);
if(cljs.core.truth_(elem_11544.addEventListener))
{elem_11544.addEventListener(cljs.core.name.call(null,actual_type_11573),canonical_f_11575);
} else
{elem_11544.attachEvent(cljs.core.name.call(null,actual_type_11573),canonical_f_11575);
}
{
var G__11576 = cljs.core.next.call(null,seq__11531_11566__$1);
var G__11577 = null;
var G__11578 = (0);
var G__11579 = (0);
seq__11531_11553 = G__11576;
chunk__11533_11554 = G__11577;
count__11534_11555 = G__11578;
i__11535_11556 = G__11579;
continue;
}
}
} else
{}
}
break;
}
{
var G__11580 = seq__11521_11546;
var G__11581 = chunk__11528_11547;
var G__11582 = count__11529_11548;
var G__11583 = (i__11530_11549 + (1));
seq__11521_11546 = G__11580;
chunk__11528_11547 = G__11581;
count__11529_11548 = G__11582;
i__11530_11549 = G__11583;
continue;
}
} else
{var temp__4126__auto___11584 = cljs.core.seq.call(null,seq__11521_11546);if(temp__4126__auto___11584)
{var seq__11521_11585__$1 = temp__4126__auto___11584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11521_11585__$1))
{var c__6919__auto___11586 = cljs.core.chunk_first.call(null,seq__11521_11585__$1);{
var G__11587 = cljs.core.chunk_rest.call(null,seq__11521_11585__$1);
var G__11588 = c__6919__auto___11586;
var G__11589 = cljs.core.count.call(null,c__6919__auto___11586);
var G__11590 = (0);
seq__11521_11546 = G__11587;
chunk__11528_11547 = G__11588;
count__11529_11548 = G__11589;
i__11530_11549 = G__11590;
continue;
}
} else
{var vec__11540_11591 = cljs.core.first.call(null,seq__11521_11585__$1);var orig_type_11592 = cljs.core.nth.call(null,vec__11540_11591,(0),null);var f_11593 = cljs.core.nth.call(null,vec__11540_11591,(1),null);var seq__11522_11594 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11592,new cljs.core.PersistentArrayMap.fromArray([orig_type_11592,cljs.core.identity], true, false)));var chunk__11524_11595 = null;var count__11525_11596 = (0);var i__11526_11597 = (0);while(true){
if((i__11526_11597 < count__11525_11596))
{var vec__11541_11598 = cljs.core._nth.call(null,chunk__11524_11595,i__11526_11597);var actual_type_11599 = cljs.core.nth.call(null,vec__11541_11598,(0),null);var factory_11600 = cljs.core.nth.call(null,vec__11541_11598,(1),null);var canonical_f_11601 = (cljs.core.truth_(selector_11545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11544,selector_11545):cljs.core.identity).call(null,factory_11600.call(null,f_11593));dommy.core.update_event_listeners_BANG_.call(null,elem_11544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11545,actual_type_11599,f_11593], null),canonical_f_11601);
if(cljs.core.truth_(elem_11544.addEventListener))
{elem_11544.addEventListener(cljs.core.name.call(null,actual_type_11599),canonical_f_11601);
} else
{elem_11544.attachEvent(cljs.core.name.call(null,actual_type_11599),canonical_f_11601);
}
{
var G__11602 = seq__11522_11594;
var G__11603 = chunk__11524_11595;
var G__11604 = count__11525_11596;
var G__11605 = (i__11526_11597 + (1));
seq__11522_11594 = G__11602;
chunk__11524_11595 = G__11603;
count__11525_11596 = G__11604;
i__11526_11597 = G__11605;
continue;
}
} else
{var temp__4126__auto___11606__$1 = cljs.core.seq.call(null,seq__11522_11594);if(temp__4126__auto___11606__$1)
{var seq__11522_11607__$1 = temp__4126__auto___11606__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11522_11607__$1))
{var c__6919__auto___11608 = cljs.core.chunk_first.call(null,seq__11522_11607__$1);{
var G__11609 = cljs.core.chunk_rest.call(null,seq__11522_11607__$1);
var G__11610 = c__6919__auto___11608;
var G__11611 = cljs.core.count.call(null,c__6919__auto___11608);
var G__11612 = (0);
seq__11522_11594 = G__11609;
chunk__11524_11595 = G__11610;
count__11525_11596 = G__11611;
i__11526_11597 = G__11612;
continue;
}
} else
{var vec__11542_11613 = cljs.core.first.call(null,seq__11522_11607__$1);var actual_type_11614 = cljs.core.nth.call(null,vec__11542_11613,(0),null);var factory_11615 = cljs.core.nth.call(null,vec__11542_11613,(1),null);var canonical_f_11616 = (cljs.core.truth_(selector_11545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11544,selector_11545):cljs.core.identity).call(null,factory_11615.call(null,f_11593));dommy.core.update_event_listeners_BANG_.call(null,elem_11544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11545,actual_type_11614,f_11593], null),canonical_f_11616);
if(cljs.core.truth_(elem_11544.addEventListener))
{elem_11544.addEventListener(cljs.core.name.call(null,actual_type_11614),canonical_f_11616);
} else
{elem_11544.attachEvent(cljs.core.name.call(null,actual_type_11614),canonical_f_11616);
}
{
var G__11617 = cljs.core.next.call(null,seq__11522_11607__$1);
var G__11618 = null;
var G__11619 = (0);
var G__11620 = (0);
seq__11522_11594 = G__11617;
chunk__11524_11595 = G__11618;
count__11525_11596 = G__11619;
i__11526_11597 = G__11620;
continue;
}
}
} else
{}
}
break;
}
{
var G__11621 = cljs.core.next.call(null,seq__11521_11585__$1);
var G__11622 = null;
var G__11623 = (0);
var G__11624 = (0);
seq__11521_11546 = G__11621;
chunk__11528_11547 = G__11622;
count__11529_11548 = G__11623;
i__11530_11549 = G__11624;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11625){
var elem_sel = cljs.core.first(arglist__11625);
var type_fs = cljs.core.rest(arglist__11625);
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
var vec__11649_11672 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11673 = cljs.core.nth.call(null,vec__11649_11672,(0),null);var selector_11674 = cljs.core.nth.call(null,vec__11649_11672,(1),null);var seq__11650_11675 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11657_11676 = null;var count__11658_11677 = (0);var i__11659_11678 = (0);while(true){
if((i__11659_11678 < count__11658_11677))
{var vec__11666_11679 = cljs.core._nth.call(null,chunk__11657_11676,i__11659_11678);var orig_type_11680 = cljs.core.nth.call(null,vec__11666_11679,(0),null);var f_11681 = cljs.core.nth.call(null,vec__11666_11679,(1),null);var seq__11660_11682 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11680,new cljs.core.PersistentArrayMap.fromArray([orig_type_11680,cljs.core.identity], true, false)));var chunk__11662_11683 = null;var count__11663_11684 = (0);var i__11664_11685 = (0);while(true){
if((i__11664_11685 < count__11663_11684))
{var vec__11667_11686 = cljs.core._nth.call(null,chunk__11662_11683,i__11664_11685);var actual_type_11687 = cljs.core.nth.call(null,vec__11667_11686,(0),null);var __11688 = cljs.core.nth.call(null,vec__11667_11686,(1),null);var keys_11689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11674,actual_type_11687,f_11681], null);var canonical_f_11690 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11673),keys_11689);dommy.core.update_event_listeners_BANG_.call(null,elem_11673,dommy.utils.dissoc_in,keys_11689);
if(cljs.core.truth_(elem_11673.removeEventListener))
{elem_11673.removeEventListener(cljs.core.name.call(null,actual_type_11687),canonical_f_11690);
} else
{elem_11673.detachEvent(cljs.core.name.call(null,actual_type_11687),canonical_f_11690);
}
{
var G__11691 = seq__11660_11682;
var G__11692 = chunk__11662_11683;
var G__11693 = count__11663_11684;
var G__11694 = (i__11664_11685 + (1));
seq__11660_11682 = G__11691;
chunk__11662_11683 = G__11692;
count__11663_11684 = G__11693;
i__11664_11685 = G__11694;
continue;
}
} else
{var temp__4126__auto___11695 = cljs.core.seq.call(null,seq__11660_11682);if(temp__4126__auto___11695)
{var seq__11660_11696__$1 = temp__4126__auto___11695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11660_11696__$1))
{var c__6919__auto___11697 = cljs.core.chunk_first.call(null,seq__11660_11696__$1);{
var G__11698 = cljs.core.chunk_rest.call(null,seq__11660_11696__$1);
var G__11699 = c__6919__auto___11697;
var G__11700 = cljs.core.count.call(null,c__6919__auto___11697);
var G__11701 = (0);
seq__11660_11682 = G__11698;
chunk__11662_11683 = G__11699;
count__11663_11684 = G__11700;
i__11664_11685 = G__11701;
continue;
}
} else
{var vec__11668_11702 = cljs.core.first.call(null,seq__11660_11696__$1);var actual_type_11703 = cljs.core.nth.call(null,vec__11668_11702,(0),null);var __11704 = cljs.core.nth.call(null,vec__11668_11702,(1),null);var keys_11705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11674,actual_type_11703,f_11681], null);var canonical_f_11706 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11673),keys_11705);dommy.core.update_event_listeners_BANG_.call(null,elem_11673,dommy.utils.dissoc_in,keys_11705);
if(cljs.core.truth_(elem_11673.removeEventListener))
{elem_11673.removeEventListener(cljs.core.name.call(null,actual_type_11703),canonical_f_11706);
} else
{elem_11673.detachEvent(cljs.core.name.call(null,actual_type_11703),canonical_f_11706);
}
{
var G__11707 = cljs.core.next.call(null,seq__11660_11696__$1);
var G__11708 = null;
var G__11709 = (0);
var G__11710 = (0);
seq__11660_11682 = G__11707;
chunk__11662_11683 = G__11708;
count__11663_11684 = G__11709;
i__11664_11685 = G__11710;
continue;
}
}
} else
{}
}
break;
}
{
var G__11711 = seq__11650_11675;
var G__11712 = chunk__11657_11676;
var G__11713 = count__11658_11677;
var G__11714 = (i__11659_11678 + (1));
seq__11650_11675 = G__11711;
chunk__11657_11676 = G__11712;
count__11658_11677 = G__11713;
i__11659_11678 = G__11714;
continue;
}
} else
{var temp__4126__auto___11715 = cljs.core.seq.call(null,seq__11650_11675);if(temp__4126__auto___11715)
{var seq__11650_11716__$1 = temp__4126__auto___11715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11650_11716__$1))
{var c__6919__auto___11717 = cljs.core.chunk_first.call(null,seq__11650_11716__$1);{
var G__11718 = cljs.core.chunk_rest.call(null,seq__11650_11716__$1);
var G__11719 = c__6919__auto___11717;
var G__11720 = cljs.core.count.call(null,c__6919__auto___11717);
var G__11721 = (0);
seq__11650_11675 = G__11718;
chunk__11657_11676 = G__11719;
count__11658_11677 = G__11720;
i__11659_11678 = G__11721;
continue;
}
} else
{var vec__11669_11722 = cljs.core.first.call(null,seq__11650_11716__$1);var orig_type_11723 = cljs.core.nth.call(null,vec__11669_11722,(0),null);var f_11724 = cljs.core.nth.call(null,vec__11669_11722,(1),null);var seq__11651_11725 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11723,new cljs.core.PersistentArrayMap.fromArray([orig_type_11723,cljs.core.identity], true, false)));var chunk__11653_11726 = null;var count__11654_11727 = (0);var i__11655_11728 = (0);while(true){
if((i__11655_11728 < count__11654_11727))
{var vec__11670_11729 = cljs.core._nth.call(null,chunk__11653_11726,i__11655_11728);var actual_type_11730 = cljs.core.nth.call(null,vec__11670_11729,(0),null);var __11731 = cljs.core.nth.call(null,vec__11670_11729,(1),null);var keys_11732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11674,actual_type_11730,f_11724], null);var canonical_f_11733 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11673),keys_11732);dommy.core.update_event_listeners_BANG_.call(null,elem_11673,dommy.utils.dissoc_in,keys_11732);
if(cljs.core.truth_(elem_11673.removeEventListener))
{elem_11673.removeEventListener(cljs.core.name.call(null,actual_type_11730),canonical_f_11733);
} else
{elem_11673.detachEvent(cljs.core.name.call(null,actual_type_11730),canonical_f_11733);
}
{
var G__11734 = seq__11651_11725;
var G__11735 = chunk__11653_11726;
var G__11736 = count__11654_11727;
var G__11737 = (i__11655_11728 + (1));
seq__11651_11725 = G__11734;
chunk__11653_11726 = G__11735;
count__11654_11727 = G__11736;
i__11655_11728 = G__11737;
continue;
}
} else
{var temp__4126__auto___11738__$1 = cljs.core.seq.call(null,seq__11651_11725);if(temp__4126__auto___11738__$1)
{var seq__11651_11739__$1 = temp__4126__auto___11738__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11651_11739__$1))
{var c__6919__auto___11740 = cljs.core.chunk_first.call(null,seq__11651_11739__$1);{
var G__11741 = cljs.core.chunk_rest.call(null,seq__11651_11739__$1);
var G__11742 = c__6919__auto___11740;
var G__11743 = cljs.core.count.call(null,c__6919__auto___11740);
var G__11744 = (0);
seq__11651_11725 = G__11741;
chunk__11653_11726 = G__11742;
count__11654_11727 = G__11743;
i__11655_11728 = G__11744;
continue;
}
} else
{var vec__11671_11745 = cljs.core.first.call(null,seq__11651_11739__$1);var actual_type_11746 = cljs.core.nth.call(null,vec__11671_11745,(0),null);var __11747 = cljs.core.nth.call(null,vec__11671_11745,(1),null);var keys_11748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11674,actual_type_11746,f_11724], null);var canonical_f_11749 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11673),keys_11748);dommy.core.update_event_listeners_BANG_.call(null,elem_11673,dommy.utils.dissoc_in,keys_11748);
if(cljs.core.truth_(elem_11673.removeEventListener))
{elem_11673.removeEventListener(cljs.core.name.call(null,actual_type_11746),canonical_f_11749);
} else
{elem_11673.detachEvent(cljs.core.name.call(null,actual_type_11746),canonical_f_11749);
}
{
var G__11750 = cljs.core.next.call(null,seq__11651_11739__$1);
var G__11751 = null;
var G__11752 = (0);
var G__11753 = (0);
seq__11651_11725 = G__11750;
chunk__11653_11726 = G__11751;
count__11654_11727 = G__11752;
i__11655_11728 = G__11753;
continue;
}
}
} else
{}
}
break;
}
{
var G__11754 = cljs.core.next.call(null,seq__11650_11716__$1);
var G__11755 = null;
var G__11756 = (0);
var G__11757 = (0);
seq__11650_11675 = G__11754;
chunk__11657_11676 = G__11755;
count__11658_11677 = G__11756;
i__11659_11678 = G__11757;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11758){
var elem_sel = cljs.core.first(arglist__11758);
var type_fs = cljs.core.rest(arglist__11758);
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
var vec__11766_11773 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11774 = cljs.core.nth.call(null,vec__11766_11773,(0),null);var selector_11775 = cljs.core.nth.call(null,vec__11766_11773,(1),null);var seq__11767_11776 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11768_11777 = null;var count__11769_11778 = (0);var i__11770_11779 = (0);while(true){
if((i__11770_11779 < count__11769_11778))
{var vec__11771_11780 = cljs.core._nth.call(null,chunk__11768_11777,i__11770_11779);var type_11781 = cljs.core.nth.call(null,vec__11771_11780,(0),null);var f_11782 = cljs.core.nth.call(null,vec__11771_11780,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11781,((function (seq__11767_11776,chunk__11768_11777,count__11769_11778,i__11770_11779,vec__11771_11780,type_11781,f_11782,vec__11766_11773,elem_11774,selector_11775){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11781,this_fn);
return f_11782.call(null,e);
});})(seq__11767_11776,chunk__11768_11777,count__11769_11778,i__11770_11779,vec__11771_11780,type_11781,f_11782,vec__11766_11773,elem_11774,selector_11775))
);
{
var G__11783 = seq__11767_11776;
var G__11784 = chunk__11768_11777;
var G__11785 = count__11769_11778;
var G__11786 = (i__11770_11779 + (1));
seq__11767_11776 = G__11783;
chunk__11768_11777 = G__11784;
count__11769_11778 = G__11785;
i__11770_11779 = G__11786;
continue;
}
} else
{var temp__4126__auto___11787 = cljs.core.seq.call(null,seq__11767_11776);if(temp__4126__auto___11787)
{var seq__11767_11788__$1 = temp__4126__auto___11787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11767_11788__$1))
{var c__6919__auto___11789 = cljs.core.chunk_first.call(null,seq__11767_11788__$1);{
var G__11790 = cljs.core.chunk_rest.call(null,seq__11767_11788__$1);
var G__11791 = c__6919__auto___11789;
var G__11792 = cljs.core.count.call(null,c__6919__auto___11789);
var G__11793 = (0);
seq__11767_11776 = G__11790;
chunk__11768_11777 = G__11791;
count__11769_11778 = G__11792;
i__11770_11779 = G__11793;
continue;
}
} else
{var vec__11772_11794 = cljs.core.first.call(null,seq__11767_11788__$1);var type_11795 = cljs.core.nth.call(null,vec__11772_11794,(0),null);var f_11796 = cljs.core.nth.call(null,vec__11772_11794,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11795,((function (seq__11767_11776,chunk__11768_11777,count__11769_11778,i__11770_11779,vec__11772_11794,type_11795,f_11796,seq__11767_11788__$1,temp__4126__auto___11787,vec__11766_11773,elem_11774,selector_11775){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11795,this_fn);
return f_11796.call(null,e);
});})(seq__11767_11776,chunk__11768_11777,count__11769_11778,i__11770_11779,vec__11772_11794,type_11795,f_11796,seq__11767_11788__$1,temp__4126__auto___11787,vec__11766_11773,elem_11774,selector_11775))
);
{
var G__11797 = cljs.core.next.call(null,seq__11767_11788__$1);
var G__11798 = null;
var G__11799 = (0);
var G__11800 = (0);
seq__11767_11776 = G__11797;
chunk__11768_11777 = G__11798;
count__11769_11778 = G__11799;
i__11770_11779 = G__11800;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11801){
var elem_sel = cljs.core.first(arglist__11801);
var type_fs = cljs.core.rest(arglist__11801);
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
var fire_BANG___delegate = function (node,event_type,p__11802){var vec__11804 = p__11802;var update_event_BANG_ = cljs.core.nth.call(null,vec__11804,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5776__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5776__auto__))
{return or__5776__auto__;
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
var p__11802 = null;if (arguments.length > 2) {
  p__11802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11802);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11805){
var node = cljs.core.first(arglist__11805);
arglist__11805 = cljs.core.next(arglist__11805);
var event_type = cljs.core.first(arglist__11805);
var p__11802 = cljs.core.rest(arglist__11805);
return fire_BANG___delegate(node,event_type,p__11802);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
