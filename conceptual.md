### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
Json Web Tokens (JWT) open, industry standard method for representing claims securely between two parties. JWT are used as secured way to authenticate users and share information. JWTs can store any "payload" of info, which are "signed" using a secret key so they can be validated later. A JWT token is comprised of three parts: Header, Payload, Signature.

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT is consist of encoded header, payload, a secret, the algorithm specified in the header and signed that. The signature is used to verify message did not change along the way and verify the sender. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, JWT can be decoded using JWT decode method. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Signing a token for a user in the payload. The token is signed with secret key known only to the server and send upon initial registration or login. (let token = jwt.sign(payload, SECRET_KEY, JWT_OPTIONS)) Then with every subsequent request to application, that JWT may be required to be sent along with the request (in req.body, header, query string, etc.) in order to have access. The JWT is verified using jwt.verify(token, secret_key), then user can proceed. 

- Compare and contrast unit, integration and end-to-end tests.
Unit testing focuses on testing small units, can be written in isolation and indepedent of other units. It is faster to write / faster to pin-point the root cause of errors. Integration testing has higher depedency between tests than unit tests. End-to-end testing tests application from start to end to mirror a entire real user scenario. You will encounter more user-impacting bugs, many tools to help with automating UI tests. However, it is not as maintainable as unit tests, a feature change can easily break E2E tests. It is also more time consuming to write.

- What is a mock? What are some things you would mock?
Mocking is primarily used in unit testing. Tests may have dependencies on other objects, so to isolate the behavior, replace other objects by mocking that simulate object's behavior. For example, Math.random(), instead of actually calling the function, we can mock the behavior and manipulate the results to write tests. Mocking is faster, so you don't have to wait for an API response/don't have to deal with rate limits. Fail or pass of tests depends only on code, rather than external reason. However, mocking requires complex set up and are not always necessary. You would mock AJAX requests, writing/reading to files, 'impure' functions like Math.random.

- What is continuous integration?
CI is practice of merging small code changes and testing in smaller increments frequently, rather than merging in a large change at the end. 

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?
TDD (Test drive development), writing test which will first fail, then write code necessary to get the test to pass. It is useful in assuring that the application is written as intended, however, it is slower process and requires frequent testing.

- What is the value of using JSONSchema for validation?
User data can fail fast before bad data gets to your db / reduce amount of code for processing & validating data / get a validation system that is easy to set up and maintain.

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
Allows you to retrieve values of columns & expressions based on columns that were modified by an insert, delete, or update. 

- What are some differences between Web Sockets and HTTP?
Web Sockets - updates are sent immediately when they are available / event-driven protocol, use it for real time communication. Whereas, HTTP - you have to constantly request updates. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
