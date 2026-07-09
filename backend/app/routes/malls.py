from fastapi import APIRouter
from pathlib import Path
import json

router = APIRouter()

DATA_FILE = Path(__file__).parent.parent.parent / "data" / "mall_hof.json"


@router.get("/malls/hof/stores")
def get_hof_stores():

    with open(DATA_FILE, encoding="utf-8") as file:
        return json.load(file)