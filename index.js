// 1. Inspect the starter code.
let content = document.querySelector('.js-generated.content')

// 2. Create an H1 element.
let header = document.createElement('h1')

// 3. Set the class attribute.
header.setAttribute('class', 'dog-name')

// 4. Append 'Rizzo' to it.
header.append('Rizzo')          // adding the content 'Rizzo'

// 5. Append it to the Content Container.
content.append(header)          // appending the 'Rizzo' header to the content variable in step 1 = adding it to our DOM.

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)


