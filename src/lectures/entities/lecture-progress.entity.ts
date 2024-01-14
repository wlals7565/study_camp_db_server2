import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { Lecture } from './lecture.entity';
import { SpaceMember } from 'src/space-members/entities/space-member.entity';

@Entity('lecture_progress')
export class LectureProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lecture, (lecture) => lecture.lecture_progresses)
  @JoinColumn({ name: 'lecture_id' })
  lecture: Lecture;
  @Column({ type: 'int', nullable: false })
  lecture_id: number;

  @ManyToOne(() => SpaceMember, (spaceMember) => spaceMember.lecture_progresses)
  @JoinColumn({ name: 'member_id' })
  space_member: SpaceMember;
  @Column({ type: 'int', nullable: false })
  member_id: number;

  @Column({ type: 'double', default: 0 })
  progress: number;
}
