## 5.Tests

  ### 5.1. Validation

  ### 5.2. Manual Testing
  * Testing pages are linked, once created, example css test with background colour in preview to test if link was functional
  * Testing code with inspect feature of Chrome browser
  * Testing register.html by input

    | input                              | expected result             | actual result                 |
    | :--------------------------------: | :-------------------------: | :---------------------------: |
    | new username & email               | flash message: "You are now registered!"   | flash message: "You are now registered!"     |
    |  existing username                  | flash message: "Username already exists"   | flash message: "Username already exists"     |
    |  new username & existing email      | flash message: "Email already exists"      | flash message: "Email already exists"        |
    |  blank spaces in all fields         | input error alert | flash message: "You are now registered!" |
    
as the expected result and actual result was different for blank spaces input, I had to specify the length and type of characters acceptable.  
In order to test input field new requirements:  
    | input                              | expected result             | actual result                 |
    | :--------------------------------: | :-------------------------: | :---------------------------: |
    | blank spaces in all fields         | input error alert         | input error alert |
    | username less than 6 characters  |  input error alert | input error alert |
    | username with more than 12 characters | not possible to input more than 12 | not possible to input more than 12 |
    | not authorised character - "!" in username | input error alert | input error alert |
    | username with allowed characters and with allowed length ("testing") &: |     |       |
    |  - email with 8 characters and: |     |       |
    |       -- missing @ in email address | input error alert | input error alert |
    |       -- digit after @ | input error alert | input error alert |
    |       -- 1 character after . | input error alert | input error alert |
    |       -- 5 random characters except "@" + "@" + 3 "a-z" characters + "." + 3 "a-z" characters | 

  * use of comand pylint to identify issues with python code
  * testing forms


## 6. Bugs Known

### 6.1 Bugs resolved  
  * Once on collapible navbar menu the menu would not expand - console showing error. This was corrected by correcting the jquery script in the base.html.  
  * Once testing register.html by input new details in form the error "AttributeError: 'NoneType' object has no attribute 'lower'" would repeatedly appear. Checked mongodb key on heroku, mongodb and eny.py document but all ok. tried changing collection names but no different until realised that there was no "name" property in username input in register.html. Once corrected this the form worked.
  * card layout on goals.html: icons for edit and delete too small as found in lighthouse tool found in inspect developer tools in chrome browser [(screenshot of analysis)](static/images/bugs/edit-delete-bug.jpeg "lighthouse analysis regards my goals page").
  * delete will delete the card in front instead of the card that suposed to delete. to resolve this issue added {{ loop.index }} to icon id and modal followed by tabindex="-1" to correct the bug.
  
### 6.2 Bugs unresolved
  * favicon
  * storing images in mongodb - 16Mb size restrictions - replaced by input for URL of image instead. 



# Testing
## 1. List the websites you used to validate your code and what they are for.

## 2. Go through the user stories you wrote in the UX part of your readme, and explain how your website meets those needs.
## 3. Write about how each part of your responsive website behaves on different screen sizes.
And if you want to knock the grade for testing all the way up to the max:
## 4. Manually go though every part of your site and write out how you confirmed that each link, hover effect and other interactive parts of the site work as you expect.
## 5. List any bugs you came across while creating the site and while Testing
_______
## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
        2. The main points are made immediately with the hero image
        3. The user has two options, click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the organisation.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        2. At the bottom of the first 3 pages there is a redirection call to action to ensure the user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
        3. On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

    3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.
        1. Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
        2. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
        3. At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media which highlights the links to them.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new programming challenges or hackathons.

        1. These are clearly shown in the banner message.
        2. They will be directed to a page with another hero image and call to action.

    2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.
        3. The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.
        4. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        5. The email button is set up to automatically open up your email app and autofill there email address in the "To" section.

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.
        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
        2. Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.
        3. If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivized as they are told there is a weekly favourite product posted in the group.

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

        1. The user would already be comfortable with the website layout and can easily click the banner message.

    2. As a Frequent User, I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link

    3. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
        1. At the bottom of every page their is a footer which content is consistent throughout all pages.
        2. To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
        3. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
    -   A white gap can be seen to the right of the footer and navigation bar as a result.
