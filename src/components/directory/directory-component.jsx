import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((value) => (
        <CategoryItem key={value.id} category={value} />
      ))}
    </div>
  );
};
export default Directory;
