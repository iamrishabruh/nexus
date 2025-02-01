# backend/app/routers/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db
from ..models import User
from ..schemas import UserCreate, UserOut
from passlib.context import CryptContext
from fastapi_users import FastAPIUsers, models as fa_models, BaseUserManager
from fastapi_users.authentication import JWTStrategy, AuthenticationBackend
import os

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET = os.getenv("SECRET", "SECRET_KEY")  # Use env var in production

# Dummy user manager and user model for illustration:
class UserDB(fa_models.BaseUser[int]):
    pass

class UserManager(BaseUserManager[UserDB, int]):
    user_db_model = UserDB  # You’d normally use your SQLAlchemy model here
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def on_after_register(self, user: UserDB, request=None):
        print(f"User {user.email} registered.")

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=None,  # In a real-world scenario, set up cookie transport or Bearer scheme; fastapi-users provides options
    get_strategy=get_jwt_strategy,
)

fastapi_users = FastAPIUsers[UserDB, int](  # This is a placeholder; in production link to your user DB
    UserManager,
    [auth_backend],
)

router.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/login",
    tags=["auth"],
)

router.include_router(
    fastapi_users.get_register_router(),
    prefix="/register",
    tags=["auth"],
)
