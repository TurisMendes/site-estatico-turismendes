import { ImageData, VideoData } from "./typesHomePage";

export interface EventDate {
  date: string;
  startTime: string;
  finalTime: string;
};

export default interface FullEventoType {
  title: string;
  category: string;
  longDescription: string[];
  historicalInfo: string[];
<<<<<<< HEAD
  schedule: Appointments[];
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string[];
=======
  schedule: EventDate[];
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
>>>>>>> 211055a850c63756aa55936c4063e6c253f03490
    address: string;
  };
  socialMedia: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  coverImage: ImageData;
  photoGallery: ImageData[];
  videos?: VideoData[];
  mapUrlLink: string;
}