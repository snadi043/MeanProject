import { Component } from "@angular/core";

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent{
  enteredPosts: string = '';
  newPosts: string = '';

  onCreatePosts(){
    // alert('New Posts Created');
    console.log('New Posts Created');
    this.newPosts = this.enteredPosts;
  }
}
