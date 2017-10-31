
import { Age } from './../js/age.js';
describe('Age', function() {
  let dob;
  beforeEach(function() {
    dob = new Age('1980-10-10', 85)
  });
  // Note: This app is designed to give the age of a person in the years of various planets. Due to the fact that the ages will change over time, the test will eventually fail. They should be flexible enough for initial testing and evaluation of the project.
  it('should test whether a Age was properly initialized', function() {
    expect(dob.diffInSeconds).toEqual(dob.current - Math.floor(new Date([1980, 10, 10])));
  });

  it('should test whether a Age returns the correct number of Mercury years', function() {
    expect(dob.mercury(dob.earth()) > 153).toEqual(true);
  });

  it('should test whether a Age returns the correct number of Earth years', function() {
    expect(dob.earth() > 36).toEqual(true);
  });

  it('should test whether a Age returns the correct number of Venus years', function() {
    expect(dob.venus(dob.earth()) > 59).toEqual(true);
  });

  it('should test whether a Age returns the correct number of Mars years', function() {
    expect(dob.mars(dob.earth()) > 19 ).toEqual(true);
  });

  it('should test whether a Age returns the correct number of Jupiter years', function() {
    expect(dob.jupiter(dob.earth()) > 3).toEqual(true);
  });
});
