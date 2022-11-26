import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BiCategory } from "react-icons/bi";
import { json } from "react-router-dom";
import { bookMark } from "../types/appTypes";
import { category } from "../types/appTypes";
import { stateTemplate } from "../types/appTypes";

const initialState = {
  bookMarkToSave: {
    name: "",
    iamge: "",
    description: "",
    bookMarks: [],
  },
  showSmallSidebar: false,
  showUpdateForm: false,
  ShowSingleBookMark: false,
  showForm: false,
  selectedBookMark: {} as bookMark,
  selectedCategory: {
    name: "Design Tools",
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwzm3fNDJeMasDjnPorU2irF9jFpEq92zw&usqp=CAU",
    bookMarks: [
      {
        id: 1,
        title: "Youtube",
        description: "Bookmark to direct me to the youtube",
        link: "",
        category: "",
      },
      {
        id: 2,
        title: "Instagram",
        description: "Bookmark to direct me to the youtube",
        link: "",
        category: "",
      },
      {
        id: 3,
        title: "Mbonera Rw",
        description: "Bookmark to direct me to the youtube",
        link: "",
        category: "",
      },
      {
        id: 4,
        title: "Rwanda coding academy",
        description: "Bookmark to direct me to the youtube",
        link: "",
        category: "",
      },
    ],
  },
  Categories: [
    {
      name: "Design Tools",
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwzm3fNDJeMasDjnPorU2irF9jFpEq92zw&usqp=CAU",
      bookMarks: [
        // {
        //   id: 1,
        //   title: "Youtube",
        //   description: "Bookmark to direct me to the youtube",
        //   link: "",
        //   category: "",
        // },
        // {
        //   id: 2,
        //   title: "Instagram",
        //   description: "Bookmark to direct me to the youtube",
        //   link: "",
        //   category: "",
        // },
        // {
        //   id: 3,
        //   title: "Mbonera Rw",
        //   description: "Bookmark to direct me to the youtube",
        //   link: "",
        //   category: "",
        // },
        // {
        //   id: 4,
        //   title: "Rwanda coding academy",
        //   description: "Bookmark to direct me to the youtube",
        //   link: "",
        //   category: "",
        // },
      ],
    },
    {
      name: "Design Tools",
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwzm3fNDJeMasDjnPorU2irF9jFpEq92zw&usqp=CAU",
      bookMarks: [
        {
          id: 1,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 2,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 3,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 4,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
      ],
    },
    {
      name: "Design Tools",
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwzm3fNDJeMasDjnPorU2irF9jFpEq92zw&usqp=CAU",
      bookMarks: [
        {
          id: 1,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 2,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 3,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 4,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
      ],
    },
    {
      name: "Design Tools",
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwzm3fNDJeMasDjnPorU2irF9jFpEq92zw&usqp=CAU",
      bookMarks: [
        {
          id: 1,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 2,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 3,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
        {
          id: 4,
          title: "",
          description: "Bookmark to direct me to the youtube",
          link: "",
          category: "",
        },
      ],
    },
  ],
};
const BookMarkSclice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<category>) => {
      state.selectedCategory = action.payload;
    },
    setShowForm: (state, action: PayloadAction<boolean>) => {
      if (action.payload == true) {
        state.showForm = true;
      } else {
        state.showForm = false;
      }
    },

    initilizerCategories: (state, action: PayloadAction<category[]>) => {
      state.Categories = action.payload;
    },
    createNewCatgory: (state, action: PayloadAction<category>) => {
      const Categories = state.Categories;
      const otherCategories = state.Categories.filter(
        (cat) => cat.name != action.payload.name
      );
      state.Categories = [...state.Categories, action.payload];

      localStorage.setItem("bookMarks", JSON.stringify(state.Categories));
    },
    setShowUpdateForm: (state, action: PayloadAction<boolean>) => {
      const show = action.payload;
      if (show) {
        state.showUpdateForm = true;
      } else {
        state.showUpdateForm = false;
      }
    },
    setShowSingleBookMark: (state, action: PayloadAction<boolean>) => {
      if (action.payload == true) {
        state.ShowSingleBookMark = true;
      } else {
        state.ShowSingleBookMark = false;
      }
    },
    setSelectedBookMark: (state, action: PayloadAction<bookMark>) => {
      state.selectedBookMark = action.payload;
    },
    addBookMap: (
      state,
      action: PayloadAction<{ cat: string; bookMark: bookMark }>
    ) => {
      const book = state.Categories.filter(
        (cat) => cat.name == action.payload.cat
      )[0];
      const otherBookMarkMarks = state.Categories.filter(
        (cat) => cat.name != action.payload.cat
      );
      book.bookMarks.push(action.payload.bookMark);
      state.Categories = [...otherBookMarkMarks, book];
      localStorage.setItem("bookMarks", JSON.stringify(state.Categories));
      const bookMark = action.payload.bookMark;
    },
    setShowSmallSidebar: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.showSmallSidebar = true;
      } else {
        state.showSmallSidebar = false;
      }
    },
  },
});

export const {
  setSelectedCategory,
  initilizerCategories,
  createNewCatgory,
  setSelectedBookMark,
  setShowUpdateForm,
  setShowSingleBookMark,
  setShowForm,
  addBookMap,
  setShowSmallSidebar,
} = BookMarkSclice.actions;
export const BookMarkReducer = BookMarkSclice.reducer;
