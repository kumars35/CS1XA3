Welcome to my Project 3

My Project 3 is a food delivery app which has different restaurants with different menu's as well as prices.
Please feel free to look at the 2 more README.md files in the CS1XA3 repository as well as the FrontEnd directory in the CS1XA3 
repository. These README.md files contain more knowledgable information in regards to this project. The information is not mixed in 
this README.md file to avoid confusion and have more clarity. 

To Run My Food Delivery App:

Open Command Prompt

Check in the home/kumars35 directory if the CS1XA3 repository is there if not, the CS1XA3 repository should be cloned to home/kumar35 by 
the command -> $ git clone https://github.com/kumars35/CS1XA3.git

Next, go to this directory CS1XA3/venv by the command -> $ cd CS1XA3/venv

If a virtual environment is already activated, please deactivate it by the command -> $ deactivate
Then, activate the python virtual environment by the command -> $ source bin/activate

Leave the venv directory by the command -> $ cd ..
You should be in the CS1XA3/project3 directory so enter project3 by the command ->$ cd project3

Next, install the necessary packages that are listed in requirements.txt by the command -> 
$ pip install -r requirements.txt 

Exit project3 directory by the command -> $ cd ..

Once you are in CS1XA3 run the command -> $ pip install -r requirements.txt

Then run $ pip install -r requirements/local.txt 

Run the command (In CS1XA3 repository) -> $ python manage.py runserver localhost:10032

If it says "Error: That port is already in use.":
Then enter this command -> $ lsof -i :10032 after that a number below PID will be displayed so the next command
will be -> $ kill -9 PIDnumber (instead of PIDnumber enter the actual number displayed under PID)
Then after those commands run -> python manage.py runserver:10032

Then go to the following website to view my food delivery app:

https://mac1xa3.ca/u/kumars35/project03/

To Stop Server:
Control + C


Features:

Client Side:
Random number(UUID) to generate ID for all objects like restaurants

Mouse click event on all buttons 

Server Side:

Json Posts:
Get/Post Requests as follows:
url(r'restaurant/$', RestaurantAPI.as_view()), GET

url(r'items/$', ItemsAPI.as_view()), GET

url(r'items/(?P<restaurant_id>\d+)/$', ItemsByRestuarentAPI.as_view()), GET

url(r'createOrder/$',CreateOrderAPI.as_view()), POST

url(r'orders/$', OrderAPI.as_view()), GET

url(r'api-token-auth/$', obtain_auth_token, name='api_token_auth'), POST

url(r'register/$', UserRegistrationAPI.as_view()), POST


Variety of models and relations:
class Restaurant(models.Model):

    name = models.CharField(max_length=32)
    address = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    contact = models.IntegerField()


class Item(models.Model):

    name = models.CharField(max_length=32)
    quantity = models.CharField(max_length=32)
    price = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) // Relationship: Foreign key


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)   // Relationship: Foreign key
    item = models.ForeignKey(Item, on_delete=models.PROTECT)   // Relationship: Foreign key

Authentication:
Done using Token based Authentication (exipry 10 mins)

Other Features:
React Route
React
Webconfig
Single Page Application(static website)


Thank you for your time.
