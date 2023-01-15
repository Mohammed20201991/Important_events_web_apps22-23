# Important Events Web apps assignment2_P622VN in Web Engineering Course 
In this application I am create an **Angular** application with a **REST API** backend. The backend server created with **Laravel**. The data  stored in a **SQLite** local database.The  database seed the  with some data which can help demonstrate the following tasks!<br>
- The client application written in Angular. <br>
- Only Angular and Laravel projects are used. <br> 
## The Main folder structure:

```
Important_events_web_apps22-23
    |client
    |     └─── package.json
    |     └─── ...Angular app here...
    |server
    |     └─── composer.json
    |     └─── ...REST API here...
    |README.md
 ```
 - Generated `node_modules` folder in the client folder and the `vendor` folder in the server folder . <br>
 - Every page contain a navigation bar on the top and a route specific content .
 <h4> The task as follows </h4>
 Important events

`Navigation bar` In the navigation bar the following elements in which take place: 

`Brand or logo`: clicking on it the application navigates to the main page<br>
`Events`: navigates to the Events page <br> 
`About`: navigates to the About page <br> 
`Main page` The main page introduces the application with some static text and image. <br> 
The only dynamic content is the number of important events, and the earliest and latest date of the events
<br>(e.g. We have 6 important events between 12-06-2017 and 05-01-2018). 

`About` The about page shows the details of the author of the application: name, neptun id, email address. <br> 
`Events` The events page shows the list of the important events in a table: date of the event, title, location and a note. <br> 
Above the list a `New event` link directs to the Add page. <br> 
Beside every row an `Edit` link directs to the Edit page. <br> 
`Add new event` On this page you can add a new event to the event database through a form: date of the event, title, location and a note. After a successful save the page redirects to the `Events page`. <br> 
`Edit` an event On this page you can edit the selected event through a prefilled form: date of the event, title, location and a note. After a successful save the page redirects to the `Events page`. 

# How to use it ? 
```
git clone https://github.com/Mohammed20201991/Important_events_web_apps22-23.git
cd Important_events_web_apps22-23
php artisan serve
run client side 
```
