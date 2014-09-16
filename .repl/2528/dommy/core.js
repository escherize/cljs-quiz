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
dommy.core.text = (function text(elem){var or__5805__auto__ = elem.textContent;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11388 = dommy.template.__GT_node_like.call(null,parent);G__11388.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11388;
});
var append_BANG___3 = (function() { 
var G__11393__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11389_11394 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11390_11395 = null;var count__11391_11396 = (0);var i__11392_11397 = (0);while(true){
if((i__11392_11397 < count__11391_11396))
{var c_11398 = cljs.core._nth.call(null,chunk__11390_11395,i__11392_11397);append_BANG_.call(null,parent__$1,c_11398);
{
var G__11399 = seq__11389_11394;
var G__11400 = chunk__11390_11395;
var G__11401 = count__11391_11396;
var G__11402 = (i__11392_11397 + (1));
seq__11389_11394 = G__11399;
chunk__11390_11395 = G__11400;
count__11391_11396 = G__11401;
i__11392_11397 = G__11402;
continue;
}
} else
{var temp__4126__auto___11403 = cljs.core.seq.call(null,seq__11389_11394);if(temp__4126__auto___11403)
{var seq__11389_11404__$1 = temp__4126__auto___11403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11389_11404__$1))
{var c__6919__auto___11405 = cljs.core.chunk_first.call(null,seq__11389_11404__$1);{
var G__11406 = cljs.core.chunk_rest.call(null,seq__11389_11404__$1);
var G__11407 = c__6919__auto___11405;
var G__11408 = cljs.core.count.call(null,c__6919__auto___11405);
var G__11409 = (0);
seq__11389_11394 = G__11406;
chunk__11390_11395 = G__11407;
count__11391_11396 = G__11408;
i__11392_11397 = G__11409;
continue;
}
} else
{var c_11410 = cljs.core.first.call(null,seq__11389_11404__$1);append_BANG_.call(null,parent__$1,c_11410);
{
var G__11411 = cljs.core.next.call(null,seq__11389_11404__$1);
var G__11412 = null;
var G__11413 = (0);
var G__11414 = (0);
seq__11389_11394 = G__11411;
chunk__11390_11395 = G__11412;
count__11391_11396 = G__11413;
i__11392_11397 = G__11414;
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
var G__11393 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11393__delegate.call(this,parent,child,more_children);};
G__11393.cljs$lang$maxFixedArity = 2;
G__11393.cljs$lang$applyTo = (function (arglist__11415){
var parent = cljs.core.first(arglist__11415);
arglist__11415 = cljs.core.next(arglist__11415);
var child = cljs.core.first(arglist__11415);
var more_children = cljs.core.rest(arglist__11415);
return G__11393__delegate(parent,child,more_children);
});
G__11393.cljs$core$IFn$_invoke$arity$variadic = G__11393__delegate;
return G__11393;
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
var G__11424__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11420_11425 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11421_11426 = null;var count__11422_11427 = (0);var i__11423_11428 = (0);while(true){
if((i__11423_11428 < count__11422_11427))
{var c_11429 = cljs.core._nth.call(null,chunk__11421_11426,i__11423_11428);prepend_BANG_.call(null,parent__$1,c_11429);
{
var G__11430 = seq__11420_11425;
var G__11431 = chunk__11421_11426;
var G__11432 = count__11422_11427;
var G__11433 = (i__11423_11428 + (1));
seq__11420_11425 = G__11430;
chunk__11421_11426 = G__11431;
count__11422_11427 = G__11432;
i__11423_11428 = G__11433;
continue;
}
} else
{var temp__4126__auto___11434 = cljs.core.seq.call(null,seq__11420_11425);if(temp__4126__auto___11434)
{var seq__11420_11435__$1 = temp__4126__auto___11434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11420_11435__$1))
{var c__6919__auto___11436 = cljs.core.chunk_first.call(null,seq__11420_11435__$1);{
var G__11437 = cljs.core.chunk_rest.call(null,seq__11420_11435__$1);
var G__11438 = c__6919__auto___11436;
var G__11439 = cljs.core.count.call(null,c__6919__auto___11436);
var G__11440 = (0);
seq__11420_11425 = G__11437;
chunk__11421_11426 = G__11438;
count__11422_11427 = G__11439;
i__11423_11428 = G__11440;
continue;
}
} else
{var c_11441 = cljs.core.first.call(null,seq__11420_11435__$1);prepend_BANG_.call(null,parent__$1,c_11441);
{
var G__11442 = cljs.core.next.call(null,seq__11420_11435__$1);
var G__11443 = null;
var G__11444 = (0);
var G__11445 = (0);
seq__11420_11425 = G__11442;
chunk__11421_11426 = G__11443;
count__11422_11427 = G__11444;
i__11423_11428 = G__11445;
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
var G__11424 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11424__delegate.call(this,parent,child,more_children);};
G__11424.cljs$lang$maxFixedArity = 2;
G__11424.cljs$lang$applyTo = (function (arglist__11446){
var parent = cljs.core.first(arglist__11446);
arglist__11446 = cljs.core.next(arglist__11446);
var child = cljs.core.first(arglist__11446);
var more_children = cljs.core.rest(arglist__11446);
return G__11424__delegate(parent,child,more_children);
});
G__11424.cljs$core$IFn$_invoke$arity$variadic = G__11424__delegate;
return G__11424;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11447 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11447))
{var next_11448 = temp__4124__auto___11447;parent.insertBefore(actual_node,next_11448);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11450 = dommy.template.__GT_node_like.call(null,parent);G__11450.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11450,node_like);
return G__11450;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11452 = elem__$1.parentNode;G__11452.removeChild(elem__$1);
return G__11452;
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
return (function (p__11458){var vec__11459 = p__11458;var k = cljs.core.nth.call(null,vec__11459,(0),null);var v = cljs.core.nth.call(null,vec__11459,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11460 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11460 = (function (v,k,vec__11459,p__11458,container,key_selectors_map,template,selector_map,meta11461){
this.v = v;
this.k = k;
this.vec__11459 = vec__11459;
this.p__11458 = p__11458;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11461 = meta11461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11460.cljs$lang$type = true;
dommy.core.t11460.cljs$lang$ctorStr = "dommy.core/t11460";
dommy.core.t11460.cljs$lang$ctorPrWriter = ((function (vec__11459,k,v,container){
return (function (this__6639__auto__,writer__6640__auto__,opt__6641__auto__){return cljs.core._write.call(null,writer__6640__auto__,"dommy.core/t11460");
});})(vec__11459,k,v,container))
;
dommy.core.t11460.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11459,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11459,k,v,container))
;
dommy.core.t11460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11459,k,v,container){
return (function (_11462){var self__ = this;
var _11462__$1 = this;return self__.meta11461;
});})(vec__11459,k,v,container))
;
dommy.core.t11460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11459,k,v,container){
return (function (_11462,meta11461__$1){var self__ = this;
var _11462__$1 = this;return (new dommy.core.t11460(self__.v,self__.k,self__.vec__11459,self__.p__11458,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11461__$1));
});})(vec__11459,k,v,container))
;
dommy.core.__GT_t11460 = ((function (vec__11459,k,v,container){
return (function __GT_t11460(v__$1,k__$1,vec__11459__$1,p__11458__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11461){return (new dommy.core.t11460(v__$1,k__$1,vec__11459__$1,p__11458__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11461));
});})(vec__11459,k,v,container))
;
}
return (new dommy.core.t11460(v,k,vec__11459,p__11458,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11463_SHARP_){return p1__11463_SHARP_.parentNode;
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
return (function (p1__11464_SHARP_){return !((p1__11464_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11465){var vec__11466 = p__11465;var special_mouse_event = cljs.core.nth.call(null,vec__11466,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__11466,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11466,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11466,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5805__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__5789__auto__ = related_target;if(cljs.core.truth_(and__5789__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__5789__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__11466,special_mouse_event,real_mouse_event))
});})(vec__11466,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__5789__auto__ = selected_target;if(cljs.core.truth_(and__5789__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__5789__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__5805__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11467){
var elem = cljs.core.first(arglist__11467);
arglist__11467 = cljs.core.next(arglist__11467);
var f = cljs.core.first(arglist__11467);
var args = cljs.core.rest(arglist__11467);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11468_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11468_SHARP_));
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
var vec__11492_11515 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11516 = cljs.core.nth.call(null,vec__11492_11515,(0),null);var selector_11517 = cljs.core.nth.call(null,vec__11492_11515,(1),null);var seq__11493_11518 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11500_11519 = null;var count__11501_11520 = (0);var i__11502_11521 = (0);while(true){
if((i__11502_11521 < count__11501_11520))
{var vec__11509_11522 = cljs.core._nth.call(null,chunk__11500_11519,i__11502_11521);var orig_type_11523 = cljs.core.nth.call(null,vec__11509_11522,(0),null);var f_11524 = cljs.core.nth.call(null,vec__11509_11522,(1),null);var seq__11503_11525 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11523,new cljs.core.PersistentArrayMap.fromArray([orig_type_11523,cljs.core.identity], true, false)));var chunk__11505_11526 = null;var count__11506_11527 = (0);var i__11507_11528 = (0);while(true){
if((i__11507_11528 < count__11506_11527))
{var vec__11510_11529 = cljs.core._nth.call(null,chunk__11505_11526,i__11507_11528);var actual_type_11530 = cljs.core.nth.call(null,vec__11510_11529,(0),null);var factory_11531 = cljs.core.nth.call(null,vec__11510_11529,(1),null);var canonical_f_11532 = (cljs.core.truth_(selector_11517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11516,selector_11517):cljs.core.identity).call(null,factory_11531.call(null,f_11524));dommy.core.update_event_listeners_BANG_.call(null,elem_11516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11517,actual_type_11530,f_11524], null),canonical_f_11532);
if(cljs.core.truth_(elem_11516.addEventListener))
{elem_11516.addEventListener(cljs.core.name.call(null,actual_type_11530),canonical_f_11532);
} else
{elem_11516.attachEvent(cljs.core.name.call(null,actual_type_11530),canonical_f_11532);
}
{
var G__11533 = seq__11503_11525;
var G__11534 = chunk__11505_11526;
var G__11535 = count__11506_11527;
var G__11536 = (i__11507_11528 + (1));
seq__11503_11525 = G__11533;
chunk__11505_11526 = G__11534;
count__11506_11527 = G__11535;
i__11507_11528 = G__11536;
continue;
}
} else
{var temp__4126__auto___11537 = cljs.core.seq.call(null,seq__11503_11525);if(temp__4126__auto___11537)
{var seq__11503_11538__$1 = temp__4126__auto___11537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11503_11538__$1))
{var c__6919__auto___11539 = cljs.core.chunk_first.call(null,seq__11503_11538__$1);{
var G__11540 = cljs.core.chunk_rest.call(null,seq__11503_11538__$1);
var G__11541 = c__6919__auto___11539;
var G__11542 = cljs.core.count.call(null,c__6919__auto___11539);
var G__11543 = (0);
seq__11503_11525 = G__11540;
chunk__11505_11526 = G__11541;
count__11506_11527 = G__11542;
i__11507_11528 = G__11543;
continue;
}
} else
{var vec__11511_11544 = cljs.core.first.call(null,seq__11503_11538__$1);var actual_type_11545 = cljs.core.nth.call(null,vec__11511_11544,(0),null);var factory_11546 = cljs.core.nth.call(null,vec__11511_11544,(1),null);var canonical_f_11547 = (cljs.core.truth_(selector_11517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11516,selector_11517):cljs.core.identity).call(null,factory_11546.call(null,f_11524));dommy.core.update_event_listeners_BANG_.call(null,elem_11516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11517,actual_type_11545,f_11524], null),canonical_f_11547);
if(cljs.core.truth_(elem_11516.addEventListener))
{elem_11516.addEventListener(cljs.core.name.call(null,actual_type_11545),canonical_f_11547);
} else
{elem_11516.attachEvent(cljs.core.name.call(null,actual_type_11545),canonical_f_11547);
}
{
var G__11548 = cljs.core.next.call(null,seq__11503_11538__$1);
var G__11549 = null;
var G__11550 = (0);
var G__11551 = (0);
seq__11503_11525 = G__11548;
chunk__11505_11526 = G__11549;
count__11506_11527 = G__11550;
i__11507_11528 = G__11551;
continue;
}
}
} else
{}
}
break;
}
{
var G__11552 = seq__11493_11518;
var G__11553 = chunk__11500_11519;
var G__11554 = count__11501_11520;
var G__11555 = (i__11502_11521 + (1));
seq__11493_11518 = G__11552;
chunk__11500_11519 = G__11553;
count__11501_11520 = G__11554;
i__11502_11521 = G__11555;
continue;
}
} else
{var temp__4126__auto___11556 = cljs.core.seq.call(null,seq__11493_11518);if(temp__4126__auto___11556)
{var seq__11493_11557__$1 = temp__4126__auto___11556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_11557__$1))
{var c__6919__auto___11558 = cljs.core.chunk_first.call(null,seq__11493_11557__$1);{
var G__11559 = cljs.core.chunk_rest.call(null,seq__11493_11557__$1);
var G__11560 = c__6919__auto___11558;
var G__11561 = cljs.core.count.call(null,c__6919__auto___11558);
var G__11562 = (0);
seq__11493_11518 = G__11559;
chunk__11500_11519 = G__11560;
count__11501_11520 = G__11561;
i__11502_11521 = G__11562;
continue;
}
} else
{var vec__11512_11563 = cljs.core.first.call(null,seq__11493_11557__$1);var orig_type_11564 = cljs.core.nth.call(null,vec__11512_11563,(0),null);var f_11565 = cljs.core.nth.call(null,vec__11512_11563,(1),null);var seq__11494_11566 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11564,new cljs.core.PersistentArrayMap.fromArray([orig_type_11564,cljs.core.identity], true, false)));var chunk__11496_11567 = null;var count__11497_11568 = (0);var i__11498_11569 = (0);while(true){
if((i__11498_11569 < count__11497_11568))
{var vec__11513_11570 = cljs.core._nth.call(null,chunk__11496_11567,i__11498_11569);var actual_type_11571 = cljs.core.nth.call(null,vec__11513_11570,(0),null);var factory_11572 = cljs.core.nth.call(null,vec__11513_11570,(1),null);var canonical_f_11573 = (cljs.core.truth_(selector_11517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11516,selector_11517):cljs.core.identity).call(null,factory_11572.call(null,f_11565));dommy.core.update_event_listeners_BANG_.call(null,elem_11516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11517,actual_type_11571,f_11565], null),canonical_f_11573);
if(cljs.core.truth_(elem_11516.addEventListener))
{elem_11516.addEventListener(cljs.core.name.call(null,actual_type_11571),canonical_f_11573);
} else
{elem_11516.attachEvent(cljs.core.name.call(null,actual_type_11571),canonical_f_11573);
}
{
var G__11574 = seq__11494_11566;
var G__11575 = chunk__11496_11567;
var G__11576 = count__11497_11568;
var G__11577 = (i__11498_11569 + (1));
seq__11494_11566 = G__11574;
chunk__11496_11567 = G__11575;
count__11497_11568 = G__11576;
i__11498_11569 = G__11577;
continue;
}
} else
{var temp__4126__auto___11578__$1 = cljs.core.seq.call(null,seq__11494_11566);if(temp__4126__auto___11578__$1)
{var seq__11494_11579__$1 = temp__4126__auto___11578__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11494_11579__$1))
{var c__6919__auto___11580 = cljs.core.chunk_first.call(null,seq__11494_11579__$1);{
var G__11581 = cljs.core.chunk_rest.call(null,seq__11494_11579__$1);
var G__11582 = c__6919__auto___11580;
var G__11583 = cljs.core.count.call(null,c__6919__auto___11580);
var G__11584 = (0);
seq__11494_11566 = G__11581;
chunk__11496_11567 = G__11582;
count__11497_11568 = G__11583;
i__11498_11569 = G__11584;
continue;
}
} else
{var vec__11514_11585 = cljs.core.first.call(null,seq__11494_11579__$1);var actual_type_11586 = cljs.core.nth.call(null,vec__11514_11585,(0),null);var factory_11587 = cljs.core.nth.call(null,vec__11514_11585,(1),null);var canonical_f_11588 = (cljs.core.truth_(selector_11517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11516,selector_11517):cljs.core.identity).call(null,factory_11587.call(null,f_11565));dommy.core.update_event_listeners_BANG_.call(null,elem_11516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11517,actual_type_11586,f_11565], null),canonical_f_11588);
if(cljs.core.truth_(elem_11516.addEventListener))
{elem_11516.addEventListener(cljs.core.name.call(null,actual_type_11586),canonical_f_11588);
} else
{elem_11516.attachEvent(cljs.core.name.call(null,actual_type_11586),canonical_f_11588);
}
{
var G__11589 = cljs.core.next.call(null,seq__11494_11579__$1);
var G__11590 = null;
var G__11591 = (0);
var G__11592 = (0);
seq__11494_11566 = G__11589;
chunk__11496_11567 = G__11590;
count__11497_11568 = G__11591;
i__11498_11569 = G__11592;
continue;
}
}
} else
{}
}
break;
}
{
var G__11593 = cljs.core.next.call(null,seq__11493_11557__$1);
var G__11594 = null;
var G__11595 = (0);
var G__11596 = (0);
seq__11493_11518 = G__11593;
chunk__11500_11519 = G__11594;
count__11501_11520 = G__11595;
i__11502_11521 = G__11596;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11597){
var elem_sel = cljs.core.first(arglist__11597);
var type_fs = cljs.core.rest(arglist__11597);
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
var vec__11621_11644 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11645 = cljs.core.nth.call(null,vec__11621_11644,(0),null);var selector_11646 = cljs.core.nth.call(null,vec__11621_11644,(1),null);var seq__11622_11647 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11629_11648 = null;var count__11630_11649 = (0);var i__11631_11650 = (0);while(true){
if((i__11631_11650 < count__11630_11649))
{var vec__11638_11651 = cljs.core._nth.call(null,chunk__11629_11648,i__11631_11650);var orig_type_11652 = cljs.core.nth.call(null,vec__11638_11651,(0),null);var f_11653 = cljs.core.nth.call(null,vec__11638_11651,(1),null);var seq__11632_11654 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11652,new cljs.core.PersistentArrayMap.fromArray([orig_type_11652,cljs.core.identity], true, false)));var chunk__11634_11655 = null;var count__11635_11656 = (0);var i__11636_11657 = (0);while(true){
if((i__11636_11657 < count__11635_11656))
{var vec__11639_11658 = cljs.core._nth.call(null,chunk__11634_11655,i__11636_11657);var actual_type_11659 = cljs.core.nth.call(null,vec__11639_11658,(0),null);var __11660 = cljs.core.nth.call(null,vec__11639_11658,(1),null);var keys_11661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11646,actual_type_11659,f_11653], null);var canonical_f_11662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11645),keys_11661);dommy.core.update_event_listeners_BANG_.call(null,elem_11645,dommy.utils.dissoc_in,keys_11661);
if(cljs.core.truth_(elem_11645.removeEventListener))
{elem_11645.removeEventListener(cljs.core.name.call(null,actual_type_11659),canonical_f_11662);
} else
{elem_11645.detachEvent(cljs.core.name.call(null,actual_type_11659),canonical_f_11662);
}
{
var G__11663 = seq__11632_11654;
var G__11664 = chunk__11634_11655;
var G__11665 = count__11635_11656;
var G__11666 = (i__11636_11657 + (1));
seq__11632_11654 = G__11663;
chunk__11634_11655 = G__11664;
count__11635_11656 = G__11665;
i__11636_11657 = G__11666;
continue;
}
} else
{var temp__4126__auto___11667 = cljs.core.seq.call(null,seq__11632_11654);if(temp__4126__auto___11667)
{var seq__11632_11668__$1 = temp__4126__auto___11667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11632_11668__$1))
{var c__6919__auto___11669 = cljs.core.chunk_first.call(null,seq__11632_11668__$1);{
var G__11670 = cljs.core.chunk_rest.call(null,seq__11632_11668__$1);
var G__11671 = c__6919__auto___11669;
var G__11672 = cljs.core.count.call(null,c__6919__auto___11669);
var G__11673 = (0);
seq__11632_11654 = G__11670;
chunk__11634_11655 = G__11671;
count__11635_11656 = G__11672;
i__11636_11657 = G__11673;
continue;
}
} else
{var vec__11640_11674 = cljs.core.first.call(null,seq__11632_11668__$1);var actual_type_11675 = cljs.core.nth.call(null,vec__11640_11674,(0),null);var __11676 = cljs.core.nth.call(null,vec__11640_11674,(1),null);var keys_11677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11646,actual_type_11675,f_11653], null);var canonical_f_11678 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11645),keys_11677);dommy.core.update_event_listeners_BANG_.call(null,elem_11645,dommy.utils.dissoc_in,keys_11677);
if(cljs.core.truth_(elem_11645.removeEventListener))
{elem_11645.removeEventListener(cljs.core.name.call(null,actual_type_11675),canonical_f_11678);
} else
{elem_11645.detachEvent(cljs.core.name.call(null,actual_type_11675),canonical_f_11678);
}
{
var G__11679 = cljs.core.next.call(null,seq__11632_11668__$1);
var G__11680 = null;
var G__11681 = (0);
var G__11682 = (0);
seq__11632_11654 = G__11679;
chunk__11634_11655 = G__11680;
count__11635_11656 = G__11681;
i__11636_11657 = G__11682;
continue;
}
}
} else
{}
}
break;
}
{
var G__11683 = seq__11622_11647;
var G__11684 = chunk__11629_11648;
var G__11685 = count__11630_11649;
var G__11686 = (i__11631_11650 + (1));
seq__11622_11647 = G__11683;
chunk__11629_11648 = G__11684;
count__11630_11649 = G__11685;
i__11631_11650 = G__11686;
continue;
}
} else
{var temp__4126__auto___11687 = cljs.core.seq.call(null,seq__11622_11647);if(temp__4126__auto___11687)
{var seq__11622_11688__$1 = temp__4126__auto___11687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11622_11688__$1))
{var c__6919__auto___11689 = cljs.core.chunk_first.call(null,seq__11622_11688__$1);{
var G__11690 = cljs.core.chunk_rest.call(null,seq__11622_11688__$1);
var G__11691 = c__6919__auto___11689;
var G__11692 = cljs.core.count.call(null,c__6919__auto___11689);
var G__11693 = (0);
seq__11622_11647 = G__11690;
chunk__11629_11648 = G__11691;
count__11630_11649 = G__11692;
i__11631_11650 = G__11693;
continue;
}
} else
{var vec__11641_11694 = cljs.core.first.call(null,seq__11622_11688__$1);var orig_type_11695 = cljs.core.nth.call(null,vec__11641_11694,(0),null);var f_11696 = cljs.core.nth.call(null,vec__11641_11694,(1),null);var seq__11623_11697 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11695,new cljs.core.PersistentArrayMap.fromArray([orig_type_11695,cljs.core.identity], true, false)));var chunk__11625_11698 = null;var count__11626_11699 = (0);var i__11627_11700 = (0);while(true){
if((i__11627_11700 < count__11626_11699))
{var vec__11642_11701 = cljs.core._nth.call(null,chunk__11625_11698,i__11627_11700);var actual_type_11702 = cljs.core.nth.call(null,vec__11642_11701,(0),null);var __11703 = cljs.core.nth.call(null,vec__11642_11701,(1),null);var keys_11704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11646,actual_type_11702,f_11696], null);var canonical_f_11705 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11645),keys_11704);dommy.core.update_event_listeners_BANG_.call(null,elem_11645,dommy.utils.dissoc_in,keys_11704);
if(cljs.core.truth_(elem_11645.removeEventListener))
{elem_11645.removeEventListener(cljs.core.name.call(null,actual_type_11702),canonical_f_11705);
} else
{elem_11645.detachEvent(cljs.core.name.call(null,actual_type_11702),canonical_f_11705);
}
{
var G__11706 = seq__11623_11697;
var G__11707 = chunk__11625_11698;
var G__11708 = count__11626_11699;
var G__11709 = (i__11627_11700 + (1));
seq__11623_11697 = G__11706;
chunk__11625_11698 = G__11707;
count__11626_11699 = G__11708;
i__11627_11700 = G__11709;
continue;
}
} else
{var temp__4126__auto___11710__$1 = cljs.core.seq.call(null,seq__11623_11697);if(temp__4126__auto___11710__$1)
{var seq__11623_11711__$1 = temp__4126__auto___11710__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11623_11711__$1))
{var c__6919__auto___11712 = cljs.core.chunk_first.call(null,seq__11623_11711__$1);{
var G__11713 = cljs.core.chunk_rest.call(null,seq__11623_11711__$1);
var G__11714 = c__6919__auto___11712;
var G__11715 = cljs.core.count.call(null,c__6919__auto___11712);
var G__11716 = (0);
seq__11623_11697 = G__11713;
chunk__11625_11698 = G__11714;
count__11626_11699 = G__11715;
i__11627_11700 = G__11716;
continue;
}
} else
{var vec__11643_11717 = cljs.core.first.call(null,seq__11623_11711__$1);var actual_type_11718 = cljs.core.nth.call(null,vec__11643_11717,(0),null);var __11719 = cljs.core.nth.call(null,vec__11643_11717,(1),null);var keys_11720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11646,actual_type_11718,f_11696], null);var canonical_f_11721 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11645),keys_11720);dommy.core.update_event_listeners_BANG_.call(null,elem_11645,dommy.utils.dissoc_in,keys_11720);
if(cljs.core.truth_(elem_11645.removeEventListener))
{elem_11645.removeEventListener(cljs.core.name.call(null,actual_type_11718),canonical_f_11721);
} else
{elem_11645.detachEvent(cljs.core.name.call(null,actual_type_11718),canonical_f_11721);
}
{
var G__11722 = cljs.core.next.call(null,seq__11623_11711__$1);
var G__11723 = null;
var G__11724 = (0);
var G__11725 = (0);
seq__11623_11697 = G__11722;
chunk__11625_11698 = G__11723;
count__11626_11699 = G__11724;
i__11627_11700 = G__11725;
continue;
}
}
} else
{}
}
break;
}
{
var G__11726 = cljs.core.next.call(null,seq__11622_11688__$1);
var G__11727 = null;
var G__11728 = (0);
var G__11729 = (0);
seq__11622_11647 = G__11726;
chunk__11629_11648 = G__11727;
count__11630_11649 = G__11728;
i__11631_11650 = G__11729;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11730){
var elem_sel = cljs.core.first(arglist__11730);
var type_fs = cljs.core.rest(arglist__11730);
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
var vec__11738_11745 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11746 = cljs.core.nth.call(null,vec__11738_11745,(0),null);var selector_11747 = cljs.core.nth.call(null,vec__11738_11745,(1),null);var seq__11739_11748 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11740_11749 = null;var count__11741_11750 = (0);var i__11742_11751 = (0);while(true){
if((i__11742_11751 < count__11741_11750))
{var vec__11743_11752 = cljs.core._nth.call(null,chunk__11740_11749,i__11742_11751);var type_11753 = cljs.core.nth.call(null,vec__11743_11752,(0),null);var f_11754 = cljs.core.nth.call(null,vec__11743_11752,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11753,((function (seq__11739_11748,chunk__11740_11749,count__11741_11750,i__11742_11751,vec__11743_11752,type_11753,f_11754,vec__11738_11745,elem_11746,selector_11747){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11753,this_fn);
return f_11754.call(null,e);
});})(seq__11739_11748,chunk__11740_11749,count__11741_11750,i__11742_11751,vec__11743_11752,type_11753,f_11754,vec__11738_11745,elem_11746,selector_11747))
);
{
var G__11755 = seq__11739_11748;
var G__11756 = chunk__11740_11749;
var G__11757 = count__11741_11750;
var G__11758 = (i__11742_11751 + (1));
seq__11739_11748 = G__11755;
chunk__11740_11749 = G__11756;
count__11741_11750 = G__11757;
i__11742_11751 = G__11758;
continue;
}
} else
{var temp__4126__auto___11759 = cljs.core.seq.call(null,seq__11739_11748);if(temp__4126__auto___11759)
{var seq__11739_11760__$1 = temp__4126__auto___11759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11739_11760__$1))
{var c__6919__auto___11761 = cljs.core.chunk_first.call(null,seq__11739_11760__$1);{
var G__11762 = cljs.core.chunk_rest.call(null,seq__11739_11760__$1);
var G__11763 = c__6919__auto___11761;
var G__11764 = cljs.core.count.call(null,c__6919__auto___11761);
var G__11765 = (0);
seq__11739_11748 = G__11762;
chunk__11740_11749 = G__11763;
count__11741_11750 = G__11764;
i__11742_11751 = G__11765;
continue;
}
} else
{var vec__11744_11766 = cljs.core.first.call(null,seq__11739_11760__$1);var type_11767 = cljs.core.nth.call(null,vec__11744_11766,(0),null);var f_11768 = cljs.core.nth.call(null,vec__11744_11766,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11767,((function (seq__11739_11748,chunk__11740_11749,count__11741_11750,i__11742_11751,vec__11744_11766,type_11767,f_11768,seq__11739_11760__$1,temp__4126__auto___11759,vec__11738_11745,elem_11746,selector_11747){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11767,this_fn);
return f_11768.call(null,e);
});})(seq__11739_11748,chunk__11740_11749,count__11741_11750,i__11742_11751,vec__11744_11766,type_11767,f_11768,seq__11739_11760__$1,temp__4126__auto___11759,vec__11738_11745,elem_11746,selector_11747))
);
{
var G__11769 = cljs.core.next.call(null,seq__11739_11760__$1);
var G__11770 = null;
var G__11771 = (0);
var G__11772 = (0);
seq__11739_11748 = G__11769;
chunk__11740_11749 = G__11770;
count__11741_11750 = G__11771;
i__11742_11751 = G__11772;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11773){
var elem_sel = cljs.core.first(arglist__11773);
var type_fs = cljs.core.rest(arglist__11773);
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
var fire_BANG___delegate = function (node,event_type,p__11774){var vec__11776 = p__11774;var update_event_BANG_ = cljs.core.nth.call(null,vec__11776,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5805__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5805__auto__))
{return or__5805__auto__;
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
var p__11774 = null;if (arguments.length > 2) {
  p__11774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11774);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11777){
var node = cljs.core.first(arglist__11777);
arglist__11777 = cljs.core.next(arglist__11777);
var event_type = cljs.core.first(arglist__11777);
var p__11774 = cljs.core.rest(arglist__11777);
return fire_BANG___delegate(node,event_type,p__11774);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
