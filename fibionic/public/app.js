 var n, first = 0, second = 1, next, c;
 n=prompt("Enter Number OF term");
  document.write("Fibonacci Series   ");
 for ( c = 0 ; c < n ; c++ )
    {
       if ( c <= 1 )
          next = c;
       else
       {
          next = first + second;
          first = second;
          second = next;
       }
	 
 	  document.write(next + "</br>");
    }