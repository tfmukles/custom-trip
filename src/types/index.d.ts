export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export interface DynamicContent {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  data: any;
  setData: any;
}

export type IFormData = {
  location: {
    name: string;
  };
  dates: {
    startDate: string;
    endDate: string;
  };
  travelers: {
    adults: string;
    children: string;
    ages: {};
  };
  budget: {
    form: string;
    to: string;
  };
  activites: {
    intersettodo: intersettodo[];
    considerations: boolean;
  };
  extra: {
    vibe: string[];
  };
};

export interface intersettodo {
  label: string;
  children?: intersettodo[];
}
