export class User {
  protected address: string
  protected email: string
  protected emailVerify: Boolean
  protected firstName: string
  protected fullName: string

  constructor(json: any) {
    this.address = json.address;
    this.email = json.email;
    this.emailVerify = json.emailVerify;
    this.firstName = json.firstName;
    this.fullName = json.fullName;
  }

  getAddress(): string {
    return this.address
  }

  getEmail(): string {
    return this.email
  }

  getEmailVerify(): Boolean {
    return this.emailVerify
  }

  getFirstName(): string {
    return this.firstName
  }

  getFullName(): string {
    return this.fullName
  }
}
