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

export type Grams = number;

export interface Hamster {
  name: string;
  weight: Grams;
  id: number;
}

export interface HamsterOwner {
  name: string;
  hamsters: (number | Hamster)[];
}

export interface HamsterOwnerFull extends Omit<HamsterOwner, 'hamsters'> {
  hamsters: Hamster[];
}
