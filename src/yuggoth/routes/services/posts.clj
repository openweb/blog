(ns yuggoth.routes.services.posts
  (:require [yuggoth.db.core :as db]
            [yuggoth.config :refer [text]]
            [yuggoth.util :as util]
            [noir.session :as session]
            [yuggoth.bloom-search.core :as bloom]))

(defn format-time [item]
  (update-in item [:time] util/format-time))

(def empty-post
  {:id -1
   :title (text :empty-page)
   :content (text :nothing-here)})

(defn append-tags-comments [{:keys [id] :as post}]
  (assoc post
        :tags (db/tags-by-post id)
        :comments (->> id
                       (db/get-comments)
                       (sort-by :time)
                       (map format-time))))

(defn format-post [post]
  (-> post append-tags-comments format-time))

(defn get-latest-post []
  (if-let [post (if (session/get :admin)
                  (db/get-last-post)
                  (db/get-last-public-post))]
    (format-post post)
    empty-post))

(defn get-post [id]
  (let [post (db/get-post id)]
    (if (or (:public post) (session/get :admin))
      (format-post post)
      empty-post)))

(defn get-posts [count]
  (->> (db/get-posts count)
       (sort-by :time)
       (reverse)
       (map format-time)))

(defn toggle-post! [{:keys [id public]}]
  (db/toggle-post! id (not public)))

(defn make-filter! [post]
  (bloom/add-filter!
   (dissoc post :content) (:content post)))

(defn save-post! [{:keys [id title content tags public] :as post}]
  (when (and title content)
    (if id
      (let [post (do (db/update-post! id title content public)
                     (db/update-tags! id tags)
                     (db/get-post id))]
        (make-filter! post)
        post)
      (let [post (db/store-post! title content (:handle (session/get :admin)) public)]
        (db/update-tags! (:id post) tags)
        (make-filter! post)
        post))))

(defn update-tags [tags]
  (db/delete-tags! tags))
