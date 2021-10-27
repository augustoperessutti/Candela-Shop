import { Iimg } from "src/app/models/Iglobals";

export interface Ihome {
    offerTitle: string;
    offerImage: Iimg;
    rrssTitle: string;
    rrss: IrrssImg[];
  }

  export interface IrrssImg {
    name: string;
    url: string;
    icon: string;
  }