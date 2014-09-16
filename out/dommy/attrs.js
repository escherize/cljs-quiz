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
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3546__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3546__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3546__auto__;
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
var G__5882 = (i + class$.length);
start_from = G__5882;
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
{var temp__4124__auto___5907 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___5907))
{var class_list_5908 = temp__4124__auto___5907;var seq__5895_5909 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5896_5910 = null;var count__5897_5911 = (0);var i__5898_5912 = (0);while(true){
if((i__5898_5912 < count__5897_5911))
{var class_5913 = cljs.core._nth.call(null,chunk__5896_5910,i__5898_5912);class_list_5908.add(class_5913);
{
var G__5914 = seq__5895_5909;
var G__5915 = chunk__5896_5910;
var G__5916 = count__5897_5911;
var G__5917 = (i__5898_5912 + (1));
seq__5895_5909 = G__5914;
chunk__5896_5910 = G__5915;
count__5897_5911 = G__5916;
i__5898_5912 = G__5917;
continue;
}
} else
{var temp__4126__auto___5918 = cljs.core.seq.call(null,seq__5895_5909);if(temp__4126__auto___5918)
{var seq__5895_5919__$1 = temp__4126__auto___5918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5895_5919__$1))
{var c__4314__auto___5920 = cljs.core.chunk_first.call(null,seq__5895_5919__$1);{
var G__5921 = cljs.core.chunk_rest.call(null,seq__5895_5919__$1);
var G__5922 = c__4314__auto___5920;
var G__5923 = cljs.core.count.call(null,c__4314__auto___5920);
var G__5924 = (0);
seq__5895_5909 = G__5921;
chunk__5896_5910 = G__5922;
count__5897_5911 = G__5923;
i__5898_5912 = G__5924;
continue;
}
} else
{var class_5925 = cljs.core.first.call(null,seq__5895_5919__$1);class_list_5908.add(class_5925);
{
var G__5926 = cljs.core.next.call(null,seq__5895_5919__$1);
var G__5927 = null;
var G__5928 = (0);
var G__5929 = (0);
seq__5895_5909 = G__5926;
chunk__5896_5910 = G__5927;
count__5897_5911 = G__5928;
i__5898_5912 = G__5929;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__5899_5930 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5900_5931 = null;var count__5901_5932 = (0);var i__5902_5933 = (0);while(true){
if((i__5902_5933 < count__5901_5932))
{var class_5934 = cljs.core._nth.call(null,chunk__5900_5931,i__5902_5933);var class_name_5935 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5935,class_5934)))
{} else
{elem__$1.className = (((class_name_5935 === ""))?class_5934:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_5935)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_5934)));
}
{
var G__5936 = seq__5899_5930;
var G__5937 = chunk__5900_5931;
var G__5938 = count__5901_5932;
var G__5939 = (i__5902_5933 + (1));
seq__5899_5930 = G__5936;
chunk__5900_5931 = G__5937;
count__5901_5932 = G__5938;
i__5902_5933 = G__5939;
continue;
}
} else
{var temp__4126__auto___5940 = cljs.core.seq.call(null,seq__5899_5930);if(temp__4126__auto___5940)
{var seq__5899_5941__$1 = temp__4126__auto___5940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5899_5941__$1))
{var c__4314__auto___5942 = cljs.core.chunk_first.call(null,seq__5899_5941__$1);{
var G__5943 = cljs.core.chunk_rest.call(null,seq__5899_5941__$1);
var G__5944 = c__4314__auto___5942;
var G__5945 = cljs.core.count.call(null,c__4314__auto___5942);
var G__5946 = (0);
seq__5899_5930 = G__5943;
chunk__5900_5931 = G__5944;
count__5901_5932 = G__5945;
i__5902_5933 = G__5946;
continue;
}
} else
{var class_5947 = cljs.core.first.call(null,seq__5899_5941__$1);var class_name_5948 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5948,class_5947)))
{} else
{elem__$1.className = (((class_name_5948 === ""))?class_5947:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_5948)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_5947)));
}
{
var G__5949 = cljs.core.next.call(null,seq__5899_5941__$1);
var G__5950 = null;
var G__5951 = (0);
var G__5952 = (0);
seq__5899_5930 = G__5949;
chunk__5900_5931 = G__5950;
count__5901_5932 = G__5951;
i__5902_5933 = G__5952;
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
var G__5953__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5903_5954 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__5904_5955 = null;var count__5905_5956 = (0);var i__5906_5957 = (0);while(true){
if((i__5906_5957 < count__5905_5956))
{var c_5958 = cljs.core._nth.call(null,chunk__5904_5955,i__5906_5957);add_class_BANG_.call(null,elem__$1,c_5958);
{
var G__5959 = seq__5903_5954;
var G__5960 = chunk__5904_5955;
var G__5961 = count__5905_5956;
var G__5962 = (i__5906_5957 + (1));
seq__5903_5954 = G__5959;
chunk__5904_5955 = G__5960;
count__5905_5956 = G__5961;
i__5906_5957 = G__5962;
continue;
}
} else
{var temp__4126__auto___5963 = cljs.core.seq.call(null,seq__5903_5954);if(temp__4126__auto___5963)
{var seq__5903_5964__$1 = temp__4126__auto___5963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5903_5964__$1))
{var c__4314__auto___5965 = cljs.core.chunk_first.call(null,seq__5903_5964__$1);{
var G__5966 = cljs.core.chunk_rest.call(null,seq__5903_5964__$1);
var G__5967 = c__4314__auto___5965;
var G__5968 = cljs.core.count.call(null,c__4314__auto___5965);
var G__5969 = (0);
seq__5903_5954 = G__5966;
chunk__5904_5955 = G__5967;
count__5905_5956 = G__5968;
i__5906_5957 = G__5969;
continue;
}
} else
{var c_5970 = cljs.core.first.call(null,seq__5903_5964__$1);add_class_BANG_.call(null,elem__$1,c_5970);
{
var G__5971 = cljs.core.next.call(null,seq__5903_5964__$1);
var G__5972 = null;
var G__5973 = (0);
var G__5974 = (0);
seq__5903_5954 = G__5971;
chunk__5904_5955 = G__5972;
count__5905_5956 = G__5973;
i__5906_5957 = G__5974;
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
var G__5953 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5953__delegate.call(this,elem,classes,more_classes);};
G__5953.cljs$lang$maxFixedArity = 2;
G__5953.cljs$lang$applyTo = (function (arglist__5975){
var elem = cljs.core.first(arglist__5975);
arglist__5975 = cljs.core.next(arglist__5975);
var classes = cljs.core.first(arglist__5975);
var more_classes = cljs.core.rest(arglist__5975);
return G__5953__delegate(elem,classes,more_classes);
});
G__5953.cljs$core$IFn$_invoke$arity$variadic = G__5953__delegate;
return G__5953;
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
var G__5976 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__5976;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___5985 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___5985))
{var class_list_5986 = temp__4124__auto___5985;class_list_5986.remove(class$__$1);
} else
{var class_name_5987 = elem__$1.className;var new_class_name_5988 = dommy.attrs.remove_class_str.call(null,class_name_5987,class$__$1);if((class_name_5987 === new_class_name_5988))
{} else
{elem__$1.className = new_class_name_5988;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__5989__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5981 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__5982 = null;var count__5983 = (0);var i__5984 = (0);while(true){
if((i__5984 < count__5983))
{var c = cljs.core._nth.call(null,chunk__5982,i__5984);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5990 = seq__5981;
var G__5991 = chunk__5982;
var G__5992 = count__5983;
var G__5993 = (i__5984 + (1));
seq__5981 = G__5990;
chunk__5982 = G__5991;
count__5983 = G__5992;
i__5984 = G__5993;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5981);if(temp__4126__auto__)
{var seq__5981__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5981__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__5981__$1);{
var G__5994 = cljs.core.chunk_rest.call(null,seq__5981__$1);
var G__5995 = c__4314__auto__;
var G__5996 = cljs.core.count.call(null,c__4314__auto__);
var G__5997 = (0);
seq__5981 = G__5994;
chunk__5982 = G__5995;
count__5983 = G__5996;
i__5984 = G__5997;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5981__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5998 = cljs.core.next.call(null,seq__5981__$1);
var G__5999 = null;
var G__6000 = (0);
var G__6001 = (0);
seq__5981 = G__5998;
chunk__5982 = G__5999;
count__5983 = G__6000;
i__5984 = G__6001;
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
var G__5989 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5989__delegate.call(this,elem,class$,classes);};
G__5989.cljs$lang$maxFixedArity = 2;
G__5989.cljs$lang$applyTo = (function (arglist__6002){
var elem = cljs.core.first(arglist__6002);
arglist__6002 = cljs.core.next(arglist__6002);
var class$ = cljs.core.first(arglist__6002);
var classes = cljs.core.rest(arglist__6002);
return G__5989__delegate(elem,class$,classes);
});
G__5989.cljs$core$IFn$_invoke$arity$variadic = G__5989__delegate;
return G__5989;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___6003 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___6003))
{var class_list_6004 = temp__4124__auto___6003;class_list_6004.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__6007){var vec__6008 = p__6007;var k = cljs.core.nth.call(null,vec__6008,(0),null);var v = cljs.core.nth.call(null,vec__6008,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__6015_6021 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6016_6022 = null;var count__6017_6023 = (0);var i__6018_6024 = (0);while(true){
if((i__6018_6024 < count__6017_6023))
{var vec__6019_6025 = cljs.core._nth.call(null,chunk__6016_6022,i__6018_6024);var k_6026 = cljs.core.nth.call(null,vec__6019_6025,(0),null);var v_6027 = cljs.core.nth.call(null,vec__6019_6025,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6026),v_6027);
{
var G__6028 = seq__6015_6021;
var G__6029 = chunk__6016_6022;
var G__6030 = count__6017_6023;
var G__6031 = (i__6018_6024 + (1));
seq__6015_6021 = G__6028;
chunk__6016_6022 = G__6029;
count__6017_6023 = G__6030;
i__6018_6024 = G__6031;
continue;
}
} else
{var temp__4126__auto___6032 = cljs.core.seq.call(null,seq__6015_6021);if(temp__4126__auto___6032)
{var seq__6015_6033__$1 = temp__4126__auto___6032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6015_6033__$1))
{var c__4314__auto___6034 = cljs.core.chunk_first.call(null,seq__6015_6033__$1);{
var G__6035 = cljs.core.chunk_rest.call(null,seq__6015_6033__$1);
var G__6036 = c__4314__auto___6034;
var G__6037 = cljs.core.count.call(null,c__4314__auto___6034);
var G__6038 = (0);
seq__6015_6021 = G__6035;
chunk__6016_6022 = G__6036;
count__6017_6023 = G__6037;
i__6018_6024 = G__6038;
continue;
}
} else
{var vec__6020_6039 = cljs.core.first.call(null,seq__6015_6033__$1);var k_6040 = cljs.core.nth.call(null,vec__6020_6039,(0),null);var v_6041 = cljs.core.nth.call(null,vec__6020_6039,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6040),v_6041);
{
var G__6042 = cljs.core.next.call(null,seq__6015_6033__$1);
var G__6043 = null;
var G__6044 = (0);
var G__6045 = (0);
seq__6015_6021 = G__6042;
chunk__6016_6022 = G__6043;
count__6017_6023 = G__6044;
i__6018_6024 = G__6045;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6046){
var elem = cljs.core.first(arglist__6046);
var kvs = cljs.core.rest(arglist__6046);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6053_6059 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6054_6060 = null;var count__6055_6061 = (0);var i__6056_6062 = (0);while(true){
if((i__6056_6062 < count__6055_6061))
{var vec__6057_6063 = cljs.core._nth.call(null,chunk__6054_6060,i__6056_6062);var k_6064 = cljs.core.nth.call(null,vec__6057_6063,(0),null);var v_6065 = cljs.core.nth.call(null,vec__6057_6063,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6064,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6065)+"px"));
{
var G__6066 = seq__6053_6059;
var G__6067 = chunk__6054_6060;
var G__6068 = count__6055_6061;
var G__6069 = (i__6056_6062 + (1));
seq__6053_6059 = G__6066;
chunk__6054_6060 = G__6067;
count__6055_6061 = G__6068;
i__6056_6062 = G__6069;
continue;
}
} else
{var temp__4126__auto___6070 = cljs.core.seq.call(null,seq__6053_6059);if(temp__4126__auto___6070)
{var seq__6053_6071__$1 = temp__4126__auto___6070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6053_6071__$1))
{var c__4314__auto___6072 = cljs.core.chunk_first.call(null,seq__6053_6071__$1);{
var G__6073 = cljs.core.chunk_rest.call(null,seq__6053_6071__$1);
var G__6074 = c__4314__auto___6072;
var G__6075 = cljs.core.count.call(null,c__4314__auto___6072);
var G__6076 = (0);
seq__6053_6059 = G__6073;
chunk__6054_6060 = G__6074;
count__6055_6061 = G__6075;
i__6056_6062 = G__6076;
continue;
}
} else
{var vec__6058_6077 = cljs.core.first.call(null,seq__6053_6071__$1);var k_6078 = cljs.core.nth.call(null,vec__6058_6077,(0),null);var v_6079 = cljs.core.nth.call(null,vec__6058_6077,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6078,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6079)+"px"));
{
var G__6080 = cljs.core.next.call(null,seq__6053_6071__$1);
var G__6081 = null;
var G__6082 = (0);
var G__6083 = (0);
seq__6053_6059 = G__6080;
chunk__6054_6060 = G__6081;
count__6055_6061 = G__6082;
i__6056_6062 = G__6083;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6084){
var elem = cljs.core.first(arglist__6084);
var kvs = cljs.core.rest(arglist__6084);
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
{var G__6093 = dommy.template.__GT_node_like.call(null,elem);(G__6093[dommy.utils.as_str.call(null,k)] = v);
return G__6093;
} else
{var G__6094 = dommy.template.__GT_node_like.call(null,elem);G__6094.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__6094;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6101__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6095_6102 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6096_6103 = null;var count__6097_6104 = (0);var i__6098_6105 = (0);while(true){
if((i__6098_6105 < count__6097_6104))
{var vec__6099_6106 = cljs.core._nth.call(null,chunk__6096_6103,i__6098_6105);var k_6107__$1 = cljs.core.nth.call(null,vec__6099_6106,(0),null);var v_6108__$1 = cljs.core.nth.call(null,vec__6099_6106,(1),null);set_attr_BANG_.call(null,elem__$1,k_6107__$1,v_6108__$1);
{
var G__6109 = seq__6095_6102;
var G__6110 = chunk__6096_6103;
var G__6111 = count__6097_6104;
var G__6112 = (i__6098_6105 + (1));
seq__6095_6102 = G__6109;
chunk__6096_6103 = G__6110;
count__6097_6104 = G__6111;
i__6098_6105 = G__6112;
continue;
}
} else
{var temp__4126__auto___6113 = cljs.core.seq.call(null,seq__6095_6102);if(temp__4126__auto___6113)
{var seq__6095_6114__$1 = temp__4126__auto___6113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6095_6114__$1))
{var c__4314__auto___6115 = cljs.core.chunk_first.call(null,seq__6095_6114__$1);{
var G__6116 = cljs.core.chunk_rest.call(null,seq__6095_6114__$1);
var G__6117 = c__4314__auto___6115;
var G__6118 = cljs.core.count.call(null,c__4314__auto___6115);
var G__6119 = (0);
seq__6095_6102 = G__6116;
chunk__6096_6103 = G__6117;
count__6097_6104 = G__6118;
i__6098_6105 = G__6119;
continue;
}
} else
{var vec__6100_6120 = cljs.core.first.call(null,seq__6095_6114__$1);var k_6121__$1 = cljs.core.nth.call(null,vec__6100_6120,(0),null);var v_6122__$1 = cljs.core.nth.call(null,vec__6100_6120,(1),null);set_attr_BANG_.call(null,elem__$1,k_6121__$1,v_6122__$1);
{
var G__6123 = cljs.core.next.call(null,seq__6095_6114__$1);
var G__6124 = null;
var G__6125 = (0);
var G__6126 = (0);
seq__6095_6102 = G__6123;
chunk__6096_6103 = G__6124;
count__6097_6104 = G__6125;
i__6098_6105 = G__6126;
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
var G__6101 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6101__delegate.call(this,elem,k,v,kvs);};
G__6101.cljs$lang$maxFixedArity = 3;
G__6101.cljs$lang$applyTo = (function (arglist__6127){
var elem = cljs.core.first(arglist__6127);
arglist__6127 = cljs.core.next(arglist__6127);
var k = cljs.core.first(arglist__6127);
arglist__6127 = cljs.core.next(arglist__6127);
var v = cljs.core.first(arglist__6127);
var kvs = cljs.core.rest(arglist__6127);
return G__6101__delegate(elem,k,v,kvs);
});
G__6101.cljs$core$IFn$_invoke$arity$variadic = G__6101__delegate;
return G__6101;
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
var G__6136__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6132_6137 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6133_6138 = null;var count__6134_6139 = (0);var i__6135_6140 = (0);while(true){
if((i__6135_6140 < count__6134_6139))
{var k_6141__$1 = cljs.core._nth.call(null,chunk__6133_6138,i__6135_6140);remove_attr_BANG_.call(null,elem__$1,k_6141__$1);
{
var G__6142 = seq__6132_6137;
var G__6143 = chunk__6133_6138;
var G__6144 = count__6134_6139;
var G__6145 = (i__6135_6140 + (1));
seq__6132_6137 = G__6142;
chunk__6133_6138 = G__6143;
count__6134_6139 = G__6144;
i__6135_6140 = G__6145;
continue;
}
} else
{var temp__4126__auto___6146 = cljs.core.seq.call(null,seq__6132_6137);if(temp__4126__auto___6146)
{var seq__6132_6147__$1 = temp__4126__auto___6146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6132_6147__$1))
{var c__4314__auto___6148 = cljs.core.chunk_first.call(null,seq__6132_6147__$1);{
var G__6149 = cljs.core.chunk_rest.call(null,seq__6132_6147__$1);
var G__6150 = c__4314__auto___6148;
var G__6151 = cljs.core.count.call(null,c__4314__auto___6148);
var G__6152 = (0);
seq__6132_6137 = G__6149;
chunk__6133_6138 = G__6150;
count__6134_6139 = G__6151;
i__6135_6140 = G__6152;
continue;
}
} else
{var k_6153__$1 = cljs.core.first.call(null,seq__6132_6147__$1);remove_attr_BANG_.call(null,elem__$1,k_6153__$1);
{
var G__6154 = cljs.core.next.call(null,seq__6132_6147__$1);
var G__6155 = null;
var G__6156 = (0);
var G__6157 = (0);
seq__6132_6137 = G__6154;
chunk__6133_6138 = G__6155;
count__6134_6139 = G__6156;
i__6135_6140 = G__6157;
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
var G__6136 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6136__delegate.call(this,elem,k,ks);};
G__6136.cljs$lang$maxFixedArity = 2;
G__6136.cljs$lang$applyTo = (function (arglist__6158){
var elem = cljs.core.first(arglist__6158);
arglist__6158 = cljs.core.next(arglist__6158);
var k = cljs.core.first(arglist__6158);
var ks = cljs.core.rest(arglist__6158);
return G__6136__delegate(elem,k,ks);
});
G__6136.cljs$core$IFn$_invoke$arity$variadic = G__6136__delegate;
return G__6136;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6160 = dommy.template.__GT_node_like.call(null,elem);G__6160.style.display = ((show_QMARK_)?"":"none");
return G__6160;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6162 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6162,false);
return G__6162;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6164 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6164,true);
return G__6164;
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

//# sourceMappingURL=attrs.js.map