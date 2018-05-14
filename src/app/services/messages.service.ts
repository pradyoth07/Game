import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

    Messages: { Text: string, Type: 'success' | 'danger' } [];

  constructor() {
    this.Messages = [
        //{ Text: '', Type: 'success'},
        //{ Text: '', Type: 'danger' }
    ];
  }

}
