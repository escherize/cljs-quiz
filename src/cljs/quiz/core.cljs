(ns quiz.core
    (:require clojure.browser.repl))

(defn sayhi [] (js/alert "Hello"))

(defn whoami [] (.-userAgent js/navigator))
