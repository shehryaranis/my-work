    function diamond( n ) 
 {
     n = parseInt(n,20);

     var i, s;

     // top: 1 to n
     document.write("<pre>");
     for(i = 1; i <= n; i++ )
     {
         // write n-i spaces:
         for ( s = 1; s <= n-i; s++ )
         {
             document.write(" ");
         }
         // then write i asterisk+space sets:
         for ( s = 1; s <= i; s++ )
         {
             document.write(" *");
         }
         document.write("\n");
     }
     // bottom: n-1 down to 1
     for(i = n-1; i >= 1; i-- )
     {
         // write n-i spaces:
         for ( s = 1; s <= n-i; s++ )
         {
             document.write(" ");
         }
         // then write i asterisk+space sets:
         for ( s = 1; s <= i; s++ )
        {
             document.write(" *");
         }
         document.write("\n");
     }
 }

 diamond(10);
// var n,c,k,space =1;
// 	n=prompt("Enter Number of rows");
// 	space =n-1;
// 	for(k=1;k<=n;k++)
// 	{
// 		for(c=1;c<=space;c++)
// 		document.write("$");
		
// 		space--;
		
// 		for(c=1;c<=(2*k)-1;c++)
// 		document.write("*");
// 		document.write("<br>");
// 	}
// 	space=1;
// 	for(k=1;k<=n;k++)
// 	{
// 		for(c=1;c<=space;c++)
// 		document.write("$");
// 		space++;
// 		for(c=1;c<=2*(n-k)-1;c++)
// 		document.write("*");
// 		document.write("<br>");
// 	}
// var n, first = 0, second = 1, next, c;
// n=prompt("Enter Number OF term");
//  document.write("Fibonacci Series  ");
// for ( c = 0 ; c < n ; c++ )
//    {
//       if ( c <= 1 )
//          next = c;
//       else
//       {
//          next = first + second;
//          first = second;
//          second = next;
//       }
	 
// 	  document.write(next + "&nbsp;");
//    }
// function diamond( n ) 
// {
//     n = parseInt(n,10);

//     var i, s;

//     // top: 1 to n
//     document.write("<pre>");
//     for(i = 1; i <= n; ++i )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; ++s )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; ++s )
//         {
//             document.write("* ");
//         }
//         document.write("\n");
//     }
//     // bottom: n-1 down to 1
//     for(i = n-1; i >= 1; --i )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; ++s )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; ++s )
//         {
//             document.write("* ");
//         }
//         document.write("\n");
//     }
//     document.write("</pre>");
// }
// diamond(7);
// document.write("<hr>\n");
// diamond(10)