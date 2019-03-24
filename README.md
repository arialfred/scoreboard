# Scoreboard

## Prerequisites

Back-end: Python 3, Pipenv and/or Node.js

Front-end: Node.js

## Installation

Clone the repository:

`git clone https://github.com/arialfred/scoreboard.git`

### Back-end implemented with Python and Django

1. Move to the back-end project folder:

`cd scoreboard/scoreboard`

2. Create virtual environment with pipenv:

`pipenv install`

3. Activate virtual environment:

`pipenv shell`

4. Run database migrations:

`python3 manage.py migrate`

5. If you want, create superuser for admin interface:

`python3 manage.py createsuperuser`

6. Start the server:

`python3 manage.py runserver`

7. To check that back-end is up and running, start the web browser to go to the following url:

`http://localhost:8000/scoreboard/api/scores`

You should see a view where you can create and list score objects.

### Alternative back-end implemented with Node.js

1. From the project root folder, move to the back-end project folder:

`cd scoreboard/scoreboard-node-backend`

2. Install packages needed by the back-end:

`npm install`

3. Start the server:

`npm start`

### Front-end

1. From the project root folder, move to the front-end project folder:

`cd scoreboard/scoreboard-ui`

2. Install packages needed by the front-end:

`npm install`

3. Start the development server:

`npm start`

4. Previous command should also start the web browser and navigate to the front-end application. If not, start the web browser to go to the following url:

`http://localhost:3000`

Front-end and back-end are now up and running. You should be able to add scores and they should be listed in a list. You can sort the list both by name and by score by clicking the corresponding title.
