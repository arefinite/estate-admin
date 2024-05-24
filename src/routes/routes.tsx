import AdminLayout from '@/layouts/AdminLayout'
import {
  AddBlog,
  AddDeveloper,
  AddProperty,
  AdminAbout,
  AdminDubaiFact,
  AdminError,
  AdminGuideOnRenting,
  AdminGuideToSelling,
  AdminInvestIn,
  AdminLogin,
  AdminPrivacyPolicy,
  AdminSettings,
  AdminWhyDubai,
  AdminWhyInvestOffPlan,
  Dashboard,
  ManageBlogs,
  ManageDevelopers,
  ManageProperties,
} from '@/pages/admin'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    path: '/admin',
    errorElement: <AdminError />,
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'add-blog',
        element: <AddBlog />,
      },
      {
        path: 'add-developer',
        element: <AddDeveloper />,
      },
      {
        path: 'add-property',
        element: <AddProperty />,
      },
      {
        path: 'about-page',
        element: <AdminAbout />,
      },
      {
        path: 'privacy-policy-page',
        element: <AdminPrivacyPolicy />,
      },
      {
        path: 'dubai-fact-page',
        element: <AdminDubaiFact />,
      },
      {
        path: 'guide-on-renting-page',
        element: <AdminGuideOnRenting />,
      },
      {
        path: 'guide-to-selling-page',
        element: <AdminGuideToSelling />,
      },
      {
        path: 'invest-in-off-plan-page',
        element: <AdminWhyInvestOffPlan />,
      },
      {
        path: 'invest-in-dubai-real-estate-page',
        element: <AdminInvestIn />,
      },
      {
        path: 'why-dubai-page',
        element: <AdminWhyDubai />,
      },
      {
        path: 'manage-blogs',
        element: <ManageBlogs />,
      },
      {
        path: 'manage-developers',
        element: <ManageDevelopers />,
      },
      {
        path: 'manage-properties',
        element: <ManageProperties />,
      },
      {
        path: 'admin-settings',
        element: <AdminSettings />,
      },
    ],
  },
  {
    path: 'administrator/login',
    element: <AdminLogin />,
  },
])
