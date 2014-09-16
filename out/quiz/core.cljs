(ns quiz.core
  (:use-macros [dommy.macros :only [node sel sel1]])
  (:require clojure.browser.repl
            [cljs.quiz.questions :as q]
            [dommy.core :as dommy]))

(defn choice-fn [name choice]
  [:label.radio
   {:onclick "quiz.core.able_button()"}
   [:input {:type    "radio"
            :name     name
            :value    choice
            :checked "checked"
            :data-toggle "radio"}]
   choice])

(defn able-button []
  (if (= (dec (count q/questions))
         (->> ["input:checked"] sel count))
    (js/alert "able-now")
    (dommy/hide! "a")))

(defn ->question-snippet [q]
  [:li
   [:span (:question q)]
   [:div
    (map (partial choice-fn (:question q)) (:choices q))]])

(defn set-content [s]
  (dommy/append! (sel1 :#app) [:div])
  (dommy/append! (sel1 :#app) s))

(set-content
 [:div
  [:h1 "Hitchhiker's Guide Quiz To The Galaxy!"]
  [:form
   [:ol (map ->question-snippet q/questions)]
   [:button.btn.btn-hg.btn-primary.btn-embossed.btn-danger
    {:id "the_button"
     :type "button"
     :onclick "quiz.core.tally_score()"}
    "Don't Panic."]]])

(defn count-correct [answers]
  (let [correct (map :answer q/questions)]
    (apply + (map #(if (== %1 %2) 1 0) correct answers))))

(defn tally-score []
  (let [checked-buttons (->> ["input:checked"] sel)
        given-answers (map #(.-value %) checked-buttons)
        number-correct (count-correct given-answers)]
    (dommy/hide! (sel1 :#the_button))
    (js/alert number-correct)))

(comment
  (defn sayhi [] (js/alert "Hello"))
  (defn whoami [] (.-userAgent js/navigator)))
