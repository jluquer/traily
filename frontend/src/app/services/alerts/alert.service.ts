import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  error(text = 'Sorry, something went wrong.', title = 'Oops') {
    return from(
      Swal.fire({
        icon: 'error',
        title: title,
        text: text,
      })
    );
  }

  success(text = '', title = 'Success!') {
    return from(
      Swal.fire({
        icon: 'success',
        title: title,
        text: text,
      })
    );
  }

  custom(config: any) {
    return from(Swal.fire(config));
  }
}
