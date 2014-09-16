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
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__5777__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__5777__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__5777__auto__;
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
var G__11856 = (i + class$.length);
start_from = G__11856;
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
{var temp__4124__auto___11881 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11881))
{var class_list_11882 = temp__4124__auto___11881;var seq__11869_11883 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11870_11884 = null;var count__11871_11885 = (0);var i__11872_11886 = (0);while(true){
if((i__11872_11886 < count__11871_11885))
{var class_11887 = cljs.core._nth.call(null,chunk__11870_11884,i__11872_11886);class_list_11882.add(class_11887);
{
var G__11888 = seq__11869_11883;
var G__11889 = chunk__11870_11884;
var G__11890 = count__11871_11885;
var G__11891 = (i__11872_11886 + (1));
seq__11869_11883 = G__11888;
chunk__11870_11884 = G__11889;
count__11871_11885 = G__11890;
i__11872_11886 = G__11891;
continue;
}
} else
{var temp__4126__auto___11892 = cljs.core.seq.call(null,seq__11869_11883);if(temp__4126__auto___11892)
{var seq__11869_11893__$1 = temp__4126__auto___11892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11869_11893__$1))
{var c__6939__auto___11894 = cljs.core.chunk_first.call(null,seq__11869_11893__$1);{
var G__11895 = cljs.core.chunk_rest.call(null,seq__11869_11893__$1);
var G__11896 = c__6939__auto___11894;
var G__11897 = cljs.core.count.call(null,c__6939__auto___11894);
var G__11898 = (0);
seq__11869_11883 = G__11895;
chunk__11870_11884 = G__11896;
count__11871_11885 = G__11897;
i__11872_11886 = G__11898;
continue;
}
} else
{var class_11899 = cljs.core.first.call(null,seq__11869_11893__$1);class_list_11882.add(class_11899);
{
var G__11900 = cljs.core.next.call(null,seq__11869_11893__$1);
var G__11901 = null;
var G__11902 = (0);
var G__11903 = (0);
seq__11869_11883 = G__11900;
chunk__11870_11884 = G__11901;
count__11871_11885 = G__11902;
i__11872_11886 = G__11903;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__11873_11904 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11874_11905 = null;var count__11875_11906 = (0);var i__11876_11907 = (0);while(true){
if((i__11876_11907 < count__11875_11906))
{var class_11908 = cljs.core._nth.call(null,chunk__11874_11905,i__11876_11907);var class_name_11909 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11909,class_11908)))
{} else
{elem__$1.className = (((class_name_11909 === ""))?class_11908:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11909)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11908)));
}
{
var G__11910 = seq__11873_11904;
var G__11911 = chunk__11874_11905;
var G__11912 = count__11875_11906;
var G__11913 = (i__11876_11907 + (1));
seq__11873_11904 = G__11910;
chunk__11874_11905 = G__11911;
count__11875_11906 = G__11912;
i__11876_11907 = G__11913;
continue;
}
} else
{var temp__4126__auto___11914 = cljs.core.seq.call(null,seq__11873_11904);if(temp__4126__auto___11914)
{var seq__11873_11915__$1 = temp__4126__auto___11914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11873_11915__$1))
{var c__6939__auto___11916 = cljs.core.chunk_first.call(null,seq__11873_11915__$1);{
var G__11917 = cljs.core.chunk_rest.call(null,seq__11873_11915__$1);
var G__11918 = c__6939__auto___11916;
var G__11919 = cljs.core.count.call(null,c__6939__auto___11916);
var G__11920 = (0);
seq__11873_11904 = G__11917;
chunk__11874_11905 = G__11918;
count__11875_11906 = G__11919;
i__11876_11907 = G__11920;
continue;
}
} else
{var class_11921 = cljs.core.first.call(null,seq__11873_11915__$1);var class_name_11922 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11922,class_11921)))
{} else
{elem__$1.className = (((class_name_11922 === ""))?class_11921:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11922)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11921)));
}
{
var G__11923 = cljs.core.next.call(null,seq__11873_11915__$1);
var G__11924 = null;
var G__11925 = (0);
var G__11926 = (0);
seq__11873_11904 = G__11923;
chunk__11874_11905 = G__11924;
count__11875_11906 = G__11925;
i__11876_11907 = G__11926;
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
var G__11927__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11877_11928 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11878_11929 = null;var count__11879_11930 = (0);var i__11880_11931 = (0);while(true){
if((i__11880_11931 < count__11879_11930))
{var c_11932 = cljs.core._nth.call(null,chunk__11878_11929,i__11880_11931);add_class_BANG_.call(null,elem__$1,c_11932);
{
var G__11933 = seq__11877_11928;
var G__11934 = chunk__11878_11929;
var G__11935 = count__11879_11930;
var G__11936 = (i__11880_11931 + (1));
seq__11877_11928 = G__11933;
chunk__11878_11929 = G__11934;
count__11879_11930 = G__11935;
i__11880_11931 = G__11936;
continue;
}
} else
{var temp__4126__auto___11937 = cljs.core.seq.call(null,seq__11877_11928);if(temp__4126__auto___11937)
{var seq__11877_11938__$1 = temp__4126__auto___11937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11877_11938__$1))
{var c__6939__auto___11939 = cljs.core.chunk_first.call(null,seq__11877_11938__$1);{
var G__11940 = cljs.core.chunk_rest.call(null,seq__11877_11938__$1);
var G__11941 = c__6939__auto___11939;
var G__11942 = cljs.core.count.call(null,c__6939__auto___11939);
var G__11943 = (0);
seq__11877_11928 = G__11940;
chunk__11878_11929 = G__11941;
count__11879_11930 = G__11942;
i__11880_11931 = G__11943;
continue;
}
} else
{var c_11944 = cljs.core.first.call(null,seq__11877_11938__$1);add_class_BANG_.call(null,elem__$1,c_11944);
{
var G__11945 = cljs.core.next.call(null,seq__11877_11938__$1);
var G__11946 = null;
var G__11947 = (0);
var G__11948 = (0);
seq__11877_11928 = G__11945;
chunk__11878_11929 = G__11946;
count__11879_11930 = G__11947;
i__11880_11931 = G__11948;
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
var G__11927 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11927__delegate.call(this,elem,classes,more_classes);};
G__11927.cljs$lang$maxFixedArity = 2;
G__11927.cljs$lang$applyTo = (function (arglist__11949){
var elem = cljs.core.first(arglist__11949);
arglist__11949 = cljs.core.next(arglist__11949);
var classes = cljs.core.first(arglist__11949);
var more_classes = cljs.core.rest(arglist__11949);
return G__11927__delegate(elem,classes,more_classes);
});
G__11927.cljs$core$IFn$_invoke$arity$variadic = G__11927__delegate;
return G__11927;
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
var G__11950 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__11950;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11959 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11959))
{var class_list_11960 = temp__4124__auto___11959;class_list_11960.remove(class$__$1);
} else
{var class_name_11961 = elem__$1.className;var new_class_name_11962 = dommy.attrs.remove_class_str.call(null,class_name_11961,class$__$1);if((class_name_11961 === new_class_name_11962))
{} else
{elem__$1.className = new_class_name_11962;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11963__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11955 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11956 = null;var count__11957 = (0);var i__11958 = (0);while(true){
if((i__11958 < count__11957))
{var c = cljs.core._nth.call(null,chunk__11956,i__11958);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11964 = seq__11955;
var G__11965 = chunk__11956;
var G__11966 = count__11957;
var G__11967 = (i__11958 + (1));
seq__11955 = G__11964;
chunk__11956 = G__11965;
count__11957 = G__11966;
i__11958 = G__11967;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11955);if(temp__4126__auto__)
{var seq__11955__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11955__$1))
{var c__6939__auto__ = cljs.core.chunk_first.call(null,seq__11955__$1);{
var G__11968 = cljs.core.chunk_rest.call(null,seq__11955__$1);
var G__11969 = c__6939__auto__;
var G__11970 = cljs.core.count.call(null,c__6939__auto__);
var G__11971 = (0);
seq__11955 = G__11968;
chunk__11956 = G__11969;
count__11957 = G__11970;
i__11958 = G__11971;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11955__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11972 = cljs.core.next.call(null,seq__11955__$1);
var G__11973 = null;
var G__11974 = (0);
var G__11975 = (0);
seq__11955 = G__11972;
chunk__11956 = G__11973;
count__11957 = G__11974;
i__11958 = G__11975;
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
var G__11963 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11963__delegate.call(this,elem,class$,classes);};
G__11963.cljs$lang$maxFixedArity = 2;
G__11963.cljs$lang$applyTo = (function (arglist__11976){
var elem = cljs.core.first(arglist__11976);
arglist__11976 = cljs.core.next(arglist__11976);
var class$ = cljs.core.first(arglist__11976);
var classes = cljs.core.rest(arglist__11976);
return G__11963__delegate(elem,class$,classes);
});
G__11963.cljs$core$IFn$_invoke$arity$variadic = G__11963__delegate;
return G__11963;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11977 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11977))
{var class_list_11978 = temp__4124__auto___11977;class_list_11978.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11981){var vec__11982 = p__11981;var k = cljs.core.nth.call(null,vec__11982,(0),null);var v = cljs.core.nth.call(null,vec__11982,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11989_11995 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11990_11996 = null;var count__11991_11997 = (0);var i__11992_11998 = (0);while(true){
if((i__11992_11998 < count__11991_11997))
{var vec__11993_11999 = cljs.core._nth.call(null,chunk__11990_11996,i__11992_11998);var k_12000 = cljs.core.nth.call(null,vec__11993_11999,(0),null);var v_12001 = cljs.core.nth.call(null,vec__11993_11999,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_12000),v_12001);
{
var G__12002 = seq__11989_11995;
var G__12003 = chunk__11990_11996;
var G__12004 = count__11991_11997;
var G__12005 = (i__11992_11998 + (1));
seq__11989_11995 = G__12002;
chunk__11990_11996 = G__12003;
count__11991_11997 = G__12004;
i__11992_11998 = G__12005;
continue;
}
} else
{var temp__4126__auto___12006 = cljs.core.seq.call(null,seq__11989_11995);if(temp__4126__auto___12006)
{var seq__11989_12007__$1 = temp__4126__auto___12006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11989_12007__$1))
{var c__6939__auto___12008 = cljs.core.chunk_first.call(null,seq__11989_12007__$1);{
var G__12009 = cljs.core.chunk_rest.call(null,seq__11989_12007__$1);
var G__12010 = c__6939__auto___12008;
var G__12011 = cljs.core.count.call(null,c__6939__auto___12008);
var G__12012 = (0);
seq__11989_11995 = G__12009;
chunk__11990_11996 = G__12010;
count__11991_11997 = G__12011;
i__11992_11998 = G__12012;
continue;
}
} else
{var vec__11994_12013 = cljs.core.first.call(null,seq__11989_12007__$1);var k_12014 = cljs.core.nth.call(null,vec__11994_12013,(0),null);var v_12015 = cljs.core.nth.call(null,vec__11994_12013,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_12014),v_12015);
{
var G__12016 = cljs.core.next.call(null,seq__11989_12007__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__11989_11995 = G__12016;
chunk__11990_11996 = G__12017;
count__11991_11997 = G__12018;
i__11992_11998 = G__12019;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12020){
var elem = cljs.core.first(arglist__12020);
var kvs = cljs.core.rest(arglist__12020);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12027_12033 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__12028_12034 = null;var count__12029_12035 = (0);var i__12030_12036 = (0);while(true){
if((i__12030_12036 < count__12029_12035))
{var vec__12031_12037 = cljs.core._nth.call(null,chunk__12028_12034,i__12030_12036);var k_12038 = cljs.core.nth.call(null,vec__12031_12037,(0),null);var v_12039 = cljs.core.nth.call(null,vec__12031_12037,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12038,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12039)+"px"));
{
var G__12040 = seq__12027_12033;
var G__12041 = chunk__12028_12034;
var G__12042 = count__12029_12035;
var G__12043 = (i__12030_12036 + (1));
seq__12027_12033 = G__12040;
chunk__12028_12034 = G__12041;
count__12029_12035 = G__12042;
i__12030_12036 = G__12043;
continue;
}
} else
{var temp__4126__auto___12044 = cljs.core.seq.call(null,seq__12027_12033);if(temp__4126__auto___12044)
{var seq__12027_12045__$1 = temp__4126__auto___12044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027_12045__$1))
{var c__6939__auto___12046 = cljs.core.chunk_first.call(null,seq__12027_12045__$1);{
var G__12047 = cljs.core.chunk_rest.call(null,seq__12027_12045__$1);
var G__12048 = c__6939__auto___12046;
var G__12049 = cljs.core.count.call(null,c__6939__auto___12046);
var G__12050 = (0);
seq__12027_12033 = G__12047;
chunk__12028_12034 = G__12048;
count__12029_12035 = G__12049;
i__12030_12036 = G__12050;
continue;
}
} else
{var vec__12032_12051 = cljs.core.first.call(null,seq__12027_12045__$1);var k_12052 = cljs.core.nth.call(null,vec__12032_12051,(0),null);var v_12053 = cljs.core.nth.call(null,vec__12032_12051,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12052,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12053)+"px"));
{
var G__12054 = cljs.core.next.call(null,seq__12027_12045__$1);
var G__12055 = null;
var G__12056 = (0);
var G__12057 = (0);
seq__12027_12033 = G__12054;
chunk__12028_12034 = G__12055;
count__12029_12035 = G__12056;
i__12030_12036 = G__12057;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12058){
var elem = cljs.core.first(arglist__12058);
var kvs = cljs.core.rest(arglist__12058);
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
{var G__12067 = dommy.template.__GT_node_like.call(null,elem);(G__12067[dommy.utils.as_str.call(null,k)] = v);
return G__12067;
} else
{var G__12068 = dommy.template.__GT_node_like.call(null,elem);G__12068.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__12068;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12075__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12069_12076 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__12070_12077 = null;var count__12071_12078 = (0);var i__12072_12079 = (0);while(true){
if((i__12072_12079 < count__12071_12078))
{var vec__12073_12080 = cljs.core._nth.call(null,chunk__12070_12077,i__12072_12079);var k_12081__$1 = cljs.core.nth.call(null,vec__12073_12080,(0),null);var v_12082__$1 = cljs.core.nth.call(null,vec__12073_12080,(1),null);set_attr_BANG_.call(null,elem__$1,k_12081__$1,v_12082__$1);
{
var G__12083 = seq__12069_12076;
var G__12084 = chunk__12070_12077;
var G__12085 = count__12071_12078;
var G__12086 = (i__12072_12079 + (1));
seq__12069_12076 = G__12083;
chunk__12070_12077 = G__12084;
count__12071_12078 = G__12085;
i__12072_12079 = G__12086;
continue;
}
} else
{var temp__4126__auto___12087 = cljs.core.seq.call(null,seq__12069_12076);if(temp__4126__auto___12087)
{var seq__12069_12088__$1 = temp__4126__auto___12087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12069_12088__$1))
{var c__6939__auto___12089 = cljs.core.chunk_first.call(null,seq__12069_12088__$1);{
var G__12090 = cljs.core.chunk_rest.call(null,seq__12069_12088__$1);
var G__12091 = c__6939__auto___12089;
var G__12092 = cljs.core.count.call(null,c__6939__auto___12089);
var G__12093 = (0);
seq__12069_12076 = G__12090;
chunk__12070_12077 = G__12091;
count__12071_12078 = G__12092;
i__12072_12079 = G__12093;
continue;
}
} else
{var vec__12074_12094 = cljs.core.first.call(null,seq__12069_12088__$1);var k_12095__$1 = cljs.core.nth.call(null,vec__12074_12094,(0),null);var v_12096__$1 = cljs.core.nth.call(null,vec__12074_12094,(1),null);set_attr_BANG_.call(null,elem__$1,k_12095__$1,v_12096__$1);
{
var G__12097 = cljs.core.next.call(null,seq__12069_12088__$1);
var G__12098 = null;
var G__12099 = (0);
var G__12100 = (0);
seq__12069_12076 = G__12097;
chunk__12070_12077 = G__12098;
count__12071_12078 = G__12099;
i__12072_12079 = G__12100;
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
var G__12075 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12075__delegate.call(this,elem,k,v,kvs);};
G__12075.cljs$lang$maxFixedArity = 3;
G__12075.cljs$lang$applyTo = (function (arglist__12101){
var elem = cljs.core.first(arglist__12101);
arglist__12101 = cljs.core.next(arglist__12101);
var k = cljs.core.first(arglist__12101);
arglist__12101 = cljs.core.next(arglist__12101);
var v = cljs.core.first(arglist__12101);
var kvs = cljs.core.rest(arglist__12101);
return G__12075__delegate(elem,k,v,kvs);
});
G__12075.cljs$core$IFn$_invoke$arity$variadic = G__12075__delegate;
return G__12075;
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
var G__12110__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12106_12111 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12107_12112 = null;var count__12108_12113 = (0);var i__12109_12114 = (0);while(true){
if((i__12109_12114 < count__12108_12113))
{var k_12115__$1 = cljs.core._nth.call(null,chunk__12107_12112,i__12109_12114);remove_attr_BANG_.call(null,elem__$1,k_12115__$1);
{
var G__12116 = seq__12106_12111;
var G__12117 = chunk__12107_12112;
var G__12118 = count__12108_12113;
var G__12119 = (i__12109_12114 + (1));
seq__12106_12111 = G__12116;
chunk__12107_12112 = G__12117;
count__12108_12113 = G__12118;
i__12109_12114 = G__12119;
continue;
}
} else
{var temp__4126__auto___12120 = cljs.core.seq.call(null,seq__12106_12111);if(temp__4126__auto___12120)
{var seq__12106_12121__$1 = temp__4126__auto___12120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12106_12121__$1))
{var c__6939__auto___12122 = cljs.core.chunk_first.call(null,seq__12106_12121__$1);{
var G__12123 = cljs.core.chunk_rest.call(null,seq__12106_12121__$1);
var G__12124 = c__6939__auto___12122;
var G__12125 = cljs.core.count.call(null,c__6939__auto___12122);
var G__12126 = (0);
seq__12106_12111 = G__12123;
chunk__12107_12112 = G__12124;
count__12108_12113 = G__12125;
i__12109_12114 = G__12126;
continue;
}
} else
{var k_12127__$1 = cljs.core.first.call(null,seq__12106_12121__$1);remove_attr_BANG_.call(null,elem__$1,k_12127__$1);
{
var G__12128 = cljs.core.next.call(null,seq__12106_12121__$1);
var G__12129 = null;
var G__12130 = (0);
var G__12131 = (0);
seq__12106_12111 = G__12128;
chunk__12107_12112 = G__12129;
count__12108_12113 = G__12130;
i__12109_12114 = G__12131;
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
var G__12110 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12110__delegate.call(this,elem,k,ks);};
G__12110.cljs$lang$maxFixedArity = 2;
G__12110.cljs$lang$applyTo = (function (arglist__12132){
var elem = cljs.core.first(arglist__12132);
arglist__12132 = cljs.core.next(arglist__12132);
var k = cljs.core.first(arglist__12132);
var ks = cljs.core.rest(arglist__12132);
return G__12110__delegate(elem,k,ks);
});
G__12110.cljs$core$IFn$_invoke$arity$variadic = G__12110__delegate;
return G__12110;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12134 = dommy.template.__GT_node_like.call(null,elem);G__12134.style.display = ((show_QMARK_)?"":"none");
return G__12134;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12136 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12136,false);
return G__12136;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12138 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12138,true);
return G__12138;
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
