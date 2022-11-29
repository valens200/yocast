import { data } from "../types/appTypes";
import home from "../assets/images/home.png";
import createBookMark from "../assets/images/addbookmark.png";
import createCategory from "../assets/images/createCategory.png";
import deleteCatgory from "../assets/images/deleteCatgory.png";

export const inputFields = [
  {
    name: "Email",
    type: "email",
  },
  {
    name: "UserName",
    type: "text",
  },
];
export const footerLInks = [
  {
    title: "QUick Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About us",
        link: "About",
      },
      {
        name: "Services",
        link: "products",
      },
      {
        name: "contacts",
        link: "contacts",
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        name: "mukeshametax@gmail.com",
        link: "",
      },
      {
        name: "0782825742",
        link: "About",
      },
      {
        name: "www.mukeshametax.com",
        link: "products",
      },
      {
        name: "Linked In",
        link: "",
      },
      {
        name: "Twitter",
        link: "contacts",
      },
    ],
  },

  {
    title: "Get help",
    links: [
      {
        name: "SL Business Card",
        link: "",
      },
      {
        name: "Spider Lotus and COVID-19",
        link: "About",
      },
      {
        name: "SL Assistant",
        link: "products",
      },
      {
        name: "Manage Your Account",
        link: "",
      },
      {
        name: "Help",
        link: "",
      },
    ],
  },
];

export const useGuideLine = [
  {
    action: "Primary Dashboard",
    id: 1,
    image: home,
    text: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.",
  },
  {
    action: "Create new Category",
    id: 3,
    image: createCategory,
    text: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.",
  },
  {
    id: 2,
    action: "Create a bookMark",
    image: createBookMark,
    text: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.",
  },
];
export const Links = [
  { name: "Services" },
  { name: "contacts" },
  { name: "About" },
];
export const navButtons = [
  { id: 0, name: "Login" },
  { id: 1, name: "Get started" },
];
export const MenuItems = [
  { name: "Delete category" },
  { name: "Edit category" },
  { name: "more.." },
];
export const formData: data[] = [
  {
    name: "Title",
    type: "text",
  },
  {
    name: "Link",
    type: "text",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "image",
    type: "file",
  },
];
export const formData2: data[] = [
  {
    name: "Title",
    type: "description",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "image",
    type: "file",
  },
];

export const inputsData: data[] = [
  {
    name: "Create",
    type: "submit",
  },
  {
    name: "Create Category",
    type: "button",
  },
];

export const inputsData2: data[] = [
  {
    name: "Create Category",
    type: "submit",
  },
  {
    name: "Back",
    type: "button",
  },
];
