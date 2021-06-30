uuidv4 - https://www.npmjs.com/package/uuidv4 - Generate keys
fontawesome - https://fontawesome.com/ - Icons
axios - https://www.npmjs.com/package/axios - fetch data
react-router-dom - https://reactrouter.com/web/guides/quick-start
bootstrap - npm install bootstrap


# Kaffa Mobile
Pre-qualification test (v1.10)

#### Description:
My solutions were made using REACT Js, mainly, and Django (REST Server Exercise).
I made a single application that holds all solucions as different components.
Some exercises had similar ideas so I merged them:

* Exercise 1 and Exercise 2;
* Exercise 5 and Exercise 6.

I added the solution to Exercises 7 and 8 to the APP as well, even it being documentation only.

#### How to run the application



<hr>

## Solucion 1 - Validade CPNJ

:file_folder: ./ReactKaffa/kaffamobile/src/Components/ValidadeCNPJ/

#### Exercise:

**1** - Validate CNPJ format and check digits
Given a string, check if it looks like a CNPJ, considering two formats:
Formatted:
"00.000.000/0000-00"
Number only:
"00000000000000"
Validate if it's a well-formed CNPJ, considering the "check digits", as defined by Receita Federal.
Important: Don't use a library. You should write the validation code.

#### Description:


<p align="left">
  <img src="gif/solution1.gif" alt='Solution 1'/>
</p>

<hr>

## Solucion 2 and 3 - Two Rectangles

:file_folder: ./ReactKaffa/kaffamobile/src/Components/TwoRectangles/

#### Exercise:

<p align="left">
  <img src="gif/exercise2.jpg" alt='Solution 1'/>
</p>

**2** - Considering two rectangles in a discrete grid (like pixels in a display), each defined by two points, return
true if they intersect, false otherwise.
Note: the points are included in the rectangle and have a dimension of 1 unit; the rectangle (0, 0; 1, 1) have an
area of 4 units.

Example:
A = (3, 5; 11, 11)
B = (7, 2; 13, 7)
C = (11, 11; 15, 13)
intersects(A, B) => true
intersects(A, C) => true
intersects(B, C) => false   


**3** - Considering two rectangles in a discrete grid (like pixels in a display), each defined by two points, compute
the area of intersection between the two.
Note: the points are included in the rectangle and have a dimension of 1 unit; the rectangle (0, 0; 1, 1) have an
area of 4 units.

Example:
A = (3, 5; 11, 11)
B = (7, 2; 13, 7)
C = (11, 11; 15, 13)
areaOfIntersection(A, B) = 15
areaOfIntersection(A, C) = 1

#### Description:


<p align="left">
  <img src="gif/solution23.gif" alt='Solution 2 3'/>
</p>

<hr>

## Solucion 4 - ToDo List

:file_folder: ./ReactKaffa/kaffamobile/src/Components/TodoList/

#### Exercise:

**4** - Simple Todo List
Todo list application that permits the creation and deletion of tasks (texts).
The application must persist the tasks between executions;
Use any storage you want: database, files, PaaS backends (Firebase, etc.);

#### Description:


<p align="left">
  <img src="gif/solution4.gif" alt='Solution 4'/>
</p>

<hr>

## Solucion 5 and 6 - World Clock

:file_folder: ./ReactKaffa/kaffamobile/src/Components/WorldClock/

#### Exercise:

**5** - Rest Client - World Clock
Application that queries a server and displays the current date/time hour in local and UTC timezones.
Server URL: http://worldclockapi.com/api/json/utc/now


**6** - Rest Server - World Clock
REST server returning a JSON like:
{
    "currentDateTime":"2019-08-12T14:40Z"
}

#### Description:


<p align="left">
  <img src="gif/solution5.gif" alt='Solution 5'/>
</p>

<p align="left">
  <img src="gif/solution6-try.gif" alt='Solution 6-try'/>
</p>

<p align="left">
  <img src="gif/solution6-resp.gif" alt='Solution 6-resp'/>
</p>

<p align="left">
  <img src="gif/solution6.gif" alt='Solution 6'/>
</p>

<hr>

## Solucion 7 - ToDo List

:file_folder: ./ReactKaffa/kaffamobile/src/Components/ERDiagram/

#### Exercise:

**7** - Entity Relationship Diagram - Simple Order Manager
Design the model of a simple Order Manager System.
The system consists of:
* Clients
* Products
* Orders
* Any other tables you may need

You can draw, describe, or list the tables as SQL.
Extras:
* SQL: list ORDERS with number of items
* Which indexes should be created in this model?

Note: this exercise is documentation only - there's no executable to run in this case.

#### Description:


<p align="left">
  <img src="gif/solution7.gif" alt='Solution 7'/>
</p>

<hr>