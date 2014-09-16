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
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__5785__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__5785__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__5785__auto__;
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
var G__11813 = (i + class$.length);
start_from = G__11813;
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
{var temp__4124__auto___11838 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11838))
{var class_list_11839 = temp__4124__auto___11838;var seq__11826_11840 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11827_11841 = null;var count__11828_11842 = (0);var i__11829_11843 = (0);while(true){
if((i__11829_11843 < count__11828_11842))
{var class_11844 = cljs.core._nth.call(null,chunk__11827_11841,i__11829_11843);class_list_11839.add(class_11844);
{
var G__11845 = seq__11826_11840;
var G__11846 = chunk__11827_11841;
var G__11847 = count__11828_11842;
var G__11848 = (i__11829_11843 + (1));
seq__11826_11840 = G__11845;
chunk__11827_11841 = G__11846;
count__11828_11842 = G__11847;
i__11829_11843 = G__11848;
continue;
}
} else
{var temp__4126__auto___11849 = cljs.core.seq.call(null,seq__11826_11840);if(temp__4126__auto___11849)
{var seq__11826_11850__$1 = temp__4126__auto___11849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11826_11850__$1))
{var c__6904__auto___11851 = cljs.core.chunk_first.call(null,seq__11826_11850__$1);{
var G__11852 = cljs.core.chunk_rest.call(null,seq__11826_11850__$1);
var G__11853 = c__6904__auto___11851;
var G__11854 = cljs.core.count.call(null,c__6904__auto___11851);
var G__11855 = (0);
seq__11826_11840 = G__11852;
chunk__11827_11841 = G__11853;
count__11828_11842 = G__11854;
i__11829_11843 = G__11855;
continue;
}
} else
{var class_11856 = cljs.core.first.call(null,seq__11826_11850__$1);class_list_11839.add(class_11856);
{
var G__11857 = cljs.core.next.call(null,seq__11826_11850__$1);
var G__11858 = null;
var G__11859 = (0);
var G__11860 = (0);
seq__11826_11840 = G__11857;
chunk__11827_11841 = G__11858;
count__11828_11842 = G__11859;
i__11829_11843 = G__11860;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__11830_11861 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11831_11862 = null;var count__11832_11863 = (0);var i__11833_11864 = (0);while(true){
if((i__11833_11864 < count__11832_11863))
{var class_11865 = cljs.core._nth.call(null,chunk__11831_11862,i__11833_11864);var class_name_11866 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11866,class_11865)))
{} else
{elem__$1.className = (((class_name_11866 === ""))?class_11865:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11866)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11865)));
}
{
var G__11867 = seq__11830_11861;
var G__11868 = chunk__11831_11862;
var G__11869 = count__11832_11863;
var G__11870 = (i__11833_11864 + (1));
seq__11830_11861 = G__11867;
chunk__11831_11862 = G__11868;
count__11832_11863 = G__11869;
i__11833_11864 = G__11870;
continue;
}
} else
{var temp__4126__auto___11871 = cljs.core.seq.call(null,seq__11830_11861);if(temp__4126__auto___11871)
{var seq__11830_11872__$1 = temp__4126__auto___11871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11830_11872__$1))
{var c__6904__auto___11873 = cljs.core.chunk_first.call(null,seq__11830_11872__$1);{
var G__11874 = cljs.core.chunk_rest.call(null,seq__11830_11872__$1);
var G__11875 = c__6904__auto___11873;
var G__11876 = cljs.core.count.call(null,c__6904__auto___11873);
var G__11877 = (0);
seq__11830_11861 = G__11874;
chunk__11831_11862 = G__11875;
count__11832_11863 = G__11876;
i__11833_11864 = G__11877;
continue;
}
} else
{var class_11878 = cljs.core.first.call(null,seq__11830_11872__$1);var class_name_11879 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11879,class_11878)))
{} else
{elem__$1.className = (((class_name_11879 === ""))?class_11878:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11879)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11878)));
}
{
var G__11880 = cljs.core.next.call(null,seq__11830_11872__$1);
var G__11881 = null;
var G__11882 = (0);
var G__11883 = (0);
seq__11830_11861 = G__11880;
chunk__11831_11862 = G__11881;
count__11832_11863 = G__11882;
i__11833_11864 = G__11883;
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
var G__11884__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11834_11885 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11835_11886 = null;var count__11836_11887 = (0);var i__11837_11888 = (0);while(true){
if((i__11837_11888 < count__11836_11887))
{var c_11889 = cljs.core._nth.call(null,chunk__11835_11886,i__11837_11888);add_class_BANG_.call(null,elem__$1,c_11889);
{
var G__11890 = seq__11834_11885;
var G__11891 = chunk__11835_11886;
var G__11892 = count__11836_11887;
var G__11893 = (i__11837_11888 + (1));
seq__11834_11885 = G__11890;
chunk__11835_11886 = G__11891;
count__11836_11887 = G__11892;
i__11837_11888 = G__11893;
continue;
}
} else
{var temp__4126__auto___11894 = cljs.core.seq.call(null,seq__11834_11885);if(temp__4126__auto___11894)
{var seq__11834_11895__$1 = temp__4126__auto___11894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11834_11895__$1))
{var c__6904__auto___11896 = cljs.core.chunk_first.call(null,seq__11834_11895__$1);{
var G__11897 = cljs.core.chunk_rest.call(null,seq__11834_11895__$1);
var G__11898 = c__6904__auto___11896;
var G__11899 = cljs.core.count.call(null,c__6904__auto___11896);
var G__11900 = (0);
seq__11834_11885 = G__11897;
chunk__11835_11886 = G__11898;
count__11836_11887 = G__11899;
i__11837_11888 = G__11900;
continue;
}
} else
{var c_11901 = cljs.core.first.call(null,seq__11834_11895__$1);add_class_BANG_.call(null,elem__$1,c_11901);
{
var G__11902 = cljs.core.next.call(null,seq__11834_11895__$1);
var G__11903 = null;
var G__11904 = (0);
var G__11905 = (0);
seq__11834_11885 = G__11902;
chunk__11835_11886 = G__11903;
count__11836_11887 = G__11904;
i__11837_11888 = G__11905;
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
var G__11884 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11884__delegate.call(this,elem,classes,more_classes);};
G__11884.cljs$lang$maxFixedArity = 2;
G__11884.cljs$lang$applyTo = (function (arglist__11906){
var elem = cljs.core.first(arglist__11906);
arglist__11906 = cljs.core.next(arglist__11906);
var classes = cljs.core.first(arglist__11906);
var more_classes = cljs.core.rest(arglist__11906);
return G__11884__delegate(elem,classes,more_classes);
});
G__11884.cljs$core$IFn$_invoke$arity$variadic = G__11884__delegate;
return G__11884;
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
var G__11907 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__11907;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11916 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11916))
{var class_list_11917 = temp__4124__auto___11916;class_list_11917.remove(class$__$1);
} else
{var class_name_11918 = elem__$1.className;var new_class_name_11919 = dommy.attrs.remove_class_str.call(null,class_name_11918,class$__$1);if((class_name_11918 === new_class_name_11919))
{} else
{elem__$1.className = new_class_name_11919;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11920__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11912 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11913 = null;var count__11914 = (0);var i__11915 = (0);while(true){
if((i__11915 < count__11914))
{var c = cljs.core._nth.call(null,chunk__11913,i__11915);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11921 = seq__11912;
var G__11922 = chunk__11913;
var G__11923 = count__11914;
var G__11924 = (i__11915 + (1));
seq__11912 = G__11921;
chunk__11913 = G__11922;
count__11914 = G__11923;
i__11915 = G__11924;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11912);if(temp__4126__auto__)
{var seq__11912__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11912__$1))
{var c__6904__auto__ = cljs.core.chunk_first.call(null,seq__11912__$1);{
var G__11925 = cljs.core.chunk_rest.call(null,seq__11912__$1);
var G__11926 = c__6904__auto__;
var G__11927 = cljs.core.count.call(null,c__6904__auto__);
var G__11928 = (0);
seq__11912 = G__11925;
chunk__11913 = G__11926;
count__11914 = G__11927;
i__11915 = G__11928;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11912__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11929 = cljs.core.next.call(null,seq__11912__$1);
var G__11930 = null;
var G__11931 = (0);
var G__11932 = (0);
seq__11912 = G__11929;
chunk__11913 = G__11930;
count__11914 = G__11931;
i__11915 = G__11932;
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
var G__11920 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11920__delegate.call(this,elem,class$,classes);};
G__11920.cljs$lang$maxFixedArity = 2;
G__11920.cljs$lang$applyTo = (function (arglist__11933){
var elem = cljs.core.first(arglist__11933);
arglist__11933 = cljs.core.next(arglist__11933);
var class$ = cljs.core.first(arglist__11933);
var classes = cljs.core.rest(arglist__11933);
return G__11920__delegate(elem,class$,classes);
});
G__11920.cljs$core$IFn$_invoke$arity$variadic = G__11920__delegate;
return G__11920;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___11934 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11934))
{var class_list_11935 = temp__4124__auto___11934;class_list_11935.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11938){var vec__11939 = p__11938;var k = cljs.core.nth.call(null,vec__11939,(0),null);var v = cljs.core.nth.call(null,vec__11939,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11946_11952 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11947_11953 = null;var count__11948_11954 = (0);var i__11949_11955 = (0);while(true){
if((i__11949_11955 < count__11948_11954))
{var vec__11950_11956 = cljs.core._nth.call(null,chunk__11947_11953,i__11949_11955);var k_11957 = cljs.core.nth.call(null,vec__11950_11956,(0),null);var v_11958 = cljs.core.nth.call(null,vec__11950_11956,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11957),v_11958);
{
var G__11959 = seq__11946_11952;
var G__11960 = chunk__11947_11953;
var G__11961 = count__11948_11954;
var G__11962 = (i__11949_11955 + (1));
seq__11946_11952 = G__11959;
chunk__11947_11953 = G__11960;
count__11948_11954 = G__11961;
i__11949_11955 = G__11962;
continue;
}
} else
{var temp__4126__auto___11963 = cljs.core.seq.call(null,seq__11946_11952);if(temp__4126__auto___11963)
{var seq__11946_11964__$1 = temp__4126__auto___11963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11946_11964__$1))
{var c__6904__auto___11965 = cljs.core.chunk_first.call(null,seq__11946_11964__$1);{
var G__11966 = cljs.core.chunk_rest.call(null,seq__11946_11964__$1);
var G__11967 = c__6904__auto___11965;
var G__11968 = cljs.core.count.call(null,c__6904__auto___11965);
var G__11969 = (0);
seq__11946_11952 = G__11966;
chunk__11947_11953 = G__11967;
count__11948_11954 = G__11968;
i__11949_11955 = G__11969;
continue;
}
} else
{var vec__11951_11970 = cljs.core.first.call(null,seq__11946_11964__$1);var k_11971 = cljs.core.nth.call(null,vec__11951_11970,(0),null);var v_11972 = cljs.core.nth.call(null,vec__11951_11970,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_11971),v_11972);
{
var G__11973 = cljs.core.next.call(null,seq__11946_11964__$1);
var G__11974 = null;
var G__11975 = (0);
var G__11976 = (0);
seq__11946_11952 = G__11973;
chunk__11947_11953 = G__11974;
count__11948_11954 = G__11975;
i__11949_11955 = G__11976;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11977){
var elem = cljs.core.first(arglist__11977);
var kvs = cljs.core.rest(arglist__11977);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11984_11990 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__11985_11991 = null;var count__11986_11992 = (0);var i__11987_11993 = (0);while(true){
if((i__11987_11993 < count__11986_11992))
{var vec__11988_11994 = cljs.core._nth.call(null,chunk__11985_11991,i__11987_11993);var k_11995 = cljs.core.nth.call(null,vec__11988_11994,(0),null);var v_11996 = cljs.core.nth.call(null,vec__11988_11994,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11995,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11996)+"px"));
{
var G__11997 = seq__11984_11990;
var G__11998 = chunk__11985_11991;
var G__11999 = count__11986_11992;
var G__12000 = (i__11987_11993 + (1));
seq__11984_11990 = G__11997;
chunk__11985_11991 = G__11998;
count__11986_11992 = G__11999;
i__11987_11993 = G__12000;
continue;
}
} else
{var temp__4126__auto___12001 = cljs.core.seq.call(null,seq__11984_11990);if(temp__4126__auto___12001)
{var seq__11984_12002__$1 = temp__4126__auto___12001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11984_12002__$1))
{var c__6904__auto___12003 = cljs.core.chunk_first.call(null,seq__11984_12002__$1);{
var G__12004 = cljs.core.chunk_rest.call(null,seq__11984_12002__$1);
var G__12005 = c__6904__auto___12003;
var G__12006 = cljs.core.count.call(null,c__6904__auto___12003);
var G__12007 = (0);
seq__11984_11990 = G__12004;
chunk__11985_11991 = G__12005;
count__11986_11992 = G__12006;
i__11987_11993 = G__12007;
continue;
}
} else
{var vec__11989_12008 = cljs.core.first.call(null,seq__11984_12002__$1);var k_12009 = cljs.core.nth.call(null,vec__11989_12008,(0),null);var v_12010 = cljs.core.nth.call(null,vec__11989_12008,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12009,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12010)+"px"));
{
var G__12011 = cljs.core.next.call(null,seq__11984_12002__$1);
var G__12012 = null;
var G__12013 = (0);
var G__12014 = (0);
seq__11984_11990 = G__12011;
chunk__11985_11991 = G__12012;
count__11986_11992 = G__12013;
i__11987_11993 = G__12014;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12015){
var elem = cljs.core.first(arglist__12015);
var kvs = cljs.core.rest(arglist__12015);
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
{var G__12024 = dommy.template.__GT_node_like.call(null,elem);(G__12024[dommy.utils.as_str.call(null,k)] = v);
return G__12024;
} else
{var G__12025 = dommy.template.__GT_node_like.call(null,elem);G__12025.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__12025;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12032__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12026_12033 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__12027_12034 = null;var count__12028_12035 = (0);var i__12029_12036 = (0);while(true){
if((i__12029_12036 < count__12028_12035))
{var vec__12030_12037 = cljs.core._nth.call(null,chunk__12027_12034,i__12029_12036);var k_12038__$1 = cljs.core.nth.call(null,vec__12030_12037,(0),null);var v_12039__$1 = cljs.core.nth.call(null,vec__12030_12037,(1),null);set_attr_BANG_.call(null,elem__$1,k_12038__$1,v_12039__$1);
{
var G__12040 = seq__12026_12033;
var G__12041 = chunk__12027_12034;
var G__12042 = count__12028_12035;
var G__12043 = (i__12029_12036 + (1));
seq__12026_12033 = G__12040;
chunk__12027_12034 = G__12041;
count__12028_12035 = G__12042;
i__12029_12036 = G__12043;
continue;
}
} else
{var temp__4126__auto___12044 = cljs.core.seq.call(null,seq__12026_12033);if(temp__4126__auto___12044)
{var seq__12026_12045__$1 = temp__4126__auto___12044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12026_12045__$1))
{var c__6904__auto___12046 = cljs.core.chunk_first.call(null,seq__12026_12045__$1);{
var G__12047 = cljs.core.chunk_rest.call(null,seq__12026_12045__$1);
var G__12048 = c__6904__auto___12046;
var G__12049 = cljs.core.count.call(null,c__6904__auto___12046);
var G__12050 = (0);
seq__12026_12033 = G__12047;
chunk__12027_12034 = G__12048;
count__12028_12035 = G__12049;
i__12029_12036 = G__12050;
continue;
}
} else
{var vec__12031_12051 = cljs.core.first.call(null,seq__12026_12045__$1);var k_12052__$1 = cljs.core.nth.call(null,vec__12031_12051,(0),null);var v_12053__$1 = cljs.core.nth.call(null,vec__12031_12051,(1),null);set_attr_BANG_.call(null,elem__$1,k_12052__$1,v_12053__$1);
{
var G__12054 = cljs.core.next.call(null,seq__12026_12045__$1);
var G__12055 = null;
var G__12056 = (0);
var G__12057 = (0);
seq__12026_12033 = G__12054;
chunk__12027_12034 = G__12055;
count__12028_12035 = G__12056;
i__12029_12036 = G__12057;
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
var G__12032 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12032__delegate.call(this,elem,k,v,kvs);};
G__12032.cljs$lang$maxFixedArity = 3;
G__12032.cljs$lang$applyTo = (function (arglist__12058){
var elem = cljs.core.first(arglist__12058);
arglist__12058 = cljs.core.next(arglist__12058);
var k = cljs.core.first(arglist__12058);
arglist__12058 = cljs.core.next(arglist__12058);
var v = cljs.core.first(arglist__12058);
var kvs = cljs.core.rest(arglist__12058);
return G__12032__delegate(elem,k,v,kvs);
});
G__12032.cljs$core$IFn$_invoke$arity$variadic = G__12032__delegate;
return G__12032;
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
var G__12067__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12063_12068 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12064_12069 = null;var count__12065_12070 = (0);var i__12066_12071 = (0);while(true){
if((i__12066_12071 < count__12065_12070))
{var k_12072__$1 = cljs.core._nth.call(null,chunk__12064_12069,i__12066_12071);remove_attr_BANG_.call(null,elem__$1,k_12072__$1);
{
var G__12073 = seq__12063_12068;
var G__12074 = chunk__12064_12069;
var G__12075 = count__12065_12070;
var G__12076 = (i__12066_12071 + (1));
seq__12063_12068 = G__12073;
chunk__12064_12069 = G__12074;
count__12065_12070 = G__12075;
i__12066_12071 = G__12076;
continue;
}
} else
{var temp__4126__auto___12077 = cljs.core.seq.call(null,seq__12063_12068);if(temp__4126__auto___12077)
{var seq__12063_12078__$1 = temp__4126__auto___12077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12063_12078__$1))
{var c__6904__auto___12079 = cljs.core.chunk_first.call(null,seq__12063_12078__$1);{
var G__12080 = cljs.core.chunk_rest.call(null,seq__12063_12078__$1);
var G__12081 = c__6904__auto___12079;
var G__12082 = cljs.core.count.call(null,c__6904__auto___12079);
var G__12083 = (0);
seq__12063_12068 = G__12080;
chunk__12064_12069 = G__12081;
count__12065_12070 = G__12082;
i__12066_12071 = G__12083;
continue;
}
} else
{var k_12084__$1 = cljs.core.first.call(null,seq__12063_12078__$1);remove_attr_BANG_.call(null,elem__$1,k_12084__$1);
{
var G__12085 = cljs.core.next.call(null,seq__12063_12078__$1);
var G__12086 = null;
var G__12087 = (0);
var G__12088 = (0);
seq__12063_12068 = G__12085;
chunk__12064_12069 = G__12086;
count__12065_12070 = G__12087;
i__12066_12071 = G__12088;
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
var G__12067 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12067__delegate.call(this,elem,k,ks);};
G__12067.cljs$lang$maxFixedArity = 2;
G__12067.cljs$lang$applyTo = (function (arglist__12089){
var elem = cljs.core.first(arglist__12089);
arglist__12089 = cljs.core.next(arglist__12089);
var k = cljs.core.first(arglist__12089);
var ks = cljs.core.rest(arglist__12089);
return G__12067__delegate(elem,k,ks);
});
G__12067.cljs$core$IFn$_invoke$arity$variadic = G__12067__delegate;
return G__12067;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12091 = dommy.template.__GT_node_like.call(null,elem);G__12091.style.display = ((show_QMARK_)?"":"none");
return G__12091;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12093 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12093,false);
return G__12093;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12095 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12095,true);
return G__12095;
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
