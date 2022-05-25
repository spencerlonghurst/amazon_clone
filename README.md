# amazon_clone
A clone of the famous Amazon e-commerce website.


rfce in a new file will create the scaffolding for a new component. Includes the imports, function and exports.

dependencies installed:
  -firebase
  -Material UI
  -Material UI/icons-material
  -react-router-dom
  -react-currency-format --save --force
  -sudo npm i -g firebase-tools
  -@stripe/stripe-js
  -@stripe/react-stripe-js
  -axios


Push items to The data layer, or the React Context API (similar to Redux)

Learned about using the optional chaining method: ?.

Learned about createContext, useContext, useReducer

potentially add react flip move

-ran firebase login
-ran firebase init (Hosting, use an existing project, 'select project'... public directory: build, single-page: Yes)
-ran npm run build


/// BACKEND ///

To build out the backend:
  -firebase init
  -Function: Configure a Cloud Functions directory and its files
  -Javascript
  -ESLint: yes
  -install dependencies: yes

-Express app hosted on a cloud function

-npm i express
-npm i cors
-npm i stripe
-firebase emulators:start (used to spin up a local server)
-npm i moment


DEPLOY BACKEND

firebase deploy --only functions (this deploys just the backend)

///  CHECK THE LIGHT GRAY BUTTON IN CSS ///

-npm run build
-firebase deploy --only hosting

