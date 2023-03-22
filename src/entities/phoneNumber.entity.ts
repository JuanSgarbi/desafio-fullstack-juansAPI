import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("phone_number")
export class PhoneNumber {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => User, (user) => user.phone_numbers)
  user: User;
}
