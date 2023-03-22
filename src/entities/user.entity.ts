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
import { PhoneNumber } from "./phoneNumber.entity";

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

  @Column({ default: false })
  is_client: boolean;

  @OneToMany(() => PhoneNumber, (phone_number) => phone_number.user, {
    eager: true,
  })
  phone_numbers: PhoneNumber[];

  @OneToMany(() => User, (user) => user.client)
  @JoinColumn({ name: "clientId" })
  contacts: User[];

  @ManyToOne(() => User, (user) => user.contacts)
  client: User;

  @Column({ nullable: true })
  clientId: string;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword(): void {
    if (this.password) this.password = hashSync(this.password, 10);
  }
}
