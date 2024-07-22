import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define el tipo ProductDocument como intersección de Product y Document
export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: String, required: true }) // Corregido "requered" a "required"
  name: string;

  @Prop({ type: String }) // Especifica el tipo para consistencia
  description: string;

  @Prop({ type: String }) // Especifica el tipo para consistencia
  imageURL: string;

  @Prop({ type: Number }) // Especifica el tipo para consistencia
  price: number;

  @Prop({ type: Date, default: Date.now }) // Corregido a createDate
  createDate: Date;
}

// Crea el esquema de Mongoose para la clase Product
export const ProductSchema = SchemaFactory.createForClass(Product);