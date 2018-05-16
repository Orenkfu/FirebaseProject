# O Shop

A home-made project simulating a grocery e-store.

## Angular version

clone the repo, open angular folder with prefered editor, and run the npm command "npm install" to install dependencies.
then deploy webpack with "ng serve" command.

## Features

* As admin, you are able to create or update products using a 'template' form that will simulate the final result pre-commit.

* A reactive navbar which will react to your authentication and authorization status.

* Log in using your google account through google's Login API.

* View changes in real time using angular's observable pattern combined with Firebase's real-time nature.

* In development: store your "desired products" in a shopping cart for later check-out.

* In development: Check out your final orders. 


## Firebase server

The application is deployed to Firebase servers and can be viewed real time from the browser at : **https://fir-demo-a1b64.firebaseapp.com**

### Known issues:

As of now, authenticating with your user account will not grant you admin grants and the only way to view the Admin page is by manually changing user authorization on the back-end.
