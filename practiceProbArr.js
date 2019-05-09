var user0 = {
    name: 'James',
    email: null,
    flag: true
  }
  function updateUserEmail( array, property, value, newEmail ) {
    for( var i = 0; i < array.length; i++ ) {
      if ( array[i][property] === value ) {
        array[i].property = newEmail;// code here
      }
    }
    return array;
  }

  var newEmail = 'johnny@made-up.com'
  var newUser = updateUserEmail(user0, user0.email, null, newEmail);
  console.log(newUser);
