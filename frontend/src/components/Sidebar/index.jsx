import React from 'react';
import SideMenuWidget from '../Widget/SideMenuWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import NewsletterStyle5 from '../Widget/NewsletterStyle5';
const categoryData = [
  {
    title: 'Health Tips and Tricks',
    url: '/',
  },
  {
    title: 'Trends and Analysis',
    url: '/',
  },
  {
    title: 'Time Management',
    url: '/',
  },
];
const recentPostData = [
  {
    title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
    author: 'James Brown',
    date: 'August 10, 2023',
    href: '/blog/blog-details',
  },
  {
    title: `Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle`,
    author: 'James Brown',
    date: 'August 09, 2022',
    href: '/blog/blog-details',
  },
  {
    title: `Managing Chronic Pain: Treatment Options and Strategies`,
    author: 'James Brown',
    date: 'August 08, 2022',
    href: '/blog/blog-details',
  },
  {
    title: `The Role of Physical Therapy in Injury Recovery and Prevention`,
    author: 'James Brown',
    date: 'August 07, 2022',
    href: '/blog/blog-details',
  },
  {
    title: `Allergies and Asthma: Causes, Symptoms, and Treatment Options`,
    author: 'James Brown',
    date: 'August 10, 2023',
    href: '/blog/blog-details',
  },
];

export default function Sidebar() {
  return (
    <div className="cs_sidebar">
      <div className="cs_sidebar_item widget_categories">
        <SideMenuWidget title="Popular Categories" data={categoryData} />
      </div>
      <div className="cs_sidebar_item">
        <RecentPostWidget title="Popular Articles" data={recentPostData} />
      </div>
      <div className="cs_sidebar_item widget_categories">
        <NewsletterStyle5 title="Newsletter Sign Up Form" />
      </div>
    </div>
  );
}
