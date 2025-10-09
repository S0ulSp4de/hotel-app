import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservations[] = [];

  getReservations(): Reservations[] {
    return this.reservations;
  }

  getReservation(id : string): Reservations | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservations): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index,1)
  }

  updateReservation(updatedReservation: Reservations): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id)
    this.reservations[index] = updatedReservation;
  }
}
