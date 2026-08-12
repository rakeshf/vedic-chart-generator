from datetime import datetime
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

import swisseph as swe

from .models import BirthData, ChartOptions

PLANETS = {
    "Sun": swe.SUN,
    "Moon": swe.MOON,
    "Mars": swe.MARS,
    "Mercury": swe.MERCURY,
    "Jupiter": swe.JUPITER,
    "Venus": swe.VENUS,
    "Saturn": swe.SATURN,
}


def julian_day(birth: BirthData) -> tuple[float, datetime]:
    try:
        timezone = ZoneInfo(birth.timezone)
    except ZoneInfoNotFoundError as exc:
        raise ValueError(f"Unknown IANA timezone: {birth.timezone}") from exc

    local = datetime.combine(birth.date, birth.time, tzinfo=timezone)
    utc = local.astimezone(ZoneInfo("UTC"))
    hour = utc.hour + utc.minute / 60 + utc.second / 3600 + utc.microsecond / 3.6e9
    jd = swe.julday(utc.year, utc.month, utc.day, hour, swe.GREG_CAL)
    return jd, utc


def celestial_positions(
    birth: BirthData, options: ChartOptions
) -> tuple[dict[str, dict], float, float, datetime]:
    if options.ayanamsha != "lahiri":
        raise ValueError(f"Unsupported ayanamsha: {options.ayanamsha}")

    swe.set_sid_mode(swe.SIDM_LAHIRI)
    jd, utc = julian_day(birth)
    flags = swe.FLG_SWIEPH | swe.FLG_SIDEREAL | swe.FLG_SPEED

    positions: dict[str, dict] = {}
    for name, planet_id in PLANETS.items():
        values, _ = swe.calc_ut(jd, planet_id, flags)
        positions[name] = {
            "longitude": values[0] % 360,
            "speed": values[3],
            "retrograde": values[3] < 0,
        }

    node_id = swe.TRUE_NODE if options.node == "true" else swe.MEAN_NODE
    values, _ = swe.calc_ut(jd, node_id, flags)
    rahu_longitude = values[0] % 360
    positions["Rahu"] = {
        "longitude": rahu_longitude,
        "speed": values[3],
        "retrograde": values[3] < 0,
    }
    positions["Ketu"] = {
        "longitude": (rahu_longitude + 180) % 360,
        "speed": values[3],
        "retrograde": values[3] < 0,
    }

    _, ascmc = swe.houses_ex(
        jd,
        birth.latitude,
        birth.longitude,
        b"W",
        swe.FLG_SIDEREAL,
    )
    ascendant = ascmc[0] % 360
    ayanamsha = swe.get_ayanamsa_ut(jd)
    return positions, ascendant, ayanamsha, utc

