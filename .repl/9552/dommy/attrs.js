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
var G__11816 = (i + class$.length);
start_from = G__11816;
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
{var temp__4124__auto___11841 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11841))
{var class_list_11842 = temp__4124__auto___11841;var seq__11829_11843 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11830_11844 = null;var count__11831_11845 = (0);var i__11832_11846 = (0);while(true){
if((i__11832_11846 < count__11831_11845))
{var class_11847 = cljs.core._nth.call(null,chunk__11830_11844,i__11832_11846);class_list_11842.add(class_11847);
{
var G__11848 = seq__11829_11843;
var G__11849 = chunk__11830_11844;
var G__11850 = count__11831_11845;
var G__11851 = (i__11832_11846 + (1));
seq__11829_11843 = G__11848;
chunk__11830_11844 = G__11849;
count__11831_11845 = G__11850;
i__11832_11846 = G__11851;
continue;
}
} else
{var temp__4126__auto___11852 = cljs.core.seq.call(null,seq__11829_11843);if(temp__4126__auto___11852)
{var seq__11829_11853__$1 = temp__4126__auto___11852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11829_11853__$1))
{var c__6904__auto___11854 = cljs.core.chunk_first.call(null,seq__11829_11853__$1);{
var G__11855 = cljs.core.chunk_rest.call(null,seq__11829_11853__$1);
var G__11856 = c__6904__auto___11854;
var G__11857 = cljs.core.count.call(null,c__6904__auto___11854);
var G__11858 = (0);
seq__11829_11843 = G__11855;
chunk__11830_11844 = G__11856;
count__11831_11845 = G__11857;
i__11832_11846 = G__11858;
continue;
}
} else
{var class_11859 = cljs.core.first.call(null,seq__11829_11853__$1);class_list_11842.add(class_11859);
{
var G__11860 = cljs.core.next.call(null,seq__11829_11853__$1);
var G__11861 = null;
var G__11862 = (0);
var G__11863 = (0);
seq__11829_11843 = G__11860;
chunk__11830_11844 = G__11861;
count__11831_11845 = G__11862;
i__11832_11846 = G__11863;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__11833_11864 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11834_11865 = null;var count__11835_11866 = (0);var i__11836_11867 = (0);while(true){
if((i__11836_11867 < count__11835_11866))
{var class_11868 = cljs.core._nth.call(null,chunk__11834_11865,i__11836_11867);var class_name_11869 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11869,class_11868)))
{} else
{elem__$1.className = (((class_name_11869 === ""))?class_11868:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11869)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11868)));
}
{
var G__11870 = seq__11833_11864;
var G__11871 = chunk__11834_11865;
var G__11872 = count__11835_11866;
var G__11873 = (i__11836_11867 + (1));
seq__11833_11864 = G__11870;
chunk__11834_11865 = G__11871;
count__11835_11866 = G__11872;
i__11836_11867 = G__11873;
continue;
}
} else
{var temp__4126__auto___11874 = cljs.core.seq.call(null,seq__11833_11864);if(temp__4126__auto___11874)
{var seq__11833_11875__$1 = temp__4126__auto___11874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11833_11875__$1))
{var c__6904__auto___11876 = cljs.core.chunk_first.call(null,seq__11833_11875__$1);{
var G__11877 = cljs.core.chunk_rest.call(null,seq__11833_11875__$1);
var G__11878 = c__6904__auto___11876;
var G__11879 = cljs.core.count.call(null,c__6904__auto___11876);
var G__11880 = (0);
seq__11833_11864 = G__11877;
chunk__11834_11865 = G__11878;
count__11835_11866 = G__11879;
i__11836_11867 = G__11880;
continue;
}
} else
{var class_11881 = cljs.core.first.call(null,seq__11833_11875__$1);var class_name_11882 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11882,class_11881)))
{} else
{elem__$1.className = (((class_name_11882 === ""))?class_11881:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11882)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11881)));
}
{
var G__11883 = cljs.core.next.call(null,seq__11833_11875__$1);
var G__11884 = null;
var G__11885 = (0);
var G__11886 = (0);
seq__11833_11864 = G__11883;
chunk__11834_11865 = G__11884;
count__11835_11866 = G__11885;
i__11836_11867 = G__11886;
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
var G__11887__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11837_11888 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11838_11889 = null;var count__11839_11890 = (0);var i__11840_11891 = (0);while(true){
if((i__11840_11891 < count__11839_11890))
{var c_11892 = cljs.core._nth.call(null,chunk__11838_11889,i__11840_11891);add_class_BANG_.call(null,elem__$1,c_11892);
{
var G__11893 = seq__11837_11888;
var G__11894 = chunk__11838_11889;
var G__11895 = count__11839_11890;
var G__11896 = (i__11840_11891 + (1));
seq__11837_11888 = G__11893;
chunk__11838_11889 = G__11894;
count__11839_11890 = G__11895;
i__11840_11891 = G__11896;
continue;
}
} else
{var temp__4126__auto___11897 = cljs.core.seq.call(null,seq__11837_11888);if(temp__4126__auto___11897)
{var seq__11837_11898__$1 = temp__4126__auto___11897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11837_11898__$1))
{var c__6904__auto___11899 = cljs.core.chunk_first.call(null,seq__11837_11898__$1);{
var G__11900 = cljs.core.chunk_rest.call(null,seq__11837_11898__$1);
var G__11901 = c__6904__auto___11899;
var G__11902 = cljs.core.count.call(null,c__6904__auto___11899);
var G__11903 = (0);
seq__11837_11888 = G__11900;
chunk__11838_11889 = G__11901;
count__11839_11890 = G__11902;
i__11840_11891 = G__11903;
continue;
}
} else
{var c_11904 = cljs.core.first.call(null,seq__11837_11898__$1);add_class_BANG_.call(null,elem__$1,c_11904);
{
var G__11905 = cljs.core.next.call(null,seq__11837_11898__$1);
var G__11906 = null;
var G__11907 = (0);
var G__11908 = (0);
seq__11837_11888 = G__11905;
chunk__11838_11889 = G__11906;
count__11839_11890 = G__11907;
i__11840_11891 = G__11908;
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
var G__11887 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11887__delegate.call(this,elem,classes,more_classes);};
G__11887.cljs$lang$maxFixedArity = 2;
G__11887.cljs$lang$applyTo = (function (arglist__11909){
var elem = cljs.core.first(arglist__11909);
arglist__11909 = cljs.core.next(arglist__11909);
var classes = cljs.core.first(arglist__11909);
var more_classes = cljs.core.rest(arglist__11909);
return G__11887__delegate(elem,classes,more_classes);
});
G__11887.cljs$core$IFn$_invoke$arity$variadic = G__11887__delegate;
return G__11887;
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
var G__11910 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__11910;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11919 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11919))
{var class_list_11920 = temp__4124__auto___11919;class_list_11920.remove(class$__$1);
} else
{var class_name_11921 = elem__$1.className;var new_class_name_11922 = dommy.attrs.remove_class_str.call(null,class_name_11921,class$__$1);if((class_name_11921 === new_class_name_11922))
{} else
{elem__$1.className = new_class_name_11922;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11923__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11915 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11916 = null;var count__11917 = (0);var i__11918 = (0);while(true){
if((i__11918 < count__11917))
{var c = cljs.core._nth.call(null,chunk__11916,i__11918);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11924 = seq__11915;
var G__11925 = chunk__11916;
var G__11926 = count__11917;
var G__11927 = (i__11918 + (1));
seq__11915 = G__11924;
chunk__11916 = G__11925;
count__11917 = G__11926;
i__11918 = G__11927;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11915);if(temp__4126__auto__)
{var seq__11915__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11915__$1))
{var c__6904__auto__ = cljs.core.chunk_first.call(null,seq__11915__$1);{
var G__11928 = cljs.core.chunk_rest.call(null,seq__11915__$1);
var G__11929 = c__6904__auto__;
var G__11930 = cljs.core.count.call(null,c__6904__auto__);
var G__11931 = (0);
seq__11915 = G__11928;
chunk__11916 = G__11929;
count__11917 = G__11930;
i__11918 = G__11931;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11915__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11932 = cljs.core.next.call(null,seq__11915__$1);
var G__11933 = null;
var G__11934 = (0);
var G__11935 = (0);
seq__11915 = G__11932;
chunk__11916 = G__11933;
count__11917 = G__11934;
i__11918 = G__11935;
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
var G__11923 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11923__delegate.call(this,elem,class$,classes);};
G__11923.cljs$lang$maxFixedArity = 2;
G__11923.cljs$lang$applyTo = (function (arglist__11936){
var elem = cljs.core.first(arglist__11936);
arglist__11936 = cljs.core.next(arglist__11936);
var class$ = cljs.core.first(arglist__11936);
var classes = cljs.core.rest(arglist__11936);
return G__11923__delegate(elem,class$,classes);
});
G__11923.cljs$core$IFn$_invoke$arity$variadic = G__11923__delegate;
return G__11923;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11937 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11937))
{var class_list_11938 = temp__4124__auto___11937;class_list_11938.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11941){var vec__11942 = p__11941;var k = cljs.core.nth.call(null,vec__11942,(0),null);var v = cljs.core.nth.call(null,vec__11942,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11949_11955 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11950_11956 = null;var count__11951_11957 = (0);var i__11952_11958 = (0);while(true){
if((i__11952_11958 < count__11951_11957))
{var vec__11953_11959 = cljs.core._nth.call(null,chunk__11950_11956,i__11952_11958);var k_11960 = cljs.core.nth.call(null,vec__11953_11959,(0),null);var v_11961 = cljs.core.nth.call(null,vec__11953_11959,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11960),v_11961);
{
var G__11962 = seq__11949_11955;
var G__11963 = chunk__11950_11956;
var G__11964 = count__11951_11957;
var G__11965 = (i__11952_11958 + (1));
seq__11949_11955 = G__11962;
chunk__11950_11956 = G__11963;
count__11951_11957 = G__11964;
i__11952_11958 = G__11965;
continue;
}
} else
{var temp__4126__auto___11966 = cljs.core.seq.call(null,seq__11949_11955);if(temp__4126__auto___11966)
{var seq__11949_11967__$1 = temp__4126__auto___11966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11949_11967__$1))
{var c__6904__auto___11968 = cljs.core.chunk_first.call(null,seq__11949_11967__$1);{
var G__11969 = cljs.core.chunk_rest.call(null,seq__11949_11967__$1);
var G__11970 = c__6904__auto___11968;
var G__11971 = cljs.core.count.call(null,c__6904__auto___11968);
var G__11972 = (0);
seq__11949_11955 = G__11969;
chunk__11950_11956 = G__11970;
count__11951_11957 = G__11971;
i__11952_11958 = G__11972;
continue;
}
} else
{var vec__11954_11973 = cljs.core.first.call(null,seq__11949_11967__$1);var k_11974 = cljs.core.nth.call(null,vec__11954_11973,(0),null);var v_11975 = cljs.core.nth.call(null,vec__11954_11973,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11974),v_11975);
{
var G__11976 = cljs.core.next.call(null,seq__11949_11967__$1);
var G__11977 = null;
var G__11978 = (0);
var G__11979 = (0);
seq__11949_11955 = G__11976;
chunk__11950_11956 = G__11977;
count__11951_11957 = G__11978;
i__11952_11958 = G__11979;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11980){
var elem = cljs.core.first(arglist__11980);
var kvs = cljs.core.rest(arglist__11980);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11987_11993 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11988_11994 = null;var count__11989_11995 = (0);var i__11990_11996 = (0);while(true){
if((i__11990_11996 < count__11989_11995))
{var vec__11991_11997 = cljs.core._nth.call(null,chunk__11988_11994,i__11990_11996);var k_11998 = cljs.core.nth.call(null,vec__11991_11997,(0),null);var v_11999 = cljs.core.nth.call(null,vec__11991_11997,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11998,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11999)+"px"));
{
var G__12000 = seq__11987_11993;
var G__12001 = chunk__11988_11994;
var G__12002 = count__11989_11995;
var G__12003 = (i__11990_11996 + (1));
seq__11987_11993 = G__12000;
chunk__11988_11994 = G__12001;
count__11989_11995 = G__12002;
i__11990_11996 = G__12003;
continue;
}
} else
{var temp__4126__auto___12004 = cljs.core.seq.call(null,seq__11987_11993);if(temp__4126__auto___12004)
{var seq__11987_12005__$1 = temp__4126__auto___12004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11987_12005__$1))
{var c__6904__auto___12006 = cljs.core.chunk_first.call(null,seq__11987_12005__$1);{
var G__12007 = cljs.core.chunk_rest.call(null,seq__11987_12005__$1);
var G__12008 = c__6904__auto___12006;
var G__12009 = cljs.core.count.call(null,c__6904__auto___12006);
var G__12010 = (0);
seq__11987_11993 = G__12007;
chunk__11988_11994 = G__12008;
count__11989_11995 = G__12009;
i__11990_11996 = G__12010;
continue;
}
} else
{var vec__11992_12011 = cljs.core.first.call(null,seq__11987_12005__$1);var k_12012 = cljs.core.nth.call(null,vec__11992_12011,(0),null);var v_12013 = cljs.core.nth.call(null,vec__11992_12011,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12012,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12013)+"px"));
{
var G__12014 = cljs.core.next.call(null,seq__11987_12005__$1);
var G__12015 = null;
var G__12016 = (0);
var G__12017 = (0);
seq__11987_11993 = G__12014;
chunk__11988_11994 = G__12015;
count__11989_11995 = G__12016;
i__11990_11996 = G__12017;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12018){
var elem = cljs.core.first(arglist__12018);
var kvs = cljs.core.rest(arglist__12018);
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
{var G__12027 = dommy.template.__GT_node_like.call(null,elem);(G__12027[dommy.utils.as_str.call(null,k)] = v);
return G__12027;
} else
{var G__12028 = dommy.template.__GT_node_like.call(null,elem);G__12028.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__12028;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12035__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12029_12036 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__12030_12037 = null;var count__12031_12038 = (0);var i__12032_12039 = (0);while(true){
if((i__12032_12039 < count__12031_12038))
{var vec__12033_12040 = cljs.core._nth.call(null,chunk__12030_12037,i__12032_12039);var k_12041__$1 = cljs.core.nth.call(null,vec__12033_12040,(0),null);var v_12042__$1 = cljs.core.nth.call(null,vec__12033_12040,(1),null);set_attr_BANG_.call(null,elem__$1,k_12041__$1,v_12042__$1);
{
var G__12043 = seq__12029_12036;
var G__12044 = chunk__12030_12037;
var G__12045 = count__12031_12038;
var G__12046 = (i__12032_12039 + (1));
seq__12029_12036 = G__12043;
chunk__12030_12037 = G__12044;
count__12031_12038 = G__12045;
i__12032_12039 = G__12046;
continue;
}
} else
{var temp__4126__auto___12047 = cljs.core.seq.call(null,seq__12029_12036);if(temp__4126__auto___12047)
{var seq__12029_12048__$1 = temp__4126__auto___12047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12029_12048__$1))
{var c__6904__auto___12049 = cljs.core.chunk_first.call(null,seq__12029_12048__$1);{
var G__12050 = cljs.core.chunk_rest.call(null,seq__12029_12048__$1);
var G__12051 = c__6904__auto___12049;
var G__12052 = cljs.core.count.call(null,c__6904__auto___12049);
var G__12053 = (0);
seq__12029_12036 = G__12050;
chunk__12030_12037 = G__12051;
count__12031_12038 = G__12052;
i__12032_12039 = G__12053;
continue;
}
} else
{var vec__12034_12054 = cljs.core.first.call(null,seq__12029_12048__$1);var k_12055__$1 = cljs.core.nth.call(null,vec__12034_12054,(0),null);var v_12056__$1 = cljs.core.nth.call(null,vec__12034_12054,(1),null);set_attr_BANG_.call(null,elem__$1,k_12055__$1,v_12056__$1);
{
var G__12057 = cljs.core.next.call(null,seq__12029_12048__$1);
var G__12058 = null;
var G__12059 = (0);
var G__12060 = (0);
seq__12029_12036 = G__12057;
chunk__12030_12037 = G__12058;
count__12031_12038 = G__12059;
i__12032_12039 = G__12060;
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
var G__12035 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12035__delegate.call(this,elem,k,v,kvs);};
G__12035.cljs$lang$maxFixedArity = 3;
G__12035.cljs$lang$applyTo = (function (arglist__12061){
var elem = cljs.core.first(arglist__12061);
arglist__12061 = cljs.core.next(arglist__12061);
var k = cljs.core.first(arglist__12061);
arglist__12061 = cljs.core.next(arglist__12061);
var v = cljs.core.first(arglist__12061);
var kvs = cljs.core.rest(arglist__12061);
return G__12035__delegate(elem,k,v,kvs);
});
G__12035.cljs$core$IFn$_invoke$arity$variadic = G__12035__delegate;
return G__12035;
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
var G__12070__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12066_12071 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12067_12072 = null;var count__12068_12073 = (0);var i__12069_12074 = (0);while(true){
if((i__12069_12074 < count__12068_12073))
{var k_12075__$1 = cljs.core._nth.call(null,chunk__12067_12072,i__12069_12074);remove_attr_BANG_.call(null,elem__$1,k_12075__$1);
{
var G__12076 = seq__12066_12071;
var G__12077 = chunk__12067_12072;
var G__12078 = count__12068_12073;
var G__12079 = (i__12069_12074 + (1));
seq__12066_12071 = G__12076;
chunk__12067_12072 = G__12077;
count__12068_12073 = G__12078;
i__12069_12074 = G__12079;
continue;
}
} else
{var temp__4126__auto___12080 = cljs.core.seq.call(null,seq__12066_12071);if(temp__4126__auto___12080)
{var seq__12066_12081__$1 = temp__4126__auto___12080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12066_12081__$1))
{var c__6904__auto___12082 = cljs.core.chunk_first.call(null,seq__12066_12081__$1);{
var G__12083 = cljs.core.chunk_rest.call(null,seq__12066_12081__$1);
var G__12084 = c__6904__auto___12082;
var G__12085 = cljs.core.count.call(null,c__6904__auto___12082);
var G__12086 = (0);
seq__12066_12071 = G__12083;
chunk__12067_12072 = G__12084;
count__12068_12073 = G__12085;
i__12069_12074 = G__12086;
continue;
}
} else
{var k_12087__$1 = cljs.core.first.call(null,seq__12066_12081__$1);remove_attr_BANG_.call(null,elem__$1,k_12087__$1);
{
var G__12088 = cljs.core.next.call(null,seq__12066_12081__$1);
var G__12089 = null;
var G__12090 = (0);
var G__12091 = (0);
seq__12066_12071 = G__12088;
chunk__12067_12072 = G__12089;
count__12068_12073 = G__12090;
i__12069_12074 = G__12091;
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
var G__12070 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12070__delegate.call(this,elem,k,ks);};
G__12070.cljs$lang$maxFixedArity = 2;
G__12070.cljs$lang$applyTo = (function (arglist__12092){
var elem = cljs.core.first(arglist__12092);
arglist__12092 = cljs.core.next(arglist__12092);
var k = cljs.core.first(arglist__12092);
var ks = cljs.core.rest(arglist__12092);
return G__12070__delegate(elem,k,ks);
});
G__12070.cljs$core$IFn$_invoke$arity$variadic = G__12070__delegate;
return G__12070;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12094 = dommy.template.__GT_node_like.call(null,elem);G__12094.style.display = ((show_QMARK_)?"":"none");
return G__12094;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12096 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12096,false);
return G__12096;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12098 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12098,true);
return G__12098;
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
