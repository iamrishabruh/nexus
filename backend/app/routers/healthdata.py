# backend/app/routers/healthdata.py
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db

router = APIRouter()

@router.get("/")
async def read_health_data(db: AsyncSession = Depends(get_db)):
    return {"message": "This is the health data endpoint"}
