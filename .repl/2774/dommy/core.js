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
dommy.core.text = (function text(elem){var or__5757__auto__ = elem.textContent;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
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
var append_BANG___2 = (function (parent,child){var G__20336 = dommy.template.__GT_node_like.call(null,parent);G__20336.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__20336;
});
var append_BANG___3 = (function() { 
var G__20341__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__20337_20342 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__20338_20343 = null;var count__20339_20344 = (0);var i__20340_20345 = (0);while(true){
if((i__20340_20345 < count__20339_20344))
{var c_20346 = cljs.core._nth.call(null,chunk__20338_20343,i__20340_20345);append_BANG_.call(null,parent__$1,c_20346);
{
var G__20347 = seq__20337_20342;
var G__20348 = chunk__20338_20343;
var G__20349 = count__20339_20344;
var G__20350 = (i__20340_20345 + (1));
seq__20337_20342 = G__20347;
chunk__20338_20343 = G__20348;
count__20339_20344 = G__20349;
i__20340_20345 = G__20350;
continue;
}
} else
{var temp__4126__auto___20351 = cljs.core.seq.call(null,seq__20337_20342);if(temp__4126__auto___20351)
{var seq__20337_20352__$1 = temp__4126__auto___20351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20337_20352__$1))
{var c__6904__auto___20353 = cljs.core.chunk_first.call(null,seq__20337_20352__$1);{
var G__20354 = cljs.core.chunk_rest.call(null,seq__20337_20352__$1);
var G__20355 = c__6904__auto___20353;
var G__20356 = cljs.core.count.call(null,c__6904__auto___20353);
var G__20357 = (0);
seq__20337_20342 = G__20354;
chunk__20338_20343 = G__20355;
count__20339_20344 = G__20356;
i__20340_20345 = G__20357;
continue;
}
} else
{var c_20358 = cljs.core.first.call(null,seq__20337_20352__$1);append_BANG_.call(null,parent__$1,c_20358);
{
var G__20359 = cljs.core.next.call(null,seq__20337_20352__$1);
var G__20360 = null;
var G__20361 = (0);
var G__20362 = (0);
seq__20337_20342 = G__20359;
chunk__20338_20343 = G__20360;
count__20339_20344 = G__20361;
i__20340_20345 = G__20362;
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
var G__20341 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20341__delegate.call(this,parent,child,more_children);};
G__20341.cljs$lang$maxFixedArity = 2;
G__20341.cljs$lang$applyTo = (function (arglist__20363){
var parent = cljs.core.first(arglist__20363);
arglist__20363 = cljs.core.next(arglist__20363);
var child = cljs.core.first(arglist__20363);
var more_children = cljs.core.rest(arglist__20363);
return G__20341__delegate(parent,child,more_children);
});
G__20341.cljs$core$IFn$_invoke$arity$variadic = G__20341__delegate;
return G__20341;
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
var G__20372__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__20368_20373 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__20369_20374 = null;var count__20370_20375 = (0);var i__20371_20376 = (0);while(true){
if((i__20371_20376 < count__20370_20375))
{var c_20377 = cljs.core._nth.call(null,chunk__20369_20374,i__20371_20376);prepend_BANG_.call(null,parent__$1,c_20377);
{
var G__20378 = seq__20368_20373;
var G__20379 = chunk__20369_20374;
var G__20380 = count__20370_20375;
var G__20381 = (i__20371_20376 + (1));
seq__20368_20373 = G__20378;
chunk__20369_20374 = G__20379;
count__20370_20375 = G__20380;
i__20371_20376 = G__20381;
continue;
}
} else
{var temp__4126__auto___20382 = cljs.core.seq.call(null,seq__20368_20373);if(temp__4126__auto___20382)
{var seq__20368_20383__$1 = temp__4126__auto___20382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20368_20383__$1))
{var c__6904__auto___20384 = cljs.core.chunk_first.call(null,seq__20368_20383__$1);{
var G__20385 = cljs.core.chunk_rest.call(null,seq__20368_20383__$1);
var G__20386 = c__6904__auto___20384;
var G__20387 = cljs.core.count.call(null,c__6904__auto___20384);
var G__20388 = (0);
seq__20368_20373 = G__20385;
chunk__20369_20374 = G__20386;
count__20370_20375 = G__20387;
i__20371_20376 = G__20388;
continue;
}
} else
{var c_20389 = cljs.core.first.call(null,seq__20368_20383__$1);prepend_BANG_.call(null,parent__$1,c_20389);
{
var G__20390 = cljs.core.next.call(null,seq__20368_20383__$1);
var G__20391 = null;
var G__20392 = (0);
var G__20393 = (0);
seq__20368_20373 = G__20390;
chunk__20369_20374 = G__20391;
count__20370_20375 = G__20392;
i__20371_20376 = G__20393;
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
var G__20372 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20372__delegate.call(this,parent,child,more_children);};
G__20372.cljs$lang$maxFixedArity = 2;
G__20372.cljs$lang$applyTo = (function (arglist__20394){
var parent = cljs.core.first(arglist__20394);
arglist__20394 = cljs.core.next(arglist__20394);
var child = cljs.core.first(arglist__20394);
var more_children = cljs.core.rest(arglist__20394);
return G__20372__delegate(parent,child,more_children);
});
G__20372.cljs$core$IFn$_invoke$arity$variadic = G__20372__delegate;
return G__20372;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___20395 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___20395))
{var next_20396 = temp__4124__auto___20395;parent.insertBefore(actual_node,next_20396);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__20398 = dommy.template.__GT_node_like.call(null,parent);G__20398.innerHTML = "";
dommy.core.append_BANG_.call(null,G__20398,node_like);
return G__20398;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__20400 = elem__$1.parentNode;G__20400.removeChild(elem__$1);
return G__20400;
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
return (function (p__20406){var vec__20407 = p__20406;var k = cljs.core.nth.call(null,vec__20407,(0),null);var v = cljs.core.nth.call(null,vec__20407,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t20408 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t20408 = (function (v,k,vec__20407,p__20406,container,key_selectors_map,template,selector_map,meta20409){
this.v = v;
this.k = k;
this.vec__20407 = vec__20407;
this.p__20406 = p__20406;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta20409 = meta20409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t20408.cljs$lang$type = true;
dommy.core.t20408.cljs$lang$ctorStr = "dommy.core/t20408";
dommy.core.t20408.cljs$lang$ctorPrWriter = ((function (vec__20407,k,v,container){
return (function (this__6638__auto__,writer__6639__auto__,opt__6640__auto__){return cljs.core._write.call(null,writer__6639__auto__,"dommy.core/t20408");
});})(vec__20407,k,v,container))
;
dommy.core.t20408.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__20407,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__20407,k,v,container))
;
dommy.core.t20408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__20407,k,v,container){
return (function (_20410){var self__ = this;
var _20410__$1 = this;return self__.meta20409;
});})(vec__20407,k,v,container))
;
dommy.core.t20408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__20407,k,v,container){
return (function (_20410,meta20409__$1){var self__ = this;
var _20410__$1 = this;return (new dommy.core.t20408(self__.v,self__.k,self__.vec__20407,self__.p__20406,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta20409__$1));
});})(vec__20407,k,v,container))
;
dommy.core.__GT_t20408 = ((function (vec__20407,k,v,container){
return (function __GT_t20408(v__$1,k__$1,vec__20407__$1,p__20406__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta20409){return (new dommy.core.t20408(v__$1,k__$1,vec__20407__$1,p__20406__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta20409));
});})(vec__20407,k,v,container))
;
}
return (new dommy.core.t20408(v,k,vec__20407,p__20406,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__20411_SHARP_){return p1__20411_SHARP_.parentNode;
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
return (function (p1__20412_SHARP_){return !((p1__20412_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20413){var vec__20414 = p__20413;var special_mouse_event = cljs.core.nth.call(null,vec__20414,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__20414,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__20414,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__20414,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5757__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__5741__auto__ = related_target;if(cljs.core.truth_(and__5741__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__5741__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__20414,special_mouse_event,real_mouse_event))
});})(vec__20414,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__5741__auto__ = selected_target;if(cljs.core.truth_(and__5741__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__5741__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__5757__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20415){
var elem = cljs.core.first(arglist__20415);
arglist__20415 = cljs.core.next(arglist__20415);
var f = cljs.core.first(arglist__20415);
var args = cljs.core.rest(arglist__20415);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__20416_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__20416_SHARP_));
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
var vec__20440_20463 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20464 = cljs.core.nth.call(null,vec__20440_20463,(0),null);var selector_20465 = cljs.core.nth.call(null,vec__20440_20463,(1),null);var seq__20441_20466 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__20448_20467 = null;var count__20449_20468 = (0);var i__20450_20469 = (0);while(true){
if((i__20450_20469 < count__20449_20468))
{var vec__20457_20470 = cljs.core._nth.call(null,chunk__20448_20467,i__20450_20469);var orig_type_20471 = cljs.core.nth.call(null,vec__20457_20470,(0),null);var f_20472 = cljs.core.nth.call(null,vec__20457_20470,(1),null);var seq__20451_20473 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20471,new cljs.core.PersistentArrayMap.fromArray([orig_type_20471,cljs.core.identity], true, false)));var chunk__20453_20474 = null;var count__20454_20475 = (0);var i__20455_20476 = (0);while(true){
if((i__20455_20476 < count__20454_20475))
{var vec__20458_20477 = cljs.core._nth.call(null,chunk__20453_20474,i__20455_20476);var actual_type_20478 = cljs.core.nth.call(null,vec__20458_20477,(0),null);var factory_20479 = cljs.core.nth.call(null,vec__20458_20477,(1),null);var canonical_f_20480 = (cljs.core.truth_(selector_20465)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20464,selector_20465):cljs.core.identity).call(null,factory_20479.call(null,f_20472));dommy.core.update_event_listeners_BANG_.call(null,elem_20464,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20465,actual_type_20478,f_20472], null),canonical_f_20480);
if(cljs.core.truth_(elem_20464.addEventListener))
{elem_20464.addEventListener(cljs.core.name.call(null,actual_type_20478),canonical_f_20480);
} else
{elem_20464.attachEvent(cljs.core.name.call(null,actual_type_20478),canonical_f_20480);
}
{
var G__20481 = seq__20451_20473;
var G__20482 = chunk__20453_20474;
var G__20483 = count__20454_20475;
var G__20484 = (i__20455_20476 + (1));
seq__20451_20473 = G__20481;
chunk__20453_20474 = G__20482;
count__20454_20475 = G__20483;
i__20455_20476 = G__20484;
continue;
}
} else
{var temp__4126__auto___20485 = cljs.core.seq.call(null,seq__20451_20473);if(temp__4126__auto___20485)
{var seq__20451_20486__$1 = temp__4126__auto___20485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20451_20486__$1))
{var c__6904__auto___20487 = cljs.core.chunk_first.call(null,seq__20451_20486__$1);{
var G__20488 = cljs.core.chunk_rest.call(null,seq__20451_20486__$1);
var G__20489 = c__6904__auto___20487;
var G__20490 = cljs.core.count.call(null,c__6904__auto___20487);
var G__20491 = (0);
seq__20451_20473 = G__20488;
chunk__20453_20474 = G__20489;
count__20454_20475 = G__20490;
i__20455_20476 = G__20491;
continue;
}
} else
{var vec__20459_20492 = cljs.core.first.call(null,seq__20451_20486__$1);var actual_type_20493 = cljs.core.nth.call(null,vec__20459_20492,(0),null);var factory_20494 = cljs.core.nth.call(null,vec__20459_20492,(1),null);var canonical_f_20495 = (cljs.core.truth_(selector_20465)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20464,selector_20465):cljs.core.identity).call(null,factory_20494.call(null,f_20472));dommy.core.update_event_listeners_BANG_.call(null,elem_20464,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20465,actual_type_20493,f_20472], null),canonical_f_20495);
if(cljs.core.truth_(elem_20464.addEventListener))
{elem_20464.addEventListener(cljs.core.name.call(null,actual_type_20493),canonical_f_20495);
} else
{elem_20464.attachEvent(cljs.core.name.call(null,actual_type_20493),canonical_f_20495);
}
{
var G__20496 = cljs.core.next.call(null,seq__20451_20486__$1);
var G__20497 = null;
var G__20498 = (0);
var G__20499 = (0);
seq__20451_20473 = G__20496;
chunk__20453_20474 = G__20497;
count__20454_20475 = G__20498;
i__20455_20476 = G__20499;
continue;
}
}
} else
{}
}
break;
}
{
var G__20500 = seq__20441_20466;
var G__20501 = chunk__20448_20467;
var G__20502 = count__20449_20468;
var G__20503 = (i__20450_20469 + (1));
seq__20441_20466 = G__20500;
chunk__20448_20467 = G__20501;
count__20449_20468 = G__20502;
i__20450_20469 = G__20503;
continue;
}
} else
{var temp__4126__auto___20504 = cljs.core.seq.call(null,seq__20441_20466);if(temp__4126__auto___20504)
{var seq__20441_20505__$1 = temp__4126__auto___20504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20441_20505__$1))
{var c__6904__auto___20506 = cljs.core.chunk_first.call(null,seq__20441_20505__$1);{
var G__20507 = cljs.core.chunk_rest.call(null,seq__20441_20505__$1);
var G__20508 = c__6904__auto___20506;
var G__20509 = cljs.core.count.call(null,c__6904__auto___20506);
var G__20510 = (0);
seq__20441_20466 = G__20507;
chunk__20448_20467 = G__20508;
count__20449_20468 = G__20509;
i__20450_20469 = G__20510;
continue;
}
} else
{var vec__20460_20511 = cljs.core.first.call(null,seq__20441_20505__$1);var orig_type_20512 = cljs.core.nth.call(null,vec__20460_20511,(0),null);var f_20513 = cljs.core.nth.call(null,vec__20460_20511,(1),null);var seq__20442_20514 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20512,new cljs.core.PersistentArrayMap.fromArray([orig_type_20512,cljs.core.identity], true, false)));var chunk__20444_20515 = null;var count__20445_20516 = (0);var i__20446_20517 = (0);while(true){
if((i__20446_20517 < count__20445_20516))
{var vec__20461_20518 = cljs.core._nth.call(null,chunk__20444_20515,i__20446_20517);var actual_type_20519 = cljs.core.nth.call(null,vec__20461_20518,(0),null);var factory_20520 = cljs.core.nth.call(null,vec__20461_20518,(1),null);var canonical_f_20521 = (cljs.core.truth_(selector_20465)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20464,selector_20465):cljs.core.identity).call(null,factory_20520.call(null,f_20513));dommy.core.update_event_listeners_BANG_.call(null,elem_20464,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20465,actual_type_20519,f_20513], null),canonical_f_20521);
if(cljs.core.truth_(elem_20464.addEventListener))
{elem_20464.addEventListener(cljs.core.name.call(null,actual_type_20519),canonical_f_20521);
} else
{elem_20464.attachEvent(cljs.core.name.call(null,actual_type_20519),canonical_f_20521);
}
{
var G__20522 = seq__20442_20514;
var G__20523 = chunk__20444_20515;
var G__20524 = count__20445_20516;
var G__20525 = (i__20446_20517 + (1));
seq__20442_20514 = G__20522;
chunk__20444_20515 = G__20523;
count__20445_20516 = G__20524;
i__20446_20517 = G__20525;
continue;
}
} else
{var temp__4126__auto___20526__$1 = cljs.core.seq.call(null,seq__20442_20514);if(temp__4126__auto___20526__$1)
{var seq__20442_20527__$1 = temp__4126__auto___20526__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20442_20527__$1))
{var c__6904__auto___20528 = cljs.core.chunk_first.call(null,seq__20442_20527__$1);{
var G__20529 = cljs.core.chunk_rest.call(null,seq__20442_20527__$1);
var G__20530 = c__6904__auto___20528;
var G__20531 = cljs.core.count.call(null,c__6904__auto___20528);
var G__20532 = (0);
seq__20442_20514 = G__20529;
chunk__20444_20515 = G__20530;
count__20445_20516 = G__20531;
i__20446_20517 = G__20532;
continue;
}
} else
{var vec__20462_20533 = cljs.core.first.call(null,seq__20442_20527__$1);var actual_type_20534 = cljs.core.nth.call(null,vec__20462_20533,(0),null);var factory_20535 = cljs.core.nth.call(null,vec__20462_20533,(1),null);var canonical_f_20536 = (cljs.core.truth_(selector_20465)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20464,selector_20465):cljs.core.identity).call(null,factory_20535.call(null,f_20513));dommy.core.update_event_listeners_BANG_.call(null,elem_20464,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20465,actual_type_20534,f_20513], null),canonical_f_20536);
if(cljs.core.truth_(elem_20464.addEventListener))
{elem_20464.addEventListener(cljs.core.name.call(null,actual_type_20534),canonical_f_20536);
} else
{elem_20464.attachEvent(cljs.core.name.call(null,actual_type_20534),canonical_f_20536);
}
{
var G__20537 = cljs.core.next.call(null,seq__20442_20527__$1);
var G__20538 = null;
var G__20539 = (0);
var G__20540 = (0);
seq__20442_20514 = G__20537;
chunk__20444_20515 = G__20538;
count__20445_20516 = G__20539;
i__20446_20517 = G__20540;
continue;
}
}
} else
{}
}
break;
}
{
var G__20541 = cljs.core.next.call(null,seq__20441_20505__$1);
var G__20542 = null;
var G__20543 = (0);
var G__20544 = (0);
seq__20441_20466 = G__20541;
chunk__20448_20467 = G__20542;
count__20449_20468 = G__20543;
i__20450_20469 = G__20544;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__20545){
var elem_sel = cljs.core.first(arglist__20545);
var type_fs = cljs.core.rest(arglist__20545);
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
var vec__20569_20592 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20593 = cljs.core.nth.call(null,vec__20569_20592,(0),null);var selector_20594 = cljs.core.nth.call(null,vec__20569_20592,(1),null);var seq__20570_20595 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__20577_20596 = null;var count__20578_20597 = (0);var i__20579_20598 = (0);while(true){
if((i__20579_20598 < count__20578_20597))
{var vec__20586_20599 = cljs.core._nth.call(null,chunk__20577_20596,i__20579_20598);var orig_type_20600 = cljs.core.nth.call(null,vec__20586_20599,(0),null);var f_20601 = cljs.core.nth.call(null,vec__20586_20599,(1),null);var seq__20580_20602 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20600,new cljs.core.PersistentArrayMap.fromArray([orig_type_20600,cljs.core.identity], true, false)));var chunk__20582_20603 = null;var count__20583_20604 = (0);var i__20584_20605 = (0);while(true){
if((i__20584_20605 < count__20583_20604))
{var vec__20587_20606 = cljs.core._nth.call(null,chunk__20582_20603,i__20584_20605);var actual_type_20607 = cljs.core.nth.call(null,vec__20587_20606,(0),null);var __20608 = cljs.core.nth.call(null,vec__20587_20606,(1),null);var keys_20609 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20594,actual_type_20607,f_20601], null);var canonical_f_20610 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20593),keys_20609);dommy.core.update_event_listeners_BANG_.call(null,elem_20593,dommy.utils.dissoc_in,keys_20609);
if(cljs.core.truth_(elem_20593.removeEventListener))
{elem_20593.removeEventListener(cljs.core.name.call(null,actual_type_20607),canonical_f_20610);
} else
{elem_20593.detachEvent(cljs.core.name.call(null,actual_type_20607),canonical_f_20610);
}
{
var G__20611 = seq__20580_20602;
var G__20612 = chunk__20582_20603;
var G__20613 = count__20583_20604;
var G__20614 = (i__20584_20605 + (1));
seq__20580_20602 = G__20611;
chunk__20582_20603 = G__20612;
count__20583_20604 = G__20613;
i__20584_20605 = G__20614;
continue;
}
} else
{var temp__4126__auto___20615 = cljs.core.seq.call(null,seq__20580_20602);if(temp__4126__auto___20615)
{var seq__20580_20616__$1 = temp__4126__auto___20615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20580_20616__$1))
{var c__6904__auto___20617 = cljs.core.chunk_first.call(null,seq__20580_20616__$1);{
var G__20618 = cljs.core.chunk_rest.call(null,seq__20580_20616__$1);
var G__20619 = c__6904__auto___20617;
var G__20620 = cljs.core.count.call(null,c__6904__auto___20617);
var G__20621 = (0);
seq__20580_20602 = G__20618;
chunk__20582_20603 = G__20619;
count__20583_20604 = G__20620;
i__20584_20605 = G__20621;
continue;
}
} else
{var vec__20588_20622 = cljs.core.first.call(null,seq__20580_20616__$1);var actual_type_20623 = cljs.core.nth.call(null,vec__20588_20622,(0),null);var __20624 = cljs.core.nth.call(null,vec__20588_20622,(1),null);var keys_20625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20594,actual_type_20623,f_20601], null);var canonical_f_20626 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20593),keys_20625);dommy.core.update_event_listeners_BANG_.call(null,elem_20593,dommy.utils.dissoc_in,keys_20625);
if(cljs.core.truth_(elem_20593.removeEventListener))
{elem_20593.removeEventListener(cljs.core.name.call(null,actual_type_20623),canonical_f_20626);
} else
{elem_20593.detachEvent(cljs.core.name.call(null,actual_type_20623),canonical_f_20626);
}
{
var G__20627 = cljs.core.next.call(null,seq__20580_20616__$1);
var G__20628 = null;
var G__20629 = (0);
var G__20630 = (0);
seq__20580_20602 = G__20627;
chunk__20582_20603 = G__20628;
count__20583_20604 = G__20629;
i__20584_20605 = G__20630;
continue;
}
}
} else
{}
}
break;
}
{
var G__20631 = seq__20570_20595;
var G__20632 = chunk__20577_20596;
var G__20633 = count__20578_20597;
var G__20634 = (i__20579_20598 + (1));
seq__20570_20595 = G__20631;
chunk__20577_20596 = G__20632;
count__20578_20597 = G__20633;
i__20579_20598 = G__20634;
continue;
}
} else
{var temp__4126__auto___20635 = cljs.core.seq.call(null,seq__20570_20595);if(temp__4126__auto___20635)
{var seq__20570_20636__$1 = temp__4126__auto___20635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20570_20636__$1))
{var c__6904__auto___20637 = cljs.core.chunk_first.call(null,seq__20570_20636__$1);{
var G__20638 = cljs.core.chunk_rest.call(null,seq__20570_20636__$1);
var G__20639 = c__6904__auto___20637;
var G__20640 = cljs.core.count.call(null,c__6904__auto___20637);
var G__20641 = (0);
seq__20570_20595 = G__20638;
chunk__20577_20596 = G__20639;
count__20578_20597 = G__20640;
i__20579_20598 = G__20641;
continue;
}
} else
{var vec__20589_20642 = cljs.core.first.call(null,seq__20570_20636__$1);var orig_type_20643 = cljs.core.nth.call(null,vec__20589_20642,(0),null);var f_20644 = cljs.core.nth.call(null,vec__20589_20642,(1),null);var seq__20571_20645 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20643,new cljs.core.PersistentArrayMap.fromArray([orig_type_20643,cljs.core.identity], true, false)));var chunk__20573_20646 = null;var count__20574_20647 = (0);var i__20575_20648 = (0);while(true){
if((i__20575_20648 < count__20574_20647))
{var vec__20590_20649 = cljs.core._nth.call(null,chunk__20573_20646,i__20575_20648);var actual_type_20650 = cljs.core.nth.call(null,vec__20590_20649,(0),null);var __20651 = cljs.core.nth.call(null,vec__20590_20649,(1),null);var keys_20652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20594,actual_type_20650,f_20644], null);var canonical_f_20653 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20593),keys_20652);dommy.core.update_event_listeners_BANG_.call(null,elem_20593,dommy.utils.dissoc_in,keys_20652);
if(cljs.core.truth_(elem_20593.removeEventListener))
{elem_20593.removeEventListener(cljs.core.name.call(null,actual_type_20650),canonical_f_20653);
} else
{elem_20593.detachEvent(cljs.core.name.call(null,actual_type_20650),canonical_f_20653);
}
{
var G__20654 = seq__20571_20645;
var G__20655 = chunk__20573_20646;
var G__20656 = count__20574_20647;
var G__20657 = (i__20575_20648 + (1));
seq__20571_20645 = G__20654;
chunk__20573_20646 = G__20655;
count__20574_20647 = G__20656;
i__20575_20648 = G__20657;
continue;
}
} else
{var temp__4126__auto___20658__$1 = cljs.core.seq.call(null,seq__20571_20645);if(temp__4126__auto___20658__$1)
{var seq__20571_20659__$1 = temp__4126__auto___20658__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20571_20659__$1))
{var c__6904__auto___20660 = cljs.core.chunk_first.call(null,seq__20571_20659__$1);{
var G__20661 = cljs.core.chunk_rest.call(null,seq__20571_20659__$1);
var G__20662 = c__6904__auto___20660;
var G__20663 = cljs.core.count.call(null,c__6904__auto___20660);
var G__20664 = (0);
seq__20571_20645 = G__20661;
chunk__20573_20646 = G__20662;
count__20574_20647 = G__20663;
i__20575_20648 = G__20664;
continue;
}
} else
{var vec__20591_20665 = cljs.core.first.call(null,seq__20571_20659__$1);var actual_type_20666 = cljs.core.nth.call(null,vec__20591_20665,(0),null);var __20667 = cljs.core.nth.call(null,vec__20591_20665,(1),null);var keys_20668 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20594,actual_type_20666,f_20644], null);var canonical_f_20669 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20593),keys_20668);dommy.core.update_event_listeners_BANG_.call(null,elem_20593,dommy.utils.dissoc_in,keys_20668);
if(cljs.core.truth_(elem_20593.removeEventListener))
{elem_20593.removeEventListener(cljs.core.name.call(null,actual_type_20666),canonical_f_20669);
} else
{elem_20593.detachEvent(cljs.core.name.call(null,actual_type_20666),canonical_f_20669);
}
{
var G__20670 = cljs.core.next.call(null,seq__20571_20659__$1);
var G__20671 = null;
var G__20672 = (0);
var G__20673 = (0);
seq__20571_20645 = G__20670;
chunk__20573_20646 = G__20671;
count__20574_20647 = G__20672;
i__20575_20648 = G__20673;
continue;
}
}
} else
{}
}
break;
}
{
var G__20674 = cljs.core.next.call(null,seq__20570_20636__$1);
var G__20675 = null;
var G__20676 = (0);
var G__20677 = (0);
seq__20570_20595 = G__20674;
chunk__20577_20596 = G__20675;
count__20578_20597 = G__20676;
i__20579_20598 = G__20677;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20678){
var elem_sel = cljs.core.first(arglist__20678);
var type_fs = cljs.core.rest(arglist__20678);
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
var vec__20686_20693 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20694 = cljs.core.nth.call(null,vec__20686_20693,(0),null);var selector_20695 = cljs.core.nth.call(null,vec__20686_20693,(1),null);var seq__20687_20696 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__20688_20697 = null;var count__20689_20698 = (0);var i__20690_20699 = (0);while(true){
if((i__20690_20699 < count__20689_20698))
{var vec__20691_20700 = cljs.core._nth.call(null,chunk__20688_20697,i__20690_20699);var type_20701 = cljs.core.nth.call(null,vec__20691_20700,(0),null);var f_20702 = cljs.core.nth.call(null,vec__20691_20700,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_20701,((function (seq__20687_20696,chunk__20688_20697,count__20689_20698,i__20690_20699,vec__20691_20700,type_20701,f_20702,vec__20686_20693,elem_20694,selector_20695){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20701,this_fn);
return f_20702.call(null,e);
});})(seq__20687_20696,chunk__20688_20697,count__20689_20698,i__20690_20699,vec__20691_20700,type_20701,f_20702,vec__20686_20693,elem_20694,selector_20695))
);
{
var G__20703 = seq__20687_20696;
var G__20704 = chunk__20688_20697;
var G__20705 = count__20689_20698;
var G__20706 = (i__20690_20699 + (1));
seq__20687_20696 = G__20703;
chunk__20688_20697 = G__20704;
count__20689_20698 = G__20705;
i__20690_20699 = G__20706;
continue;
}
} else
{var temp__4126__auto___20707 = cljs.core.seq.call(null,seq__20687_20696);if(temp__4126__auto___20707)
{var seq__20687_20708__$1 = temp__4126__auto___20707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20687_20708__$1))
{var c__6904__auto___20709 = cljs.core.chunk_first.call(null,seq__20687_20708__$1);{
var G__20710 = cljs.core.chunk_rest.call(null,seq__20687_20708__$1);
var G__20711 = c__6904__auto___20709;
var G__20712 = cljs.core.count.call(null,c__6904__auto___20709);
var G__20713 = (0);
seq__20687_20696 = G__20710;
chunk__20688_20697 = G__20711;
count__20689_20698 = G__20712;
i__20690_20699 = G__20713;
continue;
}
} else
{var vec__20692_20714 = cljs.core.first.call(null,seq__20687_20708__$1);var type_20715 = cljs.core.nth.call(null,vec__20692_20714,(0),null);var f_20716 = cljs.core.nth.call(null,vec__20692_20714,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_20715,((function (seq__20687_20696,chunk__20688_20697,count__20689_20698,i__20690_20699,vec__20692_20714,type_20715,f_20716,seq__20687_20708__$1,temp__4126__auto___20707,vec__20686_20693,elem_20694,selector_20695){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20715,this_fn);
return f_20716.call(null,e);
});})(seq__20687_20696,chunk__20688_20697,count__20689_20698,i__20690_20699,vec__20692_20714,type_20715,f_20716,seq__20687_20708__$1,temp__4126__auto___20707,vec__20686_20693,elem_20694,selector_20695))
);
{
var G__20717 = cljs.core.next.call(null,seq__20687_20708__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20687_20696 = G__20717;
chunk__20688_20697 = G__20718;
count__20689_20698 = G__20719;
i__20690_20699 = G__20720;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20721){
var elem_sel = cljs.core.first(arglist__20721);
var type_fs = cljs.core.rest(arglist__20721);
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
var fire_BANG___delegate = function (node,event_type,p__20722){var vec__20724 = p__20722;var update_event_BANG_ = cljs.core.nth.call(null,vec__20724,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5757__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5757__auto__))
{return or__5757__auto__;
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
var p__20722 = null;if (arguments.length > 2) {
  p__20722 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__20722);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__20725){
var node = cljs.core.first(arglist__20725);
arglist__20725 = cljs.core.next(arglist__20725);
var event_type = cljs.core.first(arglist__20725);
var p__20722 = cljs.core.rest(arglist__20725);
return fire_BANG___delegate(node,event_type,p__20722);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
