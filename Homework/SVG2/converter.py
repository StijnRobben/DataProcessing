# converter.py

# Stijn Robben
# 10559558

# Data Processing
# Week 2

# converter excel to JSON

import xlrd
from collections import OrderedDict
import json as simplejson
 
# Open the file and select the worksheet
wb = xlrd.open_workbook('population.xlsx')
sh = wb.sheet_by_index(0)
 
# List to hold the dictionaries
population_list = []
 
# Iterate through each row in worksheet and fetch values into dict
for rownum in range(0, sh.nrows):
    population = OrderedDict()
    row_values = sh.row_values(rownum) 
    population['continent'] = row_values[0]
    population['people'] = "" + str(row_values[1]) + ""
 
    population_list.append(population)
 
# Serialize the list of dicts to JSON
j = simplejson.dumps(population_list)

print j

