import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'socket_setting' })
export class SocketSetting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'socket' })
  socket: number

  @Column({ name: 'fee' })
  fee: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;
}
