# Cat Lover React App

This project has 3 diferrent pages and one common Navbar.

### Navbar

It has two buttons. The home button redirects you to the home page and the favourite butoon redirect you to the favourites page.
Also clicking the header redirects you to the home page.

### Home page

In the homepage 10 random cat images are rendered.
Clicking on an image the url changes and a modal opens with the cat details while in the background home page is displayed.
In the modal you can see the cat image, the breed details if they are available and also a button which adds/remove the cat from your favourites.

### Favourites page

In the Favourites page you can see all the cats that are added to you favourites and if you want to remove one, you can click the cat image where a modal opens with the cat details (favourites page displayed on the background) and click the `Remove from favourites` button.

## Developer notes

### Libraries used for the project

- "react-scripts"
- "react-router-dom"
- "react-jss"

### Features not implemented for time reasons

### Breed list page

I believe if I had more time I could implement this page.

### Load more images button on the home page.

Again due to time restrictions I coudn't implement it.

### Remove from favourites page

I should definitely implement a better UX option about removing a favourite. Probably a small "heart" shaped button on the top left on every image and by clicking remove the cat id from the local state and also trigger the delete request. But in that case I am not sure how I should handle cases like delete request failed etc. and I would need more time to think the best approach.
