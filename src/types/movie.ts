export interface Movie {
  _id?: string;
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

export interface MovieDocument extends Movie {
  createdAt: Date;
  updatedAt: Date;
} 