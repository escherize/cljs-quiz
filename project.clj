(defproject quiz "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [prismatic/dommy "0.1.3"]]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src/clj" "src/cljs"]

  :profiles {:dev {:repl-options {:init-ns auto-start}
                   :dependencies [[hiccup "1.0.5"]
                                  [prismatic/dommy "0.1.3"]
                                  [ring "1.3.1"]]
                   :plugins [[com.cemerick/austin "0.1.4"]]}}

  :cljsbuild {:builds [{:id "quiz"
                        :source-paths ["src/cljs"]
                        :compiler {:source-map true, :output-to "quiz.js", :output-dir "out", :optimizations :none}}]})
