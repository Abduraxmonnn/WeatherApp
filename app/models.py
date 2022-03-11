from django.db import models


class City(models.Model):
    name = models.CharField(max_length=250)
    
    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name
