import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SpaceMember } from './space-member.entity';

@Entity('space_member_dau')
export class SpaceMemberDau {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => SpaceMember,
    (spaceMember) => spaceMember.space_member_daus,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'member_id' })
  space_member: SpaceMember;
  @Column({ type: 'int', nullable: false })
  member_id: number;

  @Column({ nullable: true })
  active_time: Date;

  @Column({ nullable: true })
  last_leave_time: Date;

  @Column()
  created_at: Date;
}
