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
## 5. List any bugs you came across while creating the site and while testing it. Include the fixes you came up with. (I have two sections here, one for fixed bugs and one for bugs I have not found a solution for yet.)