# Generated by Django 2.2.7 on 2019-12-24 20:08

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20191222_0306'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='sf_office',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2019, 12, 24, 20, 8, 19, 404805, tzinfo=utc)),
        ),
    ]
