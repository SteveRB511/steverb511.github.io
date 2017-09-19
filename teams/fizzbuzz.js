var three; 
var five;

for( var i = 0; i < 100; i++ ) {
   
  if( (i +1)%3 === 0 && (i +1)%5 === 0 ) {
    console.log( "fizzbuzz" );
    }
  else if( (i +1)%3 === 0 ) {
    console.log( "fizz" );
    }
  else if( (i +1)%5 === 0 ) {
    console.log( "buzz" );
    }
  else {
    console.log( i + 1 );
    }
}
