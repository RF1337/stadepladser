import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() booth: string = '';  // Or any other type you expect

  showCategoryForm: boolean = true; // Show the category form initially
  categoryData: any = {
    category: '',
    strom: '',
    pavilloner: '',
    fritekst: '',
    price: 500
  };

  companyData: any = {
    firmName: '',
    cvr: '',
    name: '',
    email: '',
    phone: ''
  };

  closeForm() {
    this.showCategoryForm = false;  // Closes the form by hiding it
  }
  

  // Function to handle the submission of the category form and show the company form
  onSubmitCategory(event: Event) {
    event.preventDefault();

    // Capture form data but don't log yet
    const form = event.target as HTMLFormElement;
    this.categoryData = {
      category: this.getCategory(),
      strom: this.getStrom(),
      pavilloner: form['pavilloner'].value, // Use bracket notation here
      fritekst: form['fritekst'].value,     // Use bracket notation here
      price: this.categoryData.price
    };

    // Toggle to show the second form
    this.showCategoryForm = false;
  }

  // Function to retrieve selected category
  getCategory() {
    // Retrieve the selected category (replace with actual logic)
    return 'Fish Category';
  }

  // Function to retrieve Strom choice (Ja or Nej)
  getStrom() {
    // Logic to track selected option for Strom
    return 'Ja';
  }

  // Function to handle the submission of the company form
  onSubmitCredentials(event: Event) {
    event.preventDefault();

    // Capture company form data
    const form = event.target as HTMLFormElement;
    this.companyData = {
      firmName: form['firmName'].value,   // Use bracket notation here
      cvr: form['cvr'].value,             // Use bracket notation here
      name: form['name'].valueOf,           // Use bracket notation here
      email: form['email'].value,         // Use bracket notation here
      phone: form['phone'].value          // Use bracket notation here
    };

    // Now log both categoryData and companyData together
    const formattedMessage = `
  Kategori data:
  Kategori: ${this.categoryData.category}
  Strøm: ${this.categoryData.strom}
  Pavilloner: ${this.categoryData.pavilloner}
  Fritekst: ${this.categoryData.fritekst}
  Pris: ${this.categoryData.price} kr

  Firma data:
  Firmanavn: ${this.companyData.firmName}
  CVR: ${this.companyData.cvr}
  Navn: ${this.companyData.name}
  Email: ${this.companyData.email}
  Telefon: ${this.companyData.phone}
  `;

  // Log the formatted message
  console.log(formattedMessage);
    // Perform final actions like sending data to the server or showing success message

    const emailParams = {
      category: this.categoryData.category,
      strom: this.categoryData.strom,
      pavilloner: this.categoryData.pavilloner,
      fritekst: this.categoryData.fritekst,
      price: this.categoryData.price,
      firmName: this.companyData.firmName,
      cvr: this.companyData.cvr,
      name: this.companyData.name,
      email: this.companyData.email,
      phone: this.companyData.phone,
      booth: this.booth
    };

    emailjs.send('service_gi7nyxi', 'template_b2ysoka', emailParams, 'bOr3ZV7716-Dt21i6')
      .then((result) => {
        console.log('Email successfully sent!', result.status, result.text);
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  }
}