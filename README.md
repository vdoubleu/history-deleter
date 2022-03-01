# History Deleter

This a web application that we are making for deleting user histories.

To get started, first run the following to install relevant packages
```
npm install
```
or 
```
yarn install
```

You will also need to use the google search api. To do that, you will need an api key and a custom search engine. You can get both of these from here:  
`https://cse.google.com/cse/all`  
`https://developers.google.com/custom-search/v1/introduction`

In the root directory of the project, create the file `.env.local` and fill it with the following content:
```
CSE_KEY=<api-key>
CSE_CX=<search-engine-id>
CSE_URL=https://www.googleapis.com/customsearch/v1
```  
This will load the following values into env variables.

To run the dev server, simply run the command 
```
npm run dev
```

If you would prefer to use yarn, simply run
```
yarn run dev
```
