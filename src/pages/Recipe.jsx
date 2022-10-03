import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Preloader } from "../components/Preloader";

import { getMealById } from "../api";

function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]));
	}, [id]);

	return (
		<>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className="recipe">
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<div className="description">
						<div className="line-separator">
							<h4>Категория: {recipe.strCategory}</h4>
							<h4>Происхождение: {recipe.strArea}</h4>
						</div>

						<div className="line-separator">
							<h4>Ингредиенты:</h4>
							<table className="ingredients striped centered">
								<thead>
									<tr>
										<th>Ингридиент</th>
										<th>Кол-во</th>
									</tr>
								</thead>

								<tbody>
									{Object.keys(recipe).map((el, i) => {
										if (
											el.includes("Ingredient") &&
											recipe[el]
										) {
											return (
												<tr key={el}>
													<td>{recipe[el]}</td>
													<td>
														{
															recipe[
																`strMeasure` +
																	el.slice(13)
															]
														}
													</td>
												</tr>
											);
										} else {
											return null;
										}
									})}
								</tbody>
							</table>
						</div>

						<div className="line-separator">
							<h4>Рецепт:</h4>
							<p>{recipe.strInstructions}</p>
						</div>

						{recipe.strYoutube ? (
							<div className="video_block line-separator">
								<h4>Видео приготовления:</h4>
								<iframe
									src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
										-11
									)}`}
									title={recipe.strMeal}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						) : null}
					</div>
				</div>
			)}
		</>
	);
}

export { Recipe };
