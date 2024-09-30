import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {foodItems.map((item) => (
        <MenuItem
          key={item.id}
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
}

// Définir les types des props avec PropTypes
MenuList.propTypes = {
  foodItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      foodImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MenuList;
