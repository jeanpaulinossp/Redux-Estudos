import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, selectUniqueColors } from "../store/products";

const Filter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);

  const colors = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColor }));
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [selectedColor, dispatch, minPrice, maxPrice]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColor([...selectedColor, target.value]);
    } else {
      setSelectedColor(selectedColor.filter((color) => color !== target.value));
    }
  }

  function handleChecked(color) {
    return selectedColor.includes(color);
  }

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="Min"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="Max"
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            onChange={handleChange}
            checked={handleChecked(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filter;
