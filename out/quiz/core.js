// Compiled by ClojureScript 0.0-2322
goog.provide('quiz.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cljs.quiz.questions');
goog.require('cljs.quiz.questions');
goog.require('clojure.browser.repl');
quiz.core.choice_fn = (function choice_fn(name,choice){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),"quiz.core.able_button()"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),choice,new cljs.core.Keyword(null,"checked","checked",-50955819),"checked",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"radio"], null)], null),choice], null);
});
quiz.core.able_button = (function able_button(){if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,cljs.quiz.questions.questions) - (1)),cljs.core.count.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked"], null)))))))
{return alert("able-now");
} else
{return dommy.core.hide_BANG_.call(null,"a");
}
});
quiz.core.__GT_question_snippet = (function __GT_question_snippet(q){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(q)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,cljs.core.partial.call(null,quiz.core.choice_fn,new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(q))], null)], null);
});
quiz.core.set_content = (function set_content(s){dommy.core.append_BANG_.call(null,document.getElementById("app"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));
return dommy.core.append_BANG_.call(null,document.getElementById("app"),s);
});
quiz.core.set_content.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hitchhiker's Guide Quiz To The Galaxy!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.map.call(null,quiz.core.__GT_question_snippet,cljs.quiz.questions.questions)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-hg.btn-primary.btn-embossed.btn-danger","button.btn.btn-hg.btn-primary.btn-embossed.btn-danger",1139860062),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"the_button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onclick","onclick",1297553739),"quiz.core.tally_score()"], null),"Don't Panic."], null)], null)], null));
quiz.core.count_correct = (function count_correct(answers){var correct = cljs.core.map.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.quiz.questions.questions);return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (correct){
return (function (p1__5908_SHARP_,p2__5909_SHARP_){if((p1__5908_SHARP_ === p2__5909_SHARP_))
{return (1);
} else
{return (0);
}
});})(correct))
,correct,answers));
});
quiz.core.tally_score = (function tally_score(){var checked_buttons = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked"], null))));var given_answers = cljs.core.map.call(null,((function (checked_buttons){
return (function (p1__5910_SHARP_){return p1__5910_SHARP_.value;
});})(checked_buttons))
,checked_buttons);var number_correct = quiz.core.count_correct.call(null,given_answers);dommy.core.hide_BANG_.call(null,document.getElementById("the_button"));
return alert(number_correct);
});

//# sourceMappingURL=core.js.map