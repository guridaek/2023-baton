import { TECHNICS } from '@/constants/tags';

export type Technic = (typeof TECHNICS)[number];
<<<<<<< HEAD
=======

export interface GetSearchTagResponse {
  data: Tag[];
}

export interface Tag {
  id: number;
  tagName: string;
}
>>>>>>> dev/FE
