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
            [:head
             [:meta {:charset "utf-8"}]
             [:title "Hitchhiker's Guide Quiz"]
             [:meta {:content "width=device-width, initial-scale=1.0", :name "viewport"}]
             "<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
              <!--[if lt IE 9]>"
             [:script {:src "resources/public/js/html5shiv.js"}]
             [:script {:src "resources/public/js/respond.min.js"}]
             "<![endif]-->"
             [:link {:rel "stylesheet", :href "resources/public/bootstrap/css/bootstrap.css"}]
             [:link {:rel "stylesheet", :href "resources/public/css/flat-ui.css"}]
             [:link {:href "images/favicon.ico", :rel "shortcut icon"}]]
            [:body
             [:div.container [:div {:id "app"}]]  ;; <---- APP
             [:script {:src "resources/public/js/jquery-1.8.3.min.js"}]
             [:script {:src "resources/public/js/jquery-ui-1.10.3.custom.min.js"}]
             [:script {:src "resources/public/js/jquery.ui.touch-punch.min.js"}]
             [:script {:src "resources/public/js/bootstrap.min.js"}]
             [:script {:src "resources/public/js/bootstrap-select.js"}]
             [:script {:src "resources/public/js/bootstrap-switch.js"}]
             [:script {:src "resources/public/js/flatui-checkbox.js"}]
             [:script {:src "resources/public/js/flatui-radio.js"}]
             [:script {:src "resources/public/js/jquery.tagsinput.js"}]
             [:script {:src "resources/public/js/jquery.placeholder.js"}]
             [:script {:type "text/javascript" }]
             [:script {:type "text/javascript" :src "out/goog/base.js"}]
             [:script {:type "text/javascript" :src "quiz.js"}]
             [:script {:type "text/javascript"} "goog.require('quiz.core');"]
             [:script (austin/browser-connected-repl-js)]])}))
      (f/wrap-file ".")))

(def server
  (ring.adapter.jetty/run-jetty #'app {:port 8080 :join? false}))

(defn rebuild []
  (new-repl-env)
  (doto server .stop .start))
