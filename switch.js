let username = 'Jason';
username = 'Steve';
username = 'Sam';
username = 'Paul';

switch (username) {
  case 'Jason':
    console.log('Welcome back, Jason');
    break;

  case 'Steve':
    console.log('Welcome bac, Steve');
    break;

  case 'Sam':
    console.log('Welcome back, Sam');
    break;

  default:
    console.log('Who are you?');
    break;
}

// Set the student's grade
const grade = 87;

switch (true) {
  // If score is 90 or greater
  case grade >= 90:
    console.log('A');
    break;
  // If score is 80 or greater
  case grade >= 80:
    console.log('B');
    break;
  // If score is 70 or greater
  case grade >= 70:
    console.log('C');
    break;
  // If score is 60 or greater
  case grade >= 60:
    console.log('D');
    break;
  // Anything 59 or below is failing
  default:
    console.log('F');
}

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
  // January, February, March
  case 0:
  case 1:
  case 2:
    console.log('Winter');
    break;
  // April, May, June
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  // July, August, September
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  // October, November, December
  case 9:
  case 10:
  case 11:
    console.log('Autumn');
    break;
  default:
    console.log('Something went wrong.');
}
