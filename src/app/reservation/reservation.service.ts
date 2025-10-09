import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservations[] = [];

  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  getReservations(): Reservations[] {
    return this.reservations;
  }

  getReservation(id : string): Reservations | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservations): void {
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(updatedReservation: Reservations): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id)
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
