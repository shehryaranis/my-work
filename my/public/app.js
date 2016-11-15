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