# backend/app/routers/auth.py
from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import JWTStrategy, CookieTransport, AuthenticationBackend
from fastapi_users_db_sqlalchemy import SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db
from ..models import UserTable  # Your user model defined by extending SQLAlchemyBaseUserTable
from ..schemas import UserRead, UserCreate  # Import the schemas you just defined

router = APIRouter()

SECRET = "SECRET_KEY"  # Use environment variables in production

cookie_transport = CookieTransport(cookie_max_age=3600)

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=cookie_transport,
    get_strategy=get_jwt_strategy,
)

# Dependency: get a SQLAlchemyUserDatabase instance using an async session.
async def get_user_db(session: AsyncSession = Depends(get_db)):
    yield SQLAlchemyUserDatabase(UserTable, session)

# Create a FastAPIUsers instance using your UserTable model.
fastapi_users = FastAPIUsers[UserTable, int](
    get_user_db,
    [auth_backend],
)

# Include the auth endpoints.
router.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/login",
    tags=["auth"],
)

# For registration, pass the required schemas:
router.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/register",
    tags=["auth"],
)
