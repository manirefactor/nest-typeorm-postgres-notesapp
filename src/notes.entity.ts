import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Note{
    @PrimaryGeneratedColumn()
    public id:number;

    @Column()
    public title:string;

    @Column()
    public description:string;
}
export default Note;