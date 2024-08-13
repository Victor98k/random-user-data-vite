# Random user data test

## Setup

1. cd random-user-data-vite/
2. cd random-user-data-vite/src
3. npm install
4. npm run dev

## Approach

I'm used to working with React applications, but I have not worked with TypeScript much. TypeScript will be covered during our Backend 2 course, which starts in about 6 weeks. I have worked with TypeScript at my current internship, so I should be able to figure this out. But I know it will be a challenge. If I get stuck during this test, I will check code I have written earlier and hopefully be able to move on with the test. No AI help will be used during this test.

The instructions for this test do not say that I can't use the internet or other sources for help during the test. But I figure that I should not use too much help and write the code myself.

## Structure

My approach for the structure is to first create a component with a custom hook to fetch our data. This hook will manage the important states for the data. Then I will import that custom hook into my main component and render the required data.

My approach for the UI will be mobile-first. After I have successfully retrieved my data, I will start styling the UI for mobile first. Then I will move on to bigger screens. For this test, I will be using regular CSS and the UI library called Ant Design.

I will use Ant Design in the UI for clean styling. And for error handling and loading handling.

## Challanges

1. Working with TS interface.
   -@useRandomUser.ts line 15.
   -As I mentioned, I have not worked a lot with TS. For this part, I had to look at some code I've worked with earlier.

2. Async functions.
   -@useRandomUser.ts line 35.
   -I was stuck on the fetch hook. I simply forgot that needs to be an async function since it performs an asynchronous operation.

3. Rendering the data for the UI.
   -@useRandomUser.ts line 41.
   -I encountered an error in the UI: "Cannot read properties of undefined (reading 'first')" when trying to render the first name of a user. I was too quick when looking at the JSON object and simply forgot to add the `.results` attribute from the API response.
   Also i did not refer to the first object in the array that the API returns. Adding `[0]` got me pass the error.

## Summary

In general, I'm pretty happy with the application. Overall, I think the structure is good. Here are some things I could have added to make the application better: 1. Make more specific error handling for specific cases. 2. Make the UI more interactive for the users.

      During this test, I had to go back to code I had written earlier. I had some trouble with rendering the data properly. I'm looking forward to working more with TS! During the test, I had to look at some code I've worked with earlier to keep going.

# Thank you for reviewing my test!
