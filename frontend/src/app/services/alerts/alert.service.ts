import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  /**
   * Fires a swal error alert.
   * @param text to display in alert.
   * @param title to display in alert. 
   * @returns Observable from the alert resolution.
   */
  error(text = 'Sorry, something went wrong.', title = 'Oops') {
    return from(
      Swal.fire({
        icon: 'error',
        title: title,
        text: text,
      })
    );
  }

  /**
   * Fires a swal success alert.
   * @param text to display in alert.
   * @param title to display in alert. 
   * @returns Observable from the alert resolution.
   */
  success(text = '', title = 'Success!') {
    return from(
      Swal.fire({
        icon: 'success',
        title: title,
        text: text,
      })
    );
  }

  /**
   * Fires a swal custom alert. It's used to display more configurable
   * alerts.
   * 
   * @param config the alert config.
   * @returns Observable from the alert resolution.
   */
  custom(config: any) {
    return from(Swal.fire(config));
  }
}
