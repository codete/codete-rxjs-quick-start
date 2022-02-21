export interface Message {
  message: string;
}


export interface Book {
  id: number;
  title: string;
  soldCopies?: number;
}

export interface Author {
  id: number;
  name: string;
  books: (Book | number)[];
}

export interface Topic {
  title: string;
  subtitle?: string;
  imageLink?: string;
  link?: string;
}
