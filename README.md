# Express/Passport with Angular Routing
This version uses Angular to control the login requests and redirection in coordination with client-side routing.

### Important Directions:
* Run `npm install`,
* Run `grunt' in an open tab of terminal,
* Use the `client` file to work on front end files. Grunt will watch those files to be compiled into the `server/public` files. This handles minification and such.

### Activation Codes
These changes are only necessary if you are sending links with activation codes (e.g. click here to join this group). It could also be used in forgot password scenarios. Check the commit history for a record of changes made. The server assigns new groups activation codes. These codes are then displayed on the page. Click on a link to join a group. These links will also work in the case of new users. They will be redirected to the join page after log in. Groups that have been joined are displayed on the main user page.

### Security Considerations
Currently, the codes do not expire. This should be added before going to production.
