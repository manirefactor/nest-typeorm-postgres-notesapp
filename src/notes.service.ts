import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateNoteDto from "./createNote.dto";
import Note from "./notes.entity";
import updateNoteDto from "./updateNote.dto";

@Injectable()
export class NotesService{
    constructor(@InjectRepository(Note) private noteRepo:Repository<Note>,){}

    //Getall
    getAllNotes(){
        return this.noteRepo.find();
    }

    //Get By Id
    async getNoteById(id){
        const note = await this.noteRepo.findOne(id);
        if(note){return note;}
        throw new HttpException('Note not found',HttpStatus.NOT_FOUND);
    }

    //create
    async createNote(note:CreateNoteDto){
        const newNote=await this.noteRepo.create(note);
        await this.noteRepo.save(newNote);
        return newNote;
    }

    //update
    async updateNote(id,post:updateNoteDto){
        await this.noteRepo.update(id,post);
        const updatedNote=await this.noteRepo.findOne(id);
        if(updatedNote){return updatedNote;}
        throw new HttpException('Note Not Found',HttpStatus.NOT_FOUND);
    }

    //delete
    async deleteNote(id:number){
        const deletedNote=await this.noteRepo.delete(id);
        if(!deletedNote.affected){
            throw new HttpException('Note not found',HttpStatus.NOT_FOUND);
        }
    }
}