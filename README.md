# lukeahn-website

Currently, the website is hosted on AWS EC2 with Route53.

Basic commads to run on AWS.


To use forever.js go to source directory and type:

  forever start server.js

Single Runs 

  node server.js

To kill forever.js
  
  forever stop 0 [or the process]
  
To kill a hanging listener

  sudo netstat -antlp 
  
  sudo netstat -antlp | grep PID 
  
  sudo kill -9 PID
  
  
  
