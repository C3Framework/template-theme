const Config: ThemeConfig = {
  addonType: "theme",
  id: "ExampleAddon",
  name: "Example Addon",
  version: "1.0.0.0",
  category: "general",
  author: "Author",
  description: "Description",
  icon: "icon.svg",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  addonUrl: 'https://www.construct.net/addons/',
  githubUrl: "https://github.com/",
  colors: {
    background: '#eeeeee',
    pallete: {
      primary: '#3E92CC',

      // * --- Accent Colors --- * //
      objectType: '#00b1cc',
      data: '#1acc6b',
      layout: '#F76F8E',

      // * --- Construct Colors --- * //
      turquoise: '#29f3d0',
      green: '#3ff276',
      yellow: '#e4fb45',
      orange: '#fc7770',
      pink: '#ff465f',
      red: '#fb6db6',
      purple: '#ba96ff',
      blue: '#38e1ff',
      lightGray: '#ddeaf8',
      darkGray: '#a8bac7',
    },
  }
};

export default Config;
