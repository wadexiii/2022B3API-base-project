import { Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  date!: Date;

  @Column({default: 'Pending'})
  eventStatus?: 'Pending' | 'Accepted' | 'Declined';

  @Column()
  eventType!: 'RemoteWork' | 'PaidLeave';

  @Column()
  eventDescription?: string;

  @Column()
  userId!: string;
}
