from pydantic import BaseModel


class Store(BaseModel):
    id: int
    name: str
    category: str
    floor: int
    phone: str
    closingHour: str
    description: str
    products: list[str]