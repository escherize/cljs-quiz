(ns auto-start
  (:require ring.adapter.jetty
            [ring.middleware.file :as f]
            [hiccup.core :as h]
            [cemerick.austin.repls :as austin]))

((defn new-repl-env []
   (def repl-env (future (cemerick.austin/repl-env)))))

(defn austin-repl []
  (austin/cljs-repl @repl-env))

(def app
  (-> (fn [r]
        (reset! austin/browser-repl-env @repl-env)
        (if (= (:uri r) "/")
          {:body
           (h/html
            [:body [:div {:id "app"}
                    [:script {:type "text/javascript" }
                     ]                    [:script {:type "text/javascript" :src "out/goog/base.js"}
                     ]                    [:script {:type "text/javascript" :src "quiz.js"}
                     ]                    [:script {:type "text/javascript" }
                      "goog.require('quiz.core');" ]]
             [:script (austin/browser-connected-repl-js)]])}))
      (f/wrap-file ".")))

(def server
  (ring.adapter.jetty/run-jetty #'app {:port 8080 :join? false}))

(defn rebuild []
  (new-repl-env)
  (doto server .stop .start))
