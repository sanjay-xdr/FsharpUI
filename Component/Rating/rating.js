const ratingStars = [...document.getElementsByClassName("rating__star")];

const executeRating = (stars) => {
  const starActive = "rating__star fas fa-star";
  const starInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starInactive) {
        for (i; i >= 0; --i) stars[i].className = starActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starInactive;
      }
    };
  });
};
executeRating(ratingStars);
