# Generated by Django 2.2.7 on 2020-03-22 07:30

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20191224_1209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2020, 3, 22, 7, 30, 27, 739785, tzinfo=utc)),
        ),
    ]