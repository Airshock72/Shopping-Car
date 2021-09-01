const INITIAL_STATE = {
  sections: [
    {
      title: "american",
      imageUrl:
        "https://i.pinimg.com/564x/65/4e/3c/654e3ce0fa307b8fa5c402ca902311f8.jpg",
      id: 1,
      linkUrl: "shop/american",
    },
    {
      title: "german",
      imageUrl:
        "https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/bmw5series.jpg?itok=xUuy1oS9",
      id: 2,
      linkUrl: "shop/german",
    },
    {
      title: "japanese",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/2019/05/14150725/2019-Acura-NSX-Ratings-Thermal-Orange-Pearl-ocean-background-Large.jpg",
      id: 3,
      linkUrl: "shop/japanese",
    },
    {
      title: "english",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pepermint-elise-cup-250-driving-1-1497887375.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/english",
    },
    {
      title: "italian",
      imageUrl:
        "https://cdn.carbuzz.com/gallery-images/1600/430000/900/430978.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/italian",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default directoryReducer;
