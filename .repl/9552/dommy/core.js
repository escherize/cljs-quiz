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
var append_BANG___2 = (function (parent,child){var G__11407 = dommy.template.__GT_node_like.call(null,parent);G__11407.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11407;
});
var append_BANG___3 = (function() { 
var G__11412__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11408_11413 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11409_11414 = null;var count__11410_11415 = (0);var i__11411_11416 = (0);while(true){
if((i__11411_11416 < count__11410_11415))
{var c_11417 = cljs.core._nth.call(null,chunk__11409_11414,i__11411_11416);append_BANG_.call(null,parent__$1,c_11417);
{
var G__11418 = seq__11408_11413;
var G__11419 = chunk__11409_11414;
var G__11420 = count__11410_11415;
var G__11421 = (i__11411_11416 + (1));
seq__11408_11413 = G__11418;
chunk__11409_11414 = G__11419;
count__11410_11415 = G__11420;
i__11411_11416 = G__11421;
continue;
}
} else
{var temp__4126__auto___11422 = cljs.core.seq.call(null,seq__11408_11413);if(temp__4126__auto___11422)
{var seq__11408_11423__$1 = temp__4126__auto___11422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11408_11423__$1))
{var c__6904__auto___11424 = cljs.core.chunk_first.call(null,seq__11408_11423__$1);{
var G__11425 = cljs.core.chunk_rest.call(null,seq__11408_11423__$1);
var G__11426 = c__6904__auto___11424;
var G__11427 = cljs.core.count.call(null,c__6904__auto___11424);
var G__11428 = (0);
seq__11408_11413 = G__11425;
chunk__11409_11414 = G__11426;
count__11410_11415 = G__11427;
i__11411_11416 = G__11428;
continue;
}
} else
{var c_11429 = cljs.core.first.call(null,seq__11408_11423__$1);append_BANG_.call(null,parent__$1,c_11429);
{
var G__11430 = cljs.core.next.call(null,seq__11408_11423__$1);
var G__11431 = null;
var G__11432 = (0);
var G__11433 = (0);
seq__11408_11413 = G__11430;
chunk__11409_11414 = G__11431;
count__11410_11415 = G__11432;
i__11411_11416 = G__11433;
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
var G__11412 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11412__delegate.call(this,parent,child,more_children);};
G__11412.cljs$lang$maxFixedArity = 2;
G__11412.cljs$lang$applyTo = (function (arglist__11434){
var parent = cljs.core.first(arglist__11434);
arglist__11434 = cljs.core.next(arglist__11434);
var child = cljs.core.first(arglist__11434);
var more_children = cljs.core.rest(arglist__11434);
return G__11412__delegate(parent,child,more_children);
});
G__11412.cljs$core$IFn$_invoke$arity$variadic = G__11412__delegate;
return G__11412;
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
var G__11443__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11439_11444 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11440_11445 = null;var count__11441_11446 = (0);var i__11442_11447 = (0);while(true){
if((i__11442_11447 < count__11441_11446))
{var c_11448 = cljs.core._nth.call(null,chunk__11440_11445,i__11442_11447);prepend_BANG_.call(null,parent__$1,c_11448);
{
var G__11449 = seq__11439_11444;
var G__11450 = chunk__11440_11445;
var G__11451 = count__11441_11446;
var G__11452 = (i__11442_11447 + (1));
seq__11439_11444 = G__11449;
chunk__11440_11445 = G__11450;
count__11441_11446 = G__11451;
i__11442_11447 = G__11452;
continue;
}
} else
{var temp__4126__auto___11453 = cljs.core.seq.call(null,seq__11439_11444);if(temp__4126__auto___11453)
{var seq__11439_11454__$1 = temp__4126__auto___11453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11439_11454__$1))
{var c__6904__auto___11455 = cljs.core.chunk_first.call(null,seq__11439_11454__$1);{
var G__11456 = cljs.core.chunk_rest.call(null,seq__11439_11454__$1);
var G__11457 = c__6904__auto___11455;
var G__11458 = cljs.core.count.call(null,c__6904__auto___11455);
var G__11459 = (0);
seq__11439_11444 = G__11456;
chunk__11440_11445 = G__11457;
count__11441_11446 = G__11458;
i__11442_11447 = G__11459;
continue;
}
} else
{var c_11460 = cljs.core.first.call(null,seq__11439_11454__$1);prepend_BANG_.call(null,parent__$1,c_11460);
{
var G__11461 = cljs.core.next.call(null,seq__11439_11454__$1);
var G__11462 = null;
var G__11463 = (0);
var G__11464 = (0);
seq__11439_11444 = G__11461;
chunk__11440_11445 = G__11462;
count__11441_11446 = G__11463;
i__11442_11447 = G__11464;
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
var G__11443 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11443__delegate.call(this,parent,child,more_children);};
G__11443.cljs$lang$maxFixedArity = 2;
G__11443.cljs$lang$applyTo = (function (arglist__11465){
var parent = cljs.core.first(arglist__11465);
arglist__11465 = cljs.core.next(arglist__11465);
var child = cljs.core.first(arglist__11465);
var more_children = cljs.core.rest(arglist__11465);
return G__11443__delegate(parent,child,more_children);
});
G__11443.cljs$core$IFn$_invoke$arity$variadic = G__11443__delegate;
return G__11443;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11466 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11466))
{var next_11467 = temp__4124__auto___11466;parent.insertBefore(actual_node,next_11467);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11469 = dommy.template.__GT_node_like.call(null,parent);G__11469.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11469,node_like);
return G__11469;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11471 = elem__$1.parentNode;G__11471.removeChild(elem__$1);
return G__11471;
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
return (function (p__11477){var vec__11478 = p__11477;var k = cljs.core.nth.call(null,vec__11478,(0),null);var v = cljs.core.nth.call(null,vec__11478,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11479 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11479 = (function (v,k,vec__11478,p__11477,container,key_selectors_map,template,selector_map,meta11480){
this.v = v;
this.k = k;
this.vec__11478 = vec__11478;
this.p__11477 = p__11477;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11480 = meta11480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11479.cljs$lang$type = true;
dommy.core.t11479.cljs$lang$ctorStr = "dommy.core/t11479";
dommy.core.t11479.cljs$lang$ctorPrWriter = ((function (vec__11478,k,v,container){
return (function (this__6638__auto__,writer__6639__auto__,opt__6640__auto__){return cljs.core._write.call(null,writer__6639__auto__,"dommy.core/t11479");
});})(vec__11478,k,v,container))
;
dommy.core.t11479.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11478,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11478,k,v,container))
;
dommy.core.t11479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11478,k,v,container){
return (function (_11481){var self__ = this;
var _11481__$1 = this;return self__.meta11480;
});})(vec__11478,k,v,container))
;
dommy.core.t11479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11478,k,v,container){
return (function (_11481,meta11480__$1){var self__ = this;
var _11481__$1 = this;return (new dommy.core.t11479(self__.v,self__.k,self__.vec__11478,self__.p__11477,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11480__$1));
});})(vec__11478,k,v,container))
;
dommy.core.__GT_t11479 = ((function (vec__11478,k,v,container){
return (function __GT_t11479(v__$1,k__$1,vec__11478__$1,p__11477__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11480){return (new dommy.core.t11479(v__$1,k__$1,vec__11478__$1,p__11477__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11480));
});})(vec__11478,k,v,container))
;
}
return (new dommy.core.t11479(v,k,vec__11478,p__11477,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11482_SHARP_){return p1__11482_SHARP_.parentNode;
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
return (function (p1__11483_SHARP_){return !((p1__11483_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11484){var vec__11485 = p__11484;var special_mouse_event = cljs.core.nth.call(null,vec__11485,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__11485,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11485,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11485,special_mouse_event,real_mouse_event){
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
;})(vec__11485,special_mouse_event,real_mouse_event))
});})(vec__11485,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11486){
var elem = cljs.core.first(arglist__11486);
arglist__11486 = cljs.core.next(arglist__11486);
var f = cljs.core.first(arglist__11486);
var args = cljs.core.rest(arglist__11486);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11487_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11487_SHARP_));
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
var vec__11511_11534 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11535 = cljs.core.nth.call(null,vec__11511_11534,(0),null);var selector_11536 = cljs.core.nth.call(null,vec__11511_11534,(1),null);var seq__11512_11537 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11519_11538 = null;var count__11520_11539 = (0);var i__11521_11540 = (0);while(true){
if((i__11521_11540 < count__11520_11539))
{var vec__11528_11541 = cljs.core._nth.call(null,chunk__11519_11538,i__11521_11540);var orig_type_11542 = cljs.core.nth.call(null,vec__11528_11541,(0),null);var f_11543 = cljs.core.nth.call(null,vec__11528_11541,(1),null);var seq__11522_11544 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11542,new cljs.core.PersistentArrayMap.fromArray([orig_type_11542,cljs.core.identity], true, false)));var chunk__11524_11545 = null;var count__11525_11546 = (0);var i__11526_11547 = (0);while(true){
if((i__11526_11547 < count__11525_11546))
{var vec__11529_11548 = cljs.core._nth.call(null,chunk__11524_11545,i__11526_11547);var actual_type_11549 = cljs.core.nth.call(null,vec__11529_11548,(0),null);var factory_11550 = cljs.core.nth.call(null,vec__11529_11548,(1),null);var canonical_f_11551 = (cljs.core.truth_(selector_11536)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11535,selector_11536):cljs.core.identity).call(null,factory_11550.call(null,f_11543));dommy.core.update_event_listeners_BANG_.call(null,elem_11535,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11536,actual_type_11549,f_11543], null),canonical_f_11551);
if(cljs.core.truth_(elem_11535.addEventListener))
{elem_11535.addEventListener(cljs.core.name.call(null,actual_type_11549),canonical_f_11551);
} else
{elem_11535.attachEvent(cljs.core.name.call(null,actual_type_11549),canonical_f_11551);
}
{
var G__11552 = seq__11522_11544;
var G__11553 = chunk__11524_11545;
var G__11554 = count__11525_11546;
var G__11555 = (i__11526_11547 + (1));
seq__11522_11544 = G__11552;
chunk__11524_11545 = G__11553;
count__11525_11546 = G__11554;
i__11526_11547 = G__11555;
continue;
}
} else
{var temp__4126__auto___11556 = cljs.core.seq.call(null,seq__11522_11544);if(temp__4126__auto___11556)
{var seq__11522_11557__$1 = temp__4126__auto___11556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11522_11557__$1))
{var c__6904__auto___11558 = cljs.core.chunk_first.call(null,seq__11522_11557__$1);{
var G__11559 = cljs.core.chunk_rest.call(null,seq__11522_11557__$1);
var G__11560 = c__6904__auto___11558;
var G__11561 = cljs.core.count.call(null,c__6904__auto___11558);
var G__11562 = (0);
seq__11522_11544 = G__11559;
chunk__11524_11545 = G__11560;
count__11525_11546 = G__11561;
i__11526_11547 = G__11562;
continue;
}
} else
{var vec__11530_11563 = cljs.core.first.call(null,seq__11522_11557__$1);var actual_type_11564 = cljs.core.nth.call(null,vec__11530_11563,(0),null);var factory_11565 = cljs.core.nth.call(null,vec__11530_11563,(1),null);var canonical_f_11566 = (cljs.core.truth_(selector_11536)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11535,selector_11536):cljs.core.identity).call(null,factory_11565.call(null,f_11543));dommy.core.update_event_listeners_BANG_.call(null,elem_11535,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11536,actual_type_11564,f_11543], null),canonical_f_11566);
if(cljs.core.truth_(elem_11535.addEventListener))
{elem_11535.addEventListener(cljs.core.name.call(null,actual_type_11564),canonical_f_11566);
} else
{elem_11535.attachEvent(cljs.core.name.call(null,actual_type_11564),canonical_f_11566);
}
{
var G__11567 = cljs.core.next.call(null,seq__11522_11557__$1);
var G__11568 = null;
var G__11569 = (0);
var G__11570 = (0);
seq__11522_11544 = G__11567;
chunk__11524_11545 = G__11568;
count__11525_11546 = G__11569;
i__11526_11547 = G__11570;
continue;
}
}
} else
{}
}
break;
}
{
var G__11571 = seq__11512_11537;
var G__11572 = chunk__11519_11538;
var G__11573 = count__11520_11539;
var G__11574 = (i__11521_11540 + (1));
seq__11512_11537 = G__11571;
chunk__11519_11538 = G__11572;
count__11520_11539 = G__11573;
i__11521_11540 = G__11574;
continue;
}
} else
{var temp__4126__auto___11575 = cljs.core.seq.call(null,seq__11512_11537);if(temp__4126__auto___11575)
{var seq__11512_11576__$1 = temp__4126__auto___11575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11512_11576__$1))
{var c__6904__auto___11577 = cljs.core.chunk_first.call(null,seq__11512_11576__$1);{
var G__11578 = cljs.core.chunk_rest.call(null,seq__11512_11576__$1);
var G__11579 = c__6904__auto___11577;
var G__11580 = cljs.core.count.call(null,c__6904__auto___11577);
var G__11581 = (0);
seq__11512_11537 = G__11578;
chunk__11519_11538 = G__11579;
count__11520_11539 = G__11580;
i__11521_11540 = G__11581;
continue;
}
} else
{var vec__11531_11582 = cljs.core.first.call(null,seq__11512_11576__$1);var orig_type_11583 = cljs.core.nth.call(null,vec__11531_11582,(0),null);var f_11584 = cljs.core.nth.call(null,vec__11531_11582,(1),null);var seq__11513_11585 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11583,new cljs.core.PersistentArrayMap.fromArray([orig_type_11583,cljs.core.identity], true, false)));var chunk__11515_11586 = null;var count__11516_11587 = (0);var i__11517_11588 = (0);while(true){
if((i__11517_11588 < count__11516_11587))
{var vec__11532_11589 = cljs.core._nth.call(null,chunk__11515_11586,i__11517_11588);var actual_type_11590 = cljs.core.nth.call(null,vec__11532_11589,(0),null);var factory_11591 = cljs.core.nth.call(null,vec__11532_11589,(1),null);var canonical_f_11592 = (cljs.core.truth_(selector_11536)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11535,selector_11536):cljs.core.identity).call(null,factory_11591.call(null,f_11584));dommy.core.update_event_listeners_BANG_.call(null,elem_11535,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11536,actual_type_11590,f_11584], null),canonical_f_11592);
if(cljs.core.truth_(elem_11535.addEventListener))
{elem_11535.addEventListener(cljs.core.name.call(null,actual_type_11590),canonical_f_11592);
} else
{elem_11535.attachEvent(cljs.core.name.call(null,actual_type_11590),canonical_f_11592);
}
{
var G__11593 = seq__11513_11585;
var G__11594 = chunk__11515_11586;
var G__11595 = count__11516_11587;
var G__11596 = (i__11517_11588 + (1));
seq__11513_11585 = G__11593;
chunk__11515_11586 = G__11594;
count__11516_11587 = G__11595;
i__11517_11588 = G__11596;
continue;
}
} else
{var temp__4126__auto___11597__$1 = cljs.core.seq.call(null,seq__11513_11585);if(temp__4126__auto___11597__$1)
{var seq__11513_11598__$1 = temp__4126__auto___11597__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11513_11598__$1))
{var c__6904__auto___11599 = cljs.core.chunk_first.call(null,seq__11513_11598__$1);{
var G__11600 = cljs.core.chunk_rest.call(null,seq__11513_11598__$1);
var G__11601 = c__6904__auto___11599;
var G__11602 = cljs.core.count.call(null,c__6904__auto___11599);
var G__11603 = (0);
seq__11513_11585 = G__11600;
chunk__11515_11586 = G__11601;
count__11516_11587 = G__11602;
i__11517_11588 = G__11603;
continue;
}
} else
{var vec__11533_11604 = cljs.core.first.call(null,seq__11513_11598__$1);var actual_type_11605 = cljs.core.nth.call(null,vec__11533_11604,(0),null);var factory_11606 = cljs.core.nth.call(null,vec__11533_11604,(1),null);var canonical_f_11607 = (cljs.core.truth_(selector_11536)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11535,selector_11536):cljs.core.identity).call(null,factory_11606.call(null,f_11584));dommy.core.update_event_listeners_BANG_.call(null,elem_11535,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11536,actual_type_11605,f_11584], null),canonical_f_11607);
if(cljs.core.truth_(elem_11535.addEventListener))
{elem_11535.addEventListener(cljs.core.name.call(null,actual_type_11605),canonical_f_11607);
} else
{elem_11535.attachEvent(cljs.core.name.call(null,actual_type_11605),canonical_f_11607);
}
{
var G__11608 = cljs.core.next.call(null,seq__11513_11598__$1);
var G__11609 = null;
var G__11610 = (0);
var G__11611 = (0);
seq__11513_11585 = G__11608;
chunk__11515_11586 = G__11609;
count__11516_11587 = G__11610;
i__11517_11588 = G__11611;
continue;
}
}
} else
{}
}
break;
}
{
var G__11612 = cljs.core.next.call(null,seq__11512_11576__$1);
var G__11613 = null;
var G__11614 = (0);
var G__11615 = (0);
seq__11512_11537 = G__11612;
chunk__11519_11538 = G__11613;
count__11520_11539 = G__11614;
i__11521_11540 = G__11615;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11616){
var elem_sel = cljs.core.first(arglist__11616);
var type_fs = cljs.core.rest(arglist__11616);
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
var vec__11640_11663 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11664 = cljs.core.nth.call(null,vec__11640_11663,(0),null);var selector_11665 = cljs.core.nth.call(null,vec__11640_11663,(1),null);var seq__11641_11666 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11648_11667 = null;var count__11649_11668 = (0);var i__11650_11669 = (0);while(true){
if((i__11650_11669 < count__11649_11668))
{var vec__11657_11670 = cljs.core._nth.call(null,chunk__11648_11667,i__11650_11669);var orig_type_11671 = cljs.core.nth.call(null,vec__11657_11670,(0),null);var f_11672 = cljs.core.nth.call(null,vec__11657_11670,(1),null);var seq__11651_11673 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11671,new cljs.core.PersistentArrayMap.fromArray([orig_type_11671,cljs.core.identity], true, false)));var chunk__11653_11674 = null;var count__11654_11675 = (0);var i__11655_11676 = (0);while(true){
if((i__11655_11676 < count__11654_11675))
{var vec__11658_11677 = cljs.core._nth.call(null,chunk__11653_11674,i__11655_11676);var actual_type_11678 = cljs.core.nth.call(null,vec__11658_11677,(0),null);var __11679 = cljs.core.nth.call(null,vec__11658_11677,(1),null);var keys_11680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11665,actual_type_11678,f_11672], null);var canonical_f_11681 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11664),keys_11680);dommy.core.update_event_listeners_BANG_.call(null,elem_11664,dommy.utils.dissoc_in,keys_11680);
if(cljs.core.truth_(elem_11664.removeEventListener))
{elem_11664.removeEventListener(cljs.core.name.call(null,actual_type_11678),canonical_f_11681);
} else
{elem_11664.detachEvent(cljs.core.name.call(null,actual_type_11678),canonical_f_11681);
}
{
var G__11682 = seq__11651_11673;
var G__11683 = chunk__11653_11674;
var G__11684 = count__11654_11675;
var G__11685 = (i__11655_11676 + (1));
seq__11651_11673 = G__11682;
chunk__11653_11674 = G__11683;
count__11654_11675 = G__11684;
i__11655_11676 = G__11685;
continue;
}
} else
{var temp__4126__auto___11686 = cljs.core.seq.call(null,seq__11651_11673);if(temp__4126__auto___11686)
{var seq__11651_11687__$1 = temp__4126__auto___11686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11651_11687__$1))
{var c__6904__auto___11688 = cljs.core.chunk_first.call(null,seq__11651_11687__$1);{
var G__11689 = cljs.core.chunk_rest.call(null,seq__11651_11687__$1);
var G__11690 = c__6904__auto___11688;
var G__11691 = cljs.core.count.call(null,c__6904__auto___11688);
var G__11692 = (0);
seq__11651_11673 = G__11689;
chunk__11653_11674 = G__11690;
count__11654_11675 = G__11691;
i__11655_11676 = G__11692;
continue;
}
} else
{var vec__11659_11693 = cljs.core.first.call(null,seq__11651_11687__$1);var actual_type_11694 = cljs.core.nth.call(null,vec__11659_11693,(0),null);var __11695 = cljs.core.nth.call(null,vec__11659_11693,(1),null);var keys_11696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11665,actual_type_11694,f_11672], null);var canonical_f_11697 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11664),keys_11696);dommy.core.update_event_listeners_BANG_.call(null,elem_11664,dommy.utils.dissoc_in,keys_11696);
if(cljs.core.truth_(elem_11664.removeEventListener))
{elem_11664.removeEventListener(cljs.core.name.call(null,actual_type_11694),canonical_f_11697);
} else
{elem_11664.detachEvent(cljs.core.name.call(null,actual_type_11694),canonical_f_11697);
}
{
var G__11698 = cljs.core.next.call(null,seq__11651_11687__$1);
var G__11699 = null;
var G__11700 = (0);
var G__11701 = (0);
seq__11651_11673 = G__11698;
chunk__11653_11674 = G__11699;
count__11654_11675 = G__11700;
i__11655_11676 = G__11701;
continue;
}
}
} else
{}
}
break;
}
{
var G__11702 = seq__11641_11666;
var G__11703 = chunk__11648_11667;
var G__11704 = count__11649_11668;
var G__11705 = (i__11650_11669 + (1));
seq__11641_11666 = G__11702;
chunk__11648_11667 = G__11703;
count__11649_11668 = G__11704;
i__11650_11669 = G__11705;
continue;
}
} else
{var temp__4126__auto___11706 = cljs.core.seq.call(null,seq__11641_11666);if(temp__4126__auto___11706)
{var seq__11641_11707__$1 = temp__4126__auto___11706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11641_11707__$1))
{var c__6904__auto___11708 = cljs.core.chunk_first.call(null,seq__11641_11707__$1);{
var G__11709 = cljs.core.chunk_rest.call(null,seq__11641_11707__$1);
var G__11710 = c__6904__auto___11708;
var G__11711 = cljs.core.count.call(null,c__6904__auto___11708);
var G__11712 = (0);
seq__11641_11666 = G__11709;
chunk__11648_11667 = G__11710;
count__11649_11668 = G__11711;
i__11650_11669 = G__11712;
continue;
}
} else
{var vec__11660_11713 = cljs.core.first.call(null,seq__11641_11707__$1);var orig_type_11714 = cljs.core.nth.call(null,vec__11660_11713,(0),null);var f_11715 = cljs.core.nth.call(null,vec__11660_11713,(1),null);var seq__11642_11716 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11714,new cljs.core.PersistentArrayMap.fromArray([orig_type_11714,cljs.core.identity], true, false)));var chunk__11644_11717 = null;var count__11645_11718 = (0);var i__11646_11719 = (0);while(true){
if((i__11646_11719 < count__11645_11718))
{var vec__11661_11720 = cljs.core._nth.call(null,chunk__11644_11717,i__11646_11719);var actual_type_11721 = cljs.core.nth.call(null,vec__11661_11720,(0),null);var __11722 = cljs.core.nth.call(null,vec__11661_11720,(1),null);var keys_11723 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11665,actual_type_11721,f_11715], null);var canonical_f_11724 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11664),keys_11723);dommy.core.update_event_listeners_BANG_.call(null,elem_11664,dommy.utils.dissoc_in,keys_11723);
if(cljs.core.truth_(elem_11664.removeEventListener))
{elem_11664.removeEventListener(cljs.core.name.call(null,actual_type_11721),canonical_f_11724);
} else
{elem_11664.detachEvent(cljs.core.name.call(null,actual_type_11721),canonical_f_11724);
}
{
var G__11725 = seq__11642_11716;
var G__11726 = chunk__11644_11717;
var G__11727 = count__11645_11718;
var G__11728 = (i__11646_11719 + (1));
seq__11642_11716 = G__11725;
chunk__11644_11717 = G__11726;
count__11645_11718 = G__11727;
i__11646_11719 = G__11728;
continue;
}
} else
{var temp__4126__auto___11729__$1 = cljs.core.seq.call(null,seq__11642_11716);if(temp__4126__auto___11729__$1)
{var seq__11642_11730__$1 = temp__4126__auto___11729__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11642_11730__$1))
{var c__6904__auto___11731 = cljs.core.chunk_first.call(null,seq__11642_11730__$1);{
var G__11732 = cljs.core.chunk_rest.call(null,seq__11642_11730__$1);
var G__11733 = c__6904__auto___11731;
var G__11734 = cljs.core.count.call(null,c__6904__auto___11731);
var G__11735 = (0);
seq__11642_11716 = G__11732;
chunk__11644_11717 = G__11733;
count__11645_11718 = G__11734;
i__11646_11719 = G__11735;
continue;
}
} else
{var vec__11662_11736 = cljs.core.first.call(null,seq__11642_11730__$1);var actual_type_11737 = cljs.core.nth.call(null,vec__11662_11736,(0),null);var __11738 = cljs.core.nth.call(null,vec__11662_11736,(1),null);var keys_11739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11665,actual_type_11737,f_11715], null);var canonical_f_11740 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11664),keys_11739);dommy.core.update_event_listeners_BANG_.call(null,elem_11664,dommy.utils.dissoc_in,keys_11739);
if(cljs.core.truth_(elem_11664.removeEventListener))
{elem_11664.removeEventListener(cljs.core.name.call(null,actual_type_11737),canonical_f_11740);
} else
{elem_11664.detachEvent(cljs.core.name.call(null,actual_type_11737),canonical_f_11740);
}
{
var G__11741 = cljs.core.next.call(null,seq__11642_11730__$1);
var G__11742 = null;
var G__11743 = (0);
var G__11744 = (0);
seq__11642_11716 = G__11741;
chunk__11644_11717 = G__11742;
count__11645_11718 = G__11743;
i__11646_11719 = G__11744;
continue;
}
}
} else
{}
}
break;
}
{
var G__11745 = cljs.core.next.call(null,seq__11641_11707__$1);
var G__11746 = null;
var G__11747 = (0);
var G__11748 = (0);
seq__11641_11666 = G__11745;
chunk__11648_11667 = G__11746;
count__11649_11668 = G__11747;
i__11650_11669 = G__11748;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11749){
var elem_sel = cljs.core.first(arglist__11749);
var type_fs = cljs.core.rest(arglist__11749);
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
var vec__11757_11764 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11765 = cljs.core.nth.call(null,vec__11757_11764,(0),null);var selector_11766 = cljs.core.nth.call(null,vec__11757_11764,(1),null);var seq__11758_11767 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__11759_11768 = null;var count__11760_11769 = (0);var i__11761_11770 = (0);while(true){
if((i__11761_11770 < count__11760_11769))
{var vec__11762_11771 = cljs.core._nth.call(null,chunk__11759_11768,i__11761_11770);var type_11772 = cljs.core.nth.call(null,vec__11762_11771,(0),null);var f_11773 = cljs.core.nth.call(null,vec__11762_11771,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11772,((function (seq__11758_11767,chunk__11759_11768,count__11760_11769,i__11761_11770,vec__11762_11771,type_11772,f_11773,vec__11757_11764,elem_11765,selector_11766){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11772,this_fn);
return f_11773.call(null,e);
});})(seq__11758_11767,chunk__11759_11768,count__11760_11769,i__11761_11770,vec__11762_11771,type_11772,f_11773,vec__11757_11764,elem_11765,selector_11766))
);
{
var G__11774 = seq__11758_11767;
var G__11775 = chunk__11759_11768;
var G__11776 = count__11760_11769;
var G__11777 = (i__11761_11770 + (1));
seq__11758_11767 = G__11774;
chunk__11759_11768 = G__11775;
count__11760_11769 = G__11776;
i__11761_11770 = G__11777;
continue;
}
} else
{var temp__4126__auto___11778 = cljs.core.seq.call(null,seq__11758_11767);if(temp__4126__auto___11778)
{var seq__11758_11779__$1 = temp__4126__auto___11778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11758_11779__$1))
{var c__6904__auto___11780 = cljs.core.chunk_first.call(null,seq__11758_11779__$1);{
var G__11781 = cljs.core.chunk_rest.call(null,seq__11758_11779__$1);
var G__11782 = c__6904__auto___11780;
var G__11783 = cljs.core.count.call(null,c__6904__auto___11780);
var G__11784 = (0);
seq__11758_11767 = G__11781;
chunk__11759_11768 = G__11782;
count__11760_11769 = G__11783;
i__11761_11770 = G__11784;
continue;
}
} else
{var vec__11763_11785 = cljs.core.first.call(null,seq__11758_11779__$1);var type_11786 = cljs.core.nth.call(null,vec__11763_11785,(0),null);var f_11787 = cljs.core.nth.call(null,vec__11763_11785,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_11786,((function (seq__11758_11767,chunk__11759_11768,count__11760_11769,i__11761_11770,vec__11763_11785,type_11786,f_11787,seq__11758_11779__$1,temp__4126__auto___11778,vec__11757_11764,elem_11765,selector_11766){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11786,this_fn);
return f_11787.call(null,e);
});})(seq__11758_11767,chunk__11759_11768,count__11760_11769,i__11761_11770,vec__11763_11785,type_11786,f_11787,seq__11758_11779__$1,temp__4126__auto___11778,vec__11757_11764,elem_11765,selector_11766))
);
{
var G__11788 = cljs.core.next.call(null,seq__11758_11779__$1);
var G__11789 = null;
var G__11790 = (0);
var G__11791 = (0);
seq__11758_11767 = G__11788;
chunk__11759_11768 = G__11789;
count__11760_11769 = G__11790;
i__11761_11770 = G__11791;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11792){
var elem_sel = cljs.core.first(arglist__11792);
var type_fs = cljs.core.rest(arglist__11792);
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
var fire_BANG___delegate = function (node,event_type,p__11793){var vec__11795 = p__11793;var update_event_BANG_ = cljs.core.nth.call(null,vec__11795,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__11793 = null;if (arguments.length > 2) {
  p__11793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11793);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11796){
var node = cljs.core.first(arglist__11796);
arglist__11796 = cljs.core.next(arglist__11796);
var event_type = cljs.core.first(arglist__11796);
var p__11793 = cljs.core.rest(arglist__11796);
return fire_BANG___delegate(node,event_type,p__11793);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
