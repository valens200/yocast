import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {};
const initialState = {
  availablePodcasts: [
    {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
      {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
      {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
    {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
    {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
    {
      name: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main activities",
      cover:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      description: "new podcasts about waruziko and gentil gedeo staffs",
      length: "45:34:90",
      time: "year ago",
      likes: 450,
      views: 1000,
      createdAt: "1-12-2000",
    },
  ],

  podcasts: [
    {
      title:
        "WARUZIKO KURI RADIO RWANDA TARIKI YA 5 main             activities",
      screenShoot:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      length: "45:34:90",
      time: "year ago",
    },
    {
      title: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5",
      screenShoot:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      length: "45:34:90",
      time: "year ago",
    },
    {
      title: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5",
      screenShoot:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      length: "45:34:90",
      time: "year ago",
    },
    {
      title: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5",
      screenShoot:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      length: "45:34:90",
      time: "year ago",
    },
    {
      title: "WARUZIKO KURI RADIO RWANDA TARIKI YA 5",
      screenShoot:
        "https://production.listennotes.com/podcasts/radio-rwanda-radio-rwanda-YAI7sMdZQ1z-Qx5K1DS2GuR.300x300.jpg",
      length: "45:34:90",
      time: "year ago",
    },
  ],
  reviews: [
    {
      profileImage:
        "data:image/jpeg;base64,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",
      message: "Your podcasts are very usefull i like them",
      reviewer: "Nancy martino",
    },
    {
      profileImage:
        "https://0.academia-photos.com/61920622/16078334/70178869/s200_emmanuel.ntivuguruzwa.jpeg",
      message: "Your podcasts are very usefull i like them",
      reviewer: "Emmanuel NT.",
    },
    {
      profileImage:
        "data:image/jpeg;base64,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",
      message: "Your podcasts are very usefull i like them",
      reviewer: "valens  N.",
    },
    {
      profileImage:
        "https://0.academia-photos.com/61920622/16078334/70178869/s200_emmanuel.ntivuguruzwa.jpeg",
      message: "Your podcasts are very usefull i like them",
      reviewer: "Michael  NT.",
    },
  ],
  podcastsCategories: [
    {
      category: "Political",
      availablePodcasts: 34,
      selected: true,
    },
    {
      category: "Religous",
      availablePodcasts: 20,
      selected: false,
    },
    {
      category: "Geographical",
      availablePodcasts: 10,
      selected: false,
    },
    {
      category: "Political",
      availablePodcasts: 34,
      selected: false,
    },
    {
      category: "Political",
      availablePodcasts: 34,
      selected: false,
    },
  ],
};

const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {},
});

export const {} = podcastSlice.actions;
export const podcastReducer = podcastSlice.reducer;
