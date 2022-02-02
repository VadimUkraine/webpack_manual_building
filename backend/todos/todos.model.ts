export class Todo {
  id: string;

  text: string;

  constructor(text: string, id: string) {
    this.text = text;
    this.id = id;
  }
}
