let resturant = {
  name: "vassu",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guestCount - this.guestCount;
    return partySize <= seatLeft;
  },

  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

resturant.seatParty(72);
console.log(resturant.checkAvailability(4));
resturant.removeParty(5);
console.log(resturant.checkAvailability(4));
