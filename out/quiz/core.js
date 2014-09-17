// Compiled by ClojureScript 0.0-2322
goog.provide('quiz.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cljs.quiz.questions');
goog.require('cljs.quiz.questions');
goog.require('clojure.set');
goog.require('clojure.browser.repl');
quiz.core.set_content = (function set_content(s){return dommy.core.replace_BANG_.call(null,document.getElementById("app"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),s], null));
});
quiz.core.choice_fn = (function choice_fn(name,choice){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),"quiz.core.able_button()"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),choice,new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"radio"], null)], null),choice], null)], null);
});
quiz.core.able_button = (function able_button(){if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,cljs.quiz.questions.questions) - (1)),cljs.core.count.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked"], null)))))))
{return alert("able-now");
} else
{return null;
}
});
quiz.core.__GT_question_snippet = (function __GT_question_snippet(q){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(q)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,cljs.core.partial.call(null,quiz.core.choice_fn,new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(q))], null)], null);
});
quiz.core.count_correct = (function count_correct(answers){var ans = cljs.core.set.call(null,answers);var cor = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.quiz.questions.questions));var both = clojure.set.intersection.call(null,ans,cor);var _ = alert(ans);var ___$1 = alert(cor);var ___$2 = alert(both);return cljs.core.count.call(null,both);
});
quiz.core.end_message = (function end_message(score){if(cljs.core._EQ_.call(null,score,(0)))
{return "0/18: Wow, go signup for a job at amazon.com";
} else
{if((((1) <= score)) && ((score <= (5))))
{return "1";
} else
{if((((6) <= score)) && ((score <= (10))))
{return "2";
} else
{if((((11) <= score)) && ((score <= (18))))
{return "3";
} else
{return "you da man!";

}
}
}
}
});
quiz.core.tally_score = (function tally_score(){var checked_buttons = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked"], null))));var given_answers = cljs.core.map.call(null,((function (checked_buttons){
return (function (p1__5564_SHARP_){return p1__5564_SHARP_.value;
});})(checked_buttons))
,checked_buttons);var number_correct = quiz.core.count_correct.call(null,given_answers);return quiz.core.set_content.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),quiz.core.end_message.call(null,number_correct)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-hg.btn-primary.btn-embossed.btn-danger","button.btn.btn-hg.btn-primary.btn-embossed.btn-danger",1139860062),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onclick","onclick",1297553739),"history.go(0)"], null),"Let's Try Again"], null)], null));
});
quiz.core.make_questions = (function make_questions(){return quiz.core.set_content.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hitchhiker's Guide Quiz To The Galaxy!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.map.call(null,quiz.core.__GT_question_snippet,cljs.quiz.questions.questions)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-hg.btn-primary.btn-embossed.btn-danger","button.btn.btn-hg.btn-primary.btn-embossed.btn-danger",1139860062),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onclick","onclick",1297553739),"quiz.core.tally_score()"], null),"Submit"], null)], null));
});
quiz.core.make_questions.call(null);

//# sourceMappingURL=core.js.map