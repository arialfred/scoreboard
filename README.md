# Scoreboard

## Prerequisites

Back-end: Python 3, Pipenv

Front-end: Node.js, npm

## Installation

### Back-end

1. Clone the repository:

`git clone https://github.com/arialfred/scoreboard.git`

2. Move to the back-end project folder:

`cd scoreboard/scoreboard`

3. Create virtual environment with pipenv:

`pipenv install`

4. Activate virtual environment:

`pipenv shell`

5. Run database migrations:

`python3 manage.py migrate`

6. If you want, create superuser for admin interface:

`python3 manage.py createsuperuser`

7. Start the server:

`python3 manage.py runserver`

8. To check that back-end is up and running, start the web browser to go to the following url:

`http://localhost:8000/scoreboard/api/scores`

You should see a view where you can create and list score objects.

### Front-end

1. From the project root folder, move to the front-end project folder:

`cd scoreboard/scoreboard-ui`

2. Install packages needed by front-end:

`npm install`

3. Start the development server:

`npm start`

4. Previous command should also start the web browser and navigate to the front-end application. If not, start the web browser to go to the following url:

`http://localhost:3000`

Front-end and back-end are now up and running. You should be able to add scores and they should be listed in a list, and you can sort the list both by name and by score by clicking the corresponding title.
