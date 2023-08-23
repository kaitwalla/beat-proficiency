
## JAVASCRIPT

This is a simple toy project to display your Javascript proficiency. In between each step, you should refresh the page to make sure things are working as you expect. If you have any questions or comments, please make them known.

1. Stop the Angular server. Navigate to `/js-proficiency`. Install the necessary NPM modules and start the server with `npm run serve`.The Codespace will generate a URL where you can view the running application. You will not need to worry about anything else NPM related for this portion.
2. Before looking at the page, examine the code in index.html and main.js for validity. If you find any errors, fix them.
3. Move the reference to main.js to the bottom of the head tag. Make any necessary changes to the code to ensure it runs.
4. 
    a. WHAT: The div identified as theFirstObject should be copied to the div with an ID of target. The object should have the same appearance in both places  
    b. WHEN: The button titled "Copy first object" is clicked  
    c. HOW: Listen for and bind the button click event in main.js   
    d. WHERE: All logic should be in the buttonHandler method "makeFirstChange"  
5. 
    a. WHAT: The div identified as theSecondObject should be moved to the div with an ID of target, before the first object in the DOM  
    b. WHEN: The button titled "Move second object" is clicked  
    c. HOW: Listen for and bind the button click event in main.js  
    d. WHERE: All logic should be in buttonHandler method "makeSecondChange"  
6. Remove changeText function invocation in main.js.
7. 
    a. WHAT: Change the footer text to the value of the footerText variable immediately. Also make a call to https://meowfacts.herokuapp.com, and change the contents of the H1 to the contents of the 'data' variable from the response.  
    b. WHEN: The button titled "Change text" is clicked  
    c. HOW: Listen for and bind the button click event in main.js  
    d. WHERE: All logic should be in the buttonHandler method "makeThirdChange"  
