/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const twoModule = (cardsNumber) => {
  // Create a new container for the card
  const container = document.createElement('div');
  container.classList.add('card-container');
  let isCard = cardsNumber;
  if (isCard === 1) container.style.left += `${20}%`;
  if (isCard === 2) container.style.left += `${50}%`;
  if (isCard === 3) container.style.left += `${80}%`;

  // Create the card and its faces
  const card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  card.appendChild(cardFront);

  const bannerImage = document.createElement('div');
  bannerImage.classList.add('banner-image');
  cardFront.appendChild(bannerImage);

  const h1 = document.createElement('h1');
  h1.textContent = 'Your Title Here';
  cardFront.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Your content here';
  cardFront.appendChild(p);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  card.appendChild(cardBack);

  const cardBackContent = document.createElement('div');
  cardBackContent.classList.add('card-back-content');
  cardBack.appendChild(cardBackContent);

  const h1Gender = document.createElement('h1');
  h1Gender.textContent = 'Gender';
  cardBackContent.appendChild(h1Gender);

  const pGender = document.createElement('p');
  pGender.textContent = 'Male';
  cardBackContent.appendChild(pGender);

  const h1DateOfBirth = document.createElement('h1');
  h1DateOfBirth.textContent = 'Date of Birth';
  cardBackContent.appendChild(h1DateOfBirth);

  const pDateOfBirth = document.createElement('p');
  pDateOfBirth.textContent = '01/01/2000';
  cardBackContent.appendChild(pDateOfBirth);

  // Append the container to the document body
  document.body.appendChild(container);
}

export default twoModule;
