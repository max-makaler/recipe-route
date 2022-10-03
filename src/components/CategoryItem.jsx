import { Link } from "react-router-dom";

function CategoryItem(props) {
	const {
		idCategory,
		strCategory,
		strCategoryDescription,
		strCategoryThumb,
	} = props;

	return (
		<div className="card" data-id={idCategory}>
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
			</div>
			<div className="card-content">
				<span className="card-title">{strCategory}</span>
				<p>{strCategoryDescription.slice(0, 60)}</p>
			</div>
			<div className="card-action">
				<Link
					to={`/category/${strCategory}`}
					className="waves-effect waves-light btn"
				>
					<i className="material-icons right">chevron_right</i> Искать
					рецепты
				</Link>
			</div>
		</div>
	);
}

export { CategoryItem };
