# blog-e2e

#### List of article routes:

**Route**            |    **HTTP**   | **Description**
---------------------|---------------|------------------------
/article             | GET           | get all article
/article             | POST          | create an article
/article/:slug       | GET           | get one data article
/article/:slug       | PUT           | update data article
/article/:slug       | DELETE        | delete data article

#### List of user routes:

**Route**            |    **HTTP**   | **Description**
---------------------|---------------|------------------------
/user/signup         | POST          | create new user
/user/signin         | POST          | sign in user
/user                | GET           | get all user
/user/:username      | GET           | get one data user
/user/:username      | PUT           | update data user
/user/:username      | DELETE        | delete data user

### **USAGE**
#### With only npm:

>npm install express nodemon chai chai-http cors dotenv cors <br>
>mongodb mongoose passport passport-local passport-local-mongoose slug<br>

>npm start <br>
>npm run dev <br>

#### Running mongod:
> sudo service mongod start <br>
> check connection @robomongo <br>

Access the website via http://localhost:3000/
