# -*- coding: utf-8 -*-
from min_pairs import *
subtlex = get_corpus('subtlex')
cmudict = get_dictionary('cmudict', subtlex.keys())

vowels = ['AA','AE','AH','AO','AW''AY','EH','ER','EY','IH','IY','OW','OY','UH','UW']
consonants = ['B','CH','D','DH','F','G','HH','JH','K','L','M','N','NG','P','R','S','SH','T','TH','V','W','Y','Z','ZH']


# Get minimal pairs for the COT-CAUGHT distinction
## get_minimal_pairs('AO', 'AA', cmudict, subtlex, post_exclude=['R']) 
# Get minimal pairs for the PIN-PEN merger
## get_minimal_pairs('IH', 'EH', cmudict, subtlex, post_include=['N', 'M', 'NG'])


# WORD-WORD
# get_minimal_pairs('ERL', 'ER', cmudict, subtlex)

# BALL-BOWL
# get_minimal_pairs('AO', 'OW', cmudict, subtlex, post_include=['L'])

# LOOK-LUKE
#get_minimal_pairs('UH', 'UW', cmudict, subtlex)

# SINK-THINK
# get_minimal_pairs('TH', 'S', cmudict, subtlex)

# LIGHT-NIGHT (try to keep more light-l not dark l)
# get_minimal_pairs('L', 'N', cmudict, subtlex, post_include=vowels, pre_include=vowels, post_exclude=consonants)

# VENT-WENT
#get_minimal_pairs('V', 'W', cmudict, subtlex)

# THOSE-DOSE
# get_minimal_pairs('DH', 'D', cmudict, subtlex)

# TAPE-TYPE
# get_minimal_pairs('EY', 'AY', cmudict, subtlex)

# SHIP-SHEEP
# get_minimal_pairs('IH', 'IY', cmudict, subtlex)

# WILL-WHEEL
# get_minimal_pairs('IH', 'IY', cmudict, subtlex, post_include=['L'])

# SELL-SALE
# get_minimal_pairs('EH', 'EY', cmudict, subtlex, post_include=['L'])

# CODE-COLD
# get_minimal_pairs('OW', 'OWL', cmudict, subtlex)

# PAN-PEN
# get_minimal_pairs('AE', 'EH', cmudict, subtlex)

# MAN-MAIN
# get_minimal_pairs('AE', 'EY', cmudict, subtlex)

# TEMPER-TEMPLE
# get_minimal_pairs('AHL', 'ER', cmudict, subtlex)

# SIN-SING
# get_minimal_pairs('N', 'NG', cmudict, subtlex)

# DONE-DOWN
# get_minimal_pairs('AW', 'AA', cmudict, subtlex)

# MATES-MACE
# get_minimal_pairs('TS', 'S', cmudict, subtlex)

# ROADS-ROSE
# get_minimal_pairs('DZ', 'Z', cmudict, subtlex)

# FACE-PHASE
# get_minimal_pairs('S', 'Z', cmudict, subtlex)

# BACK-BIKE
# get_minimal_pairs('AE', 'AY', cmudict, subtlex)

# DEAD-DEED
# get_minimal_pairs('EH', 'IY', cmudict, subtlex)

# MATE-MEET
# get_minimal_pairs('EY', 'IY', cmudict, subtlex)

# SHIP-SHEEP (no l)
get_minimal_pairs('IH', 'IY', cmudict, subtlex, post_exclude=['L'])

