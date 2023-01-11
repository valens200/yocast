//All variable types of the project

import { ReactNode } from "react";

export type cardType = {
  title: String;
  percentage: String;
  value: number;
  backgroundColor: String;
  view: String;
  icon: ReactNode;
};

export type podcastsCategoryType = {
  category: String;
  availablePodcasts: number;
  selected: boolean;
};

export type File = {
  path: String;
  lastModified: String;
  lastModifiedDate: Object;
  name: String;
  size: number;
  type: String;
  webkitRelativePath: String;
};
export type inputFieldType = {
  placeholder: String;
  type: String;
  options: String[];
};

export type sidebarFormInputType = {
  label: String;
  type: String;
  placeholder: String;
  options: String[];
};

export type sidebarFormType = {
  title: String;
  inputs: sidebarFormInputType[];
};

export type activityType = {
  title: String;
  titleImage: String;
  description: String;
  time: String;
  descriptionImage: String[];
};
export type sidebarLinksType = {
  title: String;
  link: String;
};
export type bookMark = {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
};

export type category = {
  name: string;
  id: number;
  image: string;
  bookMarks: bookMark[];
};

export type addbook = {};

export type data = {
  name: string;
  type: string;
};

export type stateTemplate = {
  input: string;
  value: string;
};
