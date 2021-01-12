/* JS Libraries */
"use strict";
(function(global, document, $) {


let clicked =0
let variableForSorting = ""
let collections=[]
let interval=0
let cardsToCheckout = []

const windowView = document.createElement('div')
const windowOverlay = document.createElement('div')
windowOverlay.style.position="fixed"
windowOverlay.style.top="0"
windowOverlay.style.right="0"
windowOverlay.style.bottom="0"
windowOverlay.style.left="0"
windowOverlay.style.backgroundColor="rgba(0,0,0,0.5)"
windowView.classList.add('modal')
const windowClose = document.createElement('button')
windowClose.classList.add('close')
windowClose.style.float="right"
windowClose.innerText="x"
const windowContent = document.createElement('div')
windowContent.classList.add('modal-content')
const windowImage = document.createElement('img')
windowImage.style.height="auto"
windowImage.style.float= "right"
windowImage.style.width="40%"
windowImage.style.marginRight="5%"
windowImage.style.marginTop="-15%"
const windowText = document.createElement('p')
const windowTitle = document.createElement('p')
const windowPrice = document.createElement('p')
windowTitle.style.fontWeight="Bold"
windowTitle.style.marginBlockStart= "0"
windowTitle.style.marginBlockEnd= "0"
windowTitle.style.paddingTop= "2%"
const windowExtendedDescription = document.createElement('p')
windowExtendedDescription.style.marginBlockStart= "0"
windowExtendedDescription.style.marginBlockEnd= "0"
windowText.style.display="block"
windowExtendedDescription.style.width = "45%"
windowContent.append(windowClose)
windowContent.append(windowTitle)
windowContent.append(windowText)
windowContent.append(windowExtendedDescription)
windowView.append(windowContent)
const windowButton = document.createElement('button')
windowButton.innerText = "Change Picture"
windowButton.style.display="inline-block"
windowButton.style.marginTop="0%"
windowButton.style.marginLeft="5%"
windowView.append(windowButton)
windowView.append(windowPrice)
windowView.append(windowImage)
windowContent.style.marginLeft="5%"
windowContent.style.display="inline-block"
windowPrice.style.display="inline-block"
windowPrice.style.marginTop="30%"
windowPrice.style.fontSize="2.0em"
windowPrice.style.marginLeft="15%"
var x = document.getElementsByTagName("BODY")[0];
x.append(windowView)
x.append(windowOverlay)
windowOverlay.style.display="none"
windowView.style.transform="translate(-50%, -50%) scale(0)"

windowClose.onclick = function() {
  windowView.style.transform="translate(-50%, -50%) scale(0)"
  windowOverlay.style.display="none"
}

windowOverlay.onclick = function(event) {
    windowView.style.transform="translate(-50%, -50%) scale(0)"
    windowOverlay.style.display="none"
}



function Enlarge(imgFolder,name,numOfPics,count,image,title,text,price,description) {


	windowView.style.transform="translate(-50%, -50%) scale(1)"
  windowOverlay.style.display="block"
  windowImage.src= image
  windowTitle.innerText=title
  windowText.innerText=text
  windowExtendedDescription.innerText=description
  windowPrice.innerText="$"+price


  windowButton.addEventListener('click',()=>
  {
    windowImage.src=imgFolder+name+count+'.jpeg'
    if(count>=numOfPics){
      count =1
    }
    else {
      count++
    }
}
)







}

function CardCollection() {
    this.collectionCart=0
    this.enlarge=0
		this.Cards = []
    this.collectionInstance=[]
    this.classToAdd=0
    this.cartShowing = "False"
    this.cardsToCheckout = []
    this.cardsHighlight = []
    this.wishListFunctionality = 0
    this.wishList =[]
    this.wishListShowing = "False"
    this.numInCollectionList =0




}

CardCollection.prototype = {
  makeCollection: function(classToAdd,withCartFunctionality,clickToEnlarge,wishListFunctionality) {
    const collection = document.createElement('div')
    collection.style = "padding-bottom:30px; padding-top: 50px; margin: 0 auto;max-width: 1000px;display: grid;  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));  grid-auto-rows: auto;gap: 15px;"
    const body = $(classToAdd)
    this.classToAdd= $(classToAdd)
    collection.classList.add('cards')
    if(withCartFunctionality=="True") {
      this.collectionCart=1
    }
    if(wishListFunctionality=="True") {
      this.wishListFunctionality=1
    }
    if(clickToEnlarge=="True") {
      this.enlarge=1
    }
			variableForSorting="Likes"
    body.append(collection)
    this.numInCollectionList=collections.length
    collections.push(collection)
		collection.id=String(collections.length-1)
    this.collectionInstance.push(collection)


  },

	//tests img= 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
	//content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?'
  // content 2= Banana republic plain white shirt
		// Every CG will make use of the same makeCircle() and changeCircleColors function
    //makecard('Shoe','images/shoe_pics/',3,'Shoe','Nice Shoe',10,"$100")
	makeCard: function(name,imgFolder,numOfPics,title,content,variableValue,price,description) {
		const card = document.createElement('div')
		card.classList.add('card')
		const cardContent = document.createElement('div')
		const cardIconDiv = document.createElement('div')
		const cardIcon = document.createElement('i')
		const cardInfo = document.createElement('div')
    const cardDescription = document.createElement('p')


    //cart functionality
		const cartContainer = document.createElement('div')
		const addToCart = document.createElement('div')
		addToCart.style.color="white"
		addToCart.innerText="Add to Cart"
		addToCart.style.backgroundColor="Black"
    addToCart.style.paddingTop="15px"
		addToCart.style.height="45px"
		addToCart.style.textAlign="center"
		cartContainer.append(addToCart)
		addToCart.style.display="none"

    //wishlist functionality
		const addToWishList = document.createElement('label')
		addToWishList.style.color="black"
    addToWishList.classList.add("fa", "fa-heart-o", "fa-1x")
		addToWishList.style.textAlign="center"
		addToWishList.style.display="block"

    addToWishList.addEventListener('click',(e)=> {
			if(e.target.classList.contains('wished')==true){
				e.target.classList.remove('wished')
          e.target.classList.remove("fa", "fa-heart", "fa-1x")
					e.target.classList.add("fa", "fa-heart-o", "fa-1x")
          console.log(e.target.parentElement.parentElement)
          const f= this.wishList.indexOf(e.target.parentElement.parentElement)
          this.wishList.splice(f,1)


			}
			else {
        e.target.classList.add('wished')
          e.target.classList.remove("fa", "fa-heart-o", "fa-1x")
          e.target.classList.add("fa", "fa-heart", "fa-1x")
          this.wishList.push(e.target.parentElement.parentElement)
			}
		})

		const image = document.createElement('img')
		const checkbox = document.createElement('i')
		checkbox.innerText="like"
		const variableLabel = document.createElement('label')
		variableLabel.innerText=String(variableForSorting+": "+variableValue)
    checkbox.addEventListener('click',function(e){
			if(e.target.classList.contains('liked')==true){
				e.target.classList.remove('liked')
					e.target.classList.remove("fa","fa-thumbs-up",'fa-2x')
					e.target.innerText="like"
					variableLabel.innerText=String(variableForSorting+": "+variableValue)
			}
			else {
				e.target.classList.add('liked')
				e.target.classList.add('fa','fa-thumbs-up','fa-2x')
				e.target.innerText=""
				variableLabel.innerText=String(variableForSorting+": "+(variableValue+1))
			}
		})

    const textNode = document.createTextNode(String(content));
    const titleTextNode = document.createTextNode(String(title));
    const titleTextNodeSpan = document.createElement('span')
    const priceTextNodeSpan = document.createElement('span')
    const textNodeSpan = document.createElement('span')
    titleTextNodeSpan.style.fontWeight="bold"
    titleTextNodeSpan.style.textAlign="center"
    titleTextNodeSpan.append(titleTextNode)
    textNodeSpan.append(textNode)
		cardContent.append(titleTextNodeSpan)
    const br = document.createElement("br");
    const br2 = document.createElement("br");
    cardContent.appendChild(br);
    cardContent.append(textNodeSpan)
    const priceTextNode = document.createTextNode("$"+String(price));
    priceTextNodeSpan.append(priceTextNode)
    cardContent.appendChild(br2);
    cardContent.append(priceTextNodeSpan)


		image.src=imgFolder+name+1+'.jpeg'

		image.style = 'width: 100%; height: 60%; object-fit: cover; display: block; border-top: 2px solid black; border-right: 2px solid black; border-left: 2px solid black;'
		cardContent.style ='text-align: center; line-height: 1.5;font-size: 0.9em;background: white; border-right: 2px solid black;border-left: 2px solid black;'
		cardInfo.style= 'padding: 15px;  display: flex;justify-content: space-between;  align-items: center;  color: black;background: #eeeeee;  font-size: 0.8em;  border-bottom: 2px solid black;border-right: 2px solid black;border-left: 2px solid black;'
		card.append(image)
		card.append(cardContent)
		cardInfo.append(checkbox)

    if(this.wishListFunctionality==1) {
      cardInfo.append(addToWishList)
    }

		cardInfo.append(variableLabel)
		card.append(cardInfo)
		cardIconDiv.append(cardIcon)
		card.append(cartContainer)



    addToCart.addEventListener('click',()=>
    {
    this.cardsToCheckout.push({"title":title,"price":price})
  }
  )

    this.cardsHighlight.push(1)
		this.Cards.push(card)

		card.id="card "+String(this.Cards.length-1)
    let count = 1;

    if(this.enlarge==1) {
		image.addEventListener('click', () => {
        Enlarge(imgFolder,name,numOfPics,count,image.src,title,content,price,description)


		}
		);
  }
   if(this.collectionCart==1) {
		card.addEventListener('mouseover',function(e){
			image.style.borderTop= "4px solid"
			image.style.borderLeft= "4px solid"
			image.style.borderRight= "4px solid"
			cardContent.style.borderLeft= "4px solid"
			cardContent.style.borderRight= "4px solid"
			cardInfo.style.borderBottom= "4px solid"
			cardInfo.style.borderLeft= "4px solid"
			cardInfo.style.borderRight= "4px solid"
      addToCart.style.display="block"


      clearInterval(interval)
      interval = setInterval(()=>{

          image.src=imgFolder+name+count+'.jpeg'
          if(count>=numOfPics){
            count =1
          }
          else {
            count++
          }

      },1000)



		});
  }
  else {
    card.addEventListener('mouseover',function(e){
			image.style.borderTop= "4px solid"
			image.style.borderLeft= "4px solid"
			image.style.borderRight= "4px solid"
			cardContent.style.borderLeft= "4px solid"
			cardContent.style.borderRight= "4px solid"
			cardInfo.style.borderBottom= "4px solid"
			cardInfo.style.borderLeft= "4px solid"
			cardInfo.style.borderRight= "4px solid"


      clearInterval(interval)
      interval = setInterval(()=>{

          image.src=imgFolder+name+count+'.jpeg'
          if(count>=numOfPics){
            count =1
          }
          else {
            count++
          }

      },1000)


		});

  }

		card.addEventListener('mouseout',function(e){
			image.style.borderTop= "2px solid"
			image.style.borderLeft= "2px solid"
			image.style.borderRight= "2px solid"
			cardContent.style.borderLeft= "2px solid"
			cardContent.style.borderRight= "2px solid"
			cardInfo.style.borderBottom= "2px solid"
			cardInfo.style.borderLeft= "2px solid"
			cardInfo.style.borderRight= "2px solid"
			const children = e.target.parentElement.childNodes

			addToCart.style.display="none"
      clearInterval(interval)
      image.src=imgFolder+name+1+'.jpeg'

		});

		const body = this.collectionInstance[0]
		body.append(card)

	},
	switchPosition: function(card1,card2) {
    const tempCardReference = this.Cards[card2].nextSibling
    this.Cards[card1].parentNode.insertBefore(this.Cards[card2], this.Cards[card1]);
     this.Cards[card1].parentNode.insertBefore(this.Cards[card1], tempCardReference);


	},
	showLiked: function() {
	const	cardsToHide = []
		for ( let i = 0; i < this.Cards.length; i++) {
			if(this.Cards[i].childNodes[2].childNodes[0].classList.contains("liked") == false) {
				cardsToHide.push(this.Cards[i])

			}


		}
		for ( let i = 0; i < cardsToHide.length; i++) {
			cardsToHide[i].style.display = "none";

		}

}, editPrice: function(cardNum,newPrice) {
	this.Cards[cardNum].childNodes[1].childNodes[4].innerText=newPrice

},
editTitle: function(cardNum,newTitle) {
	this.Cards[cardNum].childNodes[1].childNodes[0].innerText=newTitle

},
editContent: function(cardNum,newContent) {
	this.Cards[cardNum].childNodes[1].childNodes[2].innerText=newContent

},
sortByPrice: function(type){

  for(let j = 0; j < (this.Cards.length); j++) {

  for (let i = 0; i < (this.Cards.length - (j+1)); i++) {
    if(type=="descending") {
    if (parseFloat(this.Cards[i].childNodes[1].lastChild.innerHTML.replace(/[^\d.]/g, '')) < parseFloat(this.Cards[i+1].childNodes[1].lastChild.innerHTML.replace(/[^\d.]/g, ''))) {
      this.Cards[i].parentNode.insertBefore(this.Cards[i + 1], this.Cards[i]);
    } }
    else {
      if (parseFloat(this.Cards[i].childNodes[1].lastChild.innerHTML.replace(/[^\d.]/g, '')) > parseFloat(this.Cards[i+1].childNodes[1].lastChild.innerHTML.replace(/[^\d.]/g, ''))) {
        this.Cards[i].parentNode.insertBefore(this.Cards[i + 1], this.Cards[i]);
        const temp= this.Cards[i]
        this.Cards[i]= this.Cards[i+1]
        this.Cards[i+1] = temp
      }
    }
  }

 }
},
deleteCard: function(cardNum){
 this.Cards[cardNum].remove()
 this.Cards.splice(cardNum,1)




},
highlightCard: function(cardNum){
  let count2 =0;

 this.cardsHighlight[cardNum] = setInterval(()=>{
   if(count2==0) {
   this.Cards[cardNum].childNodes[0].style.borderTop= "3px solid blue"
   this.Cards[cardNum].childNodes[0].style.borderLeft= "3px solid blue"
   this.Cards[cardNum].childNodes[0].style.borderRight= "3px solid blue"
   this.Cards[cardNum].childNodes[1].style.borderLeft= "3px solid blue"
   this.Cards[cardNum].childNodes[1].style.borderRight= "3px solid blue"
   this.Cards[cardNum].childNodes[2].style.borderBottom= "3px solid blue"
   this.Cards[cardNum].childNodes[2].style.borderLeft= "3px solid blue"
   this.Cards[cardNum].childNodes[2].style.borderRight= "3px solid blue"
   count2=1
 }
  else {
    this.Cards[cardNum].childNodes[0].style.borderTop= "5px solid red"
    this.Cards[cardNum].childNodes[0].style.borderLeft= "5px solid red"
    this.Cards[cardNum].childNodes[0].style.borderRight= "5px solid red"
    this.Cards[cardNum].childNodes[1].style.borderLeft= "5px solid red"
    this.Cards[cardNum].childNodes[1].style.borderRight= "5px solid red"
    this.Cards[cardNum].childNodes[2].style.borderBottom= "5px solid red"
    this.Cards[cardNum].childNodes[2].style.borderLeft= "5px solid red"
    this.Cards[cardNum].childNodes[2].style.borderRight= "5px solid red"
    count2=0
  }


},400)

},
removeHighlightCard: function(cardNum){
  clearInterval(this.cardsHighlight[cardNum])
  this.Cards[cardNum].childNodes[0].style.borderTop= "2px solid"
  this.Cards[cardNum].childNodes[0].style.borderLeft= "2px solid"
  this.Cards[cardNum].childNodes[0].style.borderRight= "2px solid"
  this.Cards[cardNum].childNodes[1].style.borderLeft= "2px solid"
  this.Cards[cardNum].childNodes[1].style.borderRight= "2px solid"
  this.Cards[cardNum].childNodes[2].style.borderBottom= "2px solid"
  this.Cards[cardNum].childNodes[2].style.borderLeft= "2px solid"
  this.Cards[cardNum].childNodes[2].style.borderRight= "2px solid"


},
showWishList: function() {

  if(this.wishListShowing=="False") {

  this.collectionInstance[0].style.display = "list-item"

  for ( let i = 0; i < this.Cards.length; i++) {
    this.Cards[i].style.display = "none";

  }
  const mainDiv=	document.createElement('div')
  mainDiv.classList.add('container')
  this.collectionInstance[0].append(mainDiv)
  const heading=	document.createElement('h1')
  heading.innerText = "Your wishlist!"
  heading.style.paddingTop = "2%"
  heading.style.textAlign = "center"
  mainDiv.append(heading)

    for ( let i = 0; i < this.wishList.length; i++) {
    this.wishList[i].style.paddingTop = "5%"
    this.wishList[i].style.display = "block";
    this.wishList[i].style.paddingBottom = "8%"
    this.wishList[i].style.width= "65%"
    this.wishList[i].style.marginLeft ="18%"


  }

  for ( let i = 0; i < this.Cards.length; i++) {
    mainDiv.append(this.Cards[i])

  }



  const exitWishListButton = document.createElement('input')
	exitWishListButton.type="submit"
	exitWishListButton.value="Exit WishList View"
	exitWishListButton.classList.add('btn')
  mainDiv.append(exitWishListButton)

  exitWishListButton.addEventListener('click',()=> {
    for ( let i = 0; i < this.Cards.length; i++) {
        this.Cards[i].style.display = "block";
        this.Cards[i].style.paddingTop = ""
        this.Cards[i].style.display = "";
        this.Cards[i].style.paddingBottom = ""
        this.Cards[i].style.width= ""
        this.Cards[i].style.marginLeft =""
        this.collectionInstance[0].append(this.Cards[i])
    }
    this.collectionInstance[0].style.display = "grid"
    mainDiv.remove()
    this.wishListShowing='False'
  })
  this.wishListShowing ="True"

}


},

checkoutCart: function () {
  let totalItems =this.cardsToCheckout.length;
  if(this.cartShowing=='False') {
  for ( let i = 0; i < this.Cards.length; i++) {
    this.Cards[i].style.display = "none";

  }
	const mainDiv=	document.createElement('div')
	const cartDiv=	document.createElement('div')
	cartDiv.classList.add('container')
	const cartHeader = document.createElement('h4')
	cartHeader.innerText= "Cart"
	const cartSpan = document.createElement('span')
	cartSpan.classList.add('price')

	cartHeader.append(cartSpan)
	cartDiv.append(cartHeader)
	mainDiv.append(cartDiv)

  let total =0;
	for ( let i = 0; i < this.cardsToCheckout.length; i++) {
		const cartP = document.createElement('p')
		cartP.innerText= this.cardsToCheckout[i].title
		const pSpan = document.createElement('span')
		pSpan.classList.add('price')
		pSpan.innerText= "$"+String(this.cardsToCheckout[i].price)
    const removeButton = document.createElement('button')
    removeButton.style.marginLeft= "2%"
    removeButton.innerText = "remove item"


    total += this.cardsToCheckout[i].price

		cartP.append(pSpan)
    cartP.append(removeButton)
		cartDiv.append(cartP)

    removeButton.addEventListener('click',()=> {
      total-= this.cardsToCheckout[i].price
      cartP.remove()
      totalItems=totalItems-1
      cartSpan.innerText= String(totalItems)+" items"
      totalSpan.innerText= "$"+String(total)

    })
	}
  cartSpan.innerText= String(totalItems)+" items"

	const hr = document.createElement('hr')
	const totalP = document.createElement('p')
	totalP.innerText="Total:"
	const totalSpan = document.createElement('span')
	totalSpan.classList.add('price')
	totalSpan.innerText= "$"+String(total)


	totalP.append(totalSpan)
	cartDiv.append(hr)
	cartDiv.append(totalP)


	const infoAndPaymentDiv=	document.createElement('div')
	const divWithoutButton=	document.createElement('div')

	const infoDiv=	document.createElement('div')
	const infoHeader=	document.createElement('h3')
	infoHeader.innerText="Information"
	const infoLabel=	document.createElement('label')
	infoLabel.innerText="Full name"
	const nameInput=	document.createElement('input')
	nameInput.type="text"
	nameInput.name="full name"
	nameInput.placeholder="ex: Shadman Aziz"
	const emailLabel=	document.createElement('label')
	emailLabel.innerText="email address"
	const emailInput=	document.createElement('input')
	emailInput.type="text"
	emailInput.name="email"
	emailInput.placeholder="ex: 97sdmn@gmail.com"
	infoDiv.append(infoHeader)
	infoDiv.append(infoLabel)
	infoDiv.append(nameInput)
	infoDiv.append(emailLabel)
	infoDiv.append(emailInput)

	divWithoutButton.append(infoDiv)
	infoAndPaymentDiv.append(divWithoutButton)
	infoAndPaymentDiv.classList.add('container')
	mainDiv.append(infoAndPaymentDiv)

	const paymentDiv=	document.createElement('div')
	const paymentHeader=	document.createElement('h3')
	paymentHeader.innerText="Payment"
	const cardNameLabel=	document.createElement('label')
	cardNameLabel.innerText="name on card"
	const cardNameInput=	document.createElement('input')
	cardNameInput.type="text"
	cardNameInput.name="card name"
	cardNameInput.placeholder="ex: Shadman Aziz"
	const cardNumberLabel=	document.createElement('label')
	cardNumberLabel.innerText="card Number"
	const cardNumberInput=	document.createElement('input')
	cardNumberInput.type="text"
	cardNumberInput.name="card number"
	cardNumberInput.placeholder="ex: 9797-4444-6666-1111"
	paymentDiv.append(paymentHeader)
	paymentDiv.append(cardNameLabel)
	paymentDiv.append(cardNameInput)
	paymentDiv.append(cardNumberLabel)
	paymentDiv.append(cardNumberInput)

	divWithoutButton.append(paymentDiv)

	const submitButton = document.createElement('input')
	submitButton.type="submit"
	submitButton.value="submit"
	submitButton.classList.add('btn')
  submitButton.addEventListener('click',()=>{
    console.log({"name":nameInput.value,"email":emailInput.value,"Card Name": cardNameInput.value,"Card":cardNumberInput.value,})
  })

  const exitCartButton = document.createElement('input')
	exitCartButton.type="submit"
	exitCartButton.value="Exit Cart View"
	exitCartButton.classList.add('btn')

  exitCartButton.addEventListener('click',()=> {
    for ( let i = 0; i < this.Cards.length; i++) {
      this.Cards[i].style.display = "block";
      this.cardsToCheckout = []

    }
    mainDiv.remove()
    this.cartShowing='False'
  })


	infoAndPaymentDiv.append(submitButton)
  infoAndPaymentDiv.append(exitCartButton)

  const body = this.classToAdd
  body.append(mainDiv)
  this.cartShowing='True'
}

}




}
global.CardCollection = global.CardCollection || CardCollection
})(window, window.document, $);
