from django.db import models
from users.models import User

class Route(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False)
    start_lat = models.FloatField(blank=False)
    start_lon = models.FloatField(blank=False)
    end_lat = models.FloatField(blank=False)
    end_lon = models.FloatField(blank=False)
    travel_mode = models.CharField(
        max_length=50,
        choices = [
            ('DRIVING', 'Driving'),
            ('BICYCLING', 'Biking'),
            ('TRANSIT', 'Transit'),
            ('WALKING', 'Walking')
        ],
        default='DRIVING'
    )
    user = models.ForeignKey(
        User,
        related_name="routes", #association name
        on_delete=models.CASCADE,
        blank=False
    )

    def __str__(self):
        return self.name