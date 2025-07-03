import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
 
  task: string = "";
  tasks: { id: number, name: string }[] = [];

  addTask() {
    //console.log("Hola" + this.name);
    if (this.task.trim() === "") return;
    this.tasks.push({ id: this.tasks.length + 1, name: this.task });
    this.task = "";
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}


