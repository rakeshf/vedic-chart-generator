from collections.abc import Callable
from dataclasses import asdict, dataclass

SIGNS = (
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
)


@dataclass(frozen=True)
class VargaPosition:
    sign: int
    sign_name: str
    degree: float
    division: int
    longitude: float

    def to_dict(self) -> dict:
        return asdict(self)


def _normalise(longitude: float) -> float:
    return longitude % 360.0


def _position(sign: int, degree: float, division: int) -> VargaPosition:
    degree = min(max(degree, 0.0), 30.0 - 1e-12)
    return VargaPosition(
        sign=sign,
        sign_name=SIGNS[sign],
        degree=degree,
        division=division,
        longitude=sign * 30.0 + degree,
    )


def d1(longitude: float) -> VargaPosition:
    longitude = _normalise(longitude)
    sign = int(longitude // 30)
    return _position(sign, longitude % 30, 1)


def d9(longitude: float) -> VargaPosition:
    longitude = _normalise(longitude)
    sign = int(longitude // 30)
    degree = longitude % 30
    segment = 30.0 / 9.0
    part = min(int(degree / segment), 8)
    varga_sign = (sign * 9 + part) % 12
    varga_degree = (degree - part * segment) * 9
    return _position(varga_sign, varga_degree, 9)


def d10(longitude: float) -> VargaPosition:
    longitude = _normalise(longitude)
    sign = int(longitude // 30)
    degree = longitude % 30
    part = min(int(degree / 3.0), 9)

    # Zero-based even indices are odd-numbered zodiac signs.
    start_sign = sign if sign % 2 == 0 else (sign + 8) % 12
    varga_sign = (start_sign + part) % 12
    varga_degree = (degree - part * 3.0) * 10
    return _position(varga_sign, varga_degree, 10)


VARGAS: dict[str, Callable[[float], VargaPosition]] = {
    "D1": d1,
    "D9": d9,
    "D10": d10,
}


def whole_sign_house(planet_sign: int, ascendant_sign: int) -> int:
    return ((planet_sign - ascendant_sign) % 12) + 1
