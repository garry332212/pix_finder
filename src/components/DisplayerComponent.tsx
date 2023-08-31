import React from "react";
import SearchBar from "./SearchBar";
import ImageDisplayer from "./ImageDisplayer";
import axios from "axios";
import { DataProps, endpoint } from "../modules/modules";
import {DisplayerWrapper} from "../styles/Displayer.modules"
import Header from "./Header";

const DisplayerComponent = () => {
  const [isImages, setImages] = React.useState<DataProps[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentSearchTerm, setCurrentSearchTerm] = React.useState<string>("");

  //*this function will display random images from the api by default but can conditonally search as well
  const fetchImages = async (page: number, searchTerm: string) => {
    const query = searchTerm ? `&q=${searchTerm}` : ""; // Add search term to query if provided
    const url = `${endpoint}&per_page=${14}&page=${page}${query}`;
    const response = await axios.get(url);
    const results = response.data.hits;

    setImages(results);
  };

  const onSubmitHandler = async (searchedTerm: string) => {
    fetchImages(1, searchedTerm); // Pass the search query to fetchImages and start from the first page
    setCurrentSearchTerm(searchedTerm); // Update the current search term
    setCurrentPage(1);
  };

  React.useEffect(() => {
    fetchImages(currentPage, currentSearchTerm); // Use the current search term when fetching images
  }, [currentPage, currentSearchTerm]);

  const nextPage = () => {
    if (currentPage < 500) {
      fetchImages(currentPage + 1, currentSearchTerm); // Use the current search term when fetching images
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchImages(currentPage - 1, currentSearchTerm); // Use the current search term when fetching images
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <DisplayerWrapper>
      <div className="header">
        <Header />
      </div>

      <div className="search">
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <SearchBar onSearchEvent={onSubmitHandler} />
      </div>

      <div className="listData">
        {isImages.map((pics, index) => (
          <ImageDisplayer
            key={`${pics.id}_${currentPage}_${index}`} // Using a unique key
            imagesResults={pics.largeImageURL}
            likes={pics.likes}
            views={pics.views}
          />
        ))}

        <div className="buttons">
          <button onClick={nextPage}>Next</button>
          <p>Page | {currentPage}</p>
          {currentPage > 1 && <button onClick={prevPage}>Prev</button>}
        </div>
      </div>
    </DisplayerWrapper>
  );
};

export default DisplayerComponent;


