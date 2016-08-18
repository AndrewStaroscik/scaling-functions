/* Functions to determine equation of a straight line between two points for linear scaling during scroll events*/


module.exports = {
  /* Linear relationships */
  linear: {
    /*
      @param {number} x1 - x pos of one point
      @param {number} x2 - x pos of second point
      @param {number} y1 - y pos of one point
      @param {number} y2 - y pos of second point

      @return {object} containing
        m: slope of line
        b: y intercept of line
    */
    calcEqn: function (x1,x2,y1,y2) {
      let m = (y2-y1)/(x2-x1);
      let b = y1 - (m*x1);

      return {m: m, b: b};
    },
    /*
      @param {number} x - x pos of one point
      @param {number} m - slope of the relationship
      @param {number} b - y intercept

      @return {number} y pos for that x
    */
    calcPt: function (x,m,b) {
      return (x*m)+b;
    }
  }
  /*Add other transformations here?*/
}

/* In future may expand to include other transformations (elastic, ease, etc) */