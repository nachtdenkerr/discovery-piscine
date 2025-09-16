#!/bin/bash
if [ "$#" -lt 1 ]; 
then
	echo "No arguments supplied";
fi;
i=$(($#-1))
while [ $i -ge 0 ];
do
	name="ex"
	mkdir $name${BASH_ARGV[$i]}
	i=$((i-1))
done

