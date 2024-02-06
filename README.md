# Chocolela Website

A Website for the bakery Chocolela based in reunion Island.

# Stack

The front-end works on React and Redux for the state management. The react App makes call to a Aws API gateway to communicate with various lambda functions.
A Wordpress application is running on the EC2 with the plugin e-commerce with a RDS database. So the Owner can update her products.
The lambda are interacting with the Wordpress app to get all information needed

# What's done so far

&#x2705; Set up React and Vite vite for the dev environment.

&#x2705; Configured cloud ressources :

    - Api Gateway
    - RDS Database
    - and Launched Wordpress App on EC2 instance
    - Lambda functions

&#x2705; Pages

    No Page fully done yet

&#x2705; Style

    Nothing fully styled yet

✅ Features

    - retrieve products by categories selected on menu
    - retrieve single product with variations

# To do ( not in order)

❌ Pages

    - Landing Page (80%)
    - Products gallery page (80%)
    - Product Page (60%)
    - Contact (0%)
    - Cart (0%)
    - About (0%)

❌ Features

    - add product to Cart
    - delete product to Cart
    - send e-mail to owner with details of order
    - Give the user the possibility to change quantity of desired product
    - search product by name
    - Responsiveness

❌ style

    - Navbar (90%)
    - Products Gallery (95%)
    - Product Page (80%)
    - About (0%)
    - Contact (0%)
    - Cart (0%)
