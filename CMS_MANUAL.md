# Taiwan Teen Trust Website Guide

## How to Edit Content (For Non-Technical Members)

We use **Sanity Studio** to manage the content of the website. This allows you to add team members, projects, and blog posts without touching the code.

### 1. Accessing the Studio

1.  Make sure the website is running locally (`npm run dev`).
2.  Open your browser and go to: `http://localhost:3000/studio`
3.  You will see a login screen. You may need to ask the administrator for the "Project ID" if it's not set up.

### 2. Adding Team Members

1.  Click on **Team Member** in the left sidebar.
2.  Click the **+** (Plus) button to create a new member.
3.  Fill in the **Name**, **Role**, **Bio**, and upload a **Photo**.
4.  Click **Publish** (green button) at the bottom right.
5.  Go to the **Team** page on the main website to see the new member!

### 3. Adding Projects

1.  Click on **Project** in the left sidebar.
2.  Click **Create New**.
3.  Fill in the **Title**, choose a **Category**, enter the **Year**, giving a **Description**, and upload a **Cover Image**.
4.  Click **Publish**.
5.  Check the **Projects** page to see your work.

## Setup for Developers

You need to create a project on [Sanity.io](https://www.sanity.io/).

1.  Create a free account.
2.  Create a new project.
3.  Copy the `Project ID` and `Dataset` name.
4.  Create a file named `.env.local` in the root folder.
5.  Add the following lines:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
```

Restart the server, and the Studio will connect to your real live database!
