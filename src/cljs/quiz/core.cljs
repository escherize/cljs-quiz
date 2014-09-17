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
   (= score 0) "Either you know all the right answers, and avoided them on purpose, or you've managed to miss them all - which is an astronomically low probability. You should put that to use playing lottery!"
   (<= 1 score 5) "Hm... looks like you've picked up some quotes from people who read the book... why not join their ranks? It's really worth reading!"
   (<= 6 score 10) "Hm... looks like you've read the first book... may I suggest you keep on reading? You won't be disappointed, I swear!"
   (<= 11 score 17) "Hey, looks like we've got us a real hitchhiker! Pleasure to meet you. I bet you even know what a Hooloovoo is!"
   (= 18 score) "I knew it! Douglas Adams isn't dead - he's alive, and is attending the Strange Loop! We salute you, sir! It's an honor to welcome you in our booth."
   :else "Wait a minute... how did you get here? You're not supposed to be here! Who do you think you are, Ford Prefect or something?"))

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
