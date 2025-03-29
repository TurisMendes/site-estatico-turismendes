import { ImageData, VideoData } from "./typesHomePage";

export default interface FullAgenteCulturalType {
  name: string;
  category: string;
  aboutMe: string[];
  myContributions: string[];
  profileImg: ImageData;
  coverImg: ImageData;
  mapUrlLink?: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
<<<<<<< HEAD
    site?: string[];
=======
    site?: string;
>>>>>>> 211055a850c63756aa55936c4063e6c253f03490
    address?: string;
  };
  socialMedia: {
    instagram?: string;
<<<<<<< HEAD
    facebooK?: string;
=======
    facebook?: string;
>>>>>>> 211055a850c63756aa55936c4063e6c253f03490
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  tags: string[];
  photoGallery?: ImageData[];
  videos?: VideoData[];
}