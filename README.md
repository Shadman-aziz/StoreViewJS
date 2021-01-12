# js-library-azizshad

Link to Landing-Page/Examples page :  https://gentle-sierra-89361.herokuapp.com/

Copy of "Getting Started" section from Documentation page: 

Getting Started (setup)

make sure to include the following lines in the header of your HTML file:
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="card-make.css">
  <script src="dom_load.js"> </script>
  <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> </script>
  
  <script defer type="text/javascript" src='javascript-library.js'> </script>
  ```

this is how you declare a StoreViewJS card collection:
```
  const collection = new CardCollection()
```
 
this is how you make a card collection object:
```
  collection.makeCollection(classToAdd,withCartFunctionality,clickToEnlarge,wishListFunctionality)
```
this is how you add a card object to your collection object:
```
  collection.makeCard(name,imgFolder,numOfPics,title,content,variableValue,price,description)
```  
  The rest of the detailed documentation about what each of the parameters mean is in API page, linked below:

Link to Documentation/API page: https://gentle-sierra-89361.herokuapp.com/api_list.html
