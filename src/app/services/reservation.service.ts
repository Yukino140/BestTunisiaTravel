import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firestore from "@firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private firestore:AngularFirestore) { }
  link(){
    return this.firestore.collection("BestTunisiaTravel").doc("reservations").valueChanges()
  }
  add(reserver :any){
    this.firestore.collection("BestTunisiaTravel").doc("reservations").update({ 
      reservations: firestore.arrayUnion(reserver)
    })
  } 
}
