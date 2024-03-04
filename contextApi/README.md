This project is a short and simple example of useContext hook in React. <br>

## Components
- Navbar component -> Navigation bar component. On screen widths below 800px the nav items will not be shown by default, instead a toggle icon will be there. Upon toggling it the entire nav menu will be displayed like this.
![alt text](image.png)

On screen width greater than 800px, the navbar is as shown below

![alt text](image-1.png)

- Login Component -> Its composed of two parts, the first one is a simple description component and the second part is a simple form. Following controls have been implemented.
  - The user will not be able to submit until each of username, password and email fields have been populated.
  - Each of the user credentials will be stored in state and this state will be further used via **context** in Profile Component.
![alt text](image-2.png)

**The button component is a reusable react component** 
<hr>

**Usage of context**

- Context is used to store username so that username can be passed through various components without prop drilling.
- Its also used to store if form is submitted or not.
- Its also used to store navbar status i.e. if it has to toggle or not and depening upon that css of other components will be changed.


