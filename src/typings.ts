import { MutableRefObject } from "react";
import { IStackScrennProps } from './library/StackScreenProps';

export interface ProductProps extends IStackScrennProps {
  id: string;
  product_name: string;
}