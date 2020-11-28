## Testing

To return to the previous document, please click [here](https://github.com/veraleitaodev/setGoals/blob/master/README.md).

### Testing User Stories

The following tests were conducted to test the experience of each user outlined earlier in the 'User Stories' section.

#### First Time Visitor Goals

1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about setting goals.

   1. The home page has a message suggesting to the user to use the app in orger to set goals.

2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
   1. Every page has the same navigation bar with links to the various pages. Home page and SMART? page are informative pages and always visible to any user.  
      The visitor not logged in will also be able to view the register and login pages on the navbar.
   2. The home page has a log in buttom in the main hero section that redirects the user to the login page.
   3. The footer is presented in every page and has home icon that redirects to the home page.
3. As a First Time Visitor, I want to be able to easily register on website as user and set first goals.
   1. The register page is easily found on the navbar. Also the login page offeres the link to the register page in case the user is not yet registered.
   2. Once registered, the user is logged in and it has access to the new goal page and the my goals page through the navbar. My goals page is the page that enables the user to set new goals.

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
   1. This feature is not greatly explored. Currently the website offers a link to pinterest in the footer in order to allow the user to explore images used online. In future I would aim to have an image upload feature would replace static image in the card and have a page with image board (gallery with the different images uploaded and search for related images online feature).
2. As a Frequent User, I want to easily access my current goals and costumize them.
   1. A frequent user is familiar with the website and easily uses the navbar to be redirected to My Goals page. In this page the User can view all the current goals. And can costumise them by being able to edit or delete them. Each goal card has an icon to edit - redirects to the edit goal page, and a delete icon - once clicked is deleted, after confirmation.

### Further Testing

- Tools such as inspect in google were used to test app at all stages of the development.
- A large amount of testing was done to ensure pages where linking as expected and code was allowing features as planned.
- Friends and colleagues were asked to review the app in order to point out any issues.


### Validators and Lintners

The W3C Markup Validator, W3C CSS Validator Services, pylint comand and js lint validator were used to validate every page of the project to ensure there were no syntax errors in the project.

#### HTML

- [W3C Markup Validator](https://validator.w3.org/) - [Results](https://github.com/)

#### CSS

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

#### Python

- [pylint comand] () - [Results](https://github.com/)

#### Javascript

- [js lint Validator](http://jslint.com/) - [Results](https://github.com/)

### Compatibility tests

#### Using different browsers

- The app was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers

#### Using different devices

- The app was viewed on a variety of devices such as macbook, Samsung tablet and galaxy note

#### Using different screen sizes

- The different devices used to test had different screen sizes. In addition, the inspect tool from chrome browser had been used throughout the project to test thoroughly including different screen sizes.

### Manual tests

#### Navigation bar

- **_mobile view_** - the navigation bar presents logo with link to home page, hover effect working;
  menu icon on the left side as intended (wireframe shows right side but later changed as it looked better of the left);
  menu icon opens when clicked and shows appropriate links: when logged in the links shown are Home, SMART?, My goals, Logout and all links are functional and hover effect working; "log in" and "log out" spelling was corrected as it was showing "login" and "logout";
  When logged out it appears: Home, SMART?, Log in and Register links.

- **_desktop view_** - the navigation bar presents logo with link to home page and hover effects, also presents links on the right side, to the different pages, hover effect is also functional;  
  when the visitor is not logged in, the links viewed in the navigation bar are: Home, SMART?, Log in, Resgister pages (all as intended) - all linkes are functional and with hover effect;  
  when the visitor is logged in, the links available are: Home, SMART?, My goals, New goal and Log out (as intended) - all linkes are functional and with hover effect;

#### Footer

- **_mobile view_** - footer appears in every page and is fixed to the bottom of the page as intended;  
  the footer thas two rows:

  - the top row has 3 icons - Home, instagram and Pinterest - all of the icons are centered to the middle as intended and with appropriate size as when pressed with finger, the wrong icon does not get pressed by mistake;
    The links in the icons are functional (home redirects to home page, instagram redirects to instagram landing page and pinterest redirects to pinterest landing page) and have hover effect;
  - the bottom row presentes the copyrights logo. the footer does not change throughout different pages.

- **_desktop view_** - footer appears in every page and is fixed to the bottom of the page as intended;  
  the footer thas two rows:
  - the top row has 3 icons - Home, instagram and Pinterest - all of the icons are centered to the middle as intended and with appropriate size for visibility;
    The links in the icons are functional (home redirects to home page, instagram redirects to instagram landing page and pinterest redirects to pinterest landing page) and have hover effect;
  - the bottom row presentes the copyrights logo. the footer does not change throughout different pages.

#### Home page

-   **_mobile view_** - parallax effect functional with 2 similar images giving the illusion that is one continuous image.
    -   Hero section with Headline and subheading appropriatly sized and spaced. 
    -   Subheading with pulse effect in the word SMART with active link to SMART? page;  
    -   Hero section showing log in button when visitor is logged out and hidden when visitor is logged in. 
    -   Hero section also displays an illustration with same colour scheme illustrating a women planning - the image is centered and not bleeding out. 
    -   Scrool effect functional and bottom image complements the top image, intending to reveal the road ahead when scrolling down.

-   **_desktop view_** - parallax effect functional with 2 similar images giving the illusion that is one continuous image.
    -   The top image height fixed for screens is wider than 370px. Hero section with Headline and subheading appropriatly sized and spaced. 
    -   Subheading with pulse effect in the word SMART with active link to SMART? page;  
    -   Hero section showing log in button when visitor is logged out and is hidden when visitor is logged in. 
    -   Hero section also displays an illustration with same colour scheme - position corrected for medium and large size screens.  
    -   Scrool effect functional and bottom image complements the top image, intending to reveal the road ahead when scrolling down.

#### SMART? page

-   **_mobile view_**  -  Page has centered heading at he top, has collapsible elements from Materialize. 
    -   Each row has a word related to the acronym SMART and it expands into description when row is clicked - feature is functional.  
    -   Below collapsible elements there is log in button that should not show when user is logged in - corrected.  
    -   Illustration with same colour scheme is located in the bottom right corner of the page.

-   **_desktop view_**  -  Page has centered heading at he top, has collapsible elements from Materialize. 
    -   Each row has a word related to the acronym SMART and it expands into description when row is clicked - feature is functional.  
    -   Below collapsible elements there is log in button that should not show when user is logged in - corrected.  
    -   Illustration with same colour scheme is located in the bottom right corner of the page.


#### Log in page

-   **_mobile view_** and **_desktop view_** -  centered heading 
    -   Form with username, password and submit fields.
    -   Submit button in correct position and with wave Materialize feature functional.
    -   Materialize form fields with green bottom bar when input required format and red when format is not allowed - functional.
    -   Bellow button there is a text saying "Don't have an account yet?" followed by text "Register here." in blue underlined ith a link to register page, link is functional.


  
  |             test              |             expected result              |              actual result               |
  | :---------------------------: | :--------------------------------------: | :--------------------------------------: |
  |     LOG IN page |       |       |
  | "Username" field requirements: a-z, A-Z, 0-9 and between 6 to 12 characters       |                                          |
  |         5 letters  lower case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  lower case | allowed  | allowed. |
  |         12 letters  lower case    |   allowed     | allowed |
  |         13 letters   lower case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters lower case   |   "please match the format requested" alert   | "please match the format requested" alert |
  |         5 letters  Upper case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  Upper case | allowed  | allowed. |
  |         12 letters  Upper case    |   allowed     | allowed |
  |         13 letters   Upper case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters upper case  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         3 letters lower case and 3 letters upper case |  allowed     | allowed |
  |         5 digits    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 digits | allowed  | allowed |
  |         12 digits   |   allowed     | allowed |
  |         13 digits   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 ldigits  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         2 digits 2 letters lower case and 2 letters upper case |  allowed     | allowed |
  | _____________________________ |__________________________________________|_________________________________________ | 
  | "Password"  requirements: a-z, A-Z, 0-9 and between 6 to 12 characters       |                                          |
  |         5 letters  lower case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  lower case | allowed  | allowed. |
  |         12 letters  lower case    |   allowed     | allowed |
  |         13 letters   lower case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters lower case   |   "please match the format requested" alert   | "please match the format requested" alert |
  |         5 letters  Upper case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  Upper case | allowed  | allowed. |
  |         12 letters  Upper case    |   allowed     | allowed |
  |         13 letters   Upper case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters upper case  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         3 letters lower case and 3 letters upper case |  allowed     | allowed |
  |         5 digits    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 digits | allowed  | allowed |
  |         12 digits   |   allowed     | allowed |
  |         13 digits   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 digits  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         2 digits 2 letters lower case and 2 letters upper case |  allowed     | allowed |
  | _____________________________ |__________________________________________|_________________________________________ | 
  |     incorrect username and incorrect password | flash message: "Incorrect Username and/or password" | flash message: "Incorrect Username and/or password" |
  |     existing username and incorrect password | flash message: "Incorrect Username and/or password" | no flash message! only redirects to login page with empty fields. To correct bug, added else condition to password verification (line 108 at run.py) |
  |     after correction: existing username and incorrect password | flash message: "Incorrect Username and/or password" | flash message: "Incorrect Username and/or password" |
  |     correct username and correct password | redirects to My goals page with flash message: "Welcome {username}" | redirects to My goals page with flash message: "Welcome {username}" |

The flash messages appear in white text with chosen background colour as expected and fade after expected time. The bug found is that the page keeps the margin at the top and does not reset unless the page is reloaded - updated code and retested - element for flash message disapears after 5 seconds and margin disapears.  

#### Register page

-   **_mobile view_** and **_desktop view_** -  centered heading;
    -   Materialize input forms with username, email and password fields and submit button. 
    -   Email is collected and stored for registration but at this stage there is no use for this information. In order to reduce unnecessary errors, the email input are has been removed.
    -   below the button there is a text with link to log in page - link is functional.
    -   Register button with Materialize Wave feature and functional.
    -   The flash messages appear in white text with chosen background colour as expected and fade after expected time. 
    -   The element for flash message disapears after 5 seconds and margin disapears.


|             test              |             expected result              |              actual result               |
  | :---------------------------: | :--------------------------------------: | :--------------------------------------: |
  |     REGISTER page |       |       |
  | "Username" field requirements: a-z, A-Z, 0-9 and between 6 to 12 characters       |                                          |
  |         5 letters  lower case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  lower case | allowed  | allowed. |
  |         12 letters  lower case    |   allowed     | allowed |
  |         13 letters   lower case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters lower case   |   "please match the format requested" alert   | "please match the format requested" alert |
  |         5 letters  Upper case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  Upper case | allowed  | allowed. |
  |         12 letters  Upper case    |   allowed     | allowed |
  |         13 letters   Upper case   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 letters upper case  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         3 letters lower case and 3 letters upper case |  allowed     | allowed |
  |         5 digits    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 digits | allowed  | allowed |
  |         12 digits   |   allowed     | allowed |
  |         13 digits   | not possible  | not possible to input more than 12 characters |
  |         special character plus 5 digits  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         2 digits 2 letters lower case and 2 letters upper case |  allowed     | allowed |
  | _____________________________ |__________________________________________|_________________________________________ | 
  | "Password"  requirements: a-z, A-Z, 0-9 and between 6 to 12 characters       |                                          |
  |         5 letters  lower case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  lower case | allowed  | allowed. |
  |         12 letters  lower case    |   allowed     | allowed |
  |         13 letters   lower case   | not possible  | not possible |
  |         special character plus 5 letters lower case   |   "please match the format requested" alert   | "please match the format requested" alert |
  |         5 letters  Upper case    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 letters  Upper case | allowed  | allowed. |
  |         12 letters  Upper case    |   allowed     | allowed |
  |         13 letters   Upper case   | not possible  | not possible |
  |         special character plus 5 letters upper case  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         3 letters lower case and 3 letters upper case |  allowed     | allowed |
  |         5 digits    |     "please match the format requested" alert   |"please match the format requested" alert|
  |         6 digits | allowed  | allowed |
  |         12 digits   |   allowed     | allowed |
  |         13 digits   | not possible  | not possible |
  |         special character plus 5 digits  |   "please match the format requested" alert   | "please match the format requested" alert |
  |         2 digits 2 letters lower case and 2 letters upper case |  allowed     | allowed |
  | _____________________________ |__________________________________________|_________________________________________ | 
  | existing username | flash message: "Username already exists" | flash message: "Username already exists" |
  |     new username and correct format password | flash message: "You are now registered" | flash message: "You are now registered" |

  
#### New Goal

-   **_mobile view_** and **_desktop view_** -  centered heading;  
    -   New Goal is available to the logged in user through link in navigation bar; 
    -   Submit button did not have wave effect but button was functional. Added materialize wave-effect class and button then had wave effect.
    -   Style, color scheme and layout appeared as expected.

form test

|             test              |             expected result              |              actual result               |
| :---------------------------: | :--------------------------------------: | :--------------------------------------: |
|     NEW GOAL page : form      |                                          |                                          |
| "Title" field between 5 to 30 characters       |                         |                                          |
|         leave empty |     "please fill in this field" alert   |   "please fill in this field" alert   |
|         4 letters |     "please lengthen this text to 5 characters or more..." alert   | "please lengthen this text to 5 characters or more..." alert   |
|         5 letters | allowed  | allowed - input data appears in the goal card |
|        15 letters | allowed  | allowed - input data appears in the goal card |
|         30 letters | allowed  | allowed - input data appears in the goal card |
|         31 letters | not possible  | not possible  |
| _____________________________ |__________________________________________|_________________________________________ | 
| "Category" when clicked has dropdown menu showing categories stored in mongodb    |                                          | 
|     selected one category | allowed | allowed - selected category appears in the goal card|
|     not selected a category |   clicking submit will not work | clicking submit will not work | 
| _____________________________ |__________________________________________|_________________________________________ | 
| "Add image" this feature is not available at this stage   |                                          | 
|     click in input area |   disabled input area - greyed out | disabled input area - greyed out | 
| _____________________________ |__________________________________________|_________________________________________ | 
| "Describe your new goal" allowed between 3 to 200 characters |            | 
|         leave empty |     "please fill in this field" alert   |   "please fill in this field" alert   |
|         2 letters |     "please lengthen this text to 3 characters or more..." alert   | "please lengthen this text to 3 characters or more..." alert   |
|         3 letters | allowed  | allowed - input data appears in the goal card |
|        20 letters | allowed  | allowed - input data appears in the goal card |
|         200 letters | allowed  | allowed - input data appears in the goal card |
|         201 letters | not possible  | not possible  |
| _____________________________ |__________________________________________|_________________________________________ | 
| "End Date (optional)" when clicked a calendar appears   |               |                 |
|     selecting a date | allowed | allowed - selected date appears in the goal card|
|     leaving date unselected |   allowed | allowed - in the goal card it appears an empty space |


#### My Goals

-   **_mobile view_** -  centered heading;  
  - A goal card per row.
  -   **_desktop view_** -  centered heading;
  - 2 cards per row in medium size screens (tested 768px) and 3 cards per row in large size screens (tested 1024px and 1440px);  
  - goal card:  static image in top container;  
        - 1st text row with goal title as per input and 3 vertical dots on the right side - if title occupies 2 lines, half of the icons in the card disappear- replaced card "small" class by "medium" - image started stretching when changed screen sizes, to fix this, increased max-height which makes part of the image hidden at some screen sizes but not streched;  
        - 2nd row with 2 icons on the right side, a pencil for edit and a bin for delete function;
        - reveal container has Title at the top with X on the right to enable hiding the container;  
        - reveal container has ruler container with goal description - if word is too long, it bleeds out of the card - added word-wrap property to css code to fix bug;  
        - reveal container with bottom row showing end date if any (icon present with and without date);
        - reveal container with background image at the bottom right corner;
        - reveal container missing category chosen - added to the reveal container.
  -   **_mobile view_** and **_desktop view_** 
  |             test              |             expected result              |              actual result               |
  | :---------------------------: | :--------------------------------------: | :--------------------------------------: |
  |     GOAL CARD  features     |                                          |                                          |
  | click in image, title or 3 vertical dots icon| reveals card added content | reveals card added content | 
  |    hover pencil icon |     information box appears saying "edit"  |   information box appears saying "edit"  |
  |    hover bin icon |     information box appears saying "delete"  |   information box appears saying "delete"  |
  |    click pencil icon |    redirects to edit-goal template  |   redirects to edit-goal template  |
  |    click bin icon |    pop-up confirmation box "are you sure you want to delete this goal?" |   pop-up confirmation box   |
  | pop-up confirmation box with Cancel button in colour scheme and text "YES, DELETE IT!" to the right of the cancel button | 
  |     click cancel button | redirects to my goals page | redirects to my goals page |
  |     click text "YES, DELETE IT!" | deletes goal and flash message "Goal Deleted" and redirect to my goals page | deletes goal and flash message "Goal Deleted" and redirect to my goals page |


#### edit template

-   Edit page should have similar layout of new goal page with different header and with form fields populated with current data.
-   Access to edit new goal page is possible through the pencil icon.
-   Once edit form is submited, the user is redirected to my goals page with card showing updated data.
-   Pressing cancel button reditects the user to My Goals page with unchanged data.

-   **_mobile view_** and **_desktop view_** -  centered heading; 


form test

|             test              |             expected result              |              actual result               |
| :---------------------------: | :--------------------------------------: | :--------------------------------------: |
|     Edit GOAL page : form     |                                          |                                          |
| "Title" field between 5 to 30 characters       |                         |                                          |
|         leave empty |     "please fill in this field" alert   |  "please fill in this field" alert |
|         4 letters |     "please lengthen this text to 5 characters or more..." alert   |  "please lengthen this text to 5 characters or more..." alert  |
|         5 letters | allowed  | allowed - goal is updated |
|        15 letters | allowed  | allowed - goal is updated |
|         30 letters | allowed  | allowed - goal is updated |
|         31 letters | not possible  | not possible  |
| _____________________________ |__________________________________________|_________________________________________ | 
| "Category" showing current category name / when clicked has dropdown menu showing categories stored in mongodb    |  
|   leave current category name without altering | allowed |  allowed - updated card has same data |                                        | 
|     selected one category | allowed | allowed - new selected category is updated in the goal card|
|     not selected a category |   current category name is preselected  | current category name is preselected  |
| _____________________________ |__________________________________________|_________________________________________ | 
| "Add image" this feature is not available at this stage   |                                          | 
|     click in input area |   disabled input area - greyed out | disabled input area - greyed out | 
| _____________________________ |__________________________________________|_________________________________________ | 
| "Describe your new goal" allowed between 3 to 200 characters |            | 
|     data not changed |    allowed | allowed - updated card has same data |
|         leave empty |     "please fill in this field" alert   |   "please fill in this field" alert   |
|         2 letters |     "please lengthen this text to 3 characters or more..." alert   | "please lengthen this text to 3 characters or more..." alert   |
|         3 letters | allowed  | allowed - goal is updated |
|        20 letters | allowed  | allowed - goal is updated |
|         200 letters | allowed  | allowed - goal is updated |
|         201 letters | not possible  | not possible  |
| _____________________________ |__________________________________________|_________________________________________ | 
| "End Date (optional)" when clicked a calendar appears   |               | 
|     leaving the date unaltered |  allowed | allowed - updated card has same date |
|     selecting a date | allowed | allowed - selected date is updated in the goal card|
|     clearing date |   allowed | allowed - in the goal card it appears an empty space |
| if there is no current date, leaving the date unselected | allowed | allowed - in the goal card it appears an empty space |

###  Bugs Known

#### Bugs resolved

- Once on collapible navbar menu the menu would not expand - console showing error. This was corrected by correcting the jquery script in the base.html.
- Once testing register.html by input new details in form the error "AttributeError: 'NoneType' object has no attribute 'lower'" would repeatedly appear. Checked mongodb key on heroku, mongodb and eny.py document but all ok.  
I have ried changing collection names but no different until realised that there was no "name" property in username input in register.html. Once corrected this the form worked.
- card layout on goals.html: icons for edit and delete too small as found in lighthouse tool found in inspect developer tools in chrome browser [(screenshot of analysis)](static/images/bugs/edit-delete-bug.jpeg "lighthouse analysis regards my goals page").
- delete will delete the card in front instead of the card that suposed to delete. to resolve this issue added {{ loop.index }} to icon id and modal followed by tabindex="-1" to correct the bug.

#### Bugs unresolved
- http://set-goals-vl.herokuapp.com/new_goal accesscible when input url in bar when visitor is not logged in. It allows to input data, however when submited an error occurs showing keyerror: user. It showld not allow access to the page if user is not logged in. At the time of writting, I have time restrictions to resolve this error.
- http://set-goals-vl.herokuapp.com/set_goals accesscible when input url in bar when visitor is not logged in. There is access to the page but no goal cards are displayed. At the time of writting, I have time restrictions to resolve this error.

