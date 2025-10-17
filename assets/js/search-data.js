// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "For a complete list of publications, please visit my Google Scholar page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-recived-the-mit-postdoctoral-fellowship-program-for-engineering-excellence",
          title: 'I recived the MIT Postdoctoral Fellowship Program for Engineering Excellence.',
          description: "",
          section: "News",},{id: "news-i-defenced-my-ph-d-thesis-a-computational-framework-for-efficient-human-agent-teamwork-at-university-of-pittsburgh",
          title: 'I defenced my Ph.D. thesis A Computational Framework for Efficient Human-Agent Teamwork at...',
          description: "",
          section: "News",},{id: "news-our-paper-modeling-latent-partner-strategies-for-adaptive-zero-shot-human-agent-collaboration-get-accpeted-at-neurips-2025-see-you-in-san-diego",
          title: 'Our paper Modeling Latent Partner Strategies for Adaptive Zero-Shot Human-Agent Collaboration get accpeted...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
