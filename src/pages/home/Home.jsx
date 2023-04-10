import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import css from "./home.module.scss";
import api from "../../components/api/api";
import CategoryItem from "../../components/categoryItem/CategoryItem";

const categoriesList = [
    { title: "NETFLIX Originals", fetchUrl: `${api.fetchNetflixOriginals}` },
    { title: "Trending", fetchUrl: `${api.fetchTrending}` },
    { title: "Top Rated", fetchUrl: `${api.fetchTopRated}` },
    { title: "Action", fetchUrl: `${api.fetchActionMovies}` },
    { title: "Comedy", fetchUrl: `${api.fetchComedyMovies}` },
    { title: "Romance", fetchUrl: `${api.fetchRomanceMovies}` },
    { title: "Documentaries", fetchUrl: `${api.fetchDocumentaries}` },
]


function Home() {
    return (
        <div className={`${css.home}`}>
            <Navbar />
            <Featured />

            {/* categories */}

            {categoriesList.map((category, cKey) => {
                return <CategoryItem key={cKey} title={category.title} isLargeCategory={category.title === "NETFLIX Originals" ? true : false} fetchUrl={category.fetchUrl} />
            })}
        </div>
    )
}

export default Home