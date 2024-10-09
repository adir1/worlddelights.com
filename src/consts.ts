import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "World Delights LLC",
  DESCRIPTION: "Welcome to World Delights LLC - A Boutique IT Consultancy specializing in cloud projects from Medium to Enterprise size",
  AUTHOR: "Adi Rabinovich",
}

// About Page
export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "About World Delights LLC",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Learn more about life at World Delights LLC",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Some recent World Delights LLC projects",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all blog posts and projects by any keyword",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "About", 
    HREF: "/about", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "info@worlddelights.com",
    HREF: "mailto:info@worlddelights.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "worlddelights",
    HREF: "https://github.com/worlddelights"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "World Delights LLC",
    HREF: "https://www.linkedin.com/in/worlddelights/",
  },
  { 
    NAME: "Threads",
    ICON: "mastodon",
    TEXT: "worlddelights",
    HREF: "https://threads.net/worlddelights",
  },
]

