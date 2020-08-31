import {ITag} from '../Interfaces/Itag';
import {ICategory} from '../interfaces/ICategory';


export interface Itodo {
    tags: ITag[];
    _id: string;
    title: string;
    isCompleted: boolean;
    targetDate: Date;
    category: ICategory;
  }
  