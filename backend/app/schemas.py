# backend/app/schemas.py
from pydantic import BaseModel, EmailStr
from datetime import datetime
from fastapi_users import schemas
from uuid import UUID

class UserRead(schemas.BaseUser[UUID]):
    role: str
    created_at: datetime

class UserCreate(schemas.BaseUserCreate):
    role: str

# Remove UserLogin schema - using built-in OAuth2 form
