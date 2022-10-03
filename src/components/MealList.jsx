import { Meal } from "./Meal";

function MealList(props) {
	const { meals } = props;
	return (
		<div className="cards_container">
			{meals.map((el) => (
				<Meal key={el.idMeal} {...el} />
			))}
		</div>
	);
}

export { MealList };
