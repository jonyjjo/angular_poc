export class Contact {
  id: number | undefined;
  name: string;
  address: string;
  dateOfBirth: Date;
  contactNo: string;
  
  constructor(
    name?: string,
    address?: string,
    dateOfBirth?: Date,
    contactNo?: string
  ){
      this.name = name || '';
      this.address = address || '';
      this.dateOfBirth = dateOfBirth || new Date();
      this.contactNo = contactNo || '';
    }
  }
  