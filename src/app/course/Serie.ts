export class Serie {
  id: number;
  name: string;
  chanel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;

  public constructor(id: number, name:string, chanel: string, seasons:number, description: string, webpage: string, poster: string){
    this.id=id;
    this.name=name;
    this.chanel=chanel;
    this.seasons=seasons;
    this.description=description;
    this.webpage=webpage;
    this.poster=poster;
  }

}
