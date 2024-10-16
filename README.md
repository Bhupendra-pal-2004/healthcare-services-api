# Healthcare Services API

## This is a simple Node.js and Express API to manage healthcare services, using MongoDB for data storage.

##Setup Instructions
  
 ### 1.Install Dependencies:
       ```bash
       npm install 

 ### 2.create a ".env" file 
     set enviroment variable 
       ``` copy this in file
          "
           PORT = 8080
           MONGO_URI= mongodb+srv://bhupendra:bhupendra@cluster0.up2p8.mongodb.net/healthcare?retryWrites=true&w=majority&appName=Cluster0

          "
###  3. Run the Project:
       ``` bash
         npm run server
``
### 4.Testing the API using Postman or Unit Tests
 You can Use the endpoints provided in the instructions:
        Get all services:
            GET http://localhost:3000/api/services
       Update a service:
           PUT http://localhost:3000/services/:id
       Delete a service:
           DELETE http://localhost:3000/services/:id 

