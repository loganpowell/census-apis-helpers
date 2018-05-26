(ns utils.async_fetch
  (:require  [ajax.core :as ajx]
             [cljs.core.async :refer [>! <! chan put! take! close!]]
             [cljs.core.async :refer-macros [go go-loop alt!]]))

(go (.log js/console (<! (go 5))))


(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
  [{:keys [method uri] :as opts}]
  (let [=resp= (chan)]
    (ajx/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (put! =resp= r)
                                     (prn "AJAX Error" {:error r :request opts})))))
   =resp=))

(def ajax-defaults "Basic options for the response format"
  {:format (ajx/json-request-format)
   :response-format (ajx/json-response-format {:keywords? true})})

(defn test-fetch []
  (ajax-call (assoc ajax-defaults
               :method :get :uri "https://api.census.gov/data.json")))

(let [c (test-fetch)]
  (go
    (.log js/console "Got here")
    (.log js/console (<! c))
    (.log js/console "We made progress"))
  (go ; when this following go block runs, it allows the prior go to finish
    (.log js/console "The end")))
