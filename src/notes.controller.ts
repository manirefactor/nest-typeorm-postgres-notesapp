import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import CreateNoteDto from "./createNote.dto";
import { NotesService } from "./notes.service";
import updateNoteDto from "./updateNote.dto";

@Controller()
export class NotesController{
    constructor(private readonly noteService:NotesService){}

    //Get all notes
    @Get()
    getAllNotes(){
        return this.noteService.getAllNotes();
    }

    //get note by id
     @Get(':id')
     getNotebyId(@Param('id') id:string){
         return this.noteService.getNoteById(parseInt(id));
     }

    //create note
    @Post()
    async createNote(@Body() note:CreateNoteDto){
        return this.noteService.createNote(note);
    }

    //Update Note
    @Put(':id')
    async updateNote(@Param('id') id:string, @Body() note:updateNoteDto){
        return this.noteService.updateNote(parseInt(id),note);
    }

    //delete note
    @Delete(':id')
    async deleteNote(@Param('id') id:string){
       return this.noteService.deleteNote(Number(id));
    }

}