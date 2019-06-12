import {Material} from './material';

export class MaterialOrder {
  id: number;
  material: Material;
  amount: number;
  completed: boolean;
}
