import { MutableRefObject } from "react";
import { IStackScrennProps } from './library/StackScreenProps';

export interface ProductProps extends IStackScrennProps {
  id: string;
  product_name: string;
  product_image: string;
  fat_100g: string;
  proteins_100g: string;
  energy_kcal_100g: string;
  carbohydrates_100g: string;
  carbon_footprint_serving: string;
  water_usage: string;
  land_usage: string;
}