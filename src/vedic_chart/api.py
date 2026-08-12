from datetime import date, time
from pathlib import Path
from typing import Literal, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from .models import BirthData, ChartOptions
from .service import generate_charts


class ChartRequest(BaseModel):
    name: str = Field(min_length=1)
    date: date
    time: time
    timezone: str = Field(min_length=1)
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    gender: Optional[str] = None
    city: Optional[str] = None
    node: Literal["true", "mean"] = "true"


app = FastAPI(title="Vedic Chart Generator API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chart")
def chart(payload: ChartRequest) -> dict:
    try:
        result = generate_charts(
            BirthData(
                name=payload.name,
                date=payload.date,
                time=payload.time,
                timezone=payload.timezone,
                latitude=payload.latitude,
                longitude=payload.longitude,
            ),
            ChartOptions(node=payload.node),
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    result["birth"]["gender"] = payload.gender
    result["birth"]["city"] = payload.city
    return result


web_dir = Path(__file__).resolve().parents[2] / "web"
if web_dir.exists():
    app.mount("/", StaticFiles(directory=web_dir, html=True), name="web")


def main() -> None:
    import uvicorn

    uvicorn.run("vedic_chart.api:app", host="127.0.0.1", port=8000, reload=True)
