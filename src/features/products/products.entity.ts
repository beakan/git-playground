import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  image?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
