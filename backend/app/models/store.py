from pydantic import BaseModel


class Store(BaseModel):
    id: int
    name: str
    category: str
    floor: int
    description: str
    phone: str
    closingHour: str
    products: list[str]