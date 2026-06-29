from fastapi import APIRouter
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
        ]
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
        ]
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
        ]
    }
]

@router.get("/stores", response_model=list[Store])
def get_stores():
    return stores


@router.post("/stores")
def add_store(store: Store):
    stores.append(store)
    return store