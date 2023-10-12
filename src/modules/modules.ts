export const api_key = process.env.REACT_APP_API_KEY;
export const endpoint = `https://pixabay.com/api/?key=${api_key}`;

export interface DataProps {
  id: number;
  downloads: number;
  likes: number;
  views: number;
  comments: number;
  largeImageURL: string;
  previewURL: string;
}

export const quickSearchTags = [
  "Background",
  "Flowers",
  "Love",
  "Desktop Wallpaper",
  "Sky",
  "Cat",
  "Beach",
  "Wallpapers",
  "Food",
  "Dogs",
  "Space",
  "Iphone Wallpaper",
  "Food",
  "Dogs",
];
