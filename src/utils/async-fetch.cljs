(ns utils.async_fetch
  (:require  [ajax.core :as ajx]
             [cljs.core.async :as a :refer [go go-loop]]))

(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
  [{:keys [method uri] :as opts}]
  (let [=resp= (a/chan)]
    (ajx/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (a/put! =resp= r)
                                     (prn "AJAX Error" {:error r :request opts})))))
   =resp=))

(def ajax-defaults "Basic options for the response format"
  {:format (ajx/json-request-format)
   :response-format (ajx/json-response-format {:keywords? true})})

(defn test-fetch []
  (ajax-call (assoc ajax-defaults
               :method :get :uri "https://api.census.gov/data.json")))

(defn test1 []
  (go
    (let [response (a/<! (test-fetch))]
      response)))


(test1)
