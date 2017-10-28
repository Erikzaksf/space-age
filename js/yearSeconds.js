export class Age {
  constructor(age, lifeExp){
    this.lifeExp = lifeExp;
    const dobNum = Math.floor(dob);
    this.current = Math.floor(Date.now());
    const dobArrary = age.split('-');
    const dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    this.diffInSeconds = (this.current - dobNum)
  }

  earth() {
    return(this.diffInSeconds/315576000);
  }

}
