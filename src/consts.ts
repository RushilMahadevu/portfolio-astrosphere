import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Rushil Mahadevu",
  DESCRIPTION: "Aspiring Business Leader | Entrepreneur | Data-Driven Strategist. Founder of a growing mental health initiative with proven success in operations, strategy, and community engagement.",
  AUTHOR: "Rushil Mahadevu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "My professional journey and entrepreneurial ventures.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Insights",
  DESCRIPTION: "Thoughts on business strategy, entrepreneurship, and leadership.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Business-focused projects combining strategy, technology, and impact.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experience", 
    HREF: "/work", 
  },
  { 
    TEXT: "Insights", 
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
    TEXT: "rushil.mahadevu@gmail.com",
    HREF: "mailto:rushil.mahadevu@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "linkedin.com/in/rushilmahadevu",
    HREF: "https://linkedin.com/in/rushilmahadevu",
  },
  { 
    NAME: "GitHub",
    ICON: "github",
    TEXT: "github.com/RushilMahadevu",
    HREF: "https://github.com/RushilMahadevu"
  },
  { 
    NAME: "LeetCode",
    ICON: "code",
    TEXT: "leetcode.com/u/RushilMahadevu",
    HREF: "https://leetcode.com/u/RushilMahadevu",
  },
]

