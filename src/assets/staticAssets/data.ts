import { data } from "../../types/appTypes";
import createBookMark from "../assets/images/addbookmark.png";
import createCategory from "../assets/images/createCategory.png";
import deleteCatgory from "../assets/images/deleteCatgory.png";
import React from "react";
import {
  sidebarLinksType,
  inputFieldType,
  sidebarFormType,
  podcastsCategoryType,
} from "../../types/appTypes";
import { BsFillDice4Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Category } from "@mui/icons-material";
//links used on sidebar
// IVainqueur
// 11: 41 AM
//     + 250 791 023 745
// @Tresor_13
// 11: 42
//     + 250 781 589 686
// @Israel

export const FormInputs = [
  {
    name: "Email",
    type: "email",
  },
  {
    name: "Password",
    type:"password"
  },
  {
    name: "FullName",
    type:"text"
  },
  {
    name: "UserName",
    type:"text"
  },
  {
    name: "Nationality",
    type:"text"
  },
];
export const tableHeaders = [
  " Podcast Title",
  " Category",
  " Length",
  "Likes",
  "Views",
  "Created At",
];
export const ordersTableHeders = [
  "OrderId",
  ,
  "Podcast",
  "Customer",
  "Amount",
  "Status",
];
export const subscriptionTableHeaders = [
  "SubscriptionId",
  "Subscription Owner",
  "transaction Id",
  "Payment method",
  "price",
  "currency",
  "Desactivation Date",
  "Created",
  "Updated",
];
const getSidebarFormDivs = (): sidebarFormType[] => {
  const podcastsCategories = useSelector(
    (store: RootState) => store.podcasts.podcastsCategories
  );
  const Categories: String[] = [];
  const getOptions = (podcastsCategories: podcastsCategoryType[]): String[] => {
    podcastsCategories.forEach((Category) => {
      Categories.push(Category.category);
    });
    return Categories;
  };
  const sidebarFormDivs: sidebarFormType[] = [
    {
      title: "Publish",
      inputs: [
        {
          label: "Status",
          type: "select",
          placeholder: "",
          options: ["Published", "Scheduled", "Draft"],
        },
        {
          label: "Visibility",
          type: "select",
          placeholder: "",
          options: ["Public", "Hidden"],
        },
      ],
    },
    {
      title: "Publish Schedule",
      inputs: [
        {
          label: "Publish Date & Time",
          type: "text",
          placeholder: "Enter publish date",
          options: [],
        },
      ],
    },
    {
      title: "Product Categories",
      inputs: [
        {
          label: "Select product category",
          type: "select",
          placeholder: "",
          options: getOptions(podcastsCategories),
        },
      ],
    },
    {
      title: "Product Short Description",
      inputs: [
        {
          label: "Add short description for product",
          type: "text",
          placeholder: "Must enter minimum of 100 characters",
          options: [],
        },
      ],
    },
  ];

  return sidebarFormDivs;
};

export default getSidebarFormDivs;
export const bottomSidebarLinks: sidebarLinksType[] = [
  { title: "Settings", link: "settings" },
  { title: "Logout", link: "logout" },
];
export const sidebarLinks: sidebarLinksType[] = [
  {
    title: "Podcasts",
    link: "/podcasts",
  },
  {
    title: "Podcast Details",
    link: "details",
  },
  {
    title: "Create Podcast",
    link: "/create_podcast",
  },
  {
    title: "Orders",
    link: "/*",
  },
  {
    title: "Order details",
    link: "/*",
  },
  {
    title: "Subscriptions",
    link: "/subscriptions",
  },
  {
    title: "Sellers",
    link: "/*",
  },
  {
    title: "Seller details",
    link: "/*",
  },
];

export const inputFields: inputFieldType[] = [
  {
    type: "text",
    placeholder: "Search for clients, email, phone,status or something",
    options: ["Status", "Active", "Block"],
  },
  {
    type: "date",
    placeholder: "Select date",
    options: ["Status", "Active", "Block"],
  },
  {
    type: "select",
    placeholder: "All",
    options: ["Status", "Active", "Block"],
  },
  {
    type: "button",
    placeholder: "Filters",
    options: ["Status", "Active", "Block"],
  },
];
export const clientsButtons = [
  {
    title: "Add Customer",
  },
  {
    title: "Import",
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
