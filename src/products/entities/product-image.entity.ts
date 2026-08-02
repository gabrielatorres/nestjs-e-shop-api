import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '.';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  url!: string;

  // Relación muchos a uno con la entidad Product, es decir, una imagen puede pertenecer a un producto
  @ManyToOne(
    () => Product, // Tipo de objeto que se espera recibir
    (product) => product.images, // Campo de la entidad que se relaciona
    {
      onDelete: 'CASCADE', // Si se elimina el producto, se eliminan las imágenes
    },
  )
  product!: Product;
}
