import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("error_logs")
export class ErrorLog {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "longtext" })
  stack: string;

  @CreateDateColumn()
  date: Date;
}
