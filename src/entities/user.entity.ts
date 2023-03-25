import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_client: boolean;

  @Column()
  phone_number: string;

  @OneToMany(() => User, (user) => user.client)
  @JoinColumn({ name: "clientId" })
  contacts: User[];

  @ManyToOne(() => User, (user) => user.contacts)
  client: User;

  @Column({ nullable: true })
  clientId: string;

  @BeforeInsert()
  hashPassword(): void {
    if (this.password) this.password = hashSync(this.password, 10);
  }
}
