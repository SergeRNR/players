import random
from api.models import Player

syllables = ['ta','ke','shi','ki','ta','no','do','mi','su','zu','ki','ho','re','sa']
syllables_len = len(syllables) - 1
count = 1
max_count = 15

def getName():
    s1 = syllables[random.randint(0, syllables_len)]
    s2 = syllables[random.randint(0, syllables_len)]
    s3 = syllables[random.randint(0, syllables_len)]
    return s1 + s2 + s3

def createPlayer(index):
    battles_total = random.randint(10, 1000)
    player = Player()
    player.name = getName()
    player.battles_total = battles_total
    player.wins_total = random.randint(10, battles_total)
    player.days_total = random.randint(battles_total/50, 1000)
    player.vehicles_x = random.randint(0, 10)
    player.exp_total = random.randint(100, 10000)
    player.save()
    return player

while (count <= max_count):
   createPlayer(count)
   count = count + 1

print 'done'
