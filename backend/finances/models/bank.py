from django.db import models


class Bank(models.Model):
    name = models.CharField(max_length=1024)
    address = models.CharField(max_length=1024, blank=True, default="")
    nip = models.CharField(max_length=13, blank=True, default="")
    krs = models.CharField(max_length=10, blank=True, default="")
    capitalization = models.DecimalField(
        max_digits=12, decimal_places=2, blank=True, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["name"], name="unique_bank_name"),
        ]

    def __str__(self):
        return self.name
