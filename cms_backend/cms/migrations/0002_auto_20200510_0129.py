# Generated by Django 3.0.5 on 2020-05-10 01:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='name',
            old_name='first_name',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='name',
            old_name='last_name',
            new_name='username',
        ),
    ]
