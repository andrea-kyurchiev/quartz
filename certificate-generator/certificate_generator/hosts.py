import re
from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(
        re.sub(r"_", r"-", r"certificate_generator"),
        "certificate_generator.urls",
        name="certificate_generator",
    ),
)
