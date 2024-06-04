# Django Session based REST API(Custom Auth user Model)
This application has django REST API(Backend) and React(Frontend) applcation which uses session based user authentication schema. This application can be used as a get starter for a fullstack application.

## Backend
I strongly advice to make following changes at the very beginning of any django based project. Following these steps might reduce heavy code changes in Merge Requests(you can make small-sized MRs) which might 
save more time when merging/rebasing the pull requests. Further thelse steps might help to introduce good coding practices to your codebase at the very beginning of the project.

### 1. Custom Auth User
Developing Custom Auth user is at the very beginning of starting the development of the project might help a lot to mitigate the effort and pain when needing to make customizations to the auth user while application grows and more requirements needed to make for the auth user. There are 2 ways to this. Django provides 2 classes to make this process easy. 
* Extend the AbstractUser model.
* Extend the AbstractBaseUser model. 

In this project, i follows the 2nd method and which provied fully flexibility to the developer while django taking careof the most required operations including password hashing etc. You can find this custom auth user inside the backend/authentication/models.py. Further i've created a auth user manager class which responsible for creating auth user and super user.

NOTE: PLEASE NOTE THAT, YOU SHOULD CREATE A CUSTOM AUTH USER BEFORE RUNNING THE MIGRATIONS FOR THE FIRST TIME.
### 2. Linting
### 3. Add pyproject.toml file
### 4. Logger
### 5. Unit Testing

## Frontend

### How to set up
1. Install dependencies.
```
npm install
```
2. Run the FrontEnd on local.
```
npm start
```
