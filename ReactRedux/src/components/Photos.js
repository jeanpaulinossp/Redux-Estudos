import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, getOverFiveKG } from "../store/photos";

const Photos = () => {
  const dispatch = useDispatch();

  const data = useSelector(getOverFiveKG);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (!data) return null;
  return (
    <div>
      {data.map((photo, index) => (
        <li id={photo.id}>
          {photo.title} | {photo.peso} | {photo.id}
        </li>
      ))}
    </div>
  );
};

export default Photos;
