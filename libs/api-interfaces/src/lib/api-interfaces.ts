export interface Message {
  message: string;
}


export interface Author {
  name: string;
  surname: string;
  books?: number[];
}

export interface Topic {
  title: string;
  subtitle?: string;
  imageLink?: string;
  link?: string;
}