-   On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

____
## Testing

To return to the previous document, please click [here](https://github.com/veraleitaodev/setGoals/blob/master/README.md).

The W3C Markup Validator, W3C CSS Validator Services, pylint comand and js lint validator were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [pylint comand](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [js lint Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

- [**Testing User Stories**](#Testing-User-Stories)
    - [First Time Visitor Goals](#First-Time-Visitor-Goals)
    - [Returning Visitor Goals](#Returning-Visitor-Goals)
    - [Frequent User Goals](#Frequent-User-Goals)
    - [Tablet user](#Tablet-user)
- [**Validators and Lintners**](#Validators-and-lintners)
    - [HTML](#HTML)
    - [CSS](#CSS)
    - [JavaScript](#JavaScript)
    - [Python](#Python)
- [**Compatibility tests**](#Compatibility-tests)
    - [Using different browsers](#Using-different-browsers)
    - [Using different devices](#Using-different-devices)
    - [Using different screen sizes](#Using-different-screen-sizes)
- [**Manual tests**](#Manual-tests)
    - [Menu bar](#Menu-bar)
    - [Footer](#Footer)
    - [Home](#Home)
    - [Top Tips](#Top-tips)
    - [Sign-in](#Sign-in)
    - [Sign-up](#Sign-up)
    - [My tasks](#My-tasks)
    - [Add a new task](#Add-a-new-task)
    - [Edit task](#Edit-task)

### Testing User Stories

The following tests were conducted to test the experience of each user outlined earlier in the 'User Stories' section.

#### First Time Visitor Goals

1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about setting goals.  
    1.  The home page has a message suggesting to the user to use the app in orger to set goals.

2.  As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.  
    1.  Every page has the same navigation bar with links to the various pages. Home page and SMART? page are informative pages and always visible to any user.  
    The visitor not logged in will also be able to view the register and login pages on the navbar.
    2.  The home page has a log in buttom in the main hero section that redirects the user to the loggin page.
    3.  The footer is presented in every page and has home icon that redirects to the home page.
     
3.  As a First Time Visitor, I want to be able to easily register on website as user and set first goals.
    1.  The register page is easily found on the navbar. Also the login page offeres the link to the register page in case the user is not yet registered.
    2.  Once registered, the user is logged in and it has access to the new goal page and the my goals page through the navbar. My goals page is the page that enables the user to set new goals.

#### Returning Visitor Goals

1.  As a Returning Visitor, I want to easily refer back to the main steps of setting smart goals.
    1.  The returning visitor will easily have access to the Home and SMART page that offer brief content information.  
    2.  Once logged in, the returning visitor will be able to identify the main steps of setting a new goal through the intuitive use of the form on the new goal page.
    
2.  As a Returning Visitor, I want to easily log in to my goals page.
    1.  Once the user is sucessfully logged in, is redirected to the My Goals page where can view all the current goals.
    2.  My Goals page is accessible through navigation bar from any other page, once user is logged in.  

3.  As a Returning Visitor, I want to be able to create, update and delete my goals.  
    1.  A returning user, once logged in, has access to My Goals page. My goals page has a card for each goal, with an edit and delete icon.  
    2.  The edit icon redirects the user to the edit page, which is similar to the new goal page (where new goal is created by input data intoo the form) but is populated with goals current data.  
    3.  The edit icon triggers a modal box that offers the user choice of confirming delete intention or to cancel delete action - this is to prevent data to be deleted by mistake.

#### Frequent User Goals

 1. As a Frequent User, I want to explore content in image boards online related to my goals.  
    1.  This feature is not greatly explored. Currently the website offers a link to pinterest in the footer in order to allow the user to explore images used online. In future I would aim to have an image upload feature would replace static image in the card and have a page with image board (gallery with the different images uploaded and search for related images online feature).
    
2. As a Frequent User, I want to easily access my current goals and costumize them.  
    1.  A frequent user is familiar with the website and easily uses the navbar to be redirected to My Goals page. In this page the User can view all the current goals. And can costumise them by being able to edit or delete them. Each goal card has an icon to edit - redirects to the edit goal page, and a delete icon - once clicked is deleted, after confirmation.
