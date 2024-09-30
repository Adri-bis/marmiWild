import PropTypes from "prop-types";
import { useState } from "react";

function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
  const [isFavoriteState, setIsFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />
        <figcaption>
          <h2>{itemName}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
      <aside>{price} EUR</aside>
      <button type="button" onClick={toggleFavorite}>
        {isFavoriteState ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

// Définir les types des props avec PropTypes
MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MenuItem;
