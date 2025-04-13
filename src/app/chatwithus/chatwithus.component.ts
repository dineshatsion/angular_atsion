import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatwithus',
  imports: [FormsModule,CommonModule],
  templateUrl: './chatwithus.component.html',
  styleUrl: './chatwithus.component.css'
})
export class ChatwithusComponent implements OnInit {
  chatVisible: boolean = false;
  formData = {
    name: '',
    phone: '',
    qualification: '',
    state: '',
    query: '',
    termsAccepted: false
  };
  states: string[] = [];

  ngOnInit(): void {
    this.states = [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
      "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
      "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
      "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
      "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];
  }

  openForm() {
    this.chatVisible = true;
  }

  closeForm() {
    this.chatVisible = false;
  }

  submitForm() {
    const { name, phone, qualification, state, query, termsAccepted } = this.formData;
    if (!name || !phone || !qualification || !state || !query) {
      alert('Please fill all the required fields.');
      return;
    }

    if (!termsAccepted) {
      alert('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    const message = `Name: ${name}%0AWhatsApp Number: ${phone}%0AQualification: ${qualification}%0AState: ${state}%0AQuery: ${query}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=+919876543210,+14435551234,+447911123456,+16135551234&text=${message}`;

    window.open(whatsappLink, '_blank');
  }
}
