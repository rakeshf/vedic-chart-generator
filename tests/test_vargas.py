import pytest

from vedic_chart.vargas import d1, d9, d10, whole_sign_house


def test_d1_preserves_sidereal_position():
    result = d1(123.5)
    assert result.sign == 4
    assert result.sign_name == "Leo"
    assert result.degree == pytest.approx(3.5)


@pytest.mark.parametrize(
    ("longitude", "expected_sign"),
    [
        (0.0, 0),       # Aries first Navamsha -> Aries
        (30.0, 9),      # Taurus first Navamsha -> Capricorn
        (60.0, 6),      # Gemini first Navamsha -> Libra
        (29.999, 8),    # Aries ninth Navamsha -> Sagittarius
    ],
)
def test_d9_canonical_starting_signs(longitude, expected_sign):
    assert d9(longitude).sign == expected_sign


@pytest.mark.parametrize(
    ("longitude", "expected_sign"),
    [
        (0.0, 0),       # Aries begins Aries
        (30.0, 9),      # Taurus begins Capricorn (ninth from Taurus)
        (60.0, 2),      # Gemini begins Gemini
        (57.1, 6),      # Taurus tenth Dashamsha -> Libra
    ],
)
def test_d10_parashari_mapping(longitude, expected_sign):
    assert d10(longitude).sign == expected_sign


def test_whole_sign_house_wraps_at_pisces():
    assert whole_sign_house(0, 9) == 4
    assert whole_sign_house(9, 9) == 1


def test_longitude_normalisation():
    assert d1(360).sign == 0
    assert d9(-1).sign == d9(359).sign

