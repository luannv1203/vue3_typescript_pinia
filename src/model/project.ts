export class Project {
  private _id: string;
  private _name: string;
  private _languages: string[]
  constructor(json: any) {
    this._id = json._id;
    this._name = json.name;
    this._languages = json.languages
  }

  getId(): string {
    return this._id;
  }
  getName(): string {
    return this._name;
  }
  getLanguages(): string[] {
    return this._languages;
  }
}
