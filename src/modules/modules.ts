export const api_key = "27219150-23726d1ef8a1ddf67f8bc0b31";
export const endpoint = `https://pixabay.com/api/?key=${api_key}`

export interface DataProps {
  id: number;
  downloads: number;
  likes: number;
  views: number;
  largeImageURL: string; //*original name largeImageURL
  downloadLink: string; //* original name previewURL
}

