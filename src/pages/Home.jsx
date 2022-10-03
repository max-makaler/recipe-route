import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

import { useLocation, useNavigate } from "react-router-dom";

const staticList = [
	{
		idCategory: 1,
		strCategory: "Бургерс",
		strCategoryDescription: "описание супер классное",
		strCategoryThumb:
			"https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg",
	},
];

function Home() {
	const [catalog, setCatalog] = useState(staticList);
	const [filteredCatalog, setFilteredCatalog] = useState(staticList);

	const { pathname, search } = useLocation();
	const navigate = useNavigate();

	const handleSearch = (str = "") => {
		setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);
		if (str) {
			navigate(`${pathname}?search=${str}`);
		} else {
			navigate(`${pathname}`);
		}
	};

	useEffect(() => {
		getAllCategories()
			.then((data) => {
				setCatalog(data.categories);
				setFilteredCatalog(data.categories);
			})
			.catch((error) => console.log("ошибка", error));
	}, []);

	useEffect(() => {
		if (search) {
			setFilteredCatalog(
				filteredCatalog.filter((el) =>
					el.strCategory
						.toLowerCase()
						.includes(search.split("=")[1].toLowerCase())
				)
			);
		}
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filteredCatalog} />
			)}
		</>
	);
}

export { Home };
