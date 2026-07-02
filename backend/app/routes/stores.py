from fastapi import APIRouter, HTTPException
from app.models.store import Store

router = APIRouter()

stores = [
    {
        "id": 1,
        "name": "BUG",
        "category": "Electronics",
        "floor": 1,
        "description": "רשת מוצרי אלקטרוניקה",
        "phone": "09-1111111",
        "closingHour": "22:00",
        "products": [
            "iPhone",
            "Galaxy",
            "AirPods"
        ],
        "x": 80,
        "y": 80,
        "width": 150,
        "height": 100,
        "color": "#90caf9"

    },
    {
        "id": 2,
        "name": "FOX",
        "category": "Fashion",
        "floor": 1,
        "description": "רשת אופנה",
        "phone": "09-2222222",
        "closingHour": "22:00",
        "products": [
            "Jeans",
            "T-Shirts",
            "Shoes"
        ],
        "x": 500,
        "y": 80,
        "width": 150,
        "height": 100,
        "color": "#ce93d8"
    },
    {
        "id": 3,
        "name": "Super-Pharm",
        "category": "Pharmacy",
        "floor": 1,
        "description": "בית מרקחת ופארם",
        "phone": "09-3333333",
        "closingHour": "23:00",
        "products": [
            "Medicine",
            "Shampoo",
            "Perfume"
        ],
        "x": 280,
        "y": 350,
        "width": 220,
        "height": 100,
        "color": "#a5d6a7"
    }
]

@router.get("/stores", response_model=list[Store])
def get_stores():
    return stores

@router.get("/stores/{store_id}", response_model=Store)
def get_store(store_id: int):
    for store in stores:
        if store["id"] == store_id:
            return store

    raise HTTPException(
        status_code=404,
        detail="Store not found"
    )