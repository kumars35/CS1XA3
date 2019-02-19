#!/bin/bash

printf "Welcome to my Project. I have various fascinating features for you, which one would you like to see?"
printf "\nA: Make a todo.log file with files that have the tag #Todo. \nB: Find out how many of  HTML, Javascript, CSS, Python, Haskell and Bash Script files you have."
printf "\nPlease enter your choice:"
read selected
if [ $selected = 'A' ];then
	grep --exclude=README.md --exclude=project_analyze.sh --exclude=todo.log -r '#TODO' . > todo.log
	printf "Do you wish to look at the todo.log file?\nPick Y for Yes\nPick N for No:"
	printf "\nPlease enter your choice:"
	read selected01
	if [ $selected01 = 'Y' ];then
		cat todo.log
	else
		echo "Thank you, the todo.log file has been made."
	fi
fi
if [ $selected = 'B' ];then
	if [ -e *.html ];then 
		html=$(ls -l *.html | wc -l)
	else
		html='0'
	fi
	if [ -e *.js ];then
       		js=$(ls -l *.js | wc -l)
        else
        	js='0'
        fi
        if [ -e *.css ];then
        	css=$(ls -l *.css | wc -l)
        else
                css='0'
        fi
	if [ -e *.py ];then
        	py=$(ls -l *.py | wc -l)
        else
                py='0'
        fi
	if [ -e *.hs ];then
        	hs=$(ls -l *.hs | wc -l)
        else
                hs='0'
        fi
        sh=$(ls -l *.sh | wc -l)
	echo -e "The number of HTML files: $html"
        echo -e "The number of Javascript files: $js"
        echo -e "The number of CSS files: $css"
        echo -e "The number of Python files: $py"
        echo -e "The number of Haskell files: $hs"
        echo -e "The number of Bash Script files: $sh"

	printf "Would you like to look at the files and the file details?\nEnter Y for Yes\nEnter N for No"
	printf "\nPlease enter your choice:"
	read selected2
	if [ $selected2 = 'Y' ];then
		printf "Which file type would you like to see?"
		printf "\nPick 1 for HTML file\nPick 2 for Javascript files\nPick 3 for CSS files\nPick 4 for Python files\nPick 5 for Haskell files\nPick 6 for Bash Script files"
	        printf "\nPlaese enter your choice:"
		read selected3
                if [ $selected3 = '1' ];then
		        if [ -e *.html ];then
                		html2=$(ls -l *.html)
				echo -e "$html2"
        		else
                		echo "Sorry, no HTML files were found."
        		fi
                fi
                if [ $selected3 = '2' ];then
                        if [ -e *.js ];then
                                js2=$(ls -l *.js)
                                echo -e "$js2"
                        else
                                echo "Sorry, no Javascript files were found."
                        fi
                fi
                if [ $selected3 = '3' ];then
                        if [ -e *.css ];then
                                css2=$(ls -l *.css)
                                echo -e "$css2"
                        else
                                echo "Sorry, no CSS files were found."
                        fi                        
                fi
                if [ $selected3 = '4' ];then
                        if [ -e *.py ];then
                                py2=$(ls -l *.py)
                                echo -e "$py2"
                        else
                                echo "Sorry, no Python files were found."
                        fi
                fi
                if [ $selected3 = '5' ];then
                        if [ -e *.hs ];then
                                hs2=$(ls -l *.hs)
                                echo -e "$hs2"
                        else
                                echo "Sorry, no Haskell files were found."
                        fi
                fi
		if [ $selected3 = '6' ];then
			sh2=$(ls -l *.sh)
			echo -e "$sh2"
		fi
	elif [ $selected2 = 'N' ];then
		echo "Thank you"
	fi
fi
