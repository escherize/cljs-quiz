(ns quiz.core
  (:use-macros [dommy.macros :only [node sel sel1]])
  (:require clojure.browser.repl
            clojure.set
            [cljs.quiz.questions :as q]
            [dommy.core :as dommy]
            ))

(defn set-content [s]
  (dommy/replace! (sel1 :#app) [:div#app s]))

(defn choice-fn [name choice]
  [:div [:label.radio
         [:input {:type    "radio"
                  :name     name
                  :value    choice
                  :data-toggle "radio"}] choice]])

(defn ->question-snippet [q]
  [:li
   [:span (:question q)]
   [:div
    (map (partial choice-fn (:question q)) (:choices q))]])

(defn count-correct [answers]
  (let [ans  (set answers)
        cor  (set (map :answer q/questions))
        both (clojure.set/intersection ans cor)]
    (count both)))

(defn end-message [score]
  (cond
   (= score 0) "0/18: Wow, go signup for a job at amazon.com"
   (<= 1 score 5) "1"
   (<= 6 score 10) "2"
   (<= 11 score 18) "3"
   :else "you da man!"))

(defn tally-score []
  (let [checked-buttons (->> ["input:checked"] sel)
        given-answers (map #(.-value %) checked-buttons)
        number-correct (count-correct given-answers)]
    (set-content
     [:div
      [:h2 (str "You've answered " number-correct "/18 questions correctly!")]
      [:h3 (end-message number-correct)]
      
      [:button.btn.btn-hg.btn-primary.btn-embossed.btn-danger
       {:type "button"
        :onclick "history.go(0)"}
       "Let's Try Again"]])))

(defn make-questions []
  (set-content
   [:div
    [:h1 "Hitchhiker's Guide Quiz To The Galaxy!"]
    [:form
     [:ol (map ->question-snippet q/questions)]]
    [:button.btn.btn-hg.btn-primary.btn-embossed.btn-danger
     {:type "button"
      :onclick "quiz.core.tally_score()"}
     "Submit"]]))

(make-questions)

(comment



  (defn sayhi [] (js/alert "Hello"))
  (defn whoami [] (.-userAgent js/navigator)))
