import { CategoryItem } from "./CategoryItem";

function CategoryList(props) {
	const { catalog = [] } = props;

	return (
		<div className="cards_container">
			{catalog.map((el) => (
				<CategoryItem key={el.idCategory} {...el} />
			))}
		</div>
	);
}

export { CategoryList };
