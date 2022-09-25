####Bugs

* Bug #1: /models/users (get username)
    * Missing 'throw' new ExpressError for not found/unknown user
* Bug #2: /models/users (get all users)
    * Should return only basic information such as {username, first_name, last_name}, changed query string.
* Bug #3: /routes/auth (/login authenticate)
    * Missing 'await' keyword for User.authenticate()
* Bug #4: /middleware/auth (verify token)
    * change paylod = jwt.decode(token) to payload = jwt.verify(token, SECRET_KEY);
* Bug #5: /routes/user (patch- updates)
    * validate json body & if user tries to update other fields (including non-existent ones), an error should be raised
* Bug #6: /routes/users (delete)
    * If user cannot be found, return a 404 err, added 'await' keyword.