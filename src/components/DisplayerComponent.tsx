import React from "react";
import SearchBar from "./SearchBar";
import ImageDisplayer from "./ImageDisplayer";
import axios from "axios";
import { DataProps, endpoint, quickSearchTags } from "../modules/modules";
import { DisplayerWrapper } from "../styles/Displayer.modules";
import Header from "./Header";

const DisplayerComponent = () => {
  const [isImages, setImages] = React.useState<DataProps[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentSearchTerm, setCurrentSearchTerm] = React.useState<string>("");

  //*this function will display random images from the api by default but can conditonally search as well
  const fetchImages = async (page: number, searchTerm: string) => {
    const query = searchTerm ? `&q=${searchTerm}` : ""; // Add search term to query if provided
    const url = `${endpoint}&per_page=${15}&page=${page}${query}`;
    const response = await axios.get(url);
    const results = response.data.hits;

    setImages(results);
  };

  const onSubmitHandler = async (searchedTerm: string) => {
    fetchImages(1, searchedTerm);
    setCurrentSearchTerm(searchedTerm); 
    setCurrentPage(1);
  };

  //search by Tags
  const handleTagClick = (tagText: string) => {
    onSubmitHandler(tagText);
  };

  React.useEffect(() => {
    fetchImages(currentPage, currentSearchTerm); 
  }, [currentPage, currentSearchTerm]);

  const nextPage = () => {
    if (currentPage < 500) {
      fetchImages(currentPage + 1, currentSearchTerm);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchImages(currentPage - 1, currentSearchTerm); 
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  //randomly change images for the cover based on tags and search
  const randomImage = Math.floor(Math.random() * isImages.length);
  const backgroundImage =
    isImages.length > 0 ? `url(${isImages[randomImage].largeImageURL})` : "";

  return (
    <DisplayerWrapper>
      <div className="header">
        <Header backgroundImage={backgroundImage} />
      </div>

      <div className="search">
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <SearchBar onSearchEvent={onSubmitHandler} />
      </div>

      <div className="listData">
        <div className="tags">
          {quickSearchTags.map((tag, index) => (
            <span key={index} onClick={() => handleTagClick(tag)}>
              {tag}
            </span>
          ))}
        </div>

        <div className="imagesCard">
          {isImages.map((pics, index) => (
            <ImageDisplayer
              key={`${pics.id}_${currentPage}_${index}`}
              imagesResults={pics.largeImageURL}
              likes={pics.likes}
              views={pics.views}
              viewFullSize={pics.largeImageURL}
            />
          ))}
        </div>

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
