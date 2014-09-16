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
dommy.core.text = (function text(elem){var or__5801__auto__ = elem.textContent;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11404 = dommy.template.__GT_node_like.call(null,parent);G__11404.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11404;
});
var append_BANG___3 = (function() { 
var G__11409__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11405_11410 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11406_11411 = null;var count__11407_11412 = (0);var i__11408_11413 = (0);while(true){
if((i__11408_11413 < count__11407_11412))
{var c_11414 = cljs.core._nth.call(null,chunk__11406_11411,i__11408_11413);append_BANG_.call(null,parent__$1,c_11414);
{
var G__11415 = seq__11405_11410;
var G__11416 = chunk__11406_11411;
var G__11417 = count__11407_11412;
var G__11418 = (i__11408_11413 + (1));
seq__11405_11410 = G__11415;
chunk__11406_11411 = G__11416;
count__11407_11412 = G__11417;
i__11408_11413 = G__11418;
continue;
}
} else
{var temp__4126__auto___11419 = cljs.core.seq.call(null,seq__11405_11410);if(temp__4126__auto___11419)
{var seq__11405_11420__$1 = temp__4126__auto___11419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11405_11420__$1))
{var c__6904__auto___11421 = cljs.core.chunk_first.call(null,seq__11405_11420__$1);{
var G__11422 = cljs.core.chunk_rest.call(null,seq__11405_11420__$1);
var G__11423 = c__6904__auto___11421;
var G__11424 = cljs.core.count.call(null,c__6904__auto___11421);
var G__11425 = (0);
seq__11405_11410 = G__11422;
chunk__11406_11411 = G__11423;
count__11407_11412 = G__11424;
i__11408_11413 = G__11425;
continue;
}
} else
{var c_11426 = cljs.core.first.call(null,seq__11405_11420__$1);append_BANG_.call(null,parent__$1,c_11426);
{
var G__11427 = cljs.core.next.call(null,seq__11405_11420__$1);
var G__11428 = null;
var G__11429 = (0);
var G__11430 = (0);
seq__11405_11410 = G__11427;
chunk__11406_11411 = G__11428;
count__11407_11412 = G__11429;
i__11408_11413 = G__11430;
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
var G__11409 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11409__delegate.call(this,parent,child,more_children);};
G__11409.cljs$lang$maxFixedArity = 2;
G__11409.cljs$lang$applyTo = (function (arglist__11431){
var parent = cljs.core.first(arglist__11431);
arglist__11431 = cljs.core.next(arglist__11431);
var child = cljs.core.first(arglist__11431);
var more_children = cljs.core.rest(arglist__11431);
return G__11409__delegate(parent,child,more_children);
});
G__11409.cljs$core$IFn$_invoke$arity$variadic = G__11409__delegate;
return G__11409;
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
var G__11440__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11436_11441 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11437_11442 = null;var count__11438_11443 = (0);var i__11439_11444 = (0);while(true){
if((i__11439_11444 < count__11438_11443))
{var c_11445 = cljs.core._nth.call(null,chunk__11437_11442,i__11439_11444);prepend_BANG_.call(null,parent__$1,c_11445);
{
var G__11446 = seq__11436_11441;
var G__11447 = chunk__11437_11442;
var G__11448 = count__11438_11443;
var G__11449 = (i__11439_11444 + (1));
seq__11436_11441 = G__11446;
chunk__11437_11442 = G__11447;
count__11438_11443 = G__11448;
i__11439_11444 = G__11449;
continue;
}
} else
{var temp__4126__auto___11450 = cljs.core.seq.call(null,seq__11436_11441);if(temp__4126__auto___11450)
{var seq__11436_11451__$1 = temp__4126__auto___11450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11436_11451__$1))
{var c__6904__auto___11452 = cljs.core.chunk_first.call(null,seq__11436_11451__$1);{
var G__11453 = cljs.core.chunk_rest.call(null,seq__11436_11451__$1);
var G__11454 = c__6904__auto___11452;
var G__11455 = cljs.core.count.call(null,c__6904__auto___11452);
var G__11456 = (0);
seq__11436_11441 = G__11453;
chunk__11437_11442 = G__11454;
count__11438_11443 = G__11455;
i__11439_11444 = G__11456;
continue;
}
} else
{var c_11457 = cljs.core.first.call(null,seq__11436_11451__$1);prepend_BANG_.call(null,parent__$1,c_11457);
{
var G__11458 = cljs.core.next.call(null,seq__11436_11451__$1);
var G__11459 = null;
var G__11460 = (0);
var G__11461 = (0);
seq__11436_11441 = G__11458;
chunk__11437_11442 = G__11459;
count__11438_11443 = G__11460;
i__11439_11444 = G__11461;
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
var G__11440 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11440__delegate.call(this,parent,child,more_children);};
G__11440.cljs$lang$maxFixedArity = 2;
G__11440.cljs$lang$applyTo = (function (arglist__11462){
var parent = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var child = cljs.core.first(arglist__11462);
var more_children = cljs.core.rest(arglist__11462);
return G__11440__delegate(parent,child,more_children);
});
G__11440.cljs$core$IFn$_invoke$arity$variadic = G__11440__delegate;
return G__11440;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11463 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11463))
{var next_11464 = temp__4124__auto___11463;parent.insertBefore(actual_node,next_11464);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11466 = dommy.template.__GT_node_like.call(null,parent);G__11466.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11466,node_like);
return G__11466;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11468 = elem__$1.parentNode;G__11468.removeChild(elem__$1);
return G__11468;
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
return (function (p__11474){var vec__11475 = p__11474;var k = cljs.core.nth.call(null,vec__11475,(0),null);var v = cljs.core.nth.call(null,vec__11475,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11476 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11476 = (function (v,k,vec__11475,p__11474,container,key_selectors_map,template,selector_map,meta11477){
this.v = v;
this.k = k;
this.vec__11475 = vec__11475;
this.p__11474 = p__11474;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11477 = meta11477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11476.cljs$lang$type = true;
dommy.core.t11476.cljs$lang$ctorStr = "dommy.core/t11476";
dommy.core.t11476.cljs$lang$ctorPrWriter = ((function (vec__11475,k,v,container){
return (function (this__6638__auto__,writer__6639__auto__,opt__6640__auto__){return cljs.core._write.call(null,writer__6639__auto__,"dommy.core/t11476");
});})(vec__11475,k,v,container))
;
dommy.core.t11476.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11475,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11475,k,v,container))
;
dommy.core.t11476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11475,k,v,container){
return (function (_11478){var self__ = this;
var _11478__$1 = this;return self__.meta11477;
});})(vec__11475,k,v,container))
;
dommy.core.t11476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11475,k,v,container){
return (function (_11478,meta11477__$1){var self__ = this;
var _11478__$1 = this;return (new dommy.core.t11476(self__.v,self__.k,self__.vec__11475,self__.p__11474,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11477__$1));
});})(vec__11475,k,v,container))
;
dommy.core.__GT_t11476 = ((function (vec__11475,k,v,container){
return (function __GT_t11476(v__$1,k__$1,vec__11475__$1,p__11474__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11477){return (new dommy.core.t11476(v__$1,k__$1,vec__11475__$1,p__11474__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11477));
});})(vec__11475,k,v,container))
;
}
return (new dommy.core.t11476(v,k,vec__11475,p__11474,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11479_SHARP_){return p1__11479_SHARP_.parentNode;
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
return (function (p1__11480_SHARP_){return !((p1__11480_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11481){var vec__11482 = p__11481;var special_mouse_event = cljs.core.nth.call(null,vec__11482,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__11482,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11482,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11482,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5801__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__5785__auto__ = related_target;if(cljs.core.truth_(and__5785__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__5785__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__11482,special_mouse_event,real_mouse_event))
});})(vec__11482,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__5785__auto__ = selected_target;if(cljs.core.truth_(and__5785__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__5785__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__5801__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11483){
var elem = cljs.core.first(arglist__11483);
arglist__11483 = cljs.core.next(arglist__11483);
var f = cljs.core.first(arglist__11483);
var args = cljs.core.rest(arglist__11483);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11484_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11484_SHARP_));
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
var vec__11508_11531 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11532 = cljs.core.nth.call(null,vec__11508_11531,(0),null);var selector_11533 = cljs.core.nth.call(null,vec__11508_11531,(1),null);var seq__11509_11534 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11516_11535 = null;var count__11517_11536 = (0);var i__11518_11537 = (0);while(true){
if((i__11518_11537 < count__11517_11536))
{var vec__11525_11538 = cljs.core._nth.call(null,chunk__11516_11535,i__11518_11537);var orig_type_11539 = cljs.core.nth.call(null,vec__11525_11538,(0),null);var f_11540 = cljs.core.nth.call(null,vec__11525_11538,(1),null);var seq__11519_11541 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11539,new cljs.core.PersistentArrayMap.fromArray([orig_type_11539,cljs.core.identity], true, false)));var chunk__11521_11542 = null;var count__11522_11543 = (0);var i__11523_11544 = (0);while(true){
if((i__11523_11544 < count__11522_11543))
{var vec__11526_11545 = cljs.core._nth.call(null,chunk__11521_11542,i__11523_11544);var actual_type_11546 = cljs.core.nth.call(null,vec__11526_11545,(0),null);var factory_11547 = cljs.core.nth.call(null,vec__11526_11545,(1),null);var canonical_f_11548 = (cljs.core.truth_(selector_11533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11532,selector_11533):cljs.core.identity).call(null,factory_11547.call(null,f_11540));dommy.core.update_event_listeners_BANG_.call(null,elem_11532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11533,actual_type_11546,f_11540], null),canonical_f_11548);
if(cljs.core.truth_(elem_11532.addEventListener))
{elem_11532.addEventListener(cljs.core.name.call(null,actual_type_11546),canonical_f_11548);
} else
{elem_11532.attachEvent(cljs.core.name.call(null,actual_type_11546),canonical_f_11548);
}
{
var G__11549 = seq__11519_11541;
var G__11550 = chunk__11521_11542;
var G__11551 = count__11522_11543;
var G__11552 = (i__11523_11544 + (1));
seq__11519_11541 = G__11549;
chunk__11521_11542 = G__11550;
count__11522_11543 = G__11551;
i__11523_11544 = G__11552;
continue;
}
} else
{var temp__4126__auto___11553 = cljs.core.seq.call(null,seq__11519_11541);if(temp__4126__auto___11553)
{var seq__11519_11554__$1 = temp__4126__auto___11553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11519_11554__$1))
{var c__6904__auto___11555 = cljs.core.chunk_first.call(null,seq__11519_11554__$1);{
var G__11556 = cljs.core.chunk_rest.call(null,seq__11519_11554__$1);
var G__11557 = c__6904__auto___11555;
var G__11558 = cljs.core.count.call(null,c__6904__auto___11555);
var G__11559 = (0);
seq__11519_11541 = G__11556;
chunk__11521_11542 = G__11557;
count__11522_11543 = G__11558;
i__11523_11544 = G__11559;
continue;
}
} else
{var vec__11527_11560 = cljs.core.first.call(null,seq__11519_11554__$1);var actual_type_11561 = cljs.core.nth.call(null,vec__11527_11560,(0),null);var factory_11562 = cljs.core.nth.call(null,vec__11527_11560,(1),null);var canonical_f_11563 = (cljs.core.truth_(selector_11533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11532,selector_11533):cljs.core.identity).call(null,factory_11562.call(null,f_11540));dommy.core.update_event_listeners_BANG_.call(null,elem_11532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11533,actual_type_11561,f_11540], null),canonical_f_11563);
if(cljs.core.truth_(elem_11532.addEventListener))
{elem_11532.addEventListener(cljs.core.name.call(null,actual_type_11561),canonical_f_11563);
} else
{elem_11532.attachEvent(cljs.core.name.call(null,actual_type_11561),canonical_f_11563);
}
{
var G__11564 = cljs.core.next.call(null,seq__11519_11554__$1);
var G__11565 = null;
var G__11566 = (0);
var G__11567 = (0);
seq__11519_11541 = G__11564;
chunk__11521_11542 = G__11565;
count__11522_11543 = G__11566;
i__11523_11544 = G__11567;
continue;
}
}
} else
{}
}
break;
}
{
var G__11568 = seq__11509_11534;
var G__11569 = chunk__11516_11535;
var G__11570 = count__11517_11536;
var G__11571 = (i__11518_11537 + (1));
seq__11509_11534 = G__11568;
chunk__11516_11535 = G__11569;
count__11517_11536 = G__11570;
i__11518_11537 = G__11571;
continue;
}
} else
{var temp__4126__auto___11572 = cljs.core.seq.call(null,seq__11509_11534);if(temp__4126__auto___11572)
{var seq__11509_11573__$1 = temp__4126__auto___11572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11509_11573__$1))
{var c__6904__auto___11574 = cljs.core.chunk_first.call(null,seq__11509_11573__$1);{
var G__11575 = cljs.core.chunk_rest.call(null,seq__11509_11573__$1);
var G__11576 = c__6904__auto___11574;
var G__11577 = cljs.core.count.call(null,c__6904__auto___11574);
var G__11578 = (0);
seq__11509_11534 = G__11575;
chunk__11516_11535 = G__11576;
count__11517_11536 = G__11577;
i__11518_11537 = G__11578;
continue;
}
} else
{var vec__11528_11579 = cljs.core.first.call(null,seq__11509_11573__$1);var orig_type_11580 = cljs.core.nth.call(null,vec__11528_11579,(0),null);var f_11581 = cljs.core.nth.call(null,vec__11528_11579,(1),null);var seq__11510_11582 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11580,new cljs.core.PersistentArrayMap.fromArray([orig_type_11580,cljs.core.identity], true, false)));var chunk__11512_11583 = null;var count__11513_11584 = (0);var i__11514_11585 = (0);while(true){
if((i__11514_11585 < count__11513_11584))
{var vec__11529_11586 = cljs.core._nth.call(null,chunk__11512_11583,i__11514_11585);var actual_type_11587 = cljs.core.nth.call(null,vec__11529_11586,(0),null);var factory_11588 = cljs.core.nth.call(null,vec__11529_11586,(1),null);var canonical_f_11589 = (cljs.core.truth_(selector_11533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11532,selector_11533):cljs.core.identity).call(null,factory_11588.call(null,f_11581));dommy.core.update_event_listeners_BANG_.call(null,elem_11532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11533,actual_type_11587,f_11581], null),canonical_f_11589);
if(cljs.core.truth_(elem_11532.addEventListener))
{elem_11532.addEventListener(cljs.core.name.call(null,actual_type_11587),canonical_f_11589);
} else
{elem_11532.attachEvent(cljs.core.name.call(null,actual_type_11587),canonical_f_11589);
}
{
var G__11590 = seq__11510_11582;
var G__11591 = chunk__11512_11583;
var G__11592 = count__11513_11584;
var G__11593 = (i__11514_11585 + (1));
seq__11510_11582 = G__11590;
chunk__11512_11583 = G__11591;
count__11513_11584 = G__11592;
i__11514_11585 = G__11593;
continue;
}
} else
{var temp__4126__auto___11594__$1 = cljs.core.seq.call(null,seq__11510_11582);if(temp__4126__auto___11594__$1)
{var seq__11510_11595__$1 = temp__4126__auto___11594__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11510_11595__$1))
{var c__6904__auto___11596 = cljs.core.chunk_first.call(null,seq__11510_11595__$1);{
var G__11597 = cljs.core.chunk_rest.call(null,seq__11510_11595__$1);
var G__11598 = c__6904__auto___11596;
var G__11599 = cljs.core.count.call(null,c__6904__auto___11596);
var G__11600 = (0);
seq__11510_11582 = G__11597;
chunk__11512_11583 = G__11598;
count__11513_11584 = G__11599;
i__11514_11585 = G__11600;
continue;
}
} else
{var vec__11530_11601 = cljs.core.first.call(null,seq__11510_11595__$1);var actual_type_11602 = cljs.core.nth.call(null,vec__11530_11601,(0),null);var factory_11603 = cljs.core.nth.call(null,vec__11530_11601,(1),null);var canonical_f_11604 = (cljs.core.truth_(selector_11533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11532,selector_11533):cljs.core.identity).call(null,factory_11603.call(null,f_11581));dommy.core.update_event_listeners_BANG_.call(null,elem_11532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11533,actual_type_11602,f_11581], null),canonical_f_11604);
if(cljs.core.truth_(elem_11532.addEventListener))
{elem_11532.addEventListener(cljs.core.name.call(null,actual_type_11602),canonical_f_11604);
} else
{elem_11532.attachEvent(cljs.core.name.call(null,actual_type_11602),canonical_f_11604);
}
{
var G__11605 = cljs.core.next.call(null,seq__11510_11595__$1);
var G__11606 = null;
var G__11607 = (0);
var G__11608 = (0);
seq__11510_11582 = G__11605;
chunk__11512_11583 = G__11606;
count__11513_11584 = G__11607;
i__11514_11585 = G__11608;
continue;
}
}
} else
{}
}
break;
}
{
var G__11609 = cljs.core.next.call(null,seq__11509_11573__$1);
var G__11610 = null;
var G__11611 = (0);
var G__11612 = (0);
seq__11509_11534 = G__11609;
chunk__11516_11535 = G__11610;
count__11517_11536 = G__11611;
i__11518_11537 = G__11612;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11613){
var elem_sel = cljs.core.first(arglist__11613);
var type_fs = cljs.core.rest(arglist__11613);
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
var vec__11637_11660 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11661 = cljs.core.nth.call(null,vec__11637_11660,(0),null);var selector_11662 = cljs.core.nth.call(null,vec__11637_11660,(1),null);var seq__11638_11663 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11645_11664 = null;var count__11646_11665 = (0);var i__11647_11666 = (0);while(true){
if((i__11647_11666 < count__11646_11665))
{var vec__11654_11667 = cljs.core._nth.call(null,chunk__11645_11664,i__11647_11666);var orig_type_11668 = cljs.core.nth.call(null,vec__11654_11667,(0),null);var f_11669 = cljs.core.nth.call(null,vec__11654_11667,(1),null);var seq__11648_11670 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11668,new cljs.core.PersistentArrayMap.fromArray([orig_type_11668,cljs.core.identity], true, false)));var chunk__11650_11671 = null;var count__11651_11672 = (0);var i__11652_11673 = (0);while(true){
if((i__11652_11673 < count__11651_11672))
{var vec__11655_11674 = cljs.core._nth.call(null,chunk__11650_11671,i__11652_11673);var actual_type_11675 = cljs.core.nth.call(null,vec__11655_11674,(0),null);var __11676 = cljs.core.nth.call(null,vec__11655_11674,(1),null);var keys_11677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11662,actual_type_11675,f_11669], null);var canonical_f_11678 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11661),keys_11677);dommy.core.update_event_listeners_BANG_.call(null,elem_11661,dommy.utils.dissoc_in,keys_11677);
if(cljs.core.truth_(elem_11661.removeEventListener))
{elem_11661.removeEventListener(cljs.core.name.call(null,actual_type_11675),canonical_f_11678);
} else
{elem_11661.detachEvent(cljs.core.name.call(null,actual_type_11675),canonical_f_11678);
}
{
var G__11679 = seq__11648_11670;
var G__11680 = chunk__11650_11671;
var G__11681 = count__11651_11672;
var G__11682 = (i__11652_11673 + (1));
seq__11648_11670 = G__11679;
chunk__11650_11671 = G__11680;
count__11651_11672 = G__11681;
i__11652_11673 = G__11682;
continue;
}
} else
{var temp__4126__auto___11683 = cljs.core.seq.call(null,seq__11648_11670);if(temp__4126__auto___11683)
{var seq__11648_11684__$1 = temp__4126__auto___11683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11648_11684__$1))
{var c__6904__auto___11685 = cljs.core.chunk_first.call(null,seq__11648_11684__$1);{
var G__11686 = cljs.core.chunk_rest.call(null,seq__11648_11684__$1);
var G__11687 = c__6904__auto___11685;
var G__11688 = cljs.core.count.call(null,c__6904__auto___11685);
var G__11689 = (0);
seq__11648_11670 = G__11686;
chunk__11650_11671 = G__11687;
count__11651_11672 = G__11688;
i__11652_11673 = G__11689;
continue;
}
} else
{var vec__11656_11690 = cljs.core.first.call(null,seq__11648_11684__$1);var actual_type_11691 = cljs.core.nth.call(null,vec__11656_11690,(0),null);var __11692 = cljs.core.nth.call(null,vec__11656_11690,(1),null);var keys_11693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11662,actual_type_11691,f_11669], null);var canonical_f_11694 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11661),keys_11693);dommy.core.update_event_listeners_BANG_.call(null,elem_11661,dommy.utils.dissoc_in,keys_11693);
if(cljs.core.truth_(elem_11661.removeEventListener))
{elem_11661.removeEventListener(cljs.core.name.call(null,actual_type_11691),canonical_f_11694);
} else
{elem_11661.detachEvent(cljs.core.name.call(null,actual_type_11691),canonical_f_11694);
}
{
var G__11695 = cljs.core.next.call(null,seq__11648_11684__$1);
var G__11696 = null;
var G__11697 = (0);
var G__11698 = (0);
seq__11648_11670 = G__11695;
chunk__11650_11671 = G__11696;
count__11651_11672 = G__11697;
i__11652_11673 = G__11698;
continue;
}
}
} else
{}
}
break;
}
{
var G__11699 = seq__11638_11663;
var G__11700 = chunk__11645_11664;
var G__11701 = count__11646_11665;
var G__11702 = (i__11647_11666 + (1));
seq__11638_11663 = G__11699;
chunk__11645_11664 = G__11700;
count__11646_11665 = G__11701;
i__11647_11666 = G__11702;
continue;
}
} else
{var temp__4126__auto___11703 = cljs.core.seq.call(null,seq__11638_11663);if(temp__4126__auto___11703)
{var seq__11638_11704__$1 = temp__4126__auto___11703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11638_11704__$1))
{var c__6904__auto___11705 = cljs.core.chunk_first.call(null,seq__11638_11704__$1);{
var G__11706 = cljs.core.chunk_rest.call(null,seq__11638_11704__$1);
var G__11707 = c__6904__auto___11705;
var G__11708 = cljs.core.count.call(null,c__6904__auto___11705);
var G__11709 = (0);
seq__11638_11663 = G__11706;
chunk__11645_11664 = G__11707;
count__11646_11665 = G__11708;
i__11647_11666 = G__11709;
continue;
}
} else
{var vec__11657_11710 = cljs.core.first.call(null,seq__11638_11704__$1);var orig_type_11711 = cljs.core.nth.call(null,vec__11657_11710,(0),null);var f_11712 = cljs.core.nth.call(null,vec__11657_11710,(1),null);var seq__11639_11713 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11711,new cljs.core.PersistentArrayMap.fromArray([orig_type_11711,cljs.core.identity], true, false)));var chunk__11641_11714 = null;var count__11642_11715 = (0);var i__11643_11716 = (0);while(true){
if((i__11643_11716 < count__11642_11715))
{var vec__11658_11717 = cljs.core._nth.call(null,chunk__11641_11714,i__11643_11716);var actual_type_11718 = cljs.core.nth.call(null,vec__11658_11717,(0),null);var __11719 = cljs.core.nth.call(null,vec__11658_11717,(1),null);var keys_11720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11662,actual_type_11718,f_11712], null);var canonical_f_11721 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11661),keys_11720);dommy.core.update_event_listeners_BANG_.call(null,elem_11661,dommy.utils.dissoc_in,keys_11720);
if(cljs.core.truth_(elem_11661.removeEventListener))
{elem_11661.removeEventListener(cljs.core.name.call(null,actual_type_11718),canonical_f_11721);
} else
{elem_11661.detachEvent(cljs.core.name.call(null,actual_type_11718),canonical_f_11721);
}
{
var G__11722 = seq__11639_11713;
var G__11723 = chunk__11641_11714;
var G__11724 = count__11642_11715;
var G__11725 = (i__11643_11716 + (1));
seq__11639_11713 = G__11722;
chunk__11641_11714 = G__11723;
count__11642_11715 = G__11724;
i__11643_11716 = G__11725;
continue;
}
} else
{var temp__4126__auto___11726__$1 = cljs.core.seq.call(null,seq__11639_11713);if(temp__4126__auto___11726__$1)
{var seq__11639_11727__$1 = temp__4126__auto___11726__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11639_11727__$1))
{var c__6904__auto___11728 = cljs.core.chunk_first.call(null,seq__11639_11727__$1);{
var G__11729 = cljs.core.chunk_rest.call(null,seq__11639_11727__$1);
var G__11730 = c__6904__auto___11728;
var G__11731 = cljs.core.count.call(null,c__6904__auto___11728);
var G__11732 = (0);
seq__11639_11713 = G__11729;
chunk__11641_11714 = G__11730;
count__11642_11715 = G__11731;
i__11643_11716 = G__11732;
continue;
}
} else
{var vec__11659_11733 = cljs.core.first.call(null,seq__11639_11727__$1);var actual_type_11734 = cljs.core.nth.call(null,vec__11659_11733,(0),null);var __11735 = cljs.core.nth.call(null,vec__11659_11733,(1),null);var keys_11736 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11662,actual_type_11734,f_11712], null);var canonical_f_11737 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11661),keys_11736);dommy.core.update_event_listeners_BANG_.call(null,elem_11661,dommy.utils.dissoc_in,keys_11736);
if(cljs.core.truth_(elem_11661.removeEventListener))
{elem_11661.removeEventListener(cljs.core.name.call(null,actual_type_11734),canonical_f_11737);
} else
{elem_11661.detachEvent(cljs.core.name.call(null,actual_type_11734),canonical_f_11737);
}
{
var G__11738 = cljs.core.next.call(null,seq__11639_11727__$1);
var G__11739 = null;
var G__11740 = (0);
var G__11741 = (0);
seq__11639_11713 = G__11738;
chunk__11641_11714 = G__11739;
count__11642_11715 = G__11740;
i__11643_11716 = G__11741;
continue;
}
}
} else
{}
}
break;
}
{
var G__11742 = cljs.core.next.call(null,seq__11638_11704__$1);
var G__11743 = null;
var G__11744 = (0);
var G__11745 = (0);
seq__11638_11663 = G__11742;
chunk__11645_11664 = G__11743;
count__11646_11665 = G__11744;
i__11647_11666 = G__11745;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11746){
var elem_sel = cljs.core.first(arglist__11746);
var type_fs = cljs.core.rest(arglist__11746);
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
var vec__11754_11761 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11762 = cljs.core.nth.call(null,vec__11754_11761,(0),null);var selector_11763 = cljs.core.nth.call(null,vec__11754_11761,(1),null);var seq__11755_11764 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11756_11765 = null;var count__11757_11766 = (0);var i__11758_11767 = (0);while(true){
if((i__11758_11767 < count__11757_11766))
{var vec__11759_11768 = cljs.core._nth.call(null,chunk__11756_11765,i__11758_11767);var type_11769 = cljs.core.nth.call(null,vec__11759_11768,(0),null);var f_11770 = cljs.core.nth.call(null,vec__11759_11768,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11769,((function (seq__11755_11764,chunk__11756_11765,count__11757_11766,i__11758_11767,vec__11759_11768,type_11769,f_11770,vec__11754_11761,elem_11762,selector_11763){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11769,this_fn);
return f_11770.call(null,e);
});})(seq__11755_11764,chunk__11756_11765,count__11757_11766,i__11758_11767,vec__11759_11768,type_11769,f_11770,vec__11754_11761,elem_11762,selector_11763))
);
{
var G__11771 = seq__11755_11764;
var G__11772 = chunk__11756_11765;
var G__11773 = count__11757_11766;
var G__11774 = (i__11758_11767 + (1));
seq__11755_11764 = G__11771;
chunk__11756_11765 = G__11772;
count__11757_11766 = G__11773;
i__11758_11767 = G__11774;
continue;
}
} else
{var temp__4126__auto___11775 = cljs.core.seq.call(null,seq__11755_11764);if(temp__4126__auto___11775)
{var seq__11755_11776__$1 = temp__4126__auto___11775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755_11776__$1))
{var c__6904__auto___11777 = cljs.core.chunk_first.call(null,seq__11755_11776__$1);{
var G__11778 = cljs.core.chunk_rest.call(null,seq__11755_11776__$1);
var G__11779 = c__6904__auto___11777;
var G__11780 = cljs.core.count.call(null,c__6904__auto___11777);
var G__11781 = (0);
seq__11755_11764 = G__11778;
chunk__11756_11765 = G__11779;
count__11757_11766 = G__11780;
i__11758_11767 = G__11781;
continue;
}
} else
{var vec__11760_11782 = cljs.core.first.call(null,seq__11755_11776__$1);var type_11783 = cljs.core.nth.call(null,vec__11760_11782,(0),null);var f_11784 = cljs.core.nth.call(null,vec__11760_11782,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11783,((function (seq__11755_11764,chunk__11756_11765,count__11757_11766,i__11758_11767,vec__11760_11782,type_11783,f_11784,seq__11755_11776__$1,temp__4126__auto___11775,vec__11754_11761,elem_11762,selector_11763){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11783,this_fn);
return f_11784.call(null,e);
});})(seq__11755_11764,chunk__11756_11765,count__11757_11766,i__11758_11767,vec__11760_11782,type_11783,f_11784,seq__11755_11776__$1,temp__4126__auto___11775,vec__11754_11761,elem_11762,selector_11763))
);
{
var G__11785 = cljs.core.next.call(null,seq__11755_11776__$1);
var G__11786 = null;
var G__11787 = (0);
var G__11788 = (0);
seq__11755_11764 = G__11785;
chunk__11756_11765 = G__11786;
count__11757_11766 = G__11787;
i__11758_11767 = G__11788;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11789){
var elem_sel = cljs.core.first(arglist__11789);
var type_fs = cljs.core.rest(arglist__11789);
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
var fire_BANG___delegate = function (node,event_type,p__11790){var vec__11792 = p__11790;var update_event_BANG_ = cljs.core.nth.call(null,vec__11792,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5801__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5801__auto__))
{return or__5801__auto__;
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
var p__11790 = null;if (arguments.length > 2) {
  p__11790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11790);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11793){
var node = cljs.core.first(arglist__11793);
arglist__11793 = cljs.core.next(arglist__11793);
var event_type = cljs.core.first(arglist__11793);
var p__11790 = cljs.core.rest(arglist__11793);
return fire_BANG___delegate(node,event_type,p__11790);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
