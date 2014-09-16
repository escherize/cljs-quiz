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
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__5753__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__5753__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__5753__auto__;
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
var G__11825 = (i + class$.length);
start_from = G__11825;
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
{var temp__4124__auto___11850 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11850))
{var class_list_11851 = temp__4124__auto___11850;var seq__11838_11852 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11839_11853 = null;var count__11840_11854 = (0);var i__11841_11855 = (0);while(true){
if((i__11841_11855 < count__11840_11854))
{var class_11856 = cljs.core._nth.call(null,chunk__11839_11853,i__11841_11855);class_list_11851.add(class_11856);
{
var G__11857 = seq__11838_11852;
var G__11858 = chunk__11839_11853;
var G__11859 = count__11840_11854;
var G__11860 = (i__11841_11855 + (1));
seq__11838_11852 = G__11857;
chunk__11839_11853 = G__11858;
count__11840_11854 = G__11859;
i__11841_11855 = G__11860;
continue;
}
} else
{var temp__4126__auto___11861 = cljs.core.seq.call(null,seq__11838_11852);if(temp__4126__auto___11861)
{var seq__11838_11862__$1 = temp__4126__auto___11861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11838_11862__$1))
{var c__6919__auto___11863 = cljs.core.chunk_first.call(null,seq__11838_11862__$1);{
var G__11864 = cljs.core.chunk_rest.call(null,seq__11838_11862__$1);
var G__11865 = c__6919__auto___11863;
var G__11866 = cljs.core.count.call(null,c__6919__auto___11863);
var G__11867 = (0);
seq__11838_11852 = G__11864;
chunk__11839_11853 = G__11865;
count__11840_11854 = G__11866;
i__11841_11855 = G__11867;
continue;
}
} else
{var class_11868 = cljs.core.first.call(null,seq__11838_11862__$1);class_list_11851.add(class_11868);
{
var G__11869 = cljs.core.next.call(null,seq__11838_11862__$1);
var G__11870 = null;
var G__11871 = (0);
var G__11872 = (0);
seq__11838_11852 = G__11869;
chunk__11839_11853 = G__11870;
count__11840_11854 = G__11871;
i__11841_11855 = G__11872;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__11842_11873 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11843_11874 = null;var count__11844_11875 = (0);var i__11845_11876 = (0);while(true){
if((i__11845_11876 < count__11844_11875))
{var class_11877 = cljs.core._nth.call(null,chunk__11843_11874,i__11845_11876);var class_name_11878 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11878,class_11877)))
{} else
{elem__$1.className = (((class_name_11878 === ""))?class_11877:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11878)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11877)));
}
{
var G__11879 = seq__11842_11873;
var G__11880 = chunk__11843_11874;
var G__11881 = count__11844_11875;
var G__11882 = (i__11845_11876 + (1));
seq__11842_11873 = G__11879;
chunk__11843_11874 = G__11880;
count__11844_11875 = G__11881;
i__11845_11876 = G__11882;
continue;
}
} else
{var temp__4126__auto___11883 = cljs.core.seq.call(null,seq__11842_11873);if(temp__4126__auto___11883)
{var seq__11842_11884__$1 = temp__4126__auto___11883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11842_11884__$1))
{var c__6919__auto___11885 = cljs.core.chunk_first.call(null,seq__11842_11884__$1);{
var G__11886 = cljs.core.chunk_rest.call(null,seq__11842_11884__$1);
var G__11887 = c__6919__auto___11885;
var G__11888 = cljs.core.count.call(null,c__6919__auto___11885);
var G__11889 = (0);
seq__11842_11873 = G__11886;
chunk__11843_11874 = G__11887;
count__11844_11875 = G__11888;
i__11845_11876 = G__11889;
continue;
}
} else
{var class_11890 = cljs.core.first.call(null,seq__11842_11884__$1);var class_name_11891 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11891,class_11890)))
{} else
{elem__$1.className = (((class_name_11891 === ""))?class_11890:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11891)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11890)));
}
{
var G__11892 = cljs.core.next.call(null,seq__11842_11884__$1);
var G__11893 = null;
var G__11894 = (0);
var G__11895 = (0);
seq__11842_11873 = G__11892;
chunk__11843_11874 = G__11893;
count__11844_11875 = G__11894;
i__11845_11876 = G__11895;
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
var G__11896__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11846_11897 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11847_11898 = null;var count__11848_11899 = (0);var i__11849_11900 = (0);while(true){
if((i__11849_11900 < count__11848_11899))
{var c_11901 = cljs.core._nth.call(null,chunk__11847_11898,i__11849_11900);add_class_BANG_.call(null,elem__$1,c_11901);
{
var G__11902 = seq__11846_11897;
var G__11903 = chunk__11847_11898;
var G__11904 = count__11848_11899;
var G__11905 = (i__11849_11900 + (1));
seq__11846_11897 = G__11902;
chunk__11847_11898 = G__11903;
count__11848_11899 = G__11904;
i__11849_11900 = G__11905;
continue;
}
} else
{var temp__4126__auto___11906 = cljs.core.seq.call(null,seq__11846_11897);if(temp__4126__auto___11906)
{var seq__11846_11907__$1 = temp__4126__auto___11906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11846_11907__$1))
{var c__6919__auto___11908 = cljs.core.chunk_first.call(null,seq__11846_11907__$1);{
var G__11909 = cljs.core.chunk_rest.call(null,seq__11846_11907__$1);
var G__11910 = c__6919__auto___11908;
var G__11911 = cljs.core.count.call(null,c__6919__auto___11908);
var G__11912 = (0);
seq__11846_11897 = G__11909;
chunk__11847_11898 = G__11910;
count__11848_11899 = G__11911;
i__11849_11900 = G__11912;
continue;
}
} else
{var c_11913 = cljs.core.first.call(null,seq__11846_11907__$1);add_class_BANG_.call(null,elem__$1,c_11913);
{
var G__11914 = cljs.core.next.call(null,seq__11846_11907__$1);
var G__11915 = null;
var G__11916 = (0);
var G__11917 = (0);
seq__11846_11897 = G__11914;
chunk__11847_11898 = G__11915;
count__11848_11899 = G__11916;
i__11849_11900 = G__11917;
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
var G__11896 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11896__delegate.call(this,elem,classes,more_classes);};
G__11896.cljs$lang$maxFixedArity = 2;
G__11896.cljs$lang$applyTo = (function (arglist__11918){
var elem = cljs.core.first(arglist__11918);
arglist__11918 = cljs.core.next(arglist__11918);
var classes = cljs.core.first(arglist__11918);
var more_classes = cljs.core.rest(arglist__11918);
return G__11896__delegate(elem,classes,more_classes);
});
G__11896.cljs$core$IFn$_invoke$arity$variadic = G__11896__delegate;
return G__11896;
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
var G__11919 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__11919;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11928 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11928))
{var class_list_11929 = temp__4124__auto___11928;class_list_11929.remove(class$__$1);
} else
{var class_name_11930 = elem__$1.className;var new_class_name_11931 = dommy.attrs.remove_class_str.call(null,class_name_11930,class$__$1);if((class_name_11930 === new_class_name_11931))
{} else
{elem__$1.className = new_class_name_11931;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11932__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11924 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11925 = null;var count__11926 = (0);var i__11927 = (0);while(true){
if((i__11927 < count__11926))
{var c = cljs.core._nth.call(null,chunk__11925,i__11927);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11933 = seq__11924;
var G__11934 = chunk__11925;
var G__11935 = count__11926;
var G__11936 = (i__11927 + (1));
seq__11924 = G__11933;
chunk__11925 = G__11934;
count__11926 = G__11935;
i__11927 = G__11936;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11924);if(temp__4126__auto__)
{var seq__11924__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11924__$1))
{var c__6919__auto__ = cljs.core.chunk_first.call(null,seq__11924__$1);{
var G__11937 = cljs.core.chunk_rest.call(null,seq__11924__$1);
var G__11938 = c__6919__auto__;
var G__11939 = cljs.core.count.call(null,c__6919__auto__);
var G__11940 = (0);
seq__11924 = G__11937;
chunk__11925 = G__11938;
count__11926 = G__11939;
i__11927 = G__11940;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11924__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11941 = cljs.core.next.call(null,seq__11924__$1);
var G__11942 = null;
var G__11943 = (0);
var G__11944 = (0);
seq__11924 = G__11941;
chunk__11925 = G__11942;
count__11926 = G__11943;
i__11927 = G__11944;
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
var G__11932 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11932__delegate.call(this,elem,class$,classes);};
G__11932.cljs$lang$maxFixedArity = 2;
G__11932.cljs$lang$applyTo = (function (arglist__11945){
var elem = cljs.core.first(arglist__11945);
arglist__11945 = cljs.core.next(arglist__11945);
var class$ = cljs.core.first(arglist__11945);
var classes = cljs.core.rest(arglist__11945);
return G__11932__delegate(elem,class$,classes);
});
G__11932.cljs$core$IFn$_invoke$arity$variadic = G__11932__delegate;
return G__11932;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11946 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11946))
{var class_list_11947 = temp__4124__auto___11946;class_list_11947.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11950){var vec__11951 = p__11950;var k = cljs.core.nth.call(null,vec__11951,(0),null);var v = cljs.core.nth.call(null,vec__11951,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11958_11964 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11959_11965 = null;var count__11960_11966 = (0);var i__11961_11967 = (0);while(true){
if((i__11961_11967 < count__11960_11966))
{var vec__11962_11968 = cljs.core._nth.call(null,chunk__11959_11965,i__11961_11967);var k_11969 = cljs.core.nth.call(null,vec__11962_11968,(0),null);var v_11970 = cljs.core.nth.call(null,vec__11962_11968,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11969),v_11970);
{
var G__11971 = seq__11958_11964;
var G__11972 = chunk__11959_11965;
var G__11973 = count__11960_11966;
var G__11974 = (i__11961_11967 + (1));
seq__11958_11964 = G__11971;
chunk__11959_11965 = G__11972;
count__11960_11966 = G__11973;
i__11961_11967 = G__11974;
continue;
}
} else
{var temp__4126__auto___11975 = cljs.core.seq.call(null,seq__11958_11964);if(temp__4126__auto___11975)
{var seq__11958_11976__$1 = temp__4126__auto___11975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11958_11976__$1))
{var c__6919__auto___11977 = cljs.core.chunk_first.call(null,seq__11958_11976__$1);{
var G__11978 = cljs.core.chunk_rest.call(null,seq__11958_11976__$1);
var G__11979 = c__6919__auto___11977;
var G__11980 = cljs.core.count.call(null,c__6919__auto___11977);
var G__11981 = (0);
seq__11958_11964 = G__11978;
chunk__11959_11965 = G__11979;
count__11960_11966 = G__11980;
i__11961_11967 = G__11981;
continue;
}
} else
{var vec__11963_11982 = cljs.core.first.call(null,seq__11958_11976__$1);var k_11983 = cljs.core.nth.call(null,vec__11963_11982,(0),null);var v_11984 = cljs.core.nth.call(null,vec__11963_11982,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11983),v_11984);
{
var G__11985 = cljs.core.next.call(null,seq__11958_11976__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__11958_11964 = G__11985;
chunk__11959_11965 = G__11986;
count__11960_11966 = G__11987;
i__11961_11967 = G__11988;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11989){
var elem = cljs.core.first(arglist__11989);
var kvs = cljs.core.rest(arglist__11989);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11996_12002 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11997_12003 = null;var count__11998_12004 = (0);var i__11999_12005 = (0);while(true){
if((i__11999_12005 < count__11998_12004))
{var vec__12000_12006 = cljs.core._nth.call(null,chunk__11997_12003,i__11999_12005);var k_12007 = cljs.core.nth.call(null,vec__12000_12006,(0),null);var v_12008 = cljs.core.nth.call(null,vec__12000_12006,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12007,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12008)+"px"));
{
var G__12009 = seq__11996_12002;
var G__12010 = chunk__11997_12003;
var G__12011 = count__11998_12004;
var G__12012 = (i__11999_12005 + (1));
seq__11996_12002 = G__12009;
chunk__11997_12003 = G__12010;
count__11998_12004 = G__12011;
i__11999_12005 = G__12012;
continue;
}
} else
{var temp__4126__auto___12013 = cljs.core.seq.call(null,seq__11996_12002);if(temp__4126__auto___12013)
{var seq__11996_12014__$1 = temp__4126__auto___12013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11996_12014__$1))
{var c__6919__auto___12015 = cljs.core.chunk_first.call(null,seq__11996_12014__$1);{
var G__12016 = cljs.core.chunk_rest.call(null,seq__11996_12014__$1);
var G__12017 = c__6919__auto___12015;
var G__12018 = cljs.core.count.call(null,c__6919__auto___12015);
var G__12019 = (0);
seq__11996_12002 = G__12016;
chunk__11997_12003 = G__12017;
count__11998_12004 = G__12018;
i__11999_12005 = G__12019;
continue;
}
} else
{var vec__12001_12020 = cljs.core.first.call(null,seq__11996_12014__$1);var k_12021 = cljs.core.nth.call(null,vec__12001_12020,(0),null);var v_12022 = cljs.core.nth.call(null,vec__12001_12020,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12021,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12022)+"px"));
{
var G__12023 = cljs.core.next.call(null,seq__11996_12014__$1);
var G__12024 = null;
var G__12025 = (0);
var G__12026 = (0);
seq__11996_12002 = G__12023;
chunk__11997_12003 = G__12024;
count__11998_12004 = G__12025;
i__11999_12005 = G__12026;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12027){
var elem = cljs.core.first(arglist__12027);
var kvs = cljs.core.rest(arglist__12027);
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
{var G__12036 = dommy.template.__GT_node_like.call(null,elem);(G__12036[dommy.utils.as_str.call(null,k)] = v);
return G__12036;
} else
{var G__12037 = dommy.template.__GT_node_like.call(null,elem);G__12037.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__12037;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12044__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12038_12045 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__12039_12046 = null;var count__12040_12047 = (0);var i__12041_12048 = (0);while(true){
if((i__12041_12048 < count__12040_12047))
{var vec__12042_12049 = cljs.core._nth.call(null,chunk__12039_12046,i__12041_12048);var k_12050__$1 = cljs.core.nth.call(null,vec__12042_12049,(0),null);var v_12051__$1 = cljs.core.nth.call(null,vec__12042_12049,(1),null);set_attr_BANG_.call(null,elem__$1,k_12050__$1,v_12051__$1);
{
var G__12052 = seq__12038_12045;
var G__12053 = chunk__12039_12046;
var G__12054 = count__12040_12047;
var G__12055 = (i__12041_12048 + (1));
seq__12038_12045 = G__12052;
chunk__12039_12046 = G__12053;
count__12040_12047 = G__12054;
i__12041_12048 = G__12055;
continue;
}
} else
{var temp__4126__auto___12056 = cljs.core.seq.call(null,seq__12038_12045);if(temp__4126__auto___12056)
{var seq__12038_12057__$1 = temp__4126__auto___12056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12038_12057__$1))
{var c__6919__auto___12058 = cljs.core.chunk_first.call(null,seq__12038_12057__$1);{
var G__12059 = cljs.core.chunk_rest.call(null,seq__12038_12057__$1);
var G__12060 = c__6919__auto___12058;
var G__12061 = cljs.core.count.call(null,c__6919__auto___12058);
var G__12062 = (0);
seq__12038_12045 = G__12059;
chunk__12039_12046 = G__12060;
count__12040_12047 = G__12061;
i__12041_12048 = G__12062;
continue;
}
} else
{var vec__12043_12063 = cljs.core.first.call(null,seq__12038_12057__$1);var k_12064__$1 = cljs.core.nth.call(null,vec__12043_12063,(0),null);var v_12065__$1 = cljs.core.nth.call(null,vec__12043_12063,(1),null);set_attr_BANG_.call(null,elem__$1,k_12064__$1,v_12065__$1);
{
var G__12066 = cljs.core.next.call(null,seq__12038_12057__$1);
var G__12067 = null;
var G__12068 = (0);
var G__12069 = (0);
seq__12038_12045 = G__12066;
chunk__12039_12046 = G__12067;
count__12040_12047 = G__12068;
i__12041_12048 = G__12069;
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
var G__12044 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12044__delegate.call(this,elem,k,v,kvs);};
G__12044.cljs$lang$maxFixedArity = 3;
G__12044.cljs$lang$applyTo = (function (arglist__12070){
var elem = cljs.core.first(arglist__12070);
arglist__12070 = cljs.core.next(arglist__12070);
var k = cljs.core.first(arglist__12070);
arglist__12070 = cljs.core.next(arglist__12070);
var v = cljs.core.first(arglist__12070);
var kvs = cljs.core.rest(arglist__12070);
return G__12044__delegate(elem,k,v,kvs);
});
G__12044.cljs$core$IFn$_invoke$arity$variadic = G__12044__delegate;
return G__12044;
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
var G__12079__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12075_12080 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12076_12081 = null;var count__12077_12082 = (0);var i__12078_12083 = (0);while(true){
if((i__12078_12083 < count__12077_12082))
{var k_12084__$1 = cljs.core._nth.call(null,chunk__12076_12081,i__12078_12083);remove_attr_BANG_.call(null,elem__$1,k_12084__$1);
{
var G__12085 = seq__12075_12080;
var G__12086 = chunk__12076_12081;
var G__12087 = count__12077_12082;
var G__12088 = (i__12078_12083 + (1));
seq__12075_12080 = G__12085;
chunk__12076_12081 = G__12086;
count__12077_12082 = G__12087;
i__12078_12083 = G__12088;
continue;
}
} else
{var temp__4126__auto___12089 = cljs.core.seq.call(null,seq__12075_12080);if(temp__4126__auto___12089)
{var seq__12075_12090__$1 = temp__4126__auto___12089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12075_12090__$1))
{var c__6919__auto___12091 = cljs.core.chunk_first.call(null,seq__12075_12090__$1);{
var G__12092 = cljs.core.chunk_rest.call(null,seq__12075_12090__$1);
var G__12093 = c__6919__auto___12091;
var G__12094 = cljs.core.count.call(null,c__6919__auto___12091);
var G__12095 = (0);
seq__12075_12080 = G__12092;
chunk__12076_12081 = G__12093;
count__12077_12082 = G__12094;
i__12078_12083 = G__12095;
continue;
}
} else
{var k_12096__$1 = cljs.core.first.call(null,seq__12075_12090__$1);remove_attr_BANG_.call(null,elem__$1,k_12096__$1);
{
var G__12097 = cljs.core.next.call(null,seq__12075_12090__$1);
var G__12098 = null;
var G__12099 = (0);
var G__12100 = (0);
seq__12075_12080 = G__12097;
chunk__12076_12081 = G__12098;
count__12077_12082 = G__12099;
i__12078_12083 = G__12100;
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
var G__12079 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12079__delegate.call(this,elem,k,ks);};
G__12079.cljs$lang$maxFixedArity = 2;
G__12079.cljs$lang$applyTo = (function (arglist__12101){
var elem = cljs.core.first(arglist__12101);
arglist__12101 = cljs.core.next(arglist__12101);
var k = cljs.core.first(arglist__12101);
var ks = cljs.core.rest(arglist__12101);
return G__12079__delegate(elem,k,ks);
});
G__12079.cljs$core$IFn$_invoke$arity$variadic = G__12079__delegate;
return G__12079;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12103 = dommy.template.__GT_node_like.call(null,elem);G__12103.style.display = ((show_QMARK_)?"":"none");
return G__12103;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12105 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12105,false);
return G__12105;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12107 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12107,true);
return G__12107;
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
