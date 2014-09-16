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
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__5789__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__5789__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__5789__auto__;
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
var G__11797 = (i + class$.length);
start_from = G__11797;
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
{var temp__4124__auto___11822 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11822))
{var class_list_11823 = temp__4124__auto___11822;var seq__11810_11824 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11811_11825 = null;var count__11812_11826 = (0);var i__11813_11827 = (0);while(true){
if((i__11813_11827 < count__11812_11826))
{var class_11828 = cljs.core._nth.call(null,chunk__11811_11825,i__11813_11827);class_list_11823.add(class_11828);
{
var G__11829 = seq__11810_11824;
var G__11830 = chunk__11811_11825;
var G__11831 = count__11812_11826;
var G__11832 = (i__11813_11827 + (1));
seq__11810_11824 = G__11829;
chunk__11811_11825 = G__11830;
count__11812_11826 = G__11831;
i__11813_11827 = G__11832;
continue;
}
} else
{var temp__4126__auto___11833 = cljs.core.seq.call(null,seq__11810_11824);if(temp__4126__auto___11833)
{var seq__11810_11834__$1 = temp__4126__auto___11833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11810_11834__$1))
{var c__6919__auto___11835 = cljs.core.chunk_first.call(null,seq__11810_11834__$1);{
var G__11836 = cljs.core.chunk_rest.call(null,seq__11810_11834__$1);
var G__11837 = c__6919__auto___11835;
var G__11838 = cljs.core.count.call(null,c__6919__auto___11835);
var G__11839 = (0);
seq__11810_11824 = G__11836;
chunk__11811_11825 = G__11837;
count__11812_11826 = G__11838;
i__11813_11827 = G__11839;
continue;
}
} else
{var class_11840 = cljs.core.first.call(null,seq__11810_11834__$1);class_list_11823.add(class_11840);
{
var G__11841 = cljs.core.next.call(null,seq__11810_11834__$1);
var G__11842 = null;
var G__11843 = (0);
var G__11844 = (0);
seq__11810_11824 = G__11841;
chunk__11811_11825 = G__11842;
count__11812_11826 = G__11843;
i__11813_11827 = G__11844;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__11814_11845 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11815_11846 = null;var count__11816_11847 = (0);var i__11817_11848 = (0);while(true){
if((i__11817_11848 < count__11816_11847))
{var class_11849 = cljs.core._nth.call(null,chunk__11815_11846,i__11817_11848);var class_name_11850 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11850,class_11849)))
{} else
{elem__$1.className = (((class_name_11850 === ""))?class_11849:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11850)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11849)));
}
{
var G__11851 = seq__11814_11845;
var G__11852 = chunk__11815_11846;
var G__11853 = count__11816_11847;
var G__11854 = (i__11817_11848 + (1));
seq__11814_11845 = G__11851;
chunk__11815_11846 = G__11852;
count__11816_11847 = G__11853;
i__11817_11848 = G__11854;
continue;
}
} else
{var temp__4126__auto___11855 = cljs.core.seq.call(null,seq__11814_11845);if(temp__4126__auto___11855)
{var seq__11814_11856__$1 = temp__4126__auto___11855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11814_11856__$1))
{var c__6919__auto___11857 = cljs.core.chunk_first.call(null,seq__11814_11856__$1);{
var G__11858 = cljs.core.chunk_rest.call(null,seq__11814_11856__$1);
var G__11859 = c__6919__auto___11857;
var G__11860 = cljs.core.count.call(null,c__6919__auto___11857);
var G__11861 = (0);
seq__11814_11845 = G__11858;
chunk__11815_11846 = G__11859;
count__11816_11847 = G__11860;
i__11817_11848 = G__11861;
continue;
}
} else
{var class_11862 = cljs.core.first.call(null,seq__11814_11856__$1);var class_name_11863 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11863,class_11862)))
{} else
{elem__$1.className = (((class_name_11863 === ""))?class_11862:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11863)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11862)));
}
{
var G__11864 = cljs.core.next.call(null,seq__11814_11856__$1);
var G__11865 = null;
var G__11866 = (0);
var G__11867 = (0);
seq__11814_11845 = G__11864;
chunk__11815_11846 = G__11865;
count__11816_11847 = G__11866;
i__11817_11848 = G__11867;
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
var G__11868__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11818_11869 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11819_11870 = null;var count__11820_11871 = (0);var i__11821_11872 = (0);while(true){
if((i__11821_11872 < count__11820_11871))
{var c_11873 = cljs.core._nth.call(null,chunk__11819_11870,i__11821_11872);add_class_BANG_.call(null,elem__$1,c_11873);
{
var G__11874 = seq__11818_11869;
var G__11875 = chunk__11819_11870;
var G__11876 = count__11820_11871;
var G__11877 = (i__11821_11872 + (1));
seq__11818_11869 = G__11874;
chunk__11819_11870 = G__11875;
count__11820_11871 = G__11876;
i__11821_11872 = G__11877;
continue;
}
} else
{var temp__4126__auto___11878 = cljs.core.seq.call(null,seq__11818_11869);if(temp__4126__auto___11878)
{var seq__11818_11879__$1 = temp__4126__auto___11878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11818_11879__$1))
{var c__6919__auto___11880 = cljs.core.chunk_first.call(null,seq__11818_11879__$1);{
var G__11881 = cljs.core.chunk_rest.call(null,seq__11818_11879__$1);
var G__11882 = c__6919__auto___11880;
var G__11883 = cljs.core.count.call(null,c__6919__auto___11880);
var G__11884 = (0);
seq__11818_11869 = G__11881;
chunk__11819_11870 = G__11882;
count__11820_11871 = G__11883;
i__11821_11872 = G__11884;
continue;
}
} else
{var c_11885 = cljs.core.first.call(null,seq__11818_11879__$1);add_class_BANG_.call(null,elem__$1,c_11885);
{
var G__11886 = cljs.core.next.call(null,seq__11818_11879__$1);
var G__11887 = null;
var G__11888 = (0);
var G__11889 = (0);
seq__11818_11869 = G__11886;
chunk__11819_11870 = G__11887;
count__11820_11871 = G__11888;
i__11821_11872 = G__11889;
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
var G__11868 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11868__delegate.call(this,elem,classes,more_classes);};
G__11868.cljs$lang$maxFixedArity = 2;
G__11868.cljs$lang$applyTo = (function (arglist__11890){
var elem = cljs.core.first(arglist__11890);
arglist__11890 = cljs.core.next(arglist__11890);
var classes = cljs.core.first(arglist__11890);
var more_classes = cljs.core.rest(arglist__11890);
return G__11868__delegate(elem,classes,more_classes);
});
G__11868.cljs$core$IFn$_invoke$arity$variadic = G__11868__delegate;
return G__11868;
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
var G__11891 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__11891;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11900 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11900))
{var class_list_11901 = temp__4124__auto___11900;class_list_11901.remove(class$__$1);
} else
{var class_name_11902 = elem__$1.className;var new_class_name_11903 = dommy.attrs.remove_class_str.call(null,class_name_11902,class$__$1);if((class_name_11902 === new_class_name_11903))
{} else
{elem__$1.className = new_class_name_11903;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11904__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11896 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11897 = null;var count__11898 = (0);var i__11899 = (0);while(true){
if((i__11899 < count__11898))
{var c = cljs.core._nth.call(null,chunk__11897,i__11899);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11905 = seq__11896;
var G__11906 = chunk__11897;
var G__11907 = count__11898;
var G__11908 = (i__11899 + (1));
seq__11896 = G__11905;
chunk__11897 = G__11906;
count__11898 = G__11907;
i__11899 = G__11908;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11896);if(temp__4126__auto__)
{var seq__11896__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896__$1))
{var c__6919__auto__ = cljs.core.chunk_first.call(null,seq__11896__$1);{
var G__11909 = cljs.core.chunk_rest.call(null,seq__11896__$1);
var G__11910 = c__6919__auto__;
var G__11911 = cljs.core.count.call(null,c__6919__auto__);
var G__11912 = (0);
seq__11896 = G__11909;
chunk__11897 = G__11910;
count__11898 = G__11911;
i__11899 = G__11912;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11896__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11913 = cljs.core.next.call(null,seq__11896__$1);
var G__11914 = null;
var G__11915 = (0);
var G__11916 = (0);
seq__11896 = G__11913;
chunk__11897 = G__11914;
count__11898 = G__11915;
i__11899 = G__11916;
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
var G__11904 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11904__delegate.call(this,elem,class$,classes);};
G__11904.cljs$lang$maxFixedArity = 2;
G__11904.cljs$lang$applyTo = (function (arglist__11917){
var elem = cljs.core.first(arglist__11917);
arglist__11917 = cljs.core.next(arglist__11917);
var class$ = cljs.core.first(arglist__11917);
var classes = cljs.core.rest(arglist__11917);
return G__11904__delegate(elem,class$,classes);
});
G__11904.cljs$core$IFn$_invoke$arity$variadic = G__11904__delegate;
return G__11904;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11918 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11918))
{var class_list_11919 = temp__4124__auto___11918;class_list_11919.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11922){var vec__11923 = p__11922;var k = cljs.core.nth.call(null,vec__11923,(0),null);var v = cljs.core.nth.call(null,vec__11923,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11930_11936 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11931_11937 = null;var count__11932_11938 = (0);var i__11933_11939 = (0);while(true){
if((i__11933_11939 < count__11932_11938))
{var vec__11934_11940 = cljs.core._nth.call(null,chunk__11931_11937,i__11933_11939);var k_11941 = cljs.core.nth.call(null,vec__11934_11940,(0),null);var v_11942 = cljs.core.nth.call(null,vec__11934_11940,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11941),v_11942);
{
var G__11943 = seq__11930_11936;
var G__11944 = chunk__11931_11937;
var G__11945 = count__11932_11938;
var G__11946 = (i__11933_11939 + (1));
seq__11930_11936 = G__11943;
chunk__11931_11937 = G__11944;
count__11932_11938 = G__11945;
i__11933_11939 = G__11946;
continue;
}
} else
{var temp__4126__auto___11947 = cljs.core.seq.call(null,seq__11930_11936);if(temp__4126__auto___11947)
{var seq__11930_11948__$1 = temp__4126__auto___11947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11930_11948__$1))
{var c__6919__auto___11949 = cljs.core.chunk_first.call(null,seq__11930_11948__$1);{
var G__11950 = cljs.core.chunk_rest.call(null,seq__11930_11948__$1);
var G__11951 = c__6919__auto___11949;
var G__11952 = cljs.core.count.call(null,c__6919__auto___11949);
var G__11953 = (0);
seq__11930_11936 = G__11950;
chunk__11931_11937 = G__11951;
count__11932_11938 = G__11952;
i__11933_11939 = G__11953;
continue;
}
} else
{var vec__11935_11954 = cljs.core.first.call(null,seq__11930_11948__$1);var k_11955 = cljs.core.nth.call(null,vec__11935_11954,(0),null);var v_11956 = cljs.core.nth.call(null,vec__11935_11954,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11955),v_11956);
{
var G__11957 = cljs.core.next.call(null,seq__11930_11948__$1);
var G__11958 = null;
var G__11959 = (0);
var G__11960 = (0);
seq__11930_11936 = G__11957;
chunk__11931_11937 = G__11958;
count__11932_11938 = G__11959;
i__11933_11939 = G__11960;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11961){
var elem = cljs.core.first(arglist__11961);
var kvs = cljs.core.rest(arglist__11961);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11968_11974 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11969_11975 = null;var count__11970_11976 = (0);var i__11971_11977 = (0);while(true){
if((i__11971_11977 < count__11970_11976))
{var vec__11972_11978 = cljs.core._nth.call(null,chunk__11969_11975,i__11971_11977);var k_11979 = cljs.core.nth.call(null,vec__11972_11978,(0),null);var v_11980 = cljs.core.nth.call(null,vec__11972_11978,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11979,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11980)+"px"));
{
var G__11981 = seq__11968_11974;
var G__11982 = chunk__11969_11975;
var G__11983 = count__11970_11976;
var G__11984 = (i__11971_11977 + (1));
seq__11968_11974 = G__11981;
chunk__11969_11975 = G__11982;
count__11970_11976 = G__11983;
i__11971_11977 = G__11984;
continue;
}
} else
{var temp__4126__auto___11985 = cljs.core.seq.call(null,seq__11968_11974);if(temp__4126__auto___11985)
{var seq__11968_11986__$1 = temp__4126__auto___11985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11968_11986__$1))
{var c__6919__auto___11987 = cljs.core.chunk_first.call(null,seq__11968_11986__$1);{
var G__11988 = cljs.core.chunk_rest.call(null,seq__11968_11986__$1);
var G__11989 = c__6919__auto___11987;
var G__11990 = cljs.core.count.call(null,c__6919__auto___11987);
var G__11991 = (0);
seq__11968_11974 = G__11988;
chunk__11969_11975 = G__11989;
count__11970_11976 = G__11990;
i__11971_11977 = G__11991;
continue;
}
} else
{var vec__11973_11992 = cljs.core.first.call(null,seq__11968_11986__$1);var k_11993 = cljs.core.nth.call(null,vec__11973_11992,(0),null);var v_11994 = cljs.core.nth.call(null,vec__11973_11992,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11993,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11994)+"px"));
{
var G__11995 = cljs.core.next.call(null,seq__11968_11986__$1);
var G__11996 = null;
var G__11997 = (0);
var G__11998 = (0);
seq__11968_11974 = G__11995;
chunk__11969_11975 = G__11996;
count__11970_11976 = G__11997;
i__11971_11977 = G__11998;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__11999){
var elem = cljs.core.first(arglist__11999);
var kvs = cljs.core.rest(arglist__11999);
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
{var G__12008 = dommy.template.__GT_node_like.call(null,elem);(G__12008[dommy.utils.as_str.call(null,k)] = v);
return G__12008;
} else
{var G__12009 = dommy.template.__GT_node_like.call(null,elem);G__12009.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__12009;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12016__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12010_12017 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__12011_12018 = null;var count__12012_12019 = (0);var i__12013_12020 = (0);while(true){
if((i__12013_12020 < count__12012_12019))
{var vec__12014_12021 = cljs.core._nth.call(null,chunk__12011_12018,i__12013_12020);var k_12022__$1 = cljs.core.nth.call(null,vec__12014_12021,(0),null);var v_12023__$1 = cljs.core.nth.call(null,vec__12014_12021,(1),null);set_attr_BANG_.call(null,elem__$1,k_12022__$1,v_12023__$1);
{
var G__12024 = seq__12010_12017;
var G__12025 = chunk__12011_12018;
var G__12026 = count__12012_12019;
var G__12027 = (i__12013_12020 + (1));
seq__12010_12017 = G__12024;
chunk__12011_12018 = G__12025;
count__12012_12019 = G__12026;
i__12013_12020 = G__12027;
continue;
}
} else
{var temp__4126__auto___12028 = cljs.core.seq.call(null,seq__12010_12017);if(temp__4126__auto___12028)
{var seq__12010_12029__$1 = temp__4126__auto___12028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12010_12029__$1))
{var c__6919__auto___12030 = cljs.core.chunk_first.call(null,seq__12010_12029__$1);{
var G__12031 = cljs.core.chunk_rest.call(null,seq__12010_12029__$1);
var G__12032 = c__6919__auto___12030;
var G__12033 = cljs.core.count.call(null,c__6919__auto___12030);
var G__12034 = (0);
seq__12010_12017 = G__12031;
chunk__12011_12018 = G__12032;
count__12012_12019 = G__12033;
i__12013_12020 = G__12034;
continue;
}
} else
{var vec__12015_12035 = cljs.core.first.call(null,seq__12010_12029__$1);var k_12036__$1 = cljs.core.nth.call(null,vec__12015_12035,(0),null);var v_12037__$1 = cljs.core.nth.call(null,vec__12015_12035,(1),null);set_attr_BANG_.call(null,elem__$1,k_12036__$1,v_12037__$1);
{
var G__12038 = cljs.core.next.call(null,seq__12010_12029__$1);
var G__12039 = null;
var G__12040 = (0);
var G__12041 = (0);
seq__12010_12017 = G__12038;
chunk__12011_12018 = G__12039;
count__12012_12019 = G__12040;
i__12013_12020 = G__12041;
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
var G__12016 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12016__delegate.call(this,elem,k,v,kvs);};
G__12016.cljs$lang$maxFixedArity = 3;
G__12016.cljs$lang$applyTo = (function (arglist__12042){
var elem = cljs.core.first(arglist__12042);
arglist__12042 = cljs.core.next(arglist__12042);
var k = cljs.core.first(arglist__12042);
arglist__12042 = cljs.core.next(arglist__12042);
var v = cljs.core.first(arglist__12042);
var kvs = cljs.core.rest(arglist__12042);
return G__12016__delegate(elem,k,v,kvs);
});
G__12016.cljs$core$IFn$_invoke$arity$variadic = G__12016__delegate;
return G__12016;
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
var G__12051__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12047_12052 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12048_12053 = null;var count__12049_12054 = (0);var i__12050_12055 = (0);while(true){
if((i__12050_12055 < count__12049_12054))
{var k_12056__$1 = cljs.core._nth.call(null,chunk__12048_12053,i__12050_12055);remove_attr_BANG_.call(null,elem__$1,k_12056__$1);
{
var G__12057 = seq__12047_12052;
var G__12058 = chunk__12048_12053;
var G__12059 = count__12049_12054;
var G__12060 = (i__12050_12055 + (1));
seq__12047_12052 = G__12057;
chunk__12048_12053 = G__12058;
count__12049_12054 = G__12059;
i__12050_12055 = G__12060;
continue;
}
} else
{var temp__4126__auto___12061 = cljs.core.seq.call(null,seq__12047_12052);if(temp__4126__auto___12061)
{var seq__12047_12062__$1 = temp__4126__auto___12061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12047_12062__$1))
{var c__6919__auto___12063 = cljs.core.chunk_first.call(null,seq__12047_12062__$1);{
var G__12064 = cljs.core.chunk_rest.call(null,seq__12047_12062__$1);
var G__12065 = c__6919__auto___12063;
var G__12066 = cljs.core.count.call(null,c__6919__auto___12063);
var G__12067 = (0);
seq__12047_12052 = G__12064;
chunk__12048_12053 = G__12065;
count__12049_12054 = G__12066;
i__12050_12055 = G__12067;
continue;
}
} else
{var k_12068__$1 = cljs.core.first.call(null,seq__12047_12062__$1);remove_attr_BANG_.call(null,elem__$1,k_12068__$1);
{
var G__12069 = cljs.core.next.call(null,seq__12047_12062__$1);
var G__12070 = null;
var G__12071 = (0);
var G__12072 = (0);
seq__12047_12052 = G__12069;
chunk__12048_12053 = G__12070;
count__12049_12054 = G__12071;
i__12050_12055 = G__12072;
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
var G__12051 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12051__delegate.call(this,elem,k,ks);};
G__12051.cljs$lang$maxFixedArity = 2;
G__12051.cljs$lang$applyTo = (function (arglist__12073){
var elem = cljs.core.first(arglist__12073);
arglist__12073 = cljs.core.next(arglist__12073);
var k = cljs.core.first(arglist__12073);
var ks = cljs.core.rest(arglist__12073);
return G__12051__delegate(elem,k,ks);
});
G__12051.cljs$core$IFn$_invoke$arity$variadic = G__12051__delegate;
return G__12051;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12075 = dommy.template.__GT_node_like.call(null,elem);G__12075.style.display = ((show_QMARK_)?"":"none");
return G__12075;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12077 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12077,false);
return G__12077;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12079 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12079,true);
return G__12079;
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
