# -*- coding: utf-8 -*-

import csv
with open('sets/World - Word.txt') as f:
    reader = csv.reader(f, delimiter="\t")
    d = list(reader)

set_name = '  "'+ d[0][1] + '":{\r\n'
set_id = '\t"id":"' + d[1][1] + '",\r\n'
set_symbols = '\t"symbols":"' + d[2][1].decode('utf-8') + '",\r\n'
set_tags = []
set_words = []

for tag in d[3][1:]:
    if tag != '':
        set_tags.append(tag)
new_set_tags = '\t"tags":["' + '","'.join(set_tags) + '"],\r\n'

for wordpair in d[4][1:]:
    wordpair = wordpair.replace(', ', '", "')
    wordpair = '["' + wordpair + '"]'
    set_words.append(wordpair)

set_tags = '\t"tags":["' + '","'.join(set_tags) + '"],\r\n'
set_words = '\t"words":[\r\n\t\t' + ',\r\n\t\t'.join(set_words) + '\r\n\t]\r\n},'

output = set_name + set_id + set_symbols + new_set_tags + set_words

print output
with open("jsonfile.txt", "a") as myfile:
    myfile.write(output.encode('utf-8'))
