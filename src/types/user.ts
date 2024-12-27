export interface User {
  _id?: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

export interface UserDocument extends User {
  createdAt: Date;
  updatedAt: Date;
} 