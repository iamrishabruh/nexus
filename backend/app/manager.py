# backend/app/manager.py
from fastapi_users.manager import BaseUserManager, UUIDIDMixin
from .models import UserTable
from .schemas import UserCreate
from uuid import UUID

class UserManager(UUIDIDMixin, BaseUserManager[UserTable, UUID]):
    reset_password_token_secret = "SECRET_KEY"
    verification_token_secret = "SECRET_KEY"

    async def validate_password(self, password: str, user: UserTable) -> None:
        return  # Add password policy validation if needed

    async def create(self, user_create: UserCreate, safe: bool = False, **kwargs):
        # Handle custom fields properly
        kwargs.update({
            "role": user_create.role,
            "is_verified": False  # Default verification status
        })
        return await super().create(user_create, safe=safe, **kwargs)
