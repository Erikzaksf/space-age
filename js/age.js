export class Age {
  constructor(birthday, lifeExp) {
    this.lifeExp = lifeExp;
    const dobArrary = birthday.split('-');
    const dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    const dobNum = Math.floor(dob);
    this.current = Math.floor(Date.now());
    this.diffInSeconds = (this.current - dobNum)
  }

  earth() {
    return(this.diffInSeconds/31557600000) ;
  }

  mercury(earth) {
    return earth /.24
  }

  venus(earth) {
    return earth /.62
  }
}
