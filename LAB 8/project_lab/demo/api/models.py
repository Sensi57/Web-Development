from django.db import models

"""
create table products(
    id INTEGER,
    name VARCHAR(255),
    price NUMERIC default 1000
)
"""


# ORM - Object Relational Mapping

class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.FloatField(default = 1000)
    description = models.TextField(max_length = 1000)
    count = models.IntegerField(default = 100)
    is_active = models.BooleanField(default = False)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active': self.is_active,
        }

class Categories(models.Model):
    name = models.CharField(max_length = 255)

    def to_json(self):
        return {
            'id':self.id,
            'name' :self.name,
        }