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


#import random
#def i_ching_coin_toss():
#    coin1 = random.choice([True, False])
#    coin2 = random.choice([True, False])
#    coin3 = random.choice([True, False])
#    if coin1 and coin2 and coin3 :
#        return "■■ O ■■\n"
#    elif (coin1 and coin2) or (coin1 and coin3) or (coin2 and coin3):
#        return "■■   ■■\n"
#    elif coin1 or coin2 or coin3:
#        return "■■■■■\n"
#    else:
#        return "■■ X ■■\n"

#for i in range(0, 6):
#    p.text(i_ching_coin_toss())
#p.text("\n\n\n\n\n\n")

p.text("His face is turned\n\n\n\ntoward\nthe\n\n\npast.\n\n\n\n\n\nWhere we perceive a\nchainofevents\n\n\n, he sees\n\none\n\nsingle\n\n***CATASTROPHE***\n\n\n which\n   keeps\n\n    piling\n\n\n !£$%^&wreckage)(*&^)\n\n\nand\n                    hurls it\n\n in front of his feet.\n\n\n\n\nThe angel would like to stay,\n\n\nawaken the dead,\n\n\n and make \nWHOLEWHOLEWHOLEWHOLEWHOLEWHOLEWH\n what has been \ns      m    s   h     e    d\n. But a\ns\n       t\n              o\n                 r\n                    m\nis blowing in from\n~~P~a~r~a~d~i~s~e~~~;\n it has got caught in his\nwi           n          gs\n with such a\n\n\n#V#I#O#L#E#N#C#E\n\n\nthat the angel can no longer close them.\n\n The storm\ni\nr\nr\ne\ns\ni\ns\nt\ni\nb\nl\ny\n\np\nr\no\np\ne\nl\ns\n\nh\ni\nm\n into the future to which his\n,denrut si kcab\n\n\nwhile the pile of debris before him \n      s\n      k\n      y\n      w\n      a\n      r\ngrows d.\n\n\n\nThis storm is what we call progress.\n\n\n\n\n\n\n\n");

p.close()
