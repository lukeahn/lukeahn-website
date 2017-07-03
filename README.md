# lukeahn-website

Currently, the website is hosted on AWS EC2 with Route53.

Basic commads to run on AWS.


To use forever.js go to source directory and type:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sudo forever start server.js

Single Runs 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; node server.js

To kill forever.js
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; forever stop 0 [or the process]
  
To kill a hanging listener

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sudo netstat -antlp 
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sudo netstat -antlp | grep PID 
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sudo kill -9 PID
  
  
  
