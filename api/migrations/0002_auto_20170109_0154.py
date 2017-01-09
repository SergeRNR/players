# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-01-09 01:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='days_total',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='exp_avg',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='exp_total',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='rating',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='vehicles_x',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='wins_total',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='player',
            name='battles_total',
            field=models.IntegerField(default=0),
        ),
    ]
