Welcome to my first 1XA3 Project Part 1.

This project implements features 5.1, 5.2 and 5.5.

5.1
This part of my project includes an interactive script. It asks the user which feature it would like to see and uses if statements (be sure that the user input should be capital 
letter(s)) in order to go to the specific feature accordingly where A is 5.2 and B is 5.5.

5.2 (Feature A):
This feature takes each file in the repo that includes #TODO and puts it into the todo.log file. I utilized the grep function in order to find for the #TODO tag.
The project_analyze.sh, todo.log as well as README.md are excluded because these files are a part of my project which definitely have the #TODO tag in them in order
to implement the feature. The aim of this feature is to find #TODO flag besides the obvious ones found in my project like project_analyze.sh, todo.log and README.md.

5.2 Custom Feature:
My custom feature for 5.2 asks the use if they would like to look at the todo.log file which has been created.

If the user inputs Y (be sure to use capital Y), 
       yes then the todo.log content is displayed.


If the user picks N (be sure to use capital N), 
  no or anything else then using echo statements the message 
     “Thank you, the todo.log file has been made." is displayed.


5.5 (Feature B):
This feature finds out how many of  HTML, Javascript, CSS, Python, Haskell and Bash Script files you have. Here I use the variable html to store the number of HTML files,
 variable js to store the number of Javascript files, variable css to store the number of CSS files, variable py to store the number of Python files, variable hs to store the 
number of Haskell files as well as variable sh to store the number of Bash Script files. I use if statements to also check if there are any files with the perticular
extension if not, it stores the variable to be 0. Then I echo the number of files respectively.

5.5 Custom Feature:
After the requirement of displaying how many of HTML, Javascript, CSS, Python, Haskell and Bash Script files are present, my custom feature asks if the user would like to view 
which files are  exactly are present and the file details. 

If Y (be sure to pick capital Y), yes is picked, the user is asked 
which type (HTML, Javascript, 
CSS, Python, Haskell and Bash 
Script) of files would it like to view. 
       Furthermore, after picking the type
       of file if there are files under that
       type, those file(s) and the file(s) details
       are displayed.

On the other hand, if N 
(be sure to pick capital N), 
no is picked, using echo, "Thank you" 
is displayed.





