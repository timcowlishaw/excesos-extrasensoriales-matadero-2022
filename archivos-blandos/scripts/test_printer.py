#!/usr/bin/python
from escpos.printer import Usb
p = Usb(1046, 20497)

# FIRST TEST
#p.text("\"I insist on the fact that there is generally no growth, but only a luxurious squandering of energy in every form.\"\n\t- Georges Bataille,\n\tThe Accursed Share\n\n\n\n\n\n\n\n")
#p.image("assets/angelus_novus.jpg")
#p.text("\n\n\n\n\n\n\n\n\")

# HARAWAY LINES
#maxlen = 0
#lines = []
#with open("/Users/tim/Desktop/WORDS/A Cyborg Manifesto by Haraway Donna (z-lib.org).txt") as f:
#    for line in f.readlines():
#        lines.append(line)
#        maxlen = max(maxlen, len(line.split()))
#for line in lines:
#    p.text("*" * int(len(line)/float(maxlen) * 32) + "\n")

# DIVINATION
#tarot_url = "https://rws-cards-api.herokuapp.com/api/v1/cards"
# i ching api https://github.com/darmentrout/iching


import random
def i_ching_coin_toss():
    coin1 = random.choice([True, False])
    coin2 = random.choice([True, False])
    coin3 = random.choice([True, False])
    if coin1 and coin2 and coin3 :
        return "■■ O ■■\n"
    elif (coin1 and coin2) or (coin1 and coin3) or (coin2 and coin3):
        return "■■   ■■\n"
    elif coin1 or coin2 or coin3:
        return "■■■■■\n"
    else:
        return "■■ X ■■\n"

for i in range(0, 6):
    p.text(i_ching_coin_toss())
p.text("\n\n\n\n\n\n")

p.close()
