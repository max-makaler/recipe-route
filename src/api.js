import { API_URL } from "./config";

const getMealById = async (mealid) => {
	const response = await fetch(API_URL + "lookup.php?i=" + mealid);
	return await response.json();
};

const getAllCategories = async () => {
	const response = await fetch(API_URL + "categories.php");
	return await response.json();
};

const getFilteredCategory = async (catName) => {
	const response = await fetch(API_URL + "filter.php?c=" + catName);
	return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
