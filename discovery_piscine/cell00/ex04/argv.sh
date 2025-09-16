#!/bin/bash
if [ "$#" -lt 1 ]; 
then
	echo "No arguments supplied";
fi;
i=$(($#-1))
while [ $i -ge $(($#-3)) ] && [ $i -le $(($#-1)) ];
do
	if [ $i -ge 0 ];
	then 
		echo ${BASH_ARGV[$i]}
	fi;
	i=$((i-1))
done
