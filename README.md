# Test Main Wikipedia Page

## Test Cases

- Validate main page loads correctly at different view points 
- Validate search bar is working
- Validate page is loading correctly in another language
- Validate all links on the page work (status response is 200)
- Validate test file works in different browsers

## Potentional App Improvement

- Page should contain data-testid to isolate selector from css style or js behavioral changes
- Auto complete search results 
- Simpler UI
- Information on main page based on user data

## How to install cypress

https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress
```
npm install cypress --save-dev
```

## How to run the cypress test: 

### The test can be run by running the script
```
./runCypressTest.sh
```
### The test can be run in headless mode by using the following command: 
```
npm cy:run
```
### The test can be run using the test runner by opening the test runner and clicking on the test
```
npm cy:open
```
