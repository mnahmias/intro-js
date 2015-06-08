##Intro to Javascript

Follow along!
http://mnahmias.github.io/intro-js

---

##Agenda

* How the web works
* Role of JS
* What is the DOM?
* Components of JS
* Build a media carousel

---

##How the web works

* Server/Client relationship
* Static and Dynamic pages
* JS was historically a client-side language


---

##HTML, CSS, and JS roles

* HTML identifies content: http://mnahmias.github.io/intro-js/example/1.html
<br>
* CSS adds the visual layer: http://mnahmias.github.io/intro-js/example/2.html
<br>
* Javascript adds the interactive layer http://mnahmias.github.io/intro-js/example/3.html

---

##The DOM

The Document Object Model. The HTML you write is parsed by the browser and turned into the DOM. In a lot of cases the visual representation of the DOM will be identical to your HTML. We can use javascript to alter the DOM on the fly.

---

##Variables

* Variables are the entity Javascript uses to store data.
<br>
```
var x = 'some data'
```

--

##Data Types

Some of the types of values we support include:

* __String__ text
* __int__, __float__ numbers
* __Boolean__ true or false

---

##Strings

* Stores textual information
* Strings are surrounded by quotes
<br/><br/>
```'How is the weather today?'```
<br/><br/>

Single quotes are considered best practice.

---

##Numbers

Represent numerical data

int:         42

float:      3.14159265

---


##Arithmetic In JavaScript

![](img/unit_1/arithmetic.jpg)

---

##Conditionals

![](img/unit_1/cfDiagram.png)

---

##Making Decisions

It's either TRUE or FALSE (booleans)

If your age is greater than 18 you are an adult

```
  if (age > 18){
    document.write("You are an adult");
  }
```

---

##Conditional Syntax

```
if(condition is true) {
  //Do cool stuff
}
```

---

##Conditional Syntax

```
  if(condition is true) {
    //Do cool stuff
  }else{
    //Do other cool stuff
  }
```

---

##Conditional Syntax

```
  var topic = "JS";

  if (topic == "JS") {
    console.log("You're learning JavaScript");
  }
  else if(topic == "JavaScript") {
    console.log("You're still learning JavaScript");
  }
  else {
    console.log("You're learning something else");
  }
```

---

##Multiple Conditions

```
if (name == "GA" && password == "YellowPencil"){
  //Allow access to internet
}
```

---


##The Truth Table

```
if (name == "GA" && password == "YellowPencil"){
  //Allow access to internet
}
```

---

##The Truth Table

![](img/unit_1/and_table.png)

---

##The Truth Table

```
if (day == "Tuesday"  || day == "Thursday"){
  //We have class today
}
```

---

##The Truth Table

![](img/unit_1/or_table.png)

---

##Functions

Chunks of code that help us:

* Stay organized
* Not repeat ourselves
* Control the order things happen

---

##Function Syntax

```
function helloWorld(){
	console.log('hello!');
}
```

If this were our only javascript, nothing would ever happen!

Defining a function does not cause it to run.

---

##Function Calls

```
function helloWorld(){
	console.log('hello!');
}

console.log('world!');

helloWorld(); //this is how we call a function!
```

Console results:
```
world!
hello!
```

---

##Function Arguments

Arguments give us a way to tell a function to use certain data.

```
function greetPerson(greeting, name){
	console.log(greeting + ', ' + name + '.');
}

var message = 'Welcome to FEWD7';

greetPerson(message, 'Donatello');
greetPerson(message, 'Michaelangelo');
```

Console results:
```
Welcome to FEWD7, Donatello.
Welcome to FEWD7, Michaelangelo.
```

---

## Arrays

**Arrays** are "ordered lists". They have elements which are *indexed*, and they have a **length**. Arrays are "Zero-Indexed"

```
// Make an array, with "An Array Literal"
var todoList = ["Take out the trash", "Quit smoking", "Learn JavaScript"];

// Access element at index 1
console.log( todoList[ 1 ] ); // Prints out "Quit smoking"

// Get the length
console.log( todoList.length ); // Prints out 3

// Access the element at the length
console.log( todoList[ todoList.length ] ) // ALWAYS UNDEFINED!!

// Correct accessing of very last element
console.log( todoList[ todoList.length - 1 ] ) // Prints out "Learn JavaScript"
```

---

## Arrays

```
// Repeated for clarity
var todoList = ["Take out the trash", "Quit smoking", "Learn JavaScript"];

// Set the element at index 2
todoList[2] = "Learn AngularJS";

// Arrays can contain AnYtHiNg!
var badList = [234, "abcd", [], null]; // Don't do this. Ask me why.
```

---

##Objects

* Objects are collections of data types that all describe a single thing.
* The data in objects is represented by key/value pairs.
```
var object = {
  key: value,
  key: value,
  key: value
};
```
---

##Objects

* Objects can contain any kind of data types and even other objects.

```
var person = {
  name: 'Frumpy',
  age: 30,
  eyes: {
    left: 'green',
    right: 'orange'
  }
};
```

---
* Remember the DOM? Everything in the DOM is an object.
---


Build a complete, working HTML5 web application by building a professional swipe gallery/media carousel from scratch

---

##Good night!

<img src="img/unit_2/space_bear.gif">
