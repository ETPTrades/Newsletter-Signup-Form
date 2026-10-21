# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This newsletter signup form project was designed to not only test my responsive desing skills, but to also test my form validation skills. This included accepting accurate user input, notifying the user when the input was invalid, and revealing a success modal indicating to the user that their form submission was successfull.

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
- The field is left empty
- The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Check out my solution here!](https://github.com/ETPTrades/Newsletter-Signup-Form)
- Live Site URL: [Check out the live site here!](https://etptrades.github.io/Newsletter-Signup-Form/)

## My process

My project thought process was to begin with a mobile first approach, then work my way out. I like to first get all of the HTML elements on the page as well as whatever body text is provided by the challenge; I'm also sure to place the content in semantic elements for the best accessibility. In this case, it appeared that the order of the elements on the page differed depending on which screen size you're viewing. This was taken care of using CSS grid; I like to keep the order of elements in the HTML mark up consistent across devices, and switch things up with CSS if necessary(on desktop, the image would come last in the mark up, but on smaller screens it comes first). Once everything is styled I focused on responsiveness to make sure everything looked correct across screen sizes, and finally I took care of the form validation while implimenting accessibility for screen reader users.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Logical Porperties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)

### What I learned

The main thing I learned from building out this project was how to validate user input. The only user input required for this project was an email address which made for a solid challenge for a beginner; not too easy, not too hard. Going through this process of validating a form really made me want to further explore different techniques for accomplishing these tasks, such as using the "FormData()" constructor. But more on that later.

_Challenge #1: What happens when a user inputs invalid information?_

The first part of this challenge was to figure out how to reveal the custom error message when a user inputs an invalid email. I accomplished this by creating an empty span element, and adding in a custom validation message using _setCustomValidity()_ if and when an invalid email address was submitted.

_Challenge #2: What happens when a user successfully submits the form?_

When the user successfully submits the form with the correct information, the main content of the page disappears, and a pop-up modal reveals itself with a success message letting the user know that the form has successfully been submitted. My first instinct was to simply to create a seperate section containing the success modal element. By default, that modal would be hidden, so all I needed to do was reveal the it upon a successful form submisson with _showModal()_. In the modal, there is a _dismiss_ button that takes you back to the main content. In order to tie all of this functionality together, I added a click event to the _dismiss_ button. Now, when the button gets clicked, it add / removes the hidden class on the elements; the success modal hides, and the main content gets the hidden class removed, causing it to once again be visible to the user.

_Accessibility_ The accessibility portion of this project was pretty simple and straightforward. It's always important to make sure users with disabilities can access your website, and be able to navigate it with as little friction as possible. To accommodate users with visual impairments, I added in a few ARIA labels to ensure that if and when an error message pops up, or when the success message pops up, the screen reader is able to recognize it, and can announce it to the user.

### Continued development

As for my continued development, I really enjoyed working with the form inputs, even though there was only one. I'm looking forward to working on similar projects in the future that have many more form field inputs so that I can practice using more sophisticated methods of collection and managing input data.

### AI Collaboration

The only AI tools that I use for this project, and probably the only AI tools that I will be using for future projects at this stage in my development, is the chat function in VS Code. This was really useful for when I got stuck, and when UI functionality behaved unexpectedly. I didn't just ask the chat to fix the issues for me because then I wouldn't be able to understand exactly what was broken in the code and why. I also would not be able to understand what changes ended up fixing the problem. Instead, what I did was ask questions regarding certain bugs, but provided my own approach first to make sure I was on the right track. After that, if I still couldn't figure out how to impliment the solution, I would have it generate a solution for me, and then I would ask why it works. This approach of using the AI chat more as a tutor / mentor as apposed to just a problem solver has been a huge help in my development.

- What tools did you use (VSCode chat function)
- How did you use them (used it to explain problems in more detail, provide solutions with explinations, guide me in my thought process)

## Author

- Frontend Mentor - [@ETPTrades](https://www.frontendmentor.io/profile/ETPTrades)
