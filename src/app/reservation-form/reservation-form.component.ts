import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservations } from '../models/reservations';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutdate: ['', Validators.required],
      checkGuestName: ['', Validators.required],
      checkGuestEmail: ['', [Validators.required, Validators.email]],
      checkRoomNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.reservationForm.valid){
      
      let reservation: Reservations = this.reservationForm.value;
      this.reservationService.addReservation(reservation)
    }
  }

}
