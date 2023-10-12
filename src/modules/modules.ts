export const api_key = "27219150-23726d1ef8a1ddf67f8bc0b31";
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
