from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=225)
    description = models.TextField(blank = True)
    city = models.CharField(max_length=50)
    address = models.TextField(blank = True)
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }
    
class Vacancy(models.Model):
    name = models.CharField(max_length=225)
    description = models.TextField(blank = True)
    salary = models.FloatField(default = 0)
    company = models.ForeignKey("Company", on_delete=models.CASCADE)
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
        }
    

    

# Create your models here.
