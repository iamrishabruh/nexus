# backend/app/database.py
from fastapi import Depends
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from .base import Base
from fastapi_users_db_sqlalchemy import SQLAlchemyUserDatabase
from .models import UserTable
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://rishabruh:password@localhost/nexusdb")

engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async def get_async_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session

async def get_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, UserTable)
