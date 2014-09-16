// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__5741__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__5741__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__5741__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__20745 = (i + class$.length);
start_from = G__20745;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___20770 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___20770))
{var class_list_20771 = temp__4124__auto___20770;var seq__20758_20772 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20759_20773 = null;var count__20760_20774 = (0);var i__20761_20775 = (0);while(true){
if((i__20761_20775 < count__20760_20774))
{var class_20776 = cljs.core._nth.call(null,chunk__20759_20773,i__20761_20775);class_list_20771.add(class_20776);
{
var G__20777 = seq__20758_20772;
var G__20778 = chunk__20759_20773;
var G__20779 = count__20760_20774;
var G__20780 = (i__20761_20775 + (1));
seq__20758_20772 = G__20777;
chunk__20759_20773 = G__20778;
count__20760_20774 = G__20779;
i__20761_20775 = G__20780;
continue;
}
} else
{var temp__4126__auto___20781 = cljs.core.seq.call(null,seq__20758_20772);if(temp__4126__auto___20781)
{var seq__20758_20782__$1 = temp__4126__auto___20781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20758_20782__$1))
{var c__6904__auto___20783 = cljs.core.chunk_first.call(null,seq__20758_20782__$1);{
var G__20784 = cljs.core.chunk_rest.call(null,seq__20758_20782__$1);
var G__20785 = c__6904__auto___20783;
var G__20786 = cljs.core.count.call(null,c__6904__auto___20783);
var G__20787 = (0);
seq__20758_20772 = G__20784;
chunk__20759_20773 = G__20785;
count__20760_20774 = G__20786;
i__20761_20775 = G__20787;
continue;
}
} else
{var class_20788 = cljs.core.first.call(null,seq__20758_20782__$1);class_list_20771.add(class_20788);
{
var G__20789 = cljs.core.next.call(null,seq__20758_20782__$1);
var G__20790 = null;
var G__20791 = (0);
var G__20792 = (0);
seq__20758_20772 = G__20789;
chunk__20759_20773 = G__20790;
count__20760_20774 = G__20791;
i__20761_20775 = G__20792;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__20762_20793 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20763_20794 = null;var count__20764_20795 = (0);var i__20765_20796 = (0);while(true){
if((i__20765_20796 < count__20764_20795))
{var class_20797 = cljs.core._nth.call(null,chunk__20763_20794,i__20765_20796);var class_name_20798 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20798,class_20797)))
{} else
{elem__$1.className = (((class_name_20798 === ""))?class_20797:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_20798)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_20797)));
}
{
var G__20799 = seq__20762_20793;
var G__20800 = chunk__20763_20794;
var G__20801 = count__20764_20795;
var G__20802 = (i__20765_20796 + (1));
seq__20762_20793 = G__20799;
chunk__20763_20794 = G__20800;
count__20764_20795 = G__20801;
i__20765_20796 = G__20802;
continue;
}
} else
{var temp__4126__auto___20803 = cljs.core.seq.call(null,seq__20762_20793);if(temp__4126__auto___20803)
{var seq__20762_20804__$1 = temp__4126__auto___20803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20762_20804__$1))
{var c__6904__auto___20805 = cljs.core.chunk_first.call(null,seq__20762_20804__$1);{
var G__20806 = cljs.core.chunk_rest.call(null,seq__20762_20804__$1);
var G__20807 = c__6904__auto___20805;
var G__20808 = cljs.core.count.call(null,c__6904__auto___20805);
var G__20809 = (0);
seq__20762_20793 = G__20806;
chunk__20763_20794 = G__20807;
count__20764_20795 = G__20808;
i__20765_20796 = G__20809;
continue;
}
} else
{var class_20810 = cljs.core.first.call(null,seq__20762_20804__$1);var class_name_20811 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20811,class_20810)))
{} else
{elem__$1.className = (((class_name_20811 === ""))?class_20810:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_20811)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_20810)));
}
{
var G__20812 = cljs.core.next.call(null,seq__20762_20804__$1);
var G__20813 = null;
var G__20814 = (0);
var G__20815 = (0);
seq__20762_20793 = G__20812;
chunk__20763_20794 = G__20813;
count__20764_20795 = G__20814;
i__20765_20796 = G__20815;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__20816__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20766_20817 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__20767_20818 = null;var count__20768_20819 = (0);var i__20769_20820 = (0);while(true){
if((i__20769_20820 < count__20768_20819))
{var c_20821 = cljs.core._nth.call(null,chunk__20767_20818,i__20769_20820);add_class_BANG_.call(null,elem__$1,c_20821);
{
var G__20822 = seq__20766_20817;
var G__20823 = chunk__20767_20818;
var G__20824 = count__20768_20819;
var G__20825 = (i__20769_20820 + (1));
seq__20766_20817 = G__20822;
chunk__20767_20818 = G__20823;
count__20768_20819 = G__20824;
i__20769_20820 = G__20825;
continue;
}
} else
{var temp__4126__auto___20826 = cljs.core.seq.call(null,seq__20766_20817);if(temp__4126__auto___20826)
{var seq__20766_20827__$1 = temp__4126__auto___20826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20766_20827__$1))
{var c__6904__auto___20828 = cljs.core.chunk_first.call(null,seq__20766_20827__$1);{
var G__20829 = cljs.core.chunk_rest.call(null,seq__20766_20827__$1);
var G__20830 = c__6904__auto___20828;
var G__20831 = cljs.core.count.call(null,c__6904__auto___20828);
var G__20832 = (0);
seq__20766_20817 = G__20829;
chunk__20767_20818 = G__20830;
count__20768_20819 = G__20831;
i__20769_20820 = G__20832;
continue;
}
} else
{var c_20833 = cljs.core.first.call(null,seq__20766_20827__$1);add_class_BANG_.call(null,elem__$1,c_20833);
{
var G__20834 = cljs.core.next.call(null,seq__20766_20827__$1);
var G__20835 = null;
var G__20836 = (0);
var G__20837 = (0);
seq__20766_20817 = G__20834;
chunk__20767_20818 = G__20835;
count__20768_20819 = G__20836;
i__20769_20820 = G__20837;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__20816 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20816__delegate.call(this,elem,classes,more_classes);};
G__20816.cljs$lang$maxFixedArity = 2;
G__20816.cljs$lang$applyTo = (function (arglist__20838){
var elem = cljs.core.first(arglist__20838);
arglist__20838 = cljs.core.next(arglist__20838);
var classes = cljs.core.first(arglist__20838);
var more_classes = cljs.core.rest(arglist__20838);
return G__20816__delegate(elem,classes,more_classes);
});
G__20816.cljs$core$IFn$_invoke$arity$variadic = G__20816__delegate;
return G__20816;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__20839 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__20839;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___20848 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___20848))
{var class_list_20849 = temp__4124__auto___20848;class_list_20849.remove(class$__$1);
} else
{var class_name_20850 = elem__$1.className;var new_class_name_20851 = dommy.attrs.remove_class_str.call(null,class_name_20850,class$__$1);if((class_name_20850 === new_class_name_20851))
{} else
{elem__$1.className = new_class_name_20851;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__20852__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20844 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__20845 = null;var count__20846 = (0);var i__20847 = (0);while(true){
if((i__20847 < count__20846))
{var c = cljs.core._nth.call(null,chunk__20845,i__20847);remove_class_BANG_.call(null,elem__$1,c);
{
var G__20853 = seq__20844;
var G__20854 = chunk__20845;
var G__20855 = count__20846;
var G__20856 = (i__20847 + (1));
seq__20844 = G__20853;
chunk__20845 = G__20854;
count__20846 = G__20855;
i__20847 = G__20856;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20844);if(temp__4126__auto__)
{var seq__20844__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20844__$1))
{var c__6904__auto__ = cljs.core.chunk_first.call(null,seq__20844__$1);{
var G__20857 = cljs.core.chunk_rest.call(null,seq__20844__$1);
var G__20858 = c__6904__auto__;
var G__20859 = cljs.core.count.call(null,c__6904__auto__);
var G__20860 = (0);
seq__20844 = G__20857;
chunk__20845 = G__20858;
count__20846 = G__20859;
i__20847 = G__20860;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__20844__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__20861 = cljs.core.next.call(null,seq__20844__$1);
var G__20862 = null;
var G__20863 = (0);
var G__20864 = (0);
seq__20844 = G__20861;
chunk__20845 = G__20862;
count__20846 = G__20863;
i__20847 = G__20864;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__20852 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20852__delegate.call(this,elem,class$,classes);};
G__20852.cljs$lang$maxFixedArity = 2;
G__20852.cljs$lang$applyTo = (function (arglist__20865){
var elem = cljs.core.first(arglist__20865);
arglist__20865 = cljs.core.next(arglist__20865);
var class$ = cljs.core.first(arglist__20865);
var classes = cljs.core.rest(arglist__20865);
return G__20852__delegate(elem,class$,classes);
});
G__20852.cljs$core$IFn$_invoke$arity$variadic = G__20852__delegate;
return G__20852;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___20866 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___20866))
{var class_list_20867 = temp__4124__auto___20866;class_list_20867.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__20870){var vec__20871 = p__20870;var k = cljs.core.nth.call(null,vec__20871,(0),null);var v = cljs.core.nth.call(null,vec__20871,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__20878_20884 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__20879_20885 = null;var count__20880_20886 = (0);var i__20881_20887 = (0);while(true){
if((i__20881_20887 < count__20880_20886))
{var vec__20882_20888 = cljs.core._nth.call(null,chunk__20879_20885,i__20881_20887);var k_20889 = cljs.core.nth.call(null,vec__20882_20888,(0),null);var v_20890 = cljs.core.nth.call(null,vec__20882_20888,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_20889),v_20890);
{
var G__20891 = seq__20878_20884;
var G__20892 = chunk__20879_20885;
var G__20893 = count__20880_20886;
var G__20894 = (i__20881_20887 + (1));
seq__20878_20884 = G__20891;
chunk__20879_20885 = G__20892;
count__20880_20886 = G__20893;
i__20881_20887 = G__20894;
continue;
}
} else
{var temp__4126__auto___20895 = cljs.core.seq.call(null,seq__20878_20884);if(temp__4126__auto___20895)
{var seq__20878_20896__$1 = temp__4126__auto___20895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20878_20896__$1))
{var c__6904__auto___20897 = cljs.core.chunk_first.call(null,seq__20878_20896__$1);{
var G__20898 = cljs.core.chunk_rest.call(null,seq__20878_20896__$1);
var G__20899 = c__6904__auto___20897;
var G__20900 = cljs.core.count.call(null,c__6904__auto___20897);
var G__20901 = (0);
seq__20878_20884 = G__20898;
chunk__20879_20885 = G__20899;
count__20880_20886 = G__20900;
i__20881_20887 = G__20901;
continue;
}
} else
{var vec__20883_20902 = cljs.core.first.call(null,seq__20878_20896__$1);var k_20903 = cljs.core.nth.call(null,vec__20883_20902,(0),null);var v_20904 = cljs.core.nth.call(null,vec__20883_20902,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_20903),v_20904);
{
var G__20905 = cljs.core.next.call(null,seq__20878_20896__$1);
var G__20906 = null;
var G__20907 = (0);
var G__20908 = (0);
seq__20878_20884 = G__20905;
chunk__20879_20885 = G__20906;
count__20880_20886 = G__20907;
i__20881_20887 = G__20908;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20909){
var elem = cljs.core.first(arglist__20909);
var kvs = cljs.core.rest(arglist__20909);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20916_20922 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__20917_20923 = null;var count__20918_20924 = (0);var i__20919_20925 = (0);while(true){
if((i__20919_20925 < count__20918_20924))
{var vec__20920_20926 = cljs.core._nth.call(null,chunk__20917_20923,i__20919_20925);var k_20927 = cljs.core.nth.call(null,vec__20920_20926,(0),null);var v_20928 = cljs.core.nth.call(null,vec__20920_20926,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_20927,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_20928)+"px"));
{
var G__20929 = seq__20916_20922;
var G__20930 = chunk__20917_20923;
var G__20931 = count__20918_20924;
var G__20932 = (i__20919_20925 + (1));
seq__20916_20922 = G__20929;
chunk__20917_20923 = G__20930;
count__20918_20924 = G__20931;
i__20919_20925 = G__20932;
continue;
}
} else
{var temp__4126__auto___20933 = cljs.core.seq.call(null,seq__20916_20922);if(temp__4126__auto___20933)
{var seq__20916_20934__$1 = temp__4126__auto___20933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20916_20934__$1))
{var c__6904__auto___20935 = cljs.core.chunk_first.call(null,seq__20916_20934__$1);{
var G__20936 = cljs.core.chunk_rest.call(null,seq__20916_20934__$1);
var G__20937 = c__6904__auto___20935;
var G__20938 = cljs.core.count.call(null,c__6904__auto___20935);
var G__20939 = (0);
seq__20916_20922 = G__20936;
chunk__20917_20923 = G__20937;
count__20918_20924 = G__20938;
i__20919_20925 = G__20939;
continue;
}
} else
{var vec__20921_20940 = cljs.core.first.call(null,seq__20916_20934__$1);var k_20941 = cljs.core.nth.call(null,vec__20921_20940,(0),null);var v_20942 = cljs.core.nth.call(null,vec__20921_20940,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_20941,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_20942)+"px"));
{
var G__20943 = cljs.core.next.call(null,seq__20916_20934__$1);
var G__20944 = null;
var G__20945 = (0);
var G__20946 = (0);
seq__20916_20922 = G__20943;
chunk__20917_20923 = G__20944;
count__20918_20924 = G__20945;
i__20919_20925 = G__20946;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__20947){
var elem = cljs.core.first(arglist__20947);
var kvs = cljs.core.rest(arglist__20947);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__20956 = dommy.template.__GT_node_like.call(null,elem);(G__20956[dommy.utils.as_str.call(null,k)] = v);
return G__20956;
} else
{var G__20957 = dommy.template.__GT_node_like.call(null,elem);G__20957.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__20957;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__20964__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20958_20965 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__20959_20966 = null;var count__20960_20967 = (0);var i__20961_20968 = (0);while(true){
if((i__20961_20968 < count__20960_20967))
{var vec__20962_20969 = cljs.core._nth.call(null,chunk__20959_20966,i__20961_20968);var k_20970__$1 = cljs.core.nth.call(null,vec__20962_20969,(0),null);var v_20971__$1 = cljs.core.nth.call(null,vec__20962_20969,(1),null);set_attr_BANG_.call(null,elem__$1,k_20970__$1,v_20971__$1);
{
var G__20972 = seq__20958_20965;
var G__20973 = chunk__20959_20966;
var G__20974 = count__20960_20967;
var G__20975 = (i__20961_20968 + (1));
seq__20958_20965 = G__20972;
chunk__20959_20966 = G__20973;
count__20960_20967 = G__20974;
i__20961_20968 = G__20975;
continue;
}
} else
{var temp__4126__auto___20976 = cljs.core.seq.call(null,seq__20958_20965);if(temp__4126__auto___20976)
{var seq__20958_20977__$1 = temp__4126__auto___20976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20958_20977__$1))
{var c__6904__auto___20978 = cljs.core.chunk_first.call(null,seq__20958_20977__$1);{
var G__20979 = cljs.core.chunk_rest.call(null,seq__20958_20977__$1);
var G__20980 = c__6904__auto___20978;
var G__20981 = cljs.core.count.call(null,c__6904__auto___20978);
var G__20982 = (0);
seq__20958_20965 = G__20979;
chunk__20959_20966 = G__20980;
count__20960_20967 = G__20981;
i__20961_20968 = G__20982;
continue;
}
} else
{var vec__20963_20983 = cljs.core.first.call(null,seq__20958_20977__$1);var k_20984__$1 = cljs.core.nth.call(null,vec__20963_20983,(0),null);var v_20985__$1 = cljs.core.nth.call(null,vec__20963_20983,(1),null);set_attr_BANG_.call(null,elem__$1,k_20984__$1,v_20985__$1);
{
var G__20986 = cljs.core.next.call(null,seq__20958_20977__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20958_20965 = G__20986;
chunk__20959_20966 = G__20987;
count__20960_20967 = G__20988;
i__20961_20968 = G__20989;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__20964 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__20964__delegate.call(this,elem,k,v,kvs);};
G__20964.cljs$lang$maxFixedArity = 3;
G__20964.cljs$lang$applyTo = (function (arglist__20990){
var elem = cljs.core.first(arglist__20990);
arglist__20990 = cljs.core.next(arglist__20990);
var k = cljs.core.first(arglist__20990);
arglist__20990 = cljs.core.next(arglist__20990);
var v = cljs.core.first(arglist__20990);
var kvs = cljs.core.rest(arglist__20990);
return G__20964__delegate(elem,k,v,kvs);
});
G__20964.cljs$core$IFn$_invoke$arity$variadic = G__20964__delegate;
return G__20964;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__20999__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20995_21000 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__20996_21001 = null;var count__20997_21002 = (0);var i__20998_21003 = (0);while(true){
if((i__20998_21003 < count__20997_21002))
{var k_21004__$1 = cljs.core._nth.call(null,chunk__20996_21001,i__20998_21003);remove_attr_BANG_.call(null,elem__$1,k_21004__$1);
{
var G__21005 = seq__20995_21000;
var G__21006 = chunk__20996_21001;
var G__21007 = count__20997_21002;
var G__21008 = (i__20998_21003 + (1));
seq__20995_21000 = G__21005;
chunk__20996_21001 = G__21006;
count__20997_21002 = G__21007;
i__20998_21003 = G__21008;
continue;
}
} else
{var temp__4126__auto___21009 = cljs.core.seq.call(null,seq__20995_21000);if(temp__4126__auto___21009)
{var seq__20995_21010__$1 = temp__4126__auto___21009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20995_21010__$1))
{var c__6904__auto___21011 = cljs.core.chunk_first.call(null,seq__20995_21010__$1);{
var G__21012 = cljs.core.chunk_rest.call(null,seq__20995_21010__$1);
var G__21013 = c__6904__auto___21011;
var G__21014 = cljs.core.count.call(null,c__6904__auto___21011);
var G__21015 = (0);
seq__20995_21000 = G__21012;
chunk__20996_21001 = G__21013;
count__20997_21002 = G__21014;
i__20998_21003 = G__21015;
continue;
}
} else
{var k_21016__$1 = cljs.core.first.call(null,seq__20995_21010__$1);remove_attr_BANG_.call(null,elem__$1,k_21016__$1);
{
var G__21017 = cljs.core.next.call(null,seq__20995_21010__$1);
var G__21018 = null;
var G__21019 = (0);
var G__21020 = (0);
seq__20995_21000 = G__21017;
chunk__20996_21001 = G__21018;
count__20997_21002 = G__21019;
i__20998_21003 = G__21020;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__20999 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20999__delegate.call(this,elem,k,ks);};
G__20999.cljs$lang$maxFixedArity = 2;
G__20999.cljs$lang$applyTo = (function (arglist__21021){
var elem = cljs.core.first(arglist__21021);
arglist__21021 = cljs.core.next(arglist__21021);
var k = cljs.core.first(arglist__21021);
var ks = cljs.core.rest(arglist__21021);
return G__20999__delegate(elem,k,ks);
});
G__20999.cljs$core$IFn$_invoke$arity$variadic = G__20999__delegate;
return G__20999;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__21023 = dommy.template.__GT_node_like.call(null,elem);G__21023.style.display = ((show_QMARK_)?"":"none");
return G__21023;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__21025 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21025,false);
return G__21025;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__21027 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21027,true);
return G__21027;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
