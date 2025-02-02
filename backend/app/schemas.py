# backend/app/schemas.py
from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    role: str

class UserRead(BaseModel):
    id: int
    email: EmailStr
    is_active: bool
    is_superuser: bool = False
    is_verified: bool = False
    role: str

    class Config:
        orm_mode = True  # For Pydantic v2, you might use `from_attributes = True`

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    role: str  # Include role in the registration payload

    class Config:
        orm_mode = True

class UserOut(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True

# Similarly, add schemas for health data, reminders, etc.
