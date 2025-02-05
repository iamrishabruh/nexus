# backend/app/models.py
from sqlalchemy import Column, String, DateTime
from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from .base import Base
from datetime import datetime

class UserTable(SQLAlchemyBaseUserTableUUID, Base):
    __tablename__ = "users"
    role = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    # Remove redundant fields (provided by SQLAlchemyBaseUserTableUUID):
    # - email
    # - hashed_password
    # - is_active
    # - is_superuser
    # - is_verified
