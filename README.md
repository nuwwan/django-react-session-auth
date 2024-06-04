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
Backend is using 'Black' and 'Isort' for code formattings. Developer can following commands to do batch formattings(applies for whole application). This commands needed to be run on home directory.
```
black .
isort .
```

### 3. Add pyproject.toml file
All the 'Black' and 'Isort' formatting definitions are stored in this file. Developers can add any style definitions to this file and run above black and isort commands and all new formatting definitions will be applied for the python files.

### 4. Logger
### 5. Unit Testing

### How to Set-up
1. Clone the repository.
2. create a virtual environment
```
python3 -m venv _env_name_
```
3. Activate virtual Environment
```
source _env_name_/bin/activate
```
4. Install dependencies
```
cd backend
pip install -r requirements.txt
```
5. Run migrations
```
python manage.py migrate
```
6. Run dev server
```
python manage.py runserver 0.0.0.0:9000
```

## Frontend
Frontend React app has the essential pages like user register, login, home, and protected page(for user). This is a simple application and doesn't come with any CSS framework as the user can add any CSS component library as prefered.
### How to set up
1. Install dependencies.
```
npm install
```
2. Run the FrontEnd on local.
```
npm start
```

### Other useful commands
1. Run formattings(prettier)
```
npm run formattings
```
