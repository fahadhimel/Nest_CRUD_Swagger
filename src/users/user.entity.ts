import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ name: 'name', nullable: false })
  name: string;

  @ApiProperty()
  @Column({ name: 'birth', nullable: false })
  birth: Date;
}
