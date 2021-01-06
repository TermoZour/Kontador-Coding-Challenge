# Kontador Coding Challenge

> Develop a JavaScript web application that fetches a relevantly-sized list of posts from the mock GraphQL API available at https://fakerql.stephix.uk/ and displays a histogram representing the number of posts created in each month of 2019.

Checking the mock GraphQL API, we have a function that lists a specified number of posts. 

##### How to install
The usual process:
1. Clone the repo
2. CD into `app`
3. run `npm install`
4. run `npm start`

#
### Challenge 1
> How many posts to fetch? 

The challenge requirements specify a "relevantly-sized list of posts". We can use 900 posts as example. 
If the number is not large enough (or too large) we can change it in the app.

#
### Challenge 2
> How do we filter those posts based on year? 

In those 900 posts we theoretically could have some which were created in 2018 or maybe even older (or newer). 
Checking a sample of 10 posts per request (15 requests made), 
after converting the date from UNIX to ISO, 
we can see that all posts are created in 2019 so for the purpose of this challenge we will assume that all posts fetched from the API will be from 2019.
(I added a check anyway just in case the API, hypothetically speaking, returns post which are not from 2019)

#
### Challenge 3
> If all posts are from 2019, how to sort them by month?

We can use an array! Each position of the array represents a month.
For example array[12] -> array[0] is January. array[1] is February. This also matches with the number returned by Date.getMonth()

#
### Challenge 4
> How to use this data in a histogram? What is D3? What is VX?

This has been the biggest challenge of them all. I've never worked with D3 before, neither with VX.
After spending a few good hours reading through what D3 is and how to implement it in React, I decided to use VX instead of plain D3.

#
#### Other specifications/notes

In terms of design/animation, I didn't add any other libraries (such as Bootstrap) trying to keep the app as simple as possible.
I didn't feel the need to bundle a full library just to style a button and an input group.

The number of posts can be set as needed. A good recommendation is to set 100+ posts to get a good representation.

The app has been developed in around 3 and a half hours of coding. 
Around 10 hours have been spent only on research/reading library docs, split into two days, 
since I never made a histogram before and EVERYTHING about that topic was new to me.


