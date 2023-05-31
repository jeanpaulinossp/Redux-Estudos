import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent/PhotosContent";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
    </section>
  );
};

export default Photos;
