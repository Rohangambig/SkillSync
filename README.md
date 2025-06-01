# SkillSync

## Brief about SkillSync
- This web app allows company employees to apply for projects based on their skillset and resume. It features project CRUD operations, user profiles, and matching algorithms to ensure the best candidates are matched to the right projects.
- Company admin and Company Employees are the user 
- Main use of these web page is reduced time for selecting employees for developing the projects

## Features
- **CRUD operation for projects**: Admin can create, read,update and delete projects
- **Mark project as done** : Admin can mark completed project as "done."
- **Apply for Projects**: Users can apply for projects based on their resumes and profile.
- **Search Projects**: Search for projects by project name.
- **User Profiles**: Users can create and update their profiles, including uploading a resume and profile picture.
- **AI Matching**: Profiles are sorted based on an AI matching score with project requirements.
- **Project Categories**: Projects can be grouped into categories for easier navigation.
- **Application Count**: View the number of applications per project.


## Database Schema  
![Alt text](https://github.com/Rohangambig/SkillSync/blob/main/skill-sync/Schema%20Representation.png)

### Key Components:
1. **Frontend (Angular Js)**: The user interface for interacting with the project, handling user registration, login, and profile management.
2. **Backend (Node.js/Express)**: Handles the business logic for managing projects, user authentication, and AI matching.
3. **Database (MongoDB or MySQL)**: Stores user data, projects, and applications.
4. **AI Matching Engine**: A service that analyzes user profiles and matches them to projects based on their skills, experience, and resume.

## Tech Stack
- **Frontend**: Angular js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or PostgreSQL)
- **Cloud Storage**: AWS S3 / Cloudinary for file storage
- **Authentication**: JWT (JSON Web Token)
- **AI**: Python-based AI model for resume and project skill matching
