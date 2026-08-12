from dataclasses import dataclass
from datetime import date, time
from typing import Literal


@dataclass(frozen=True)
class BirthData:
    name: str
    date: date
    time: time
    timezone: str
    latitude: float
    longitude: float

    def __post_init__(self) -> None:
        if not -90 <= self.latitude <= 90:
            raise ValueError("Latitude must be between -90 and 90")
        if not -180 <= self.longitude <= 180:
            raise ValueError("Longitude must be between -180 and 180")


@dataclass(frozen=True)
class ChartOptions:
    node: Literal["true", "mean"] = "true"
    ayanamsha: Literal["lahiri"] = "lahiri"

