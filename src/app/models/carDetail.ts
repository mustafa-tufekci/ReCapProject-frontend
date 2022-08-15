import { CarImage } from "./carImage";

export interface CarDetail {
  carId: number;
  brandId: number;
  colorId: number;
  modelName: string;
  colorName: string;
  brandName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  images: CarImage[];
}
