import { Link } from "react-router-dom";

function Meal(props) {
	const { strMeal, idMeal, strMealThumb } = props;

	return (
		<div className="card" data-id={idMeal}>
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="card-content">
				<span className="card-title">{strMeal}</span>
			</div>
			<div className="card-action">
				<Link
					to={`/meal/${idMeal}`}
					className="waves-effect waves-light btn"
				>
					<i className="material-icons right">chevron_right</i>
					Смотреть рецепт
				</Link>
			</div>
		</div>
	);
}

export { Meal };
