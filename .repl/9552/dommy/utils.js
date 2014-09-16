// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
dommy.utils.dissoc_in = (function dissoc_in(m,p__11811){var vec__11813 = p__11811;var k = cljs.core.nth.call(null,vec__11813,(0),null);var ks = cljs.core.nthnext.call(null,vec__11813,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__5741__auto__ = ks;if(and__5741__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__5741__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
dommy.utils.__GT_Array = (function __GT_Array(array_like){return Array.prototype.slice.call(array_like);
});
/**
* Coerces strings and keywords to strings, while preserving namespace of
* namespaced keywords
*/
dommy.utils.as_str = (function as_str(s){if((s instanceof cljs.core.Keyword))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11815 = cljs.core.namespace.call(null,s);var G__11815__$1 = (((G__11815 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11815)+"/"));return G__11815__$1;
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,s)));
} else
{return s;
}
});
