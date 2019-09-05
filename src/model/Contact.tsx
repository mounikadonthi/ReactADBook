export class Contact {
   id: number;
   name: string;
   email: string;
   mobile: string;
   landLine: string;
   webSite: string;
   address: string;
   constructor(id: number, name: string, email: string, mobile: string, landLine: string, webSite: string, address: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.mobile = mobile;
      this.landLine = landLine;
      this.webSite = webSite;
      this.address = address;
   }
}